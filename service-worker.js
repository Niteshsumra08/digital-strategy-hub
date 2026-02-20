const CACHE_NAME = "strategy-hub-v2";

const filesToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manuals/investor-website.pdf",
  "/manuals/investor-app.pdf",
  "/manuals/business-easy.pdf"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
const filesToCache = [
  "/",
  "/index.html",
  "/index.css",
  "/index.js",
  "/manuals/investor-website.pdf",
  "/manuals/investor-app.pdf",
  "/manuals/business-easy.pdf"
];


