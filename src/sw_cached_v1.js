var CACHE_NAME = 'my-cache-v1';
var urlsToCache = [
    '/',
    '/index.html'
];

self.addEventListener('install', (event) => {
    console.log("installed");
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened Cache');
            return cache.addAll(urlsToCache);
        }))
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                console.log('h1', response);
                return response
            }
            return fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            console.log('here', cache);
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                })
        })
        .catch((error) => {
            console.log('in catch', error);
        })
    );
});

self.addEventListener('notificationclick', (e) => {
    console.log('Clicked here', e);
    clients.matchAll({includeUncontrolled : true}).then((match) => console.log('of match', match)
    )
    // clients.openWindow('https://www.google.com/')
})

self.addEventListener('push', e => {
    const dataa  = JSON.parse(e.data.text());    
    self.registration.showNotification(dataa.title, { body : dataa.body });
})
