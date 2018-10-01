import './style.less';

import { createElements, appendElements, addButtonHandlers } from './elements.js';

let logged = false;

fetch('http://localhost:3001/items')
   .then(res => res.json())
   .then(data => createElements(data))
   .then(elems => appendElements(elems))
   .then((buttons) => {addButtonHandlers(buttons)})

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

      document.cookie = `token=${data.token}`;
      
      logged = true;
   })
});






