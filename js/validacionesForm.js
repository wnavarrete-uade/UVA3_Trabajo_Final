/* VALIDACION DE FORMULARIO DE TURNOS */
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("Nombre").value.trim();
  const apellido = document.getElementById("Apellido").value.trim();
  const email = document.getElementById("Email").value.trim();
  const fecha = document.getElementById("Date").value;
  const hora = document.getElementById("Time").value;

  const errorMessage = document.getElementById("error-message");
  if (errorMessage) {
    errorMessage.textContent = '';
  }

  if (nombre === "") {
    showError("Por favor ingresa tu nombre.");
    return;
  }

  if (apellido === "") {
    showError("Por favor ingresa tu apellido.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    showError("Por favor ingresa tu correo electrónico.");
    return;
  } else if (!emailPattern.test(email)) {
    showError("Por favor ingresa un correo electrónico válido.");
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  if (fecha === "" || fecha < today) {
    showError("Por favor selecciona una fecha válida (posterior a hoy).");
    return;
  }

  if (hora === "") {
    showError("Por favor selecciona una hora.");
    return;
  }

  const successMessage = document.getElementById('success-message');
  if (successMessage) {
    successMessage.remove();
  }
  const newSuccessMessage = document.createElement('div');
  newSuccessMessage.id = 'success-message';
  newSuccessMessage.textContent = "¡Formulario enviado correctamente!";
  newSuccessMessage.style.color = 'green';
  document.getElementById('formulario').appendChild(newSuccessMessage);
});

function showError(message) {
  const errorMessage = document.getElementById("error-message");
  if (errorMessage) {
    errorMessage.textContent = message;
  } else {
    const newErrorMessage = document.createElement('div');
    newErrorMessage.id = 'error-message';
    newErrorMessage.textContent = message;
    newErrorMessage.style.color = 'red';
    document.getElementById('formulario').prepend(newErrorMessage);
  }
}