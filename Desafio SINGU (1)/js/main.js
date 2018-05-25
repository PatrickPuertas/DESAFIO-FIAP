var modal1 = document.getElementById('simpleModal');

var Editar = document.getElementById('Editar');

var closebtn = document.getElementsByClassName('closeBtn')[0];

Editar.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

function openModal(){
  simpleModal.style.display = 'block';
}

function closeModal(){
  simpleModal.style.display = 'none';
}
