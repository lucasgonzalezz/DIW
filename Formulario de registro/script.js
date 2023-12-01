// Espera a que el contenido del documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el botón de la barra de navegación y el menú de navegación
  const navbarBurger = document.querySelector('.navbar-burger');
  const navbarMenu = document.querySelector('.navbar-menu');

  // Agrega un evento de clic al botón de la barra de navegación
  navbarBurger.addEventListener('click', () => {
    // Alterna la clase 'is-active' en el botón y el menú para mostrar/ocultar el menú en dispositivos móviles
    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  });

  // Funciones para abrir y cerrar un modal
  function openModal($el) {
    // Agrega la clase 'is-active' al modal para mostrarlo
    $el.classList.add('is-active');
    // Agrega el enfoque al campo de correo electrónico después de abrir el modal
    const $emailInput = $el.querySelector('input[type="name"]');
    if ($emailInput) {
      $emailInput.focus();
    }
  }

  function closeModal($el) {
    // Elimina la clase 'is-active' del modal para ocultarlo
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    // Cierra todos los modales activos
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Agrega un evento de clic en botones para abrir un modal específico
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

      // Función para cerrar el modal al hacer clic en el botón "Cancelar"
      document.getElementById('cancelButtonModal').addEventListener('click', function () {
        // Encuentra el modal por su ID y ciérralo
        var modal = document.getElementById('modal-js-registro');
        modal.classList.remove('is-active');
    });

  // Agrega un evento de clic en varios elementos secundarios para cerrar el modal padre
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Agrega un evento de teclado para cerrar todos los modales al presionar la tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeAllModals();
    }
  });
});