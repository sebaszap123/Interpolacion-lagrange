var generar = new (function () {
  this.lineal = function () {
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
  this.orden1 = function () {
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
  this.orden2 = function () {
    document.getElementById("resultado").value = "resultado";
    this.metadata = ["x", "x0", "x1", "x2", "fx0", "fx1", "fx2"];
    this.datos = [
      "X",
      "X<sub>0<sub>",
      "X<sub>1<sub>",
      "X<sub>2<sub>",
      "F(x<sub>0<sub>)",
      "F(x<sub>1<sub>)",
      "F(x<sub>2<sub>)",
    ];
    var data = "<div id='dataOrden2'>"; // Modificar, tomar en cuenta
    data += "<br>";
    data += "<h3>Calculadora interpolación de 2do orden<h3>";
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
  this.cuadratica = function () {
    document.getElementById("resultado").value = "resultado";

    this.metadata = [
      "x",
      "x0",
      "x1",
      "x2",
      "fx0",
      "fx1",
      "fx2",
      "b0",
      "b1",
      "b2",
    ];
    this.datos = [
      "X",
      "X<sub>0<sub>",
      "X<sub>1<sub>",
      "X<sub>2<sub>",
      "Fx<sub>0<sub>",
      "Fx<sub>1<sub>",
      "Fx<sub>2<sub>",
      "B<sub>0<sub>",
      "B<sub>1<sub>",
      "B<sub>2<sub>",
    ];
    var data = "<div id='dataCuadratica'>"; // Modificar, tomar en cuenta
    data += "<br>";
    data += "<h3>Calculadora interpolación Cuadrática<h3>";
    data += "</div>";
    data += "<thead><tr><th>Datos</th><th>Valores</th><th>Mensaje</th>";
    for (i = 0; i < this.datos.length; i++) {
      //INICIAR  CICLO PARA IMPRIMIR LA TABLA
      data += "<tr>";
      if (this.datos[i].Resultado == "") {
        //DETERMINAR SI EL RESULTADO ESTA VACIO
        alert("Algo salio mal");
      } else if (i < 7) {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input type='Number' id='${this.metadata[i]}'></td><th>Inserta el valor en la caja</th>`;
      } else if (i === 7) {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input id='${this.metadata[i]}'></td><th><button class="generate" id="cuadraticab0">Generar b0</button></th>`;
      } else if (i === 8) {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input id='${this.metadata[i]}'></td><th><button class="generate" id="cuadraticab1">Generar b1</button></th>`;
      } else if (i === 9) {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input id='${this.metadata[i]}'></td><th><button class="generate" id="cuadraticab2">Generar b2</button></th>`;
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
    // Calculo para interpolación lineal del respectivo div
    // Primero verificar si existe dataLineal
    if (document.getElementById("dataLineal")) {
      // Verificamos si hay inputs vacios
      let i = verificar._linealAndOrden1();
      // if de acuerdo a la funcion verificar para evitar hacer el calculo con datos faltante
      if (i <= 0) {
        // definir como numeros
        var x = Number(document.getElementById("x").value);
        var x0 = Number(document.getElementById("x0").value);
        var x1 = Number(document.getElementById("x1").value);
        var fx0 = Number(document.getElementById("fx0").value);
        var fx1 = Number(document.getElementById("fx1").value);
        // Realizar operación
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
      // Calculo para interpolación orden1
    } else if (document.getElementById("dataOrden1")) {
      // Verificamos si hay inputs vacios
      let i = verificar._linealAndOrden1();
      // if de acuerdo a la funcion verificar para evitar hacer el calculo con datos faltantes
      if (i < 0) {
        // definir como numeros
        var x = Number(document.getElementById("x").value);
        var x0 = Number(document.getElementById("x0").value);
        var x1 = Number(document.getElementById("x1").value);
        var fx0 = Number(document.getElementById("fx0").value);
        var fx1 = Number(document.getElementById("fx1").value);
        // Realizar operación
        document.getElementById("resultado").value = calculo._orden1(
          x,
          x0,
          x1,
          fx0,
          fx1
        );
      } else {
        alert(`te falta ingresar ${i + 1} valores`);
      }
      // Para interpolación 2do orden
    } else if (document.getElementById("dataOrden2")) {
      // Verificamos si hay inputs vacios
      let i = verificar._orden2();
      // if de acuerdo a la funcion verificar para evitar hacer el calculo con datos faltante
      if (i <= 0) {
        // definir como numeros
        var x = Number(document.getElementById("x").value);
        var x0 = Number(document.getElementById("x0").value);
        var x1 = Number(document.getElementById("x1").value);
        var fx0 = Number(document.getElementById("fx0").value);
        var fx1 = Number(document.getElementById("fx1").value);
        // Realizar operación
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
      // Calculo para interpolación Cuadratica
    } else if (document.getElementById("dataCuadratica")) {
      // Verificamos si hay inputs vacios
      let i = verificar.orden2();
      // if de acuerdo a la funcion verificar para evitar hacer el calculo con datos faltantes
      if (i < 0) {
        // definir como numeros
        var x = Number(document.getElementById("x").value);
        var x0 = Number(document.getElementById("x0").value);
        var x1 = Number(document.getElementById("x1").value);
        var fx0 = Number(document.getElementById("fx0").value);
        var fx1 = Number(document.getElementById("fx1").value);
        // Realizar operación
        document.getElementById("resultado").value = calculo._orden1(
          x,
          x0,
          x1,
          fx0,
          fx1
        );
      } else {
        alert(`te falta ingresar ${i + 1} valores`);
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
  this._orden2 = function () {};
  this._cuadratica = function () {};
})();

var verificar = new (function () {
  this._linealAndOrden1 = function () {
    this.l = 0;
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    this.verify1 = [x, x0, x1, fx0, fx1];
    this.verify1.forEach((element) => {
      if (element == "") {
        this.l++;
      }
    });
    return this.l;
  };
  this._orden2 = function () {
    this.o2 = 0;
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx2 = document.getElementById("fx2").value;
    this.verify2 = [x, x0, x1, x2, fx0, fx1, fx2];
    this.verify2.forEach((element) => {
      if (element == "") {
        this.o2++;
      }
    });
    return this.o2;
  };
  this._cuadratica = function () {};
})();

// Datos que necesito ("x", "x0", "x1", "x2", "fx0","fx1","fx2","b0", "b1", "b2")
  var app = new (function () {
    this.generarb0 = function () {
      if (document.getElementById("fx0")) {
        var a = document.getElementById("fx0").value;
        document.getElementById("b0").innerHTML = a;
        console.log(a)
      }
    };
  })();

window.onclick = function () {
  document.getElementById("cuadraticab0").onclick = function () {
    console.log("hola");
  };
};
// document.getElementById("b0").innerHTML = "hola"
