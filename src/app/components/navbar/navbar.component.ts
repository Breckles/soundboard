import { SoundItemManager } from '../../services/sound-item-manager.service';
import { SoundItem } from '../sound-item/sound-item.model';

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
      '/dist/app/components/navbar/navbar.component.css'
    );
    shadow.append(stylesheet);

    // Define template and append to shadow
    const template = document.createElement('template') as HTMLTemplateElement;
    template.innerHTML = `
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a>
              <span class="logo-text">Logo</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                <path fill="currentColor"
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z">
                </path>
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"  
              id="futuramaLink">
              <img src="/src/assets/images/futurama_slurm_can.png"
                  alt="A Futurama Slurm Can">
              <span class="link-text">Futurama</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#"
              class="nav-link"  
              id="southParkLink">
              <img src="/src/assets/images/south_park.png"
                  alt="The South Park Logo">
              <span class="link-text">South Park</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="arnoldLink">
              <img src="/src/assets/images/arnold.png"
                  alt="Arnold Schwarzenegger's Face ">
              <span class="link-text">Arnold</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="allLink">
              <img src="/src/assets/images/all.png"
                  alt="A Question Mark ">
              <span class="link-text">All</span>
            </a>
          </li>
        </ul>
      </nav>`;

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
