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
        document.getElementById("btnconvertir7").addEventListener('click', boletos, false);
        document.getElementById("btnconvertir8").addEventListener('click', incrementoSalario, false);
        document.getElementById("btnconvertir9").addEventListener('click', triangulos, false);
        document.getElementById("btnconvertir10").addEventListener('click', llantas, false);
        document.getElementById("btnconvertir11").addEventListener('click', oficinas, false);
        document.getElementById("btnconvertir12").addEventListener('click', paresImpares, false);
        document.getElementById("btnconvertir13").addEventListener('click', promedio, false);
        document.getElementById("btnconvertir14").addEventListener('click', mayorMenor, false);
        document.getElementById("btnconvertir15").addEventListener('click', examenes, false);


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

        default:
            alert("Selecione un opcion valida");
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

        default:
            alert("Selecione un opcion valida");
        break;
    }
}

//Ejercicio 7

function boletos()
{
    var kilometros = parseFloat(prompt("Ingrese la distancia en Km"));
    var dias = parseFloat(prompt("Ingrese el tiempo de días"));

    var precio = kilometros * 0.15;

    if(dias > 10 && kilometros > 300)
    {
        var descuento = precio * 0.30;
        precio -= descuento;
    }

    alert(`El precio a pagar por el boleto es: ${precio.toFixed(2)}`);

}

//Ejercicio 8
function incrementoSalario()
{
    var salario = parseFloat(prompt("Ingrese su salario"));
    var incremento = 0;
    if(salario < 300)
    {
        incremento = salario * 0.12;
        salario += incremento;   
    }else if(salario >= 300 && salario <= 500){
        incremento = salario * 0.08;
        salario += incremento;
    }else if (salario > 500 && salario <= 800){
        incremento = salario * 0.07;
        salario += incremento;
    }else if(salario > 800){
        incremento = salario * 0.06;
        salario += incremento;
    }

    alert(`El nuevo salario del empleado es: ${salario.toFixed(2)}`);

}

//Ejercicio 9 
function triangulos()
{
    var lado1 = parseFloat(prompt("Ingrese el Primer lado del triangulo"));
    var lado2 = parseFloat(prompt("Ingrese el Segundo lado del triangulo"));
    var lado3 = parseFloat(prompt("Ingrese el Tercer lado del triangulo"));

    if(lado1 === lado2 && lado2 === lado3 && lado1 === lado3)
        alert("Es un triangulo Equilatero");
    
    else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3)
        alert("Es un triangulo Isoceles");
        
    else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3)
        alert("Es un triangulo Escaleno");        
}

//Ejercicio 10

function llantas()
{
    var llantas = parseFloat(prompt("Ingrese la cantidad de llantas que quiere comprar"));
   
    if(llantas <= 4)    
        alert(`El total a pagar por las llantas es: $${llantas * 150.00}`);
        
    else if (llantas >= 5 && llantas <=10)
        alert(`El total a pagar por las llantas es: $${llantas * 125.00}`);
    
    else if (llantas > 10)
        alert(`El total a pagar por las llantas es: $${llantas * 100.00}`);
}

//Ejercicio 11

function oficinas()
{
    var categoria = parseInt(prompt("Ingrese su categoria de trabajo"));
    var horasExtra = parseInt(prompt("Ingrese la cantidad de horas extra"));
    
    if(categoria === 1 || categoria === 2 || categoria ===3)
    {
        if(categoria === 1)
            alert(`El pago por las horas extras es: $${horasExtra * 40}`);

         else if (categoria === 2)
            alert(`El pago por las horas extras es: $${horasExtra * 50}`);

        else
            alert(`El pago por las horas extras es: $${horasExtra * 85}`);
               
    }else{
        alert(`El pago por la horas extra es: Nada porque es mayor a categoria 3`);
    }
}

//Ejercicio 12

function paresImpares ()
{   
    var condicion = 0;
    var pares = 0;
    var impares = 0;

    do{        
        condicion = parseInt(prompt("Ingrese un número o cero para salir"));    
        
        if(condicion % 2 === 0)
            pares+= condicion;
        
        else
            impares+= condicion;    

    }while(condicion != 0)
    
    alert(`La suma de los numeros pares es: ${pares}`);
    alert(`La suma de los numeros impares es: ${impares}`);
    
}

//Ejercicio 13

function promedio ()
{    
    var nota = -1;
    var suma = 0;
    var contador = 0;
    do{
        nota = parseFloat(prompt("Ingrese la nota o -1 para detener"));

        if(nota != -1)
        {
            suma += nota;
            contador++;
        }        

    }while(nota != -1)

    alert(`El promdio de las calificaciones es: ${ (suma / contador).toFixed(2) }`);

}

//Ejericio 14

function mayorMenor()
{
    var notas = new Array(5);
    var notaMayor = null;
    var notaMenor = null;
    
    for(var i = 0; i<notas.length; i++)
    {
        notas[i] = parseFloat(prompt("Ingrese la nota"));

        if(i === 0)
        {
            notaMayor = notas[i];
            notaMenor = notas[i];
        }            
        
        if(notas[i] > notaMayor)
            notaMayor = notas[i];

        if(notas[i] < notaMenor)
            notaMenor = notas[i];

    }

    alert(`La calificacion Mayor es: ${notaMayor.toFixed(2)}`);
    alert(`La calificacion Menor es: ${notaMenor.toFixed(2)}`);
}

//Ejercicio 15

function examenes()
{
    var mejorar = 0;
    var regular = 0;
    var bueno = 0;
    var muyBueno = 0;
    var excelente = 0;
    var nota = -1;
    do{
        nota = parseFloat(prompt("Ingrese la nota o -1 para salir"));

        if(nota != -1)
        {
            
        }


    }while(nota!= -1)

}



app.initialize();