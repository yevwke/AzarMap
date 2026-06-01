const CACHE_NAME = 'local-map-cache-v1.99';//поменять версию при обновлении, чтобы старый кеш обновился автоматически

// Немедленная активация без ожидания
self.addEventListener('install', e => {
  self.skipWaiting();
});

// Очищаем старые кэши при активации новой версии
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
             .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // Немедленно берем контроль над клиентами
});

// Кэшируем только изображения и тайлы, включая yla_tiles
self.addEventListener('fetch', e => {
  const url = e.request.url;

  if (url.includes('/tiles/') || url.includes('/yla_tiles/') || url.match(/\.(png|jpg|jpeg|webp|gif|svg)$/)) {
    e.respondWith(
      caches.match(e.request).then(resp => {
        if (resp) return resp;

        return fetch(e.request).then(networkResp => {
          if (!networkResp || !networkResp.ok) return networkResp;

          return caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, networkResp.clone());
            return networkResp;
          });
        });
      })
    );
  }
});
