window.alert("¡Diviertete aprendiendo!Recuerda, el conocimiento es poder");

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

