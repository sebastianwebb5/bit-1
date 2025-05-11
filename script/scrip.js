"user strict";
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const nombreusuario = document.getElementById("nombreusuario").value;
    const descripcionQR = document.getElementById("email").value;

    alert("Correo electrónico: " + nombreusuario + "\nDescripción del QR: " + descripcionQR + "" + "   TE ESTAREMOS COMINICANDO MEDIENATE EL CORREO  PARA ENVIAR LA COTIZACION");
  });
});