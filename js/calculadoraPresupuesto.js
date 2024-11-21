/* CALCULADORA DE PRESUPUESTO */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Precios de los servicios por modelo de auto
    const prices = {
        chevrolet1950: {
            cambioAceite: 1000,
            revisionFrenos: 800,
            reparacionTransmision: 2500
        },
        chevrolet1970: {
            cambioAceite: 3000,
            revisionFrenos: 1500,
            reparacionTransmision: 4000
        },
        chevrolet1980: {
            cambioAceite: 2000,
            revisionFrenos: 1200,
            reparacionTransmision: 3500
        },
        chevrolet1990: {
            cambioAceite: 1500,
            revisionFrenos: 1000,
            reparacionTransmion: 3000
        },
        chevrolet2000: {
            cambioAceite: 1800,
            revisionFrenos: 1100,
            reparacionTransmision: 3200
        }
    };
  
    // Función para calcular el presupuesto
    function calculateBudget() {
        // Obtener los valores seleccionados
        const carModel = document.getElementById("carModel").value;
        const serviceType = document.getElementById("serviceType").value;
  
        // Validar si el modelo de auto y el servicio han sido seleccionados
        if (!carModel || !serviceType || serviceType === "0") {
            alert("Por favor selecciona tanto un modelo de auto como un servicio.");
            return;
        }
  
        // Obtener el precio del servicio según el modelo de auto
        const servicePrice = prices[carModel] ? prices[carModel][serviceType] : undefined;
  
        // Verificar si el precio existe para ese servicio y modelo de auto
        if (servicePrice === undefined) {
            alert("Servicio no disponible para el modelo seleccionado.");
            return;
        }
  
        // Mostrar los resultados en la página
        const modelName = carModel.replace(/[0-9]/g, ''); // Limpiar el número para mostrar solo el modelo, ej. chevrolet
        document.getElementById("carModelOutput").textContent = modelName;
        document.getElementById("serviceTypeOutput").textContent = formatServiceName(serviceType); // Formato amigable para el servicio
        document.getElementById("totalOutput").textContent = servicePrice; // Mostrar el precio total
    }
  
    // Función para darle formato al nombre del servicio (de camelCase a formato más legible)
    function formatServiceName(service) {
        return service.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, function(str) {
            return str.toUpperCase();
        });
    }
  
    // Función para limpiar el formulario y los resultados
    function clearForm() {
        // Limpiar los campos del formulario
        document.getElementById("budget-form").reset();
        document.getElementById("carModelOutput").textContent = "";
        document.getElementById("serviceTypeOutput").textContent = "";
        document.getElementById("totalOutput").textContent = "0";
    }
  
    // Añadir evento al botón de "Calcular presupuesto"
    document.querySelector('.button-black').addEventListener('click', calculateBudget);
  
    // Añadir evento al botón de "Limpiar"
    document.querySelector('.clear').addEventListener('click', clearForm);
  });
  