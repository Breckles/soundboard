import { cacheName } from '../../src/app/shared/names';

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    // cy.pause();
  });

  // Get rid of service worker so it does not interfere when the test reruns
  // after(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.getRegistration().then((swr) => {
  //       if (swr) {
  //         swr.unregister().then((swrUnregistered) => {
  //           if (swrUnregistered) {
  //             console.info('Service worker was successfully unregistered.');
  //           } else {
  //             console.info('Service worker could not be unregistered');
  //           }
  //         });
  //       }
  //     });

  //     caches.delete(cacheName).then((cacheDeleted) => {
  //       if (cacheDeleted) {
  //         console.info(
  //           `Cache with name '${cacheName}' was successfully deleted!`
  //         );
  //       } else {
  //         console.info(
  //           `Could not delete cache. No cache with name '${cacheName}' was found.`
  //         );
  //       }
  //     });
  //   }
  // });
});
