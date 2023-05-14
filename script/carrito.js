/*const carritoProductos = JSON.parse(localStorage.getItem("carritoProductos"))

const contenedorVacio = document.querySelector("#vacio");
const contenedorComprar = document.querySelector("#comprar"); 
const contenedorMensaje = document.querySelector("#mensaje");
let botonEliminar = document.querySelectorAll(".compraEliminar");

function cargarCarrito() {
    if (carritoProductos) {
        contenedorVacio.classList.add("desactivar");
        contenedorComprar.classList.remove("desactivar");
        contenedorMensaje.classList.add("desactivar");
    
        contenedorComprar.innerHTML = "";
    
    
        carritoProductos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("comprar");
    
            div.innerHTML = `
                <img class="imagenCarrito" src="${producto.img}" alt="${producto.titulo}">
    
                <div class="compraNombre">
                    <small>Celular:</small>
                    <h3>${producto.titulo}</h3>
                </div>
    
                <div class="compraCantidad">
                    <smal>Cantidad:</smal>
                    <p>${producto.cantidad}</p>
                </div>
    
                <div class="compraPrecio">
                    <smal>Precio:</smal>
                    <p>${producto.precio}</p>
                </div>
    
                <div class="compraTotal">
                    <small>Total:</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
    
                <button class="compraEliminar" id="${producto.id}">
                    <i class="bi bi-trash"></i>
                </button>
            `;
    
            contenedorComprar.append(div);
        });
    
    } else {
        contenedorVacio.classList.remove("desactivar");
        contenedorComprar.classList.add("desactivar");
        contenedorMensaje.classList.add("desactivar");
    }

    actualizarBotonesEliminar();
}
    
cargarCarrito();


    function actualizarBotonesEliminar() {
        botonEliminar = document.querySelectorAll (".compraEliminar");
    
        botonEliminar.forEach(boton => {
            boton.addEventListener("click", eliminarDelCarrito);
        })
    };*/

const productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));


const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#CarritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");






if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled")
} else {


}




