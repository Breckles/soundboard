import { SoundItem } from './sound-item.model';

export class SoundItemComponent extends HTMLElement {
  constructor(soundItem: SoundItem) {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Attach html template to shadow
    const template = document.createElement('template') as HTMLTemplateElement;
    template.innerHTML = require('./sound-item.component.html').default;
    shadow.append(template.content.cloneNode(true));

    // Set proper audio content
    const audio = shadow.querySelector('.audio') as HTMLAudioElement;
    audio.src = soundItem.audioPath;

    // Set proper icon image
    const iconImage = shadow.querySelector('.icon') as HTMLImageElement;
    iconImage.src = soundItem.imagePath;

    // Set proper title text
    const title = shadow.querySelector('.title') as HTMLElement;
    title.textContent = `${soundItem.title}`;

    // Set up event listeners ////////////////////

    const soundItemWrapper = shadow.querySelector(
      '.soundItem'
    ) as HTMLDivElement;
    soundItemWrapper.addEventListener('click', () => {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play();
      }
    });

    // Make overlay show when audio is playing
    const backgroundOverlay = shadow.querySelector(
      '.overlay'
    ) as HTMLDivElement;
    audio.addEventListener('play', () => {
      backgroundOverlay.style.display = 'flex';
    });
    audio.addEventListener('pause', () => {
      backgroundOverlay.style.display = 'none';
    });
  }
}

customElements.define('sound-item', SoundItemComponent);
