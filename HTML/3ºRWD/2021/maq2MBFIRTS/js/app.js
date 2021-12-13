//carga dinamica de paginas
function inicio(){
    console.log("documento app cargado");
    console.log(document);
    const main = document.querySelector("main section");

    //detectar click de raton
    const servicios = document.querySelector("header nav a#servicios");
    const formacion = document.querySelector("header nav a#formacion");
    const trabajos = document.querySelector("header nav a#trabajos");
    const contacto = document.querySelector("header nav a#contacto");

    servicios.addEventListener("click", () => {
        console.log(" has pinchado en servicios");
        //leer los ficheros html
        fetch("html/servicio.html")
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestahtml => {
                console.log (respuestahtml)
                main.innerHTML = respuestahtml;
            })
    });
    
    formacion.addEventListener("click", () => {
        console.log(" has pinchado en formacion");
    });

    trabajos.addEventListener("click", () => {
        console.log(" has pinchado en trabajos");
    });

    //main.innerHTML = "<h1>Holiwi</h1>"
}