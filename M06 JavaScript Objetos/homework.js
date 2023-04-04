/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var nuevoObjeto = {};
   nuevoObjeto.nombre = nombre;
   nuevoObjeto.edad = edad;
   nuevoObjeto.meow = function (){
       return 'Meow!';
   };
   return nuevoObjeto;
  }; 

   var nuevoGato = crearGato('Baby Yoda', 5);
  // console.log(nuevoGato);
  // console.log(nuevoGato.meow());



function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {};
     usuario.nombre = nombre;
     usuario.email= email;
     usuario.password = password;
   return usuario;
}

var appNueva = nuevoUsuario ('Fulanito', 'email@email.com', '12345678');
//console.log(appNueva);



function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
}
var miObjeto = { nombre: "Juan" }; 
//console.log(agregarPropiedad(miObjeto, "edad")); 



function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]()
}
 var miObjeto = {
   saludar: function(){
      console.log("Hola!");
   }
 };
 //invocarMetodo(miObjeto, "saludar");



function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso * 5;
}

//EJEMPLO
var objetoInventado = { 
   numeroMisterioso: 11
};
var resultado = multiplicarNumeroDesconocidoPorCinco(objetoInventado);
//console.log(resultado);



function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   if(propiedad in objeto){
   delete objeto[propiedad];
   }
   return objeto;
}
//EJEMPLO
var objeto3 = {zapatos: ['blancos', 'azules']};
var resultado = eliminarPropiedad(objeto3, 'zapatos');
//console.log(resultado);



function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.email !== undefined && objetoUsuario.email !== null) {
      return true;
   } else {
      return false;
   }
}

//ejemplo
var objetoUsuario = {usuario: 'messi123', email:'aguanteelfulbo@.com', codigo: 5062}
console.log(tieneEmail(objetoUsuario));



function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   
   var tienePropiedad = objeto.hasOwnProperty(propiedad);
   return tienePropiedad;
}

//ejemplo
var objeto02 = {ciudad: 'Madrid', pais: 'Argentina', continente: 'Asia'};
//console.log(tienePropiedad(objeto02, 'ciudad'));
//console.log(tienePropiedad(objeto02, 'planeta'));



function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return  objetoUsuario.password === password;
      
   //var tienePassword = objetoUsuario.hasOwnProperty(password);
   //return tienePassword;
}
//ejemplo
var objetoUsuario ={contraseña: 123450};
//console.log(verificarPassword(objetoUsuario, 'mail'));



function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}
var objetoUsuario = {password: 45678};
//console.log(actualizarPassword(objetoUsuario, 'newContraseña'));



function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:    ///.push("nuevoAmigo")
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

var listafutbol = {amigos: ['Fulanito', 'Pedrito', 'Miguelito']}
//console.log(agregarAmigo(listafutbol, 'Manolito'));



function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for(var i = 0; i < objetoMuchosUsuarios.length; i ++) {
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;
}

// Ejemplo 1:
var usuarios = [
   {nombre: 'Juan', esPremium: false},
   {nombre: 'María', esPremium: false},
   {nombre: 'Pedro', esPremium: false}
   ];
   
//   console.log(pasarUsuarioAPremium(usuarios));


function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
      var sum = 0;
      for (var i = 0; i < objetoUsuario.posts.length; i++) {
        sum += objetoUsuario.posts[i].likes;
      }
      return sum;
    }

    //ejemplo 1
    var usuario = {
      nombre: "Juan",
      posts: [
        { titulo: "Post 1", likes: 10 },
        { titulo: "Post 2", likes: 20 },
        { titulo: "Post 3", likes: 30 }
      ]
    };
    
   // console.log(sumarLikesDeUsuario(usuario));
    


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
         objetoProducto.calcularPrecioDescuento = function() {
            return this.precio * this.porcentajeDeDescuento;
         };
      objetoProducto.precioFinal = function() {
         return this.precio - this.calcularPrecioDescuento();
      };
      return objetoProducto;
    }
    

//intento de ejemplo
var listaDeCompras = {precio: 10, porcentajeDeDescuento:0.2};
console.log(agregarMetodoCalculoDescuento(listaDeCompras).precioFinal());



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
