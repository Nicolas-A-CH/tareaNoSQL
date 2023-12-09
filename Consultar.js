function consultar() {
    db.collection("Matricula").get().then((querySnapshot) => {
      // Inicializar variables para contener la cadena de resultados
      let nombres = "";
      let apellidos = "";
      let tipoDocumento = "";
      let documento = "";
      let programa = "";
      let jornada = "";
  
      querySnapshot.forEach((doc) => {
        // Agregar datos del documento actual a las cadenas
        nombres += `${doc.data().NombreAprendiz}<br>`;
        apellidos += `${doc.data().ApellidoAprendiz}<br>`;
        tipoDocumento += `${doc.data().TipoDocumento}<br>`;
        documento += `${doc.data().NumeroDocumento}<br>`;
        programa += `${doc.data().Programa}<br>`;
        jornada += `${doc.data().Jornada}<br>`;
  
        console.log(`${doc.id} => ${doc.data()}`);
      });
  
      // Establecer las cadenas construidas en los elementos HTML
      document.getElementById("nombre").innerHTML = nombres;
      document.getElementById("apellido").innerHTML = apellidos;
      document.getElementById("tipoDocumento").innerHTML = tipoDocumento;
      document.getElementById("documento").innerHTML = documento;
      document.getElementById("programa").innerHTML = programa;
      document.getElementById("jornada").innerHTML = jornada;
    });
  }
  
  // Llamar a la función consultar() cuando la página ha sido completamente cargada
  document.addEventListener("DOMContentLoaded", function () {
    consultar();
  });
  