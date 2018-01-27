self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/site.js',
        '/styles.css',
      ]);
    })
  );
});

/** An empty service worker! */
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});



// Let's use this new Service Worker to make sure that our Dragotchi
// site works offline. First, let's open up the sw.js script again. First,
//  we want to get hold of the caches object, which is of type Cache-

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function (cache) {
    })
  )
})

//Now, once we've got hold of that,
// let's update that code to add our entire site to the cache-


