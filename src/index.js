import './style.css';
import { todos } from './modules/objectArray.js';
import { sort } from './modules/sort.js';
import { iterate } from './modules/iterate.js';


iterate(sort(todos));
