self.addEventListener('install', (event) => {
  (<ExtendableEvent>event).waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/dist/app/components/navbar/navbar.component.css',
        '/dist/app/components/sound-item/sound-item.component.css',
        '/dist/styles/main.css',
        '/dist/main.bundle.js',
        '/dist/sw.bundle.js',
        '/src/assets/audio/ask-ques.mp3',
        '/src/assets/audio/blackjack-and-hookers-the-great-and-powerful-trixie-futurama-mo1p-gojsqe.mp3',
        '/src/assets/audio/cartman-laughs.mp3',
        '/src/assets/audio/fuck-you-arnold.mp3',
        '/src/assets/audio/futurama-morbo-doom.mp3',
        '/src/assets/audio/god-damn-it-cartman.mp3',
        '/src/assets/audio/goodnews_vVTJocq.mp3',
        '/src/assets/audio/i-do-what-i-want.mp3',
        '/src/assets/audio/im-afraid-we-need-to-use.mp3',
        '/src/assets/audio/put-that-cookie-down-now-arnold-schwarzenegger.mp3',
        '/src/assets/audio/shut_up_and_take_my_moneymp3converter.mp3',
        '/src/assets/audio/southpark_cartman_beefcake.mp3',
        '/src/assets/audio/you-will-respect-my-authoritah_1.mp3',
        '/src/assets/fonts/orbitron-light-webfont.woff2',
        '/src/assets/fonts/orbitron-light-webfont.woff',
        '/src/assets/images/all.png',
        '/src/assets/images/arnold-schwarzenegger-yelling.jpg',
        '/src/assets/images/Bender.png',
        '/src/assets/images/Cartman.png',
        '/src/assets/images/Farnsworth.png',
        '/src/assets/images/Fry.png',
        '/src/assets/images/futurama_slurm_can.png',
        '/src/assets/images/Morbo.png',
        '/src/assets/images/south_park.png',
        '/src/assets/images/stop-circle.svg',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  (<FetchEvent>event).respondWith(
    caches.match((<FetchEvent>event).request).then((response) => {
      console.log(response);
    })
  );
});
