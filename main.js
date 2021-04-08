var lineal = new (function () {
  this.mostrar = function () {
    document.getElementById("resultado").value = "resultado";
    this.metadata = ["x", "x0", "x1", "fx0", "fx1"];
    this.datos = [
      "X",
      "X<sub>0<sub>",
      "X<sub>1<sub>",
      "F(x<sub>0<sub>)",
      "F(x<sub>1<sub>)",
    ];
    var data = "<div id='dataLineal'>"; // Modificar, tomar en cuenta
    data += "<br>";
    data += "Calculadora interpolación lineal";
    data += "<br>";
    data += "</div>";
    data += "<thead><tr><th>Datos</th><th>Valores</th><th>Mensaje</th>";
    for (i = 0; i < this.datos.length; i++) {
      //INICIAMOS NUESTRO CICLO PARA IMPRIMIR NUESTRA TABLA CON LOS DATOS NECESARIOS
      data += "<tr>";
      if (this.datos[i].Resultado == "") {
        //DETERMINAMOS SI EL RESULTADO ESTA VACIO
        alert("Algo salio mal");
      } else {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input type='Number' id='${this.metadata[i]}'/></td><th>Inserta el valor en la caja</th>`;
      }
      data += "</tr>";
    }
    // Agregar todo al contenedor del html
    document.getElementById("contenedor").innerHTML = data;
    document.getElementById("contenedor").style.display = "block";
  };
})();
var orden1 = new (function () {
  this.mostrar1 = function () {
    document.getElementById("resultado").value = "resultado";
    this.metadata = ["x", "x0", "x1", "fx0", "fx1"];
    this.datos = [
      "X",
      "X<sub>0<sub>",
      "X<sub>1<sub>",
      "F(x<sub>0<sub>)",
      "F(x<sub>1<sub>)",
    ];
    var data = "<div id='dataOrden1'>"; // Modificar, tomar en cuenta
    data += "<br>";
    data += "Calculadora interpolación lineal";
    data += "<br>";
    data += "</div>";
    data += "<thead><tr><th>Datos</th><th>Valores</th><th>Mensaje</th>";
    for (i = 0; i < this.datos.length; i++) {
      //INICIAMOS NUESTRO CICLO PARA IMPRIMIR NUESTRA TABLA CON LOS DATOS NECESARIOS
      data += "<tr>";
      if (this.datos[i].Resultado == "") {
        //DETERMINAMOS SI EL RESULTADO ESTA VACIO
        alert("Algo salio mal");
      } else {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input type='Number' id='${this.metadata[i]}'/></td><th>Inserta el valor en la caja</th>`;
      }
      data += "</tr>";
    }
    document.getElementById("contenedor").innerHTML = data;
    document.getElementById("contenedor").style.display = "block";
  };
})();

var orden2 = new (function () {})();

var cuadratica = new (function () {})();

//Obtener valores del html con dom + funciones de cada interpolación (mismo boton para todas)
window.onload = function () {
  document.getElementById("obtener").onclick = function () {
    if (document.getElementById("dataLineal").value != "") {
      var x = document.getElementById("x").value;
      var x0 = document.getElementById("x0").value;
      var x1 = document.getElementById("x1").value;
      var fx0 = document.getElementById("fx0").value;
      var fx1 = document.getElementById("fx1").value;
      this.array = [x, x0, x1, fx0, fx1];
      // recorrer array en busca de espacios vacio
      let i = 0;
      this.array.forEach((element) => {
        if (element == "") {
          i++;
        }
      });
      alert(`te falta ingresar ${i} valores`);
      document.getElementById("resultado").value = interpolacion._lineal(
        x,
        x0,
        x1,
        fx0,
        fx1
      );
    }
  };
};

// Elaborar la función para calcular metodos de interpolación
var interpolacion = new (function () {
  this._lineal = function (x, x0, x1, fx0, fx1) {
    var resultado = x * x0 + x1 / fx0 + (fx1 - fx0);
    console.log(resultado);
    console.log(x);
    return resultado;
  };
})();
