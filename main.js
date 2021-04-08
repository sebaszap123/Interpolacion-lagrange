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
    data += "<h3>Calculadora interpolación lineal<h3>";
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
    data += "<h3>Calculadora interpolación de 1er orden<h3>";
    data += "<br>";
    data += "</div>";
    data += "<thead><tr><th>Datos</th><th>Valores</th><th>Mensaje</th>";
    for (i = 0; i < this.datos.length; i++) {
      //INICIAR  CICLO PARA IMPRIMIR LA TABLA
      data += "<tr>";
      if (this.datos[i].Resultado == "") {
        //DETERMINAR SI EL RESULTADO ESTA VACIO
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
    if (document.getElementById("dataLineal")) {
      // definir como numeros
      var x = Number(document.getElementById("x").value);
      var x0 = Number(document.getElementById("x0").value);
      var x1 = Number(document.getElementById("x1").value);
      var fx0 = Number(document.getElementById("fx0").value);
      var fx1 = Number(document.getElementById("fx1").value);
      this.array = [x, x0, x1, fx0, fx1];
      // recorrer array en busca de espacios vacio
      let i = 0;
      this.array.forEach((element) => {
        if (element == "") {
          i++;
        }
      });
      if (i <= 0) {
        document.getElementById("resultado").value = calculo._lineal(
          x,
          x0,
          x1,
          fx0,
          fx1
        );
      } else {
        alert(`te falta ingresar ${i} valores`);
      }
    } else if (document.getElementById("dataOrden1")) {
      var x = Number(document.getElementById("x").value);
      var x0 = Number(document.getElementById("x0").value);
      var x1 = Number(document.getElementById("x1").value);
      var fx0 = Number(document.getElementById("fx0").value);
      var fx1 = Number(document.getElementById("fx1").value);
      this.array = [x, x0, x1, fx0, fx1];
      // recorrer array en busca de espacios vacio
      let i = 0;
      this.array.forEach((element) => {
        if (element == "") {
          i++;
        }
      });
      if(i <= 0){
        document.getElementById("resultado").value = calculo._orden1(
          x,
          x0,
          x1,
          fx0,
          fx1
        );
      } else {
        alert(`te falta ingresar ${i} valores`);
      }
    }
  };
};

// Elaborar la función para calcular metodos de interpolación
var calculo = new (function () {
  this._lineal = function (x, x0, x1, fx0, fx1) {
    let resultado = x + x0 + x1 + fx0 + fx1;
    return resultado;
  };
  this._orden1 = function (x, x0, x1, fx0, fx1) {
    let resultado = x * x0 * x1 * fx0 * fx1;
    return resultado;
  };
})();
