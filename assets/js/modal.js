// Modal button
var openModal = document.getElementById('open-modal');
var modalContainer = document.getElementById('modal-container');
// Modal 1 ID
var modal = document.getElementById('modal-1');

// Close modal button
var closeModal = document.getElementsByClassName('close-modal')[0];

// Open modal event listener
openModal.addEventListener('click', function(){
    modal.classList.toggle('visible');
});

// Close modal event listener
closeModal.addEventListener('click', function(){
    modal.classList.remove('visible');
});

