// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
function validarFechaNacimientoYEdad() {
    const inputFechaNacimiento = document.getElementById('FechaNacimiento');
    const inputEdad = document.getElementById('Edad');

    inputFechaNacimiento.addEventListener('input', function () {
        const fechaNacimiento = new Date(this.value);
        const fechaActual = new Date();

        if (isNaN(fechaNacimiento.getTime())) {
            // La fecha ingresada no es válida
            this.setCustomValidity('Se requiere una fecha válida.');
            this.parentElement.classList.add('was-validated');
        } else if (fechaNacimiento > fechaActual) {
            // La fecha ingresada es en el futuro
            this.setCustomValidity('La fecha de nacimiento no puede ser en el futuro.');
            this.parentElement.classList.add('was-validated');
        } else {
            // La fecha ingresada es válida
            this.setCustomValidity('');
            this.parentElement.classList.remove('was-validated');

            // Calcular edad
            const diff = fechaActual - fechaNacimiento;
            const edad = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            inputEdad.value = edad;
        }
    });

    inputEdad.addEventListener('input', function () {
        const edad = parseInt(this.value);
        const fechaNacimiento = new Date(inputFechaNacimiento.value);
        const fechaLimite = new Date(fechaNacimiento);
        fechaLimite.setFullYear(fechaNacimiento.getFullYear() + edad);

        const fechaActual = new Date();

        if (isNaN(edad) || edad < 0) {
            // La edad ingresada no es válida
            this.setCustomValidity('Se requiere una edad válida.');
            this.parentElement.classList.add('was-validated');
        } else if (fechaLimite > fechaActual) {
            // La edad ingresada resulta en una fecha de nacimiento en el futuro
            this.setCustomValidity('La fecha de nacimiento resultante con esta edad sería en el futuro.');
            this.parentElement.classList.add('was-validated');
        } else {
            // La edad ingresada es válida
            this.setCustomValidity('');
            this.parentElement.classList.remove('was-validated');
        }
    });
}
function mostrarCampoOtro() {
    var select = document.getElementById("Parentesco");
    var otroCampo = document.getElementById("campoOtro");

    if (select.value === "Otro") {
        otroCampo.style.display = "block";
        document.getElementById("Otro").required = true;
    } else {
        otroCampo.style.display = "none";
        document.getElementById("Otro").required = false;
    }
}
// Llama a la función cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    validarFechaNacimientoYEdad();
});