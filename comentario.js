function validateAndAddComment() {
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    if (name.trim() === "" || comment.trim() === "") {
        alert("Por favor, complete ambos campos antes de enviar el comentario.");
    } else {
        addComment();
    }
}

// Función para agregar un comentario
function addComment() {
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Crear un elemento de comentario
    const commentElement = document.createElement("div");
    commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;

    // Agregar el comentario al contenedor de comentarios
    const commentsContainer = document.getElementById("comments");
    commentsContainer.appendChild(commentElement);

    // Limpiar los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}