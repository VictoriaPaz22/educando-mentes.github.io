window.alert("¡Bienvenida a nuestra página!");

const introduccion = document.getElementById ("Introduccion")

//escuchadores de eventos

introduccion.addEventListener
('mouseover', function() {
   introduccion.style.backgroundColor = " #e63ee6 "; // Cambia a violetita cuando paso el mouse
});


introduccion.addEventListener('mouseout', function() {
   introduccion.style.backgroundColor = '#f6eef8 '; // Vuelve al blanco al sacar el mouse
});

// document.getElementById('alertconimg').addEventListener('click', function() {
//    document.getElementById('alertconimg').style.display = 'block';
//  });



//const anio = 2024
//let = prompt("ingrese su año de nacimiento")
// calculo la edad
//let edad = anio - aniodenacimiento
//alert ("segun mi cuentas tenes" + edad + "años")


//for(let iterador = 0; iterador < 30; iterador++) { 
    //let nombre = prompt(" Bajo que nombre quiere realizar esta reserva?"); 
    //let cantidadDePersonas = prompt("cuantas personas serán en total?")
    
    //let numeroDeMesa= iterador + 1;

    //alert("Hola " + nombre + ", tu mesa es la numero" + numeroDeMesa + "y será para" + cantidadDePersonas + "personas" );}
    
         
          
         //let quiensos = prompt("como es tu nombre?")
         //while(quiensos != Victoria) {
          //  alert ("error, solo puede ingresar Victoria paz");
           // quiensos=prompt("como es tu nombre?")
        // }

        // alert ("Bienvenida" + quiensos); // Bienvenida Victoria paz
    

// cajita de coentarios



   const botonpublicar = document.getElementById('botonpublicar');
   const commentsList = document.getElementById('commentsList');

   botonpublicar.addEventListener('click', function(event) {
       event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
console.log("hola")
       const username = document.getElementById('username').value;
       const commentText = document.getElementById('comment').value;

       // Crear elementos de comentario
       const commentElement = document.createElement('div');
       commentElement.classList.add('comment');

       const usernameElement = document.createElement('strong');
       usernameElement.textContent = username + ': ';

       const textElement = document.createElement('span');
       textElement.textContent = commentText;

       // Añadir los elementos al contenedor de comentarios
       commentElement.append(usernameElement);
       commentElement.append(textElement);
       commentsList.append(commentElement);

       // Limpiar campos del formulario
       document.getElementById('username').value = '';
       document.getElementById('comment').value = '';
   });


