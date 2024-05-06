// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
//importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.

let notes;

self.addEventListener('fetch', function (event) {
  if (/notes/.test(event.request.url) && event.request.method == "POST") {
    notes = event.request;
    caches.open('test').then(function (cache) {
      cache.put(notes);
  })
  }



    event.respondWith(
      caches.open('test').then(function (cache) {
        return cache.match(event.request).then(function (response) {
          var fetchPromise = fetch(event.request).then(function (networkResponse) {
            if(networkResponse.status == 200 || networkResponse.status == 201) {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            }
            return null;
          });
          return response || fetchPromise;
        });
      }),
    );
});



