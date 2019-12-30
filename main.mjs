import { moduleOne } from './modules/moduleOne.mjs';

import { moduleTwo } from './modules/moduleTwo.mjs';

moduleOne();
moduleTwo();

// lets call moduleOne function again
moduleOne();

// lets call moduleTwo function again
moduleTwo();

console.log('hello from main.mjs');

document.getElementById('editMe').textContent = 'dom edit by main.mjs';

import { Shape } from './modules/shapeClass.mjs';

const circle = new Shape({ id: 5 });

circle.hello();

console.log('from main.mjs' + circle.id);
