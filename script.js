// Seleccionar el botón del formulario
const formButton = document.querySelector('form button');

// Mostrar mensaje al hacer clic en el botón
formButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que se recargue la página
    alert('Pronto recibirás nuestras ofertas y promociones a tu correo electrónico');
});
