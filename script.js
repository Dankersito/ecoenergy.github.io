  document.addEventListener('DOMContentLoaded', function () {
    const agregarComentarioBtn = document.getElementById('agregarComentarioBtn');
    const loader = document.querySelector('.loader');
    const comentarioForm = document.getElementById('comentarioForm');

    agregarComentarioBtn.addEventListener('click', function () {
      // Ocultar el botón de "Agregar comentario"
      agregarComentarioBtn.style.display = 'none';
      // Mostrar el formulario
      comentarioForm.style.display = 'block';

      // Simula una operación de carga (puedes reemplazar esto con tu lógica real)
      setTimeout(function () {
        // Después de un tiempo, puedes ocultar el loader y mostrar el botón nuevamente
        loader.style.display = 'none';
        agregarComentarioBtn.style.display = 'block';

        // Puedes agregar aquí tu lógica para procesar el comentario,
        // por ejemplo, enviarlo a través de una solicitud AJAX.
      }, 2000); // Cambia el tiempo (en milisegundos) según tus necesidades

      // Evita que el formulario se envíe cuando se hace clic en el botón "Agregar comentario"
      comentarioForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Aquí puedes agregar la lógica para enviar el comentario,
        // por ejemplo, recoger los valores de los campos y realizar una solicitud AJAX.
        // Luego, puedes ocultar el formulario si es necesario.
        // Ejemplo:
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;
        // Realiza la solicitud AJAX aquí
        // Luego, puedes ocultar el formulario si es necesario:
        comentarioForm.style.display = 'none';
      });
    });
  });
