// import { SoundItem } from './components/sound-item/sound-item.model.js';
import { SoundItemComponent } from './components/sound-item/sound-item.component.js';
import { SoundItemManager } from './services/sound-item-manager.service.js';
const soundBoardRef = document.querySelector('#soundBoard');
const sIM = new SoundItemManager();
const soundItems = sIM.soundItems;
for (const item of soundItems) {
    let soundItemEl = new SoundItemComponent(item);
    soundBoardRef.appendChild(soundItemEl);
}
//# sourceMappingURL=main.js.map