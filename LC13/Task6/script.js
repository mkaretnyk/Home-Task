let button = document.querySelector('p');

button.onclick = function() {
   let ul = document.querySelector('ul');

   if(!ul.hidden) {
      btn.innerHTML = '▶';
      ul.hidden = true;
   } else {
      btn.innerHTML = '▼';
      ul.hidden = false;
   };
}