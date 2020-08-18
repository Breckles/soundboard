import { SoundItemComponent } from './components/sound-item/sound-item.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { SoundItemManager } from './services/sound-item-manager.service';
import { SoundItem } from './components/sound-item/sound-item.model';

// Register NavBarComponent (run code), this will place it in <nav-bar></nav-bar>
NavBarComponent;

const soundBoardRef = document.querySelector('#soundBoard') as HTMLElement;

let soundItems = SoundItemManager.soundItems;

for (const item of soundItems) {
  let soundItemEl = new SoundItemComponent(item);
  soundBoardRef.appendChild(soundItemEl);
}

const itemListSubscriptions = SoundItemManager.listChanged.subscribe(
  (newList: SoundItem[]) => {
    soundBoardRef.style.right = '100vw';
    setTimeout(() => {
      soundBoardRef.innerHTML = '';
      soundItems = newList;
      console.table(soundItems);
      for (const item of soundItems) {
        const soundItemEl = new SoundItemComponent(item);
        soundBoardRef.appendChild(soundItemEl);
      }
      soundBoardRef.style.right = '0';
    }, 300);
  }
);

//// Service Worker ///////////////////////

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.bundle.js')
    .then((reg) => {
      // Registration Worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    })
    .catch((error) => {
      // Registration Failed
      console.log('Registration failed with ' + error);
    });
}
