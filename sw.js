// sw.js
const CACHE_NAME = "survey-3d-v5";

const APP_SHELL = [
  "./",
  "./survey.html",
  "./index.html",
  "./viewer.html",
  "./config.js",
  "./manifest.webmanifest",
  "./assets/style.css",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2",
  "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).catch(() => null)
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.url.includes("supabase.co")) {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request)
        .then(response => {
          const copy = response.clone();

          if (request.method === "GET" && response && response.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => null);
          }

          return response;
        })
        .catch(() => {
          if (request.mode === "navigate") {
            return caches.match("./survey.html");
          }
        });
    })
  );
});
