import { cacheName } from './shared/names';

const requestURLs = [
  '/',
  '/index.html',
  // '/sw.bundle.js',
  '/dist/app/components/navbar/navbar.component.css',
  '/dist/app/components/sound-item/sound-item.component.css',
  '/dist/styles/main.css',
  '/dist/main.bundle.js',
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
  '/src/assets/images/arnold.png',
  '/src/assets/images/Bender.png',
  '/src/assets/images/Cartman.png',
  '/src/assets/images/Farnsworth.png',
  '/src/assets/images/Fry.png',
  '/src/assets/images/futurama_slurm_can.png',
  '/src/assets/images/Morbo.png',
  '/src/assets/images/south_park.png',
  '/src/assets/images/stop-circle.svg',
  '/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  (<ExtendableEvent>event).waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(requestURLs).catch((error) => {
        console.log(error);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  const fetchEvent = event as FetchEvent;
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return response || fetch(fetchEvent.request);
    })
  );
});
