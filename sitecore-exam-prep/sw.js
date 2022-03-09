

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('scQuizMdh').then(function(cache) {
      return cache.addAll([
        '/sitecore-exam-prep/index.html',
        '/sitecore-exam-prep/default.js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://monkey-ldb.github.io/static/img/sitecore-quiz/sitecore-logo.PNG',
        'https://monkey-ldb.github.io/data/sitecore-quiz/sitecore-quiz-data.json'
      ]);
    })
  );
 });

 self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });