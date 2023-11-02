const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Agregar un evento al formulario de inicio de sesión
const signInForm = document.querySelector(".sign-in-form");
signInForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe normalmente

  // Puedes agregar lógica de autenticación aquí. Si las credenciales son válidas, redirige al usuario.
  // Por ejemplo:
  // if (credencialesValidas) {
  //   window.location.href = "pagina_de_bienvenida.html";
  // }
  
  // Redirige al usuario a otra página (cambia esto con la URL deseada)
  window.location.href = "index.html";
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
