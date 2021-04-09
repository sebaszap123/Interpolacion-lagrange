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
          `</td><td><input id='${this.metadata[i]}' disabled></td><th><button class="generate" id="cuadraticab0">Generar b0</button></th>`;
      } else if (i === 8) {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input id='${this.metadata[i]}' disabled></td><th><button class="generate" id="cuadraticab1">Generar b1</button></th>`;
      } else if (i === 9) {
        data +=
          "<td>" +
          this.datos[i] +
          `</td><td><input id='${this.metadata[i]}' disabled></td><th><button class="generate" id="cuadraticab2">Generar b2</button></th>`;
      }
      data += "</tr>";
    }
    document.getElementById("contenedor").innerHTML = data;
    document.getElementById("contenedor").style.display = "block";
    // Generar funcion para botones creados
    document.getElementById("cuadraticab0").onclick = function () {
      app.generarb0();
    };
    document.getElementById("cuadraticab1").onclick = function () {
      app.generarb1();
    };
    document.getElementById("cuadraticab2").onclick = function () {
      app.generarb2();
    };
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
      if (i <= 0) {
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
        alert(`te falta ingresar ${i} valores`);
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
        var x2 = Number(document.getElementById("x2").value);
        var fx0 = Number(document.getElementById("fx0").value);
        var fx1 = Number(document.getElementById("fx1").value);
        var fx2 = Number(document.getElementById("fx2").value);
        // Realizar operación
        document.getElementById("resultado").value = calculo._orden2(
          x,
          x0,
          x1,
          x2,
          fx0,
          fx1,
          fx2
        );
      } else {
        alert(`te falta ingresar ${i} valores`);
      }
      // Calculo para interpolación Cuadratica
    } else if (document.getElementById("dataCuadratica")) {
      // Verificamos si hay inputs vacios
      let i = verificar._cuadratica();
      // if de acuerdo a la funcion verificar para evitar hacer el calculo con datos faltantes
      if (i < 1) {
        // definir como numeros
        var x = Number(document.getElementById("x").value);
        var x0 = Number(document.getElementById("x0").value);
        var x1 = Number(document.getElementById("x1").value);
        this.b0 = app.generarb0();
        this.b1 = app.generarb1();
        this.b2 = app.generarb2();
        var b0 = Number(document.getElementById("b0").value);
        var b1 = Number(document.getElementById("b1").value);
        var b2 = Number(document.getElementById("b2").value);
        // Realizar operación
        document.getElementById("resultado").value = calculo._cuadratica(
          x,
          x0,
          x1,
          b0,
          b1,
          b2
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
    this.division = (fx1 - fx0) / (x1 - x0);
    let resultado = fx0 + this.division * (x - x0);
    return resultado.toFixed(6);
  };
  this._orden1 = function (x, x0, x1, fx0, fx1) {
    this.division1 = (x - x1) / (x0 - x1);
    this.division2 = (x - x0) / (x1 - x0);
    let resultado = this.division1 * fx0 + this.division2 * fx1;
    return resultado.toFixed(6);
  };
  this._orden2 = function (x, x0, x1, x2, fx0, fx1, fx2) {
    this.first = ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2));
    this.second = ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2));
    this.third = ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));
    var resultado = this.first * fx0 + this.second * fx1 + this.third * fx2;
    return resultado.toFixed(6);
  };
  this._cuadratica = function (x, x0, x1, b0, b1, b2) {
    this.resultado = b0 + b1 * (x - x0) + b2 * (x - x0) * (x - x1);
    console.log(this.resultado);
    return this.resultado.toFixed(6);
  };
  this._error = function () {
    let resultado = document.getElementById("resultado").value;
    let verdadero = document.getElementById("verdadero").value;
    let error = verdadero - resultado;
    let errorPorcentual = (error / verdadero) * 100;
    document.getElementById("porcentual").value = errorPorcentual.toFixed(6);
  };
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
  this._cuadratica = function () {
    this.cuadratica = 0;
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx2 = document.getElementById("fx2").value;
    // edite esto
    this.verify2 = [x, x0, x1, fx0, fx1, fx2];
    this.verify2.forEach((element) => {
      if (element == "") {
        this.cuadratica++;
      }
    });
    return this.cuadratica;
  };
})();

// Datos que necesito ("x", "x0", "x1", "x2", "fx0","fx1","fx2","b0", "b1", "b2")
var app = new (function () {
  this.generarb0 = function () {
    var a = Number(document.getElementById("fx0").value);
    this.array = [a];
    this.array.forEach((element) => {
      if (element != "") {
        document.getElementById("b0").value = a;
      } else {
        alert("dale valor a fx0");
      }
    });
  };
  // Generarb1
  this.generarb1 = function () {
    let count = -1;
    var fx1 = document.getElementById("fx1").value;
    var fx0 = document.getElementById("fx0").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    this.data = ["x0", "x1", "fx0", "fx1"];
    this.arrayb1 = [x0, x1, fx0, fx1];
    this.arrayb1.forEach((element) => {
      count++;
      if (element != "") {
        document.getElementById("b1").value = (fx1 - fx0) / (x1 - x0);
      } else {
        alert(`falta ${this.data[count]}`);
      }
    });
  };
  this.generarb2 = function () {
    let count = -1;
    var fx2 = document.getElementById("fx2").value;
    var fx1 = document.getElementById("fx1").value;
    var fx0 = document.getElementById("fx0").value;
    var x2 = document.getElementById("x2").value;
    var x1 = document.getElementById("x1").value;
    var x0 = document.getElementById("x0").value;
    this.data = ["fx2", "fx1", "fx0", "x2", "x1", "x0"];
    this.arrayb2 = [fx2, fx1, fx0, x2, x1, x0];
    this.part1 = (fx2 - fx1) / x2 - x1 - (fx1 - fx0) / (x1 - x0);
    this.part2 = x2 - x0;
    this.arrayb2.forEach((valores) => {
      count++;
      if (valores != "") {
        document.getElementById("b2").value = this.part1 / this.part2;
      } else {
        alert(`falta ${this.data[count]}`);
      }
    });
  };
})();

// id="verdadero"
// id="calcError"
// Calcular error
