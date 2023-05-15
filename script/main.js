// Array de objets que nos va a representar a cada producto.
const productos = [
    //Nuevos    
    {
        id: "Nuevo-01",
        titulo: "Nuevo-01",
        imagen: "../assest/nuevo-01.jpeg",
        precio: 600
    },


    {
        id: "Nuevo-02",
        titulo: "Nuevo-02",
        imagen: "../assest/nuevo02.jpeg",
        precio: 500
    },


    {
        id: "Nuevo-03",
        titulo: "Nuevo-03",
        imagen: "../assest/nuevo03.jpeg",
        precio: 700
    },


    {
        id: "Nuevo-04",
        titulo: "Nuevo-04",
        imagen: "../assest/nuevo04.jpeg",
        precio: 600
    },


    {
        id: "nuevo-05",
        titulo: "Nuevo-05",
        imagen: "../assest/semiNuevo01.jpeg",
        precio: 300
    },


    {
        id: "Nuevo-06",
        titulo: "Nuevo-06",
        imagen: "../assest/semiNuevo02.jpeg",
        precio: 350
    },


    {
        id: "Nuevo-07",
        titulo: "Nuevo-07",
        imagen: "../assest/semiNuevo03.jpeg",
        precio: 200
    },
];


const contenedorProductos = document.querySelector("#contenedorProductos");
let botonAgregar = document.querySelectorAll(".productoAgregar");
const numerito = document.querySelector("#numerito");


function cargarProductos() {


    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                        <img class="productoImagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="productoDetalles">
                            <h3 class="productoTitulo">${producto.titulo} </h3>
                            <p class="productoPrecio"> $${producto.precio} </p>
                            <button  id="${producto.id}" class="productoAgregar" > Agregar </button>
                        </div>
            `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();


}


cargarProductos();






function actualizarBotonesAgregar() {
    botonAgregar = document.querySelectorAll(".productoAgregar");


    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

let productsEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productosEnCarrito"));

if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    
} else {
    productosEnCarrito = [];
};



function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
