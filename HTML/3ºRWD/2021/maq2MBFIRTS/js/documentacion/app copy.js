console.log("Cargando app.js");
const iva = 0.16;
let pcoste = 4000;
calcularPVP (pcoste * iva);
calcularPVP (1000 * iva);



calcularPVP(pcoste, iva)

function calcularPVP(precio, impuesto){
    console.log ("saldo = ", pcoste, " €");
    console.log ("iva = ", iva * 100, " %", "-->", pcoste*impuesto);
    console.log ("saldo neto =", pcoste * (1 - impuesto), " €");
    console.log ("-------------------------------------------------")
}


//Actualmente se hace en la propia variable la funcion
let calcularpvp1 = function calcularPVP(precio, impuesto){
    console.log ("saldo = ", pcoste, " €");
    console.log ("iva = ", iva * 100, " %", "-->", pcoste*impuesto);
    console.log ("saldo neto =", pcoste * (1 - impuesto), " €");
    console.log ("-------------------------------------------------")
}

//La funcion anterior se reescribre en notacion Arrow Function
const calcularPVP2 = (precio, impuesto) => {
    console.log ("saldo = ", pcoste, " €");
    console.log ("iva = ", iva * 100, " %", "-->", pcoste*impuesto);
    console.log ("saldo neto =", pcoste * (1 - impuesto), " €");
    return precio * (1 + impuesto)
    console.log ("-------------------------------------------------")
}



/*
console.log ("--------------------Producto 1---------------------");
console.log ("saldo = ", pcoste, " €");
console.log ("iva = ", iva * 100, " %", "-->", pcoste*iva);
console.log ("saldo neto =", pcoste * (1 - iva), " €");

console.log ("--------------------Producto 2---------------------");
pcoste = 500;
console.log ("saldo = ", pcoste, " €");
console.log ("iva = ", iva * 100, " %", "-->", pcoste*iva);
console.log ("saldo neto =", pcoste * (1 - iva), " €");

console.log ("--------------------Producto 3---------------------");
pcoste = 100;
console.log ("saldo = ", pcoste, " €");
console.log ("iva = ", iva * 100, " %", "-->", pcoste*iva);
console.log ("saldo neto =", pcoste * (1 - iva), " €");

console.log ("--------------------Producto 4---------------------");
pcoste = 1000;
console.log ("saldo = ", pcoste, " €");
console.log ("iva = ", iva * 100, " %", "-->", pcoste*iva);
console.log ("saldo neto =", pcoste * (1 - iva), " €");
*/