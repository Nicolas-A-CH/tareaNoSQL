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
document.addEventListener("DOMContentLoaded", function () {
    const relacionAcudienteSelect = document.getElementById("RelaciónAcudiente");
    const justificacionAcudienteDiv = document.getElementById("contenedor_JustificacionAcudiente");
    const justificacionAcudienteInput = document.getElementById("justificacionAcudiente");

    relacionAcudienteSelect.addEventListener("change", function () {
        const selectedOption = relacionAcudienteSelect.value;

        // Ocultar todos los campos
        justificacionAcudienteDiv.style.display = "none";

        // Desactivar la propiedad required en todos los campos de fecha y hora
        justificacionAcudienteInput.required = false;

        // Mostrar solo el campo correspondiente a "Otro"
        if (selectedOption === "Otro") {
            justificacionAcudienteDiv.style.display = "block";
            justificacionAcudienteInput.required = true;
        }
    });
});

// Función para limpiar todos los campos del formulario
function limpiarCampos() {
    // Obtén el formulario por su ID
    var formulario = document.getElementById('formRegistroUsuario');

    // Restablece el formulario, lo cual limpia todos los campos
    formulario.reset();

    // También puedes restablecer la validación del formulario si es necesario
    formulario.classList.remove('was-validated');
}

// Asigna la función al evento click del botón "Nuevo aprendiz"
document.getElementById('btnNuevoAprendiz').addEventListener('click', limpiarCampos);