import { SoundItem } from './components/sound-item/sound-item.model.js';
import { SoundItemComponent } from './components/sound-item/sound-item.component.js';
const audioRef = document.querySelector('#audio');
const soundItemRef = document.querySelector('.soundItem');
const bodyRef = document.querySelector('#body');
let soundItems = [
    new SoundItem('Miscellaneous', 'Arnold', '/src/assets/ask-ques.mp3', '/src/assets/arnold.jpg'),
];
for (const item of soundItems) {
    let soundItemEl = new SoundItemComponent(item);
    bodyRef.appendChild(soundItemEl);
}
//# sourceMappingURL=main.js.map