/* Service worker minimal: syarat agar Chrome menawarkan "Pasang aplikasi". Tidak menyimpan cache, data selalu dari server. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
