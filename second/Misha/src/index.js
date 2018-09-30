import '../dist/index.html';
import './style.less';

import { createElements, appendElements } from './elements.js';

fetch('http://localhost:3001/items')
   .then(res => res.json())
   .then(data => createElements(data))
   .then(elems => {appendElements(elems)})

document.getElementById("login").addEventListener('click', () => {
   fetch('http://localhost:3001/login', {
      method: 'POST',
      body: {
         login: document.getElementById('login-input').value
      }
   })
   .then(res => res.json())
   .then(data => {
      document.getElementById('form').style.display = 'none';
      document.getElementById('logged').style.display = 'block';

      isLogged = true;
   })
});


