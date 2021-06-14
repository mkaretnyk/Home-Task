let hideIt = document.querySelectorAll('.remove-button');

hideIt.forEach(function(elem) {
   elem.onclick = function() {
      this.parentNode.hidden = true;
   };
})