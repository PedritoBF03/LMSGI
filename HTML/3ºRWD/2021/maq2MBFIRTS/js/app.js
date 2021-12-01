console.log ("Cargando app.js")
const iva = 0.16;

let pcoste = 2000;

const calcularPVP = (precio, impuesto) => {
    console.log ("saldo = ", pcoste, " €");
    console.log ("iva = ", iva * 100, " %", "-->", pcoste*impuesto);
    console.log ("saldo neto =", pcoste * (1 - impuesto), " €");
    return precio * (1+impuesto);
}

//llamamos a la funcion
let ptotal = calcularPVP(pcoste, iva);
console.log (ptotal);


//Funciones de suma
function sumar1(x,y){
    return x + y;
}

const sumar2 = (x, y) => {
    return x + y;
}

let suma = sumar2(3,6);
console.log (suma)




const cubo1 = (x) => {
    return (x*x*x);
}

const cubo = (x) => x*x*x;

console.log(cubo1(5,2));


const potencia = (b,e) => {
    console.log('hagsdads');
    let res = 1;
    for (i = 1; i <= e; i++){
        res = res * b;
        console.log(i);
    }
    return res;
}

console.log(potencia(10,10));