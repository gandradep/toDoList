import _ from 'lodash';
import './style.css';
import { todos } from './modules/objectArray.js';
import { sort } from './modules/sort.js';
import { iterate } from './modules/iterate.js';
const list = document.getElementById('list');



//
iterate(sort(todos));


// function component() {
//   const element = document.createElement('div');
//
//   // Lodash, now imported
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//
//   return element;
// }
// document.body.appendChild(component());
