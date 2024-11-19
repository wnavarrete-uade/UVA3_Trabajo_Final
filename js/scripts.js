/* NAVBAR RESPONSIVE */
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('show');
}

/* CALCULADORA DE PRESUPUESTO */

function calculateBudget() {
  // Obtiene los valores de los campos de entrada
  const carModel = document.getElementById("carModel").value;
  const serviceTypeSelect = document.getElementById("serviceType");
  const serviceCost = serviceTypeSelect.value;
  const serviceText = serviceTypeSelect.options[serviceTypeSelect.selectedIndex].text;

  // Verifica que se haya seleccionado un servicio
  if (serviceCost === "0") {
      alert("Por favor, seleccione un servicio.");
      return;
  }

  // Muestra los detalles del presupuesto
  document.getElementById("carModelOutput").textContent = carModel;
  document.getElementById("serviceTypeOutput").textContent = serviceText;
  document.getElementById("totalOutput").textContent = serviceCost;
}

function clearForm() {
  // Limpia los valores del formulario y del resultado
  document.getElementById("budget-form").reset();
  document.getElementById("carModelOutput").textContent = "";
  document.getElementById("serviceTypeOutput").textContent = "";
  document.getElementById("totalOutput").textContent = "0";
}


/* VALIDACION DE FORMULARIO DE TURNOS */ 

// VALIDACION DE FORMULARIO DE TURNOS

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevenir el envío del formulario

  // Obtener los valores de los campos
  const nombre = document.getElementById("Nombre").value;
  const apellido = document.getElementById("Apellido").value;
  const email = document.getElementById("Email").value;
  const fecha = document.getElementById("Date").value;
  const hora = document.getElementById("Time").value;

  // Limpiar los mensajes de error previos
  const errorMessage = document.getElementById("error-message");
  if (errorMessage) {
    errorMessage.textContent = '';
  }

  // Validar Nombre
  if (nombre === "") {
    showError("Por favor ingresa tu nombre.");
    return;
  }

  // Validar Apellido
  if (apellido === "") {
    showError("Por favor ingresa tu apellido.");
    return;
  }

  // Validar Email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    showError("Por favor ingresa tu correo electrónico.");
    return;
  } else if (!emailPattern.test(email)) {
    showError("Por favor ingresa un correo electrónico válido.");
    return;
  }

  // Validar Fecha
  if (fecha === "") {
    showError("Por favor selecciona una fecha.");
    return;
  }

  // Validar Hora
  if (hora === "") {
    showError("Por favor selecciona una hora.");
    return;
  }

  // Si todo es válido, muestra un mensaje de éxito
  const successMessage = document.createElement('div');
  successMessage.textContent = "¡Formulario enviado correctamente!";
  successMessage.style.color = 'green';
  document.getElementById('formulario').appendChild(successMessage);
});

// Función para mostrar mensajes de error
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
