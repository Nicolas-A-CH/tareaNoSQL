function guardar() {
    /* const Correo = document.getElementById("Correo").value;
    const ApellidoAp = document.getElementById("lastName").value;
    const Colegio = document.getElementById("Colegio_Aprendiz").value;
    const Departamento = document.getElementById("departamento").value;
    const Direccion = document.getElementById("direccion").value;
    const FechaNacimiento = document.getElementById("Nacimiento").value;
    const Jornada = document.getElementById("JornadaFormacion").value;
    const Municipio = document.getElementById("municipio").value;
    const NombreAc = document.getElementById("nomAcudiente").value;
    const NombreAp = document.getElementById("firstName").value;
    const Documento = document.getElementById("document").value;
    const Programa = document.getElementById("ProgramaFormacion").value;
    const RelacionAc = document.getElementById("RelacionAcudiente").value;
    const Telefono = document.getElementById("teléfono").value;
    const TipoDoc = document.getElementById("TipoDocumento").value;
    // Validación de existencia de usuario
    db.collection("aprendices")
        .where("numeroDocumento", "==", Documento)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                swal("¡Error!", "Ya existe un usuario con este número de documento", "error");
            } else if (Correo && ApellidoAp && Colegio && Departamento && Direccion
                && FechaNacimiento && Jornada && Municipio && NombreAc &&
                NombreAp && Documento && Programa && RelacionAc && Telefono
                && TipoDoc) {
                db.collection("Matrícula").add({
                    CorreoElectrónico: Correo,
                    apellidoAprendiz: ApellidoAp,
                    colegio: Colegio,
                    departamento: Departamento,
                    direccionResidencia: Direccion,
                    fechaNacimiento: FechaNacimiento,
                    jornadaFormacion: Jornada,
                    municipio: Municipio,
                    nombreAcudiente: NombreAc,
                    nombreAprendiz: NombreAp,
                    numeroDocumento: Documento,
                    programaFormación: Programa,
                    relacionAcudiente: RelacionAc,
                    telefono: Telefono,
                    tipoDocumento: TipoDoc
                    
                })
                    .then((docRef) => {
                        alert("El registro fue exitoso");
                    })
                    .catch((error) => {
                        alert("error en el registro");
                    });
            } else {
                swal("¡Error!", "Por favor, completa TODOS los campos.", "error");
            }
        })
        .catch((error) => {
            swal("¡Error!", "Hubo un problema al verificar el número de documento", "error");
        });
        */
    // Validación de campos obligatorios
    const ApellidoAp = document.getElementById("lastName").value;
    const Colegio = document.getElementById("Colegio_Aprendiz").value;
    const Departamento = document.getElementById("departamento").value;
    const Direccion = document.getElementById("direccion").value;
    const FechaNacimiento = document.getElementById("Nacimiento").value;
    const Jornada = document.getElementById("JornadaFormacion").value;
    const Municipio = document.getElementById("municipio").value;
    const NombreAc = document.getElementById("nomAcudiente").value;
    const NombreAp = document.getElementById("firstName").value;
    const Documento = document.getElementById("document").value;
    const Programa = document.getElementById("ProgramaFormacion").value;
    const RelacionAc = document.getElementById("RelacionAcudiente").value;
    const Telefono = document.getElementById("teléfono").value;
    const TipoDoc = document.getElementById("TipoDocumento").value;

    // Validación de existencia de usuario
    db.collection("Matrícula")
        .where("Documento", "==", NumeroDocumento)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                swal("¡Error!", "Ya existe un usuario con este número de documento", "error");
            } else if (ApellidoAcudiente && ApellidoAprendiz && Barrio && Colegio &&
                CorreoElectronico && Departamento && DireccionResidencia &&
                Edad && FechaNacimiento && Jornada && Municipio && NombreAcudiente &&
                NombreAprendiz && NumeroDocumento && NumeroTelefono && Parentesco && 
                Programa && TipoDocumento
            ) {
                swal({
                    title: "¿Estás seguro de guardar estos datos?",
                    text: "Se agregarán a la base de datos.",
                    icon: "warning",
                    buttons: ["Cancelar", "Guardar"],
                    dangerMode: true,
                })
                    .then((willSave) => {
                        if (willSave) {
                            db.collection("aprendices")
                                .add({
                                    CorreoElectrónico: Correo,
                    apellidoAprendiz: ApellidoAp,
                    colegio: Colegio,
                    departamento: Departamento,
                    direccionResidencia: Direccion,
                    fechaNacimiento: FechaNacimiento,
                    jornadaFormacion: Jornada,
                    municipio: Municipio,
                    nombreAcudiente: NombreAc,
                    nombreAprendiz: NombreAp,
                    numeroDocumento: Documento,
                    programaFormación: Programa,
                    relacionAcudiente: RelacionAc,
                    telefono: Telefono,
                    tipoDocumento: TipoDoc
                                })
                                .then((docRef) => {
                                    swal("¡Éxito!", "Los datos se han guardado correctamente", "success");
                                })
                                .catch((error) => {
                                    swal("¡Error!", "Hubo un problema al guardar los datos", "error");
                                });
                        } else {
                            swal("Operación cancelada", "Los datos no se han guardado", "info");
                        }
                    });
            } else {
                swal("¡Error!", "Por favor, completa TODOS los campos.", "error");
            }
        })
        .catch((error) => {
            swal("¡Error!", "Hubo un problema al verificar el número de documento", "error");
        });
}