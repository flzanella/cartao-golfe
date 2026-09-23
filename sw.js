const CACHE_NAME = "golf-scorecard-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
];

const IMAGE_EXTENSIONS = /\.(png|jpg|jpeg|svg|webp)$/;

self.addEventListener("install", (event)=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", (event)=>{
  event.waitUntil(
    caches.keys().then(keys=>
      Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))
    ).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", (event)=>{
  if(event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if(url.origin !== location.origin) return;

  // Images rarely change: serve from cache first, fall back to network.
  if(IMAGE_EXTENSIONS.test(url.pathname)){
    event.respondWith(
      caches.match(event.request).then(cached=> cached || fetch(event.request))
    );
    return;
  }

  // App shell (HTML/JS/manifest): always revalidate with the server (bypassing
  // the HTTP cache, not just the service worker cache) so updates show up
  // immediately; fall back to the SW cache only when offline.
  event.respondWith(
    fetch(event.request, {cache:"no-cache"}).then(networkResp=>{
      if(networkResp && networkResp.status===200 && networkResp.type==="basic"){
        const clone = networkResp.clone();
        caches.open(CACHE_NAME).then(cache=>cache.put(event.request, clone));
      }
      return networkResp;
    }).catch(()=> caches.match(event.request))
  );
});
