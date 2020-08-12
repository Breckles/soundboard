import { SoundItem } from './sound-item.model.js';

export class SoundItemComponent extends HTMLElement {
  constructor(soundItem: SoundItem) {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Create component wrapper and set background image
    const soundItemWrapper = document.createElement('div');
    soundItemWrapper.classList.add('soundItem');
    // soundItemWrapper.style.backgroundImage = `url(${soundItem.imagePath})`;

    const iconImage = document.createElement('img');
    iconImage.classList.add('icon');
    iconImage.setAttribute('src', soundItem.imagePath);

    const title = document.createElement('h4');
    title.classList.add('title');
    title.textContent = `${soundItem.title}`;

    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.classList.add('overlay');

    const overlayImage = document.createElement('img');
    overlayImage.setAttribute('src', '/src/assets/images/stop-circle.svg');

    // Create audio element and set src
    const audio = document.createElement('audio');
    audio.classList.add('audio');
    audio.setAttribute('src', soundItem.audioPath);

    // Set up event listeners ////////////////////

    soundItemWrapper.addEventListener('click', () => {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play();
      }
    });

    audio.addEventListener('play', () => {
      backgroundOverlay.style.display = 'flex';
    });
    audio.addEventListener('pause', () => {
      backgroundOverlay.style.display = 'none';
    });

    /////////////////////////////////////////////

    // Create a link to proper stylesheet
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute(
      'href',
      '/dist/app/components/sound-item/sound-item.component.css'
    );

    // Add elements to shadow
    backgroundOverlay.append(overlayImage);
    soundItemWrapper.append(audio, backgroundOverlay, iconImage, title);
    shadow.append(link, soundItemWrapper);
  }
}

customElements.define('sound-item', SoundItemComponent);
