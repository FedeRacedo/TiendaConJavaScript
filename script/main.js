// BIENVENIDA A LA PAGINA.

let nombreCliente = prompt("Ingrese su nombre y apellido.");
function saludar() {
    alert("Bienvenido " + nombreCliente + " nosotros somos tecno SET iphone");
}
saludar()
alert("Somos una tienda que se encarga de vender mercaderia nueva o seminueva solamente marca APPLE.");



// SOLAMENTE VAN A PODER COMPRAR UN CELULAR LAS PERSONAS MAYORES.
// ASE QUE LES VAMOS A PREGUNNTAR SU EDAD.

const puedeComprar = ()=> {
    let edad = parseInt(prompt("Que edad tienes ?"));
    if(edad >= 18) {
        alert("Puedes elegir el modelo que mas te guste")
    } else {
        alert("Debes venir acompanado por alguno de tus padres!!!")
    }
}

puedeComprar()



// Ingresar Monto disponible para un celular.
// Le indicamos con el monto especifico que ingrese cual puede abonar.
// Tambien le indicamos el vuelto que va a obtener.
let saldoDisponible = parseInt(prompt("¿ Cunto efectivo piensa gastar ?"));

if (saldoDisponible >= 1000 && saldoDisponible <= 2000) {
    alert("Tenemos disponible el IPHONE 11 a ese precio, " + nombreCliente);
    alert("Su vuelto es de " + (saldoDisponible - 1000));
} else if (saldoDisponible >= 2000 && saldoDisponible <= 3000) {
    alert("Tenemmos disponible el IPHONE 12 a ese precio, " + nombreCliente);
    alert("Su vu  elto es de " + (saldoDisponible - 2000));
} else if (saldoDisponible >= 3000 && saldoDisponible <= 5000) {
    alert("Tenemos disponible el IPHONE 13 PRO a ese precio, " + nombreCliente);
    alert("Su vuelto es de " + (saldoDisponible - 3000));
} else if (saldoDisponible >= 5000 && saldoDisponible <= 10000) {
    alert("Tenemos disponible el IPHONE 14 PROMAX a ese precio, " + nombreCliente);
    alert("Su vuelto es de " + (saldoDisponible - 5000));
} else {
    alert("No tenemos un movil disponible a tu presupuesto.");
};


/*
// CREAMOS UN SIMULADOR DE TURNOS DISPONIBLES POR DIA.

//Lo volveremos a retomar mas adelante.
let tunrosDiarios = prompt("Cuantos turnos vmaos a dar hoy?")

for (let i = 0; i < tunrosDiarios; i++) {
    alert("Todavia tenemos turnos disponibles")
}
*/


//Estapa 2 curso JAVASCRIPT.

// Creando un sistema para mostrarle al cliente 3 tipos de celulares.
// Cada celular le muestra sus caracterizticas principales.

alert("Vamos a mostrarle 3 tipos de celulares, con sus caracteristicas");

class celular {
    constructor (pantalla, procesador, memoria, almacenamiento, camara, bateria) {
        this. pantalla = pantalla;
        this. procesador = procesador;
        this. memoria = memoria;
        this. almacenamiento = almacenamiento;
        this. camara = camara;
        this. bateria = bateria;
        this. encendido = false;
    }

    //Creamos un metodo prender para que el usuario lo pueda ver
    prender() {
        if(this.encendido == false) {
            alert("CELULAR PRENDIDO");
            this. encendido == true;
        } else {
            alert("El celular esta prendido puede revisarlo.")
        }
    }

    mostrarInformacion () {
        return `
        pantalla:${this.pantalla}.
        procesador:${this.procesador}.
        memoria:${this.memoria}.
        almacenamiento:${this.almacenamiento}.
        camara:${this.camara}. 
        bateria:${this.bateria}.
        `;
    }
}

const iphone11Pro = new celular ("6.1 pulgadas", "A13 Bionic", "4 GB", "128 GB", "12.0 Mpx", "3110 mAh");

const iphone11ProMax = new celular ("6.10 pulgadas", "A15 Bionic", "6 GB", "512 GB", "12 Mpx", "5095 mAh");

const iphone11 = new celular ("6.1 pulgadas", "A12 Bionic", "3 GB", "64 GB", "6 Mpx", "300 mAh");

//Mostrar informacion del celular en consola.
iphone11Pro.prender();
console.log("Descripcion del iphone 11 Pro: ", iphone11Pro.mostrarInformacion());

iphone11ProMax.prender();
console.log("Descripcion del iphone 11 ProMax: ", iphone11ProMax.mostrarInformacion());

iphone11.prender();
console.log("Descripcion del iphone 11: ", iphone11.mostrarInformacion());


// Creamos un array mostrando nuestro celular MAS IMPORTANTE
alert("Va a poder ver nuestro celular mas moderno que tenemos en stock")
const ultimoModelo = {
    nombre: "Iphone 14 ProMax",
    camara: "Gran angular",
    red: "5G",
    memoria: "6GB",
    tecnologia: "Oled",
    procesador: "A16"
}

let nombre = ultimoModelo["nombre"];
let camara = ultimoModelo["camara"];
let red = ultimoModelo["red"];
let memoria = ultimoModelo["memoria"];
let tecnologia = ultimoModelo["tecnologia"];
let procesador = ultimoModelo["procesador"];

let descripcionCelular = `Nuestro celular mas importante del stock es un ${nombre}, tiene una camara ${camara}, cuenta con red ${red}, una memoria de ${memoria} y un procesador ${procesador}. Todo de ultima tecnologia.`;

console.log(descripcionCelular);

//Creando un mini controlador de stock
alert("Un pequeno stock");

let stock = ["ihpone X", "iphone XR", "iphone 11", "iphone 12Pro", "iphone 14ProMax", "iphone 13Mini"];

for (let index = 0; index < stock.length; index++) {
    console.log("Celular en stock " + stock[index]);
};

//
alert("Una pequena lista de celulares mas pedidos");
alert("Somos una empresa que le importa mucho el interes del usuario");
let agreagarAStock = ["iphone 12", "iphone 4"];
let agregar = prompt("Que celular quieres que agreguemos al stock?");

agreagarAStock.push(agregar);

console.log("Celulares pedidos", agreagarAStock);