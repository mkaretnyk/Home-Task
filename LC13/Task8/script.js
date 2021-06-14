let button = document.querySelector('.btn');
let form = document.querySelector('.form');
let msg = document.querySelector('.msg');


function OpenModalWindow(message, cb) {
    msg.innerHTML = message;

    form.style.display = 'block';
    form.text.focus();

    let first = form.elements[0];
    first.addEventListener('keydown', (e) => {
      if (e.key == 'Tab' && e.shiftKey) {
         last.focus();
         e.preventDefault();
      }
   })

   let last = form.elements[form.elements.length - 1];
   last.addEventListener('keydown', (e) => {
      if (e.key == 'Tab' && !e.shiftKey) {
         first.focus();
         e.preventDefault();
      }
    })


    form.addEventListener('submit', closeModal);
    form.cancel.addEventListener('click', closeModal, { once: true });
    form.addEventListener('keydown', closeModal);

    function closeModal(e) {
        let click = e.target;

        if (e.type == 'keydown' && e.key != 'Escape') return;

        if (e.type == 'click' && click.name == 'cancel' || e.key == 'Escape') {
            cb(null);
            form.cancel.removeEventListener('click', closeModal);
            form.removeEventListener('keydown', closeModal);
        }
        else if (e.type == 'submit') {
            let item = form.text.value;
            if (item == '') {
                e.preventDefault();
                return;
            }
            cb(item);
        }

        form.style.display = '';

        form.text.value = null;
        e.preventDefault();
    }
}

button.addEventListener('click', () => {
    OpenModalWindow("Введите что-нибудь<br>...умное :)", (value) => alert(value));
})