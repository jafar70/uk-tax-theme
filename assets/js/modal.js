// Modal button
var openModal = document.getElementById('open-modal');
var modalContainer = document.getElementById('modal-container');
var closeCanvas = document.querySelector('.close-canvas');
// Modal 1 ID
var modal = document.getElementById('modal-1');

// Close modal button
var closeModal = document.getElementsByClassName('close-modal')[0];

// Open modal event listener
openModal.addEventListener('click', function(){
    modal.classList.toggle('visible');
    closeCanvas.classList.toggle('close-canvas--active');
});

// Close modal event listener
closeModal.addEventListener('click', function(){
    modal.classList.remove('visible');
    closeCanvas.classList.remove('close-canvas--active');
});

closeCanvas.addEventListener('click', function(){
    modal.classList.remove('visible');
    closeCanvas.classList.remove('close-canvas--active');
});