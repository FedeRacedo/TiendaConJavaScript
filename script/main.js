/* PROUCTOS */
/*
const productos = [
    /*  TODOS LOS PRODUCTOS */
    /* Creamos el producto con sus caracterizticas y los mostramos */
 /*   {
        id: "iphone11A",
        titulo: "iphone 11 amarillo",
        img: "../assest/11 amarillo.jpeg",
        id: "nuevos00",
        precio: 1500,
    },

    {
        id: "iphone11",
        titulo: "iphone 11 blanco",
        img: "../assest/11BlancoTarjeta.jpeg",
        id: "nuevos01",
        precio: 1000,
    },

    {
        id: "iphone11",
        titulo: "iphone 11 pro",
        img: "../assest/11ProTarjeta.jpeg" ,
        id: "nuevos02",
        precio: 4000,
    },

    {
        id: "iphone11",
        titulo: "iphone 11 rojo",
        img: "../assest/11RojoCarpeta.jpeg",
        id: "nuevos03",
        precio: 2000,
    },

    /*  Seminuevo */
 /*   {
        nombre: "iphone11SemiNnuevo",
        titulo: "iphone 11 Negro",
        img: "../assest/11 negro.jpeg",
        id: "nuevos04",
        precio: 3000,
    },

    {
        nombre: "iphone11SemiNnuevo",
        titulo: "iphone 11 Celeste",
        img: "../assest/11 celeste.jpeg",
        id: "nuevos05",
        precio: 2500,
    },

]


/*Traemos del HTML*/
/*const contenedorDeProductos = document.querySelector("#productos"); // La llamo con el id.
let botonesAgregar = document.querySelectorAll (".agregar"); // La llamo con la class.
const cantidad = document.querySelector("#cantidad");


/*Creamos una function*/

/*Creamos una function para poder ver nuestros productos en la pagina sin el html */
/*function cargarProductos(productosElegidos) {

    contenedorDeProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");

        div.classList.add("producto");
        div.innerHTML = `
        <img class="imagenProductos" src="${producto.img}" alt="${producto.titulo}">
        <div class="descripcion">
            <h3 class="tituloH3">${producto.titulo}</h3>
            <p class="precio">Precio: ${producto.precio}</p>
            <button class="agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorDeProductos.append(div);
        
    })
    actualizarBotonesAgregar()
}

cargarProductos(productos); //Agregamos los productos a la pagina.

/* Creando el boton del carrito */
/*function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll (".agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
};


    const carritoProductos = [];

    function agregarAlCarrito(e) {

    const id = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === id);

    if (carritoProductos.some(producto => producto.id === id)) {
        const index = carritoProductos.findIndex(producto => producto.id === id);
        carritoProductos[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        carritoProductos.push(productoAgregado); 
    }

    actualizarCantidad();

    localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos));
}

/*Actualizamos la cantidad en el carrito */
/*function actualizarCantidad() {
    let cantidadAgregada = carritoProductos.reduce((acc, producto) => acc + producto.cantidad, 0)
    cantidad.innerText = cantidadAgregada;
}*/

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
    
    
    const productosEnCarrito = [];
    
    
    function agregarAlCarrito(e) {
        const idBoton = e.currentTarget.id;
        const productoAgregado =  productos.find(producto => producto.id === idBoton);
       
        if (productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex( producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }
    
    
        actualizarNumerito();
    
    
        localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))
    }
    
    
    function actualizarNumerito () {
        let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = nuevoNumerito;
    }
    