const VERSION = 1;
const CACHE_NAME = `dependencies-v${VERSION}`;

self.addEventListener('install', function(event) {
  event.waitUntil(
    self.skipWaiting()
    .then(console.log('[ServiceWorker] Successfully installed', self.serviceWorker))
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    // Delete old cache entries if versions don't match.
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cache) {
          if (cache !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      )
    })
    .then(console.log('[ServiceWorker] Successfully activated', self.ServiceWorker))
    // Immediately claim clients under this serviceWorker
    .then(self.clients.claim())
    // Send the message to client to reload for serviceWorker
    .then(self.clients.matchAll({ includeUncontrolled: false })
      .then(clients => clients.map(client => client.postMessage({ type: 'reload' })))
    )
  );
});

self.addEventListener('fetch', function(event) {
  const normalizedURL = new URL(event.request.url);
  normalizedURL.search = '';

  event.respondWith(caches.match(normalizedURL).then(response => {
    if (response) return response;

    return fetch(normalizedURL).then(async res => {
      // Dont' cache bad responses, just return them for use
      if (!res.ok) return res;
      return await caches.open(CACHE_NAME).then(async cache => {
        await cache.put(normalizedURL, res.clone());
        return res;
      });
    });
  }));
});