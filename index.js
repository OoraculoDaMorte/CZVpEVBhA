import { logo } from './logo.js';
import { demobox } from 'https://raw.githubusercontent.com/OoraculoDaMorte/CZVpEVBhA/main/demobox.js';
import { anchors } from 'https://raw.githubusercontent.com/OoraculoDaMorte/CZVpEVBhA/main/anchors.js';

logo.init();
demobox.init();
anchors.init();

/* add support for a no-focus class (for accessibility styling) */
document.addEventListener('mousedown', () => document.body.classList.add('no-focus'));
document.addEventListener('keydown', () => document.body.classList.remove('no-focus'));
