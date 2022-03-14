// var nombre = "jonathan";

/* calcular el salario de un empleado que gana 2.500.000
descontando el 8% de salud y el 10% de pension.
*/

/*
var salario = prompt("Digita tu salario");
var salud = parseInt(salario)  *8/100;
var pension =parseInt  (salario) *10/100;
var sueldo_a_pagar = parseInt(salario) - salud - pension;*/

/*console.log("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*alert("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*confirm("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*alert("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*var nombre = "jonathan"
document.write("<h1> hola "+ nombre +" </h1>");*/

/*
//ejercicio 2

var base = prompt("Digita la base del triangulo ");
var altura = prompt("Digita la altura del triangulo ");
var area = parseInt(base) * (altura)/2;
alert("el area del triangulo es" + area  );
*/

/*
//ejercicio 3

var num1 = prompt("Digita el primer numero");
var num2 = prompt("Digita el segundo numero");
var suma = parseInt (num1)+ parseInt (num2 );
var resta = parseInt (num1 - num2);
var multiplicacion = parseInt (num1 * num2);
var division = parseInt (num1 / num2);

alert("La suma de los numeros es: " + suma  );
alert("La resta de los numeros es: " + resta  );
alert("La multiplicacion de los numeros es: " + multiplicacion  );
alert("La division de los numeros es: " + division  );
*/

/*
//ejercicio 4

var numhm = prompt("Digita el numero de horas  ordinarias trabajadas al mes: ");
var numhex = prompt("Digita el numero de horas  extras trabajadas al mes: ");
var valorh = prompt("Digita el valor de la hora ordinaria ");
var valorhext = prompt("Digita el valor de las horas extras: "); 
var valorht = parseInt  (numhm * valorh);
var valorhex = parseInt (numhex * valorhext);
var sueldototal = parseInt (valorht)+ parseInt (valorhex);

alert("El sueldo mensual del trabajador es: " + sueldototal);
*/


/*
//ejercicio 5

var precioproducto = prompt("ingrese el precio del producto"); 
var iva = parseInt (precioproducto * 0.19);
var preciofinal = parseInt (precioproducto) + parseInt(iva);
var iva = parseInt (precioproducto) - parseInt(iva);

alert("El preio del prodcuto sin iva es del:  " + iva);
alert("El precio del prodcuto con el iva incluido es de:  " + preciofinal);
*/

/*
//ejercicio 10

var dia = prompt("Digita un numero del 1 al 7 ");
switch( parseInt (dia)){
    case 1 : alert("lunes");
    break;
    case 2 : alert("martes");
    break;
    case 3 : alert("miercoles");
    break;
    case 4 : alert("jueves");
    break;
    case 5 : alert("viernes");
    break;
    case 6 : alert("sabado");
    break;
    case 7 : alert("domingo");
    break;
    default : alert( "numero incorrecto");
    break;
}
*/
/*
//ejercicio 6

// Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de alumnos hombres y mujeres.

var alhombres = prompt("ingrese el numero de hombres");
var almujeres = prompt("Digitar el numero de mujeres ");
var total = parseInt (alhombres)+ parseInt ( almujeres);
var porchombres =parseInt  (alhombres * 100 / total);
var porcmujeres =parseInt  (almujeres * 100 / total);

alert("El porcentaje de alumnos hombres es de: " + porchombres);
alert("El porcentaje de alumnos mujeres es de: " + porcmujeres);
*/

/*
//ejercicio 7
//calcule el promedio de 5 notas de un alumno, el rango de cada nota es del 1 al 5.

var nota1 = prompt("ingrese la primera nota: ");
var nota2 = prompt("ingrese la segunda nota: ");
var nota3 = prompt("ingrese la tercera nota: ");
var nota4 = prompt("ingrese la cuarta nota: ");
var nota5 = prompt("ingrese la quita nota: ");
var promedio = parseInt (nota1+nota2+nota3+nota4+nota5) / 5;

alert ("El promedio de las notas del alumno es de: " + promedio);
*/

//ejercicio 8
var edad = prompt("Digitar su edad: ");

if(edad < 18){
    alert("usted es menos de edad");
}
else if (edad >= 18 && edad <=28){
    alert("usted es adulto");
}

else if(edad >=29 && edad <=49){
alert("usted es adulto")
}
else {
    alert("usted es adulto mayor");
}

/*


//ejercicio 11
var edad = prompt("Digitar su edad: ");

if(edad < 18){
    alert("usted es menos de edad");
}
else if (edad >= 18 && edad <=28){
    alert("usted es adulto");
}

else if(edad >=29 && edad <=49){
alert("usted es adulto")
}
else {
    alert("usted es adulto mayor");
}
*/

/*
var edad = prompt("Digitar su edad: ");
switch(true){
    case edad < 18 : alert("usted es menos");
    break;
    case edad >= 18 && edad <= 18 : alert("usted es adulto");
    break;
    case edad >=29 && edad <=49 : alert("usted es adulto mayor");
    break;
    default : alert( "adulto mayor");
    break;
}

*/








