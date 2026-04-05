const CACHE_NAME = 'shelter-cache-v20';
const urlsToCache = [
    '/',
    '/index.html',
    '/earth_daymap.jpg',
    '/earth_nightmap.jpg',
    '/favicon.png',
    '/favicon.ico',
    '/favicon.svg',
    '/manifest.json',
    '/README.txt',
    '/LICENSE.txt',
    '/robots.txt',
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music1.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music2.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music3.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music4.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music5.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music6.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music7.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music8.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music9.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music10.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music11.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music12.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music13.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music14.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music15.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music16.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music17.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music18.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music19.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music20.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music21.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music22.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music23.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music24.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music25.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music26.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music27.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music28.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music29.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music30.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music31.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music32.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music33.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music34.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music35.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music36.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music37.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music38.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music39.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music40.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music41.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music42.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/music/music43.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/rain.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/fire.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/crickets.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/ocean.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/cat.mp3",
    "https://cdn.jsdelivr.net/gh/Exmoril-Neocities/Exmoril_Neocities@main/bowl.mp3"
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then(networkResponse => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && networkResponse.type !== 'cors') {
                    return networkResponse;
                }
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                return networkResponse;
            }).catch(() => {
                console.log('ресурс недоступен в офлайне:', event.request.url);
            });
        })
    );
});