console.log ('Cargando app.js');
const iva = 0.16;

let pcoste = 2000;

const calcularPVP = (precio, impuesto) => {
    console.log ('Precio de Coste = ', precio, ' €');
    console.log ('iva = ', impuesto * 100, '%', '-->', precio*impuesto);
    console.log ('PVP = ', precio * (1 + impuesto), ' €');
    return precio * (1 + impuesto);
}

//llamadas a la función
//let ptotal = calcularPVP(20, iva);

function sumar1 (x,y){
    // instruccion 1;
    // instruccion 2;
    //...
    //instruccion n;
    return ( x + y)
}

/*  solo cuando el cuerpo de la funcion tiene 1 sola instruccion
const sumar2 = (x, y) => {
    return x + y;
}
*/
const sumar2 = (x, y) =>  x + y ;

let suma = sumar2( 13, 6);
console.log(suma);

const cubo1 = ( x ) => {
    return( x * x * x)
}
const cubo = (x) => x*x*x;
console.log( cubo(5,) );

const potencia = (b, e) => {
    let res = 1;
    for(i = 1; i <= e; i++){
        res = res * b
    }
    return res;
}
console.log (potencia (3,3));


const suma10 = ( n ) => {
    let stotal = 0;
    for(i = 0; i <= n; i++){
        stotal = stotal + i;
    }
    return stotal;
}

console.log (suma10 (2));
console.log (suma10 (9));
console.log (suma10 (100));






const factorial = ( j ) => {
    let calcula = 0;
    for (i = 0; i <= j; i++){
        calcula = calcula * i;
    }
    return calcula
}
console.log(factorial (3));






/*const factorial = ( j ) => {
    let calcula = 0;
    for (i = 0; i <= j; i++){
        if(i != 0){
            calcula = calcula * i;
            console.log (calcula);
        }
        else{
            console.log("Esta ha sido tu factorial");
        }
    }
    return calcula
}
console.log(factorial (3));*/