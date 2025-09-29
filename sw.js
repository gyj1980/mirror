// 离线缓存空壳，实际没缓存逻辑，可后续自己扩展
self.addEventListener('install', e => {
  self.skipWaiting()
})
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim())
})
