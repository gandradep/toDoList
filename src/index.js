import _ from 'lodash';
import './style.css';

const list = document.getElementById('list');

const todos = [
  {
    "description": "workout",
    "completed": false,
    "index": 1,
  },
  {
    "description": "study mandarin",
    "completed": false,
    "index": 2,
  },
  {
    "description": "practice guitar",
    "completed": false,
    "index": 3,
  },
];
const iterate = (arr) => {
  arr.forEach(element => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox);
    list.appendChild(li);
  });
}

iterate(todos);


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
