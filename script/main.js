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
    if(edad > 18) {
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
    alert("Tenemos disponible el IPHONE 11 a ese precio. " + nombreCliente);
    alert("Su vuelto es de " + (saldoDisponible - 1000));
} else if (saldoDisponible >= 2000 && saldoDisponible <= 3000) {
    alert("Tenemmos disponible el IPHONE 12 a ese precio. " + nombreCliente);
    alert("Su vuelto es de " + (saldoDisponible - 2000));
} else if (saldoDisponible >= 3000 && saldoDisponible <= 5000) {
    alert("Tenemos disponible el IPHONE 13 PRO a ese precio. " + nombreCliente);
    alert("Su vuelto es de " + (saldoDisponible - 3000));
} else if (saldoDisponible >= 5000 && saldoDisponible <= 10000) {
    alert("Tenemos disponible el IPHONE 14 PROMAX a ese precio. " + nombreCliente);
    alert("Su vuelto es de " + (saldoDisponible - 5000));
} else {
    alert("No tenemos un movil disponible a tu presupuesto.");
}


// CREAMOS UN SIMULADOR DE TURNOS DISPONIBLES POR DIA.
let tunrosDiarios = prompt("Cuantos turnos vmaos a dar hoy?")

for (let i = 0; i < tunrosDiarios; i++) {
    alert("Todavia tenemos turnos disponibles")
}

