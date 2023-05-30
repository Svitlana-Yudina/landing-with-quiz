const cacheName = 'staticCache v-01';

const testCache = [
  'api.js',
  'code.html',
];

// eslint-disable-next-line no-shadow
self.addEventListener('install', async event => {
  // eslint-disable-next-line no-console
  console.log(`Service worker installed 🤙`, event);

  const cache = await caches.open(cacheName);

  await cache.addAll(testCache);

  // eslint-disable-next-line no-console
  console.log(cache);
});

// eslint-disable-next-line no-shadow
self.addEventListener('activate', event => {
  // eslint-disable-next-line no-console
  console.log(`Service worker activated 🤙`, event);
});

// eslint-disable-next-line no-shadow
self.addEventListener('fetch', event => {
  // eslint-disable-next-line no-console
  console.log(`Service worker fetched 🤙`, event.request.url);
});
