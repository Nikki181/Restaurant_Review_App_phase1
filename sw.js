self.addEventListener('install',function(event){
  
      event.waitUntil(
                      caches.open('cache2').then(function(cache) {
                        return cache.addAll([
                          '/',
                                      '/img/1.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg','/img/5.jpg',
              '/img/6.jpg','/img/7.jpg','/img/8.jpg', '/img/9.jpg', '/img/10.jpg',
              '/css/media.css',
              '/css/styles.css',
              '/data/restaurants.json',
              '/js/main.js',
              '/js/dbhelper.js',
              '/js/restaurant_info.js', '/index.html', '/restaurant.html',
              '/sw.js' ,
              'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css'
        
                    ]);
                                        }).catch(function(errmessage){
        console.log('install failed!' + errmessage);
                      })
        
      );   
})

self.addEventListener('fetch',function(event){ 
    event.respondWith( 
    caches.match(event.request).then(function(response){ 
      if(response) return response; 
      return fetch(event.request);
       })
        ) 
})
