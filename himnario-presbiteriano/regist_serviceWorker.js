var cacheName = "himnario-presbiteriano_v0.0.1";
var filesToCache = [
    './favicon.ico',
    './icon.png',
    './icon.svg',
    './css/style.css',
    '../cahuich-css/base/bluids/cahuich.css',
    '../cahuich-css/base/variables/variables-light.css',
    '../cahuich-css/base/variables/variables-dark.css',
    '../cahuich-css/base/parts/core.css',
    '../cahuich-css/base/parts/typography.css',
    '../cahuich-css/base/parts/forms.css',
    '../cahuich-css/base/parts/range.css',
    '../cahuich-css/base/parts/links.css',
    '../cahuich-css/base/parts/code.css',
    '../cahuich-css/base/parts/misc.css',
    '../cahuich-css/base/parts/print.css',
];

var himnosCache = "himnos_v1";
var files_Himnos = [
  '.',
  './index.html',
  './js/app.js'
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
  e.waitUntil(
    caches.open(himnosCache).then(function(cache) {
      console.log('[ServiceWorker] Caching HimnosOffline');
      return cache.addAll(files_Himnos);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== himnosCache && key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
  
      e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );
  });
  