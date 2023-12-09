function consultar() {
    db.collection("Matricula").get().then((querySnapshot) => {
      // Inicializar variables para contener la cadena de resultados
      let nombres = "";
      let apellidos = "";
  
      querySnapshot.forEach((doc) => {
        // Agregar datos del documento actual a las cadenas
        nombres += `${doc.data().NombreAprendiz}<br>`;
        apellidos += `${doc.data().ApellidoAprendiz}<br>`;
  
        console.log(`${doc.id} => ${doc.data()}`);
      });
  
      // Establecer las cadenas construidas en los elementos HTML
      document.getElementById("nombre").innerHTML = nombres;
      document.getElementById("apellido").innerHTML = apellidos;
    });
  }
  
  // Llamar a la función consultar() cuando la página ha sido completamente cargada
  document.addEventListener("DOMContentLoaded", function () {
    consultar();
  });
  