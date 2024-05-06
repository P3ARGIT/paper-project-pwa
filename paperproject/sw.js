let notes;

self.addEventListener("message",(event) =>{
  notes.json().then((data) => {
    fetch("http://localhost:8000/notes", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data.notes)
    }).then((response)=>{

      return
    })
    console.log(JSON.stringify(data.notes));
  });


})


self.addEventListener('fetch', function (event) {
  if (/notes/.test(event.request.url) && event.request.method == "POST") {
    notes = event.request;
    //   caches.open('test').then(function (cache) {
//      cache.put(notes);
//  })
  }


  if (!event.request.url.startsWith('http')) {
    event.respondWith(
      caches.open('test').then(function (cache) {
        return cache.match(event.request).then(function (response) {
          var fetchPromise = fetch(event.request).then(function (networkResponse) {
            if (networkResponse.status == 200 || networkResponse.status == 201) {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            }
            return null;
          });
          return response || fetchPromise;
        });
      }),
    )
  }
});




