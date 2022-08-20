import { Checkboxland } from 'https://raw.githubusercontent.com/OoraculoDaMorte/CZVpEVBhA/main/index.js';

import * as marqueeDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/marquee/demo.js';
import * as rippleDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/ripple/demo.js';
import * as snakeDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/snake/demo.js';
import * as pinwheelDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/pinwheel/demo.js';
import * as clockDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/clock/demo.js';
import * as webcamDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/webcam/demo.js';
import * as gameOfLifeDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/game-of-life/demo.js';
import * as videoDemo from 'https://raw.githubusercontent.com/OoraculoDaMorte/CZVpEVBhA/main/videodemo.js';
import * as lasersDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/lasers/demo.js';
import * as spiralDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/spiral/demo.js';
import * as pulseDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/pulse/demo.js';
import * as iconsDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/icons/demo.js';
import * as checkerboardDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/checkerboard/demo.js';
import * as wipeDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/wipe/demo.js';
import * as imageDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/image/demo.js';
import * as qrCodeDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/qr-code/demo.js';
import * as waveDemo from 'https://github.com/bryanbraun/checkboxland/blob/main/docs/demos/wave/demo.js';
import * as onClickDemo from 'https://raw.githubusercontent.com/bryanbraun/checkboxland/main/docs/demos/on-click/demo.js';

const demoNameMap = {
  marquee: marqueeDemo,
  ripple: rippleDemo,
  snake: snakeDemo,
  pinwheel: pinwheelDemo,
  clock: clockDemo,
  webcam: webcamDemo,
  gameOfLife: gameOfLifeDemo,
  video: videoDemo,
  lasers: lasersDemo,
  spiral: spiralDemo,
  pulse: pulseDemo,
  icons: iconsDemo,
  checkerboard: checkerboardDemo,
  wipe: wipeDemo,
  image: imageDemo,
  qrCode: qrCodeDemo,
  wave: waveDemo,
  onClick: onClickDemo,
};

let cbl;
let currentDemo = {};

function buildDemo(demoName) {
  let nextDemo = demoNameMap[demoName];
  let nextDemoDimensions = nextDemo.dimensions.split('x').map(val => Number(val));
  let isDimensionsMatch = (cbl.dimensions[0] === nextDemoDimensions[0]) && (cbl.dimensions[1] === nextDemoDimensions[1]);

  if (currentDemo.cleanUp) {
    currentDemo.cleanUp();
  }

  if (isDimensionsMatch) {
    nextDemo.init(cbl);
  } else {
    cbl = nextDemo.init();
  }

  currentDemo = nextDemo;
}

function init() {
  cbl = new Checkboxland({ dimensions: '44x15' });
  buildDemo('wave');

  document.forms.demoboxForm.addEventListener('change', function handleDemoChange(e) {
    if (e.target.name === 'demoRadios') {
      buildDemo(e.target.value);
    }
  });
}

export const demobox = {
  init
};
