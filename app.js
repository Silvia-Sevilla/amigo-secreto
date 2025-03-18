let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ${amigoSorteado} es el amigo seleccionado! </li>`;
}
