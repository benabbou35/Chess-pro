const CACHE="chess-v5";
const FILES=["./","./index.html","./manifest.json","https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match("./"))))});
