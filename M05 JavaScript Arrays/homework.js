/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  
   return array[array.length - 1];
}
 var arreglos = ['Cero', 'Uno', 'Dos','Tres'];
console.log(devolverUltimoElemento(arreglos));


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

console.log(obtenerLargoDelArray('Javascript'));



function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   var newArray = array.map((num) => {
      return num + 1;
  });
  return newArray;
}
var arrayDeEjemplo = [5, 8, 13, 17];
console.log(incrementarPorUno(arrayDeEjemplo));


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' '); 
   
}
 var palabras = ['Hello','world!'];
 console.log(dePalabrasAFrase(palabras));


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
    
   if(array.includes(elemento)){
      return true;
   } else {
      return false;
   }
}
var ejemplo = ['ventana', 'puerta', 'mesa', 'silla'];
console.log(arrayContiene(ejemplo, 'silla'));
console.log(arrayContiene(ejemplo, 'sillon'));


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código: 
   let suma = 0; 
   for(let i = 0; i < arrayOfNums.length; i ++){
      suma += arrayOfNums[i];  
   }
   return suma;
}
 arrayOfNums = [6, 11, 78, 46, 69];
   console.log(agregarNumeros(arrayOfNums));


   //probando con metodo de array .forEach
   //function agregarNumeros(arrayOfNums) {
   //   let suma = 0;
   //arrayOfNums.forEach(function(num) {
   //   suma += num;
   //});
   //   return suma;
   //}
   //arrayOfNums = [6, 11, 78, 46, 69];
//console.log(agregarNumeros(arrayOfNums));


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   resultadosTest.forEach(function(num) {
      suma += num;
   });
      return suma / resultadosTest.length;
   }
   resultadosTest = [5, 9, 7, 1, 8];
   console.log(promedioResultadosTest(resultadosTest));


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}
arrayOfNums = [79, 93, 535, 2884, 1971, 626];
console.log(numeroMasGrande(arrayOfNums));


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0){
      return 0;
   }
   
   let resultado = 1;

   for(let i = 0; i < arguments.length; i++){
      resultado *= arguments[i];
   }
   return resultado;
}
console.log(multiplicarArgumentos());
console.log(multiplicarArgumentos(7, 8, 5));
console.log(multiplicarArgumentos(9, 3, 6));


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;

      for(let i = 0; i < array.length; i++) {
          if(array[i] > 18) {
              contador ++;
          }
      }  
      return contador;
  }
  
  array = [52, 4, 71, 19, 10];
  console.log(cuentoElementos(array));


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana";
      case 2:
         return "Es dia laboral";
      case 3:
         return "Es dia laboral";
      case 4:
         return "Es dia laboral";
      case 5:
         return "Es dia laboral";
      case 6:
         return "Es dia laboral";
      case 7:
         return "Es fin de semana";
   }
}

console.log(diaDeLaSemana(7));
console.log(diaDeLaSemana(4));
console.log(diaDeLaSemana(2));


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numStr = num.toString ();
   return numStr.charAt(0) === "9";
   }
      
   console.log(empiezaConNueve(898));
   console.log(empiezaConNueve(90));
   console.log(empiezaConNueve(109));


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return array.every((num) => {
      return num === array[0];
   });
}
array = [7, 10, 5];
console.log(todosIguales(array));



function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let mesesBuscados = ["Enero", "Marzo", "Noviembre"];
   let encontrados = array.filter((mes) => mesesBuscados.includes(mes));
   if(encontrados.length === mesesBuscados.length){
      return encontrados;
   } else {
         return "No se encontraron los meses pedidos";
      }
   }

array = ["Febrero", "Diciembre", "Marzo", "Julio", "Enero"];
console.log(mesesDelAño(array));


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let resultados = [];
   for (let i = 0; i <=10; i ++) {
      resultados.push(i * 6);
   }
   return resultados;
}
console.log(tablaDelSeis());


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  var mayoresACien = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayoresACien.push(array[i]);
    }
   }
   return mayoresACien;
}
  console.log(mayorACien([60, 170, 100, 200]));



/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let i = 0;
   let results = [];
   while(i < 10){
      num +=2;
      results.push(num);
      if (num === i){
         break;
      }
      i++;
   }
   if (num === i) {
      return "Se interrumpió la ejecución";
   } else {
      return results;
   }
}
console.log(breakStatement(3));
console.log(breakStatement(2));
console.log(breakStatement(0));


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let arr = [];
   for(let i = 0; i < 10; i++){
      if(i === 5){
         continue;
      } else {
         num += 2;
         arr.push(num);
      }
   }
   return arr;
}
console.log(continueStatement(3));
console.log(continueStatement(5));
console.log(continueStatement(0));


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
