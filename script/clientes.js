const url = "https://jsonplaceholder.typicode.com/users";

const lista = document.querySelector("#usurios");

fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = usuario.name;
            lista.append(li);
        })
    });