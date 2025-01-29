// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// funcion para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números. Por favor, ingresa un nombre válido.");
        input.value = "";
        return;
    }

    //obtener la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);

    input.value = "";
    input.focus();

}



// funcion para sortear amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').getElementsByTagName('li');
    const resultado = document.getElementById('resultado');

    // Verificar si hay amigos en la lista
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio].textContent;

    // Mostrar el resultado del sorteo
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}