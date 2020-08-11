export class SoundItemComponent extends HTMLElement {
    constructor(soundItem) {
        super();
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });
        // Create component wrapper and set background image
        const soundItemWrapper = document.createElement('div');
        soundItemWrapper.classList.add('soundItem');
        soundItemWrapper.style.backgroundImage = `url(${soundItem.imagePath})`;
        const backgroundOverlay = document.createElement('div');
        backgroundOverlay.classList.add('overlay');
        // Create audio element and set src
        const audio = document.createElement('audio');
        audio.classList.add('audio');
        audio.setAttribute('src', soundItem.audioPath);
        // Set up event listeners ////////////////////
        soundItemWrapper.addEventListener('click', () => {
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0;
            }
            else {
                audio.play();
            }
        });
        audio.addEventListener('play', () => {
            backgroundOverlay.style.display = 'block';
        });
        audio.addEventListener('pause', () => {
            backgroundOverlay.style.display = 'none';
        });
        /////////////////////////////////////////////
        // Create a link to proper stylesheet
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', '/dist/app/components/sound-item/sound-item.component.css');
        // Add elements to shadow
        soundItemWrapper.append(audio, backgroundOverlay);
        shadow.append(link, soundItemWrapper);
    }
}
customElements.define('sound-item', SoundItemComponent);
//# sourceMappingURL=sound-item.component.js.map