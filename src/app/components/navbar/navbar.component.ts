import { SoundItemManager } from '../../services/sound-item-manager.service';

export class NavBarComponent extends HTMLElement {
  constructor() {
    super();

    // create shadow root and attach to self
    const shadow = this.attachShadow({ mode: 'open' });

    // link stylesheet with shadowroot
    const stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute(
      'href',
      '/app/components/navbar/navbar.component.css'
    );
    shadow.append(stylesheet);

    // Fetch hmtl template and assign contents to shadow
    const template = document.createElement('template') as HTMLTemplateElement;
    template.innerHTML = require('./navbar.component.html').default;
    shadow.append(template.content.cloneNode(true));

    // Add event handlers for navigation
    const futuramaLink = shadow.querySelector('#futuramaLink')!;
    futuramaLink.addEventListener('click', () => {
      SoundItemManager.changeLists('futurama');
    });

    const southParkLink = shadow.querySelector('#southParkLink')!;
    southParkLink.addEventListener('click', () => {
      SoundItemManager.changeLists('south_park');
    });

    const arnoldLink = shadow.querySelector('#arnoldLink')!;
    arnoldLink.addEventListener('click', () => {
      SoundItemManager.changeLists('arnold');
    });

    const allLink = shadow.querySelector('#allLink')!;
    allLink.addEventListener('click', () => {
      SoundItemManager.changeLists('all');
    });
  }
}

customElements.define('nav-bar', NavBarComponent);
