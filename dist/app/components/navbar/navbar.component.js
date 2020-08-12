"use strict";
class NavBarComponent extends HTMLElement {
    constructor() {
        super();
        // create shadow root and attach to self
        const shadow = this.attachShadow({ mode: 'open' });
        // link stylesheet with shadowroot
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', '/dist/app/components/navbar/navbar.component.css');
        shadow.append(stylesheet);
        // Fetch template and append to shadow
        const template = document.querySelector('#navbar-template');
        const templateContent = template.content;
        shadow.append(templateContent.cloneNode(true));
        // // Create navbar
        // const navbar = document.createElement('nav');
        // navbar.setAttribute('id', 'navbar');
        // const navbarNav = document.createElement('ul');
        // navbarNav.setAttribute('id', 'navbar-nav');
        // // Create logo li
        // const logo = document.createElement('li');
        // logo.setAttribute('id', 'logo');
        // const logoAnchor = document.createElement('a');
        // logoAnchor.setAttribute('href', '#');
        // const logoText = document.createElement('span');
        // logoText.setAttribute('id', 'logo-text');
        // logoText.textContent = 'SoundBoardX';
        // // Create svg logo (code obtained from FontAwesome angle-double-right)
        // const logoSvg = document.createElementNS(
        //   'http://www.w3.org/2000/svg',
        //   'svg'
        // ) as SVGSVGElement;
        // logoSvg.setAttributeNS(
        //   'http://www.w3.org/2000/svg',
        //   'viewBox',
        //   '0 0 448 512'
        // );
        // const svgPath = document.createElementNS(
        //   'http://www.w3.org/2000/svg',
        //   'path'
        // );
        // svgPath.setAttribute(
        //   'd',
        //   'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'
        // );
        // logoSvg.append(svgPath);
        // Populate logo li
    }
}
customElements.define('nav-bar', NavBarComponent);
//# sourceMappingURL=navbar.component.js.map