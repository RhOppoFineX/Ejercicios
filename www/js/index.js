/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("btnconvertir").addEventListener('click', calcularTemperatura, false);
        document.getElementById("btnconvertir2").addEventListener('click', calcularSueldo, false);
        document.getElementById("btnconvertir3").addEventListener('click', notaEstudiante, false);
        document.getElementById("btnconvertir4").addEventListener('click', softwareCompany, false);
        document.getElementById("btnconvertir5").addEventListener('click', areas, false);
        document.getElementById("btnconvertir6").addEventListener('click', calculadora, false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
    
};

//Ejercicio 1

function calcularTemperatura()
{
    var farentheit = parseFloat(prompt("Ingresa la temperatura en grados Farenheit"));

    var resultado = ((farentheit - 32) * 5)/9;

    alert("El resultado en grados Celcius es: " + resultado.toFixed(2));
}

//Ejercicio 2

function calcularSueldo()
{
    var sueldo = parseFloat(prompt("Ingresa el sueldo"));

    var renta = sueldo * 0.10;
    var AFP = sueldo * 0.06;
    var ISSS = sueldo * 0.03;

    var descuentoTotal = renta + AFP + ISSS;
    var sueldoNeto = sueldo - descuentoTotal;

    alert("El descuento total es: $" + descuentoTotal.toFixed(2));
    alert("El sueldo Neto es: $" + sueldoNeto.toFixed(2));
}

//Ejercicio 3

function notaEstudiante()
{
    var Tareas = parseFloat(prompt("Ingrese la nota en las tareas")) * 0.20;
    var Portafolio = parseFloat(prompt("Ingrese la nota en el portafolio")) * 0.25;
    var Laboratorio = parseFloat(prompt("Ingrese la nota en el laboratorio")) * 0.25;
    var Examen = parseFloat(prompt("Ingrese la nota en el examen")) * 0.30;

    var total = Tareas + Portafolio + Laboratorio + Examen;

    alert(`La nota final del estudiante es: ${total.toFixed(2)}`);
}

//Ejercicio 4

function softwareCompany()
{
    var primera = parseFloat(prompt("Inversión de la primera persona"));
    var segunda = parseFloat(prompt("Inversión de la segunda persona"));
    var tercera = parseFloat(prompt("Inversión de la tercera persona"));

    var cantidaTotal = primera + segunda + tercera;

    var porcentajePrimera = (primera * 100) / cantidaTotal;
    var porcentajeSegunda = (segunda * 100) / cantidaTotal;
    var porcentajeTercera = (tercera * 100) / cantidaTotal;

    alert(`El porcentaje que invirtió la Primera persona es: ${porcentajePrimera.toFixed(2)} %` );
    alert(`El porcentaje que invirtió la Segunda persona es: ${porcentajeSegunda.toFixed(2)} %` );
    alert(`El porcentaje que invirtió la Tercera persona es: ${porcentajeTercera.toFixed(2)} %` );

}

// ejercicio 5 

function areas()
{
    var opcion = document.getElementById("Combo5").value;
    var perimetro = null;
    var area = null;
    switch(opcion)
    {
        case 'triangulo':
            var altura = parseFloat(prompt("Ingrese la altura del triangulo"));
            var base = parseFloat(prompt("Ingrese la base del triangulo"));

             perimetro = base * 3;
             area = (base * altura) / 2;

            alert(`El perímetro del triangulo es: ${perimetro.toFixed(2)}`);
            alert(`El area del triangulo es: ${area.toFixed(2)}`);

        break;

        case 'circulo':
            var radio = parseFloat(prompt("Ingrese el radio del circulo"));

             perimetro =  2 * Math.PI * radio;
             area = Math.PI * Math.pow(radio, 2);

            alert(`El perímetro del circulo es: ${perimetro.toFixed(2)}`);
            alert(`El area del circulo es: ${area.toFixed(2)}`);
        break;

        case 'rombo':
            var diagonalMenor = parseFloat(prompt("Ingrese la diagonal menor"));
            var diagonalMayor = parseFloat(prompt("Ingrese la diagonal mayor"));
            var lado = parseFloat(prompt("Ingrese un lado del Rombo"));

            perimetro = lado * 4;
            area = (diagonalMayor * diagonalMenor) / 2;

            alert(`El perímetro del Rombo es: ${perimetro.toFixed(2)}`);
            alert(`El area del Rombo es: ${area.toFixed(2)}`);                       

        break;

        case 'trapecio':
            var baseA = parseFloat(prompt("Ingrese la primera base"));
            var baseB = parseFloat(prompt("Ingrese la segunda base"));
            var altura = parseFloat(prompt("Ingrese la altura del trapecio"));
            
            var lado1 = parseFloat(prompt("Ingrese el lado 1"));
            var lado2 = parseFloat(prompt("Ingrese el lado 2"));
            var lado3 = parseFloat(prompt("Ingrese el lado 3"));
            var lado4 = parseFloat(prompt("Ingrese el lado 4"));

            perimetro = lado1 = lado2 = lado3 = lado4;
            area = ((baseA * baseB) / 2) * altura;
            alert(`El area del trapecio es: ${area.toFixed(2)}`);
            alert(`El perimetro del trapecio es: ${perimetro.toFixed(2)}`);

        break;

    }
}

//Ejercicio 6 

function calculadora()
{
    var opcion = document.getElementById("Combo6").value;    

    switch (opcion)
    {
        case 'Suma':
            var numero = parseFloat(prompt("Ingrese un número"));
            var numero2 = parseFloat(prompt("Ingrese otro número"));

            alert(`El resultado de la ${opcion} es ${numero + numero2}`);                                    
 
        break;

        case 'Resta':
            var numero = parseFloat(prompt("Ingrese un número"));
            var numero2 = parseFloat(prompt("Ingrese otro número"));
    
            alert(`El resultado de la ${opcion} es ${numero - numero2}`);

        break;

        case 'Multiplicacion':
            var numero = parseFloat(prompt("Ingrese un número"));
            var numero2 = parseFloat(prompt("Ingrese otro número"));
    
            alert(`El resultado de la ${opcion} es ${numero * numero2}`);

        break;

        case 'Division':
            var numero = parseFloat(prompt("Ingrese un número"));
            var numero2 = parseFloat(prompt("Ingrese otro número"));
        
            alert(`El resultado de la ${opcion} es ${numero / numero2}`);
        break;

        case 'Modulo':
                var numero = parseFloat(prompt("Ingrese un número"));
                var modulo = parseFloat(prompt("Ingrese el valor de modulo"));
                alert(`El resultado de la ${opcion} es ${numero % modulo}`);            
        break;

        case 'Potencia':
                var numero = parseFloat(prompt("Ingrese un número"));
                var potencia = parseInt(prompt("Ingrese la potencia"));                
                
                alert(`El resultado de la ${opcion} es ${Math.pow(numero, potencia)}`);
        break;

        case 'Raiz':
            var numero = parseFloat(prompt("Ingrese el numero"));

            alert(`El resultado de la ${opcion} es ${Math.sqrt(numero)}`);
        break;

    }
}

app.initialize();