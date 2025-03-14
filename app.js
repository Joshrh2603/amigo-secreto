// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Ahora corresponde al ID correcto
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Validar que el campo no esté vacío
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ""; // Limpiar el campo de entrada
    mostrarListaAmigos(); // Llamar a la función para mostrar la lista de amigos
}

// Función para mostrar la lista de amigos en la página HTML
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    // Iterar sobre el arreglo 'amigos' y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Establecer el texto del <li> con el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista en la página
    }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agregue al menos un amigo."); // Validar que haya amigos
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del arreglo amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento correspondiente
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`; // Actualizar el contenido
}

