function cambiarTitulo(){
    console.log("Pruebas desde la función cambiar titulo");
    //como traer un elemento HTML a js.
    //let titulo = document.querySelector("h1"); //Selector de CSS
    //let titulo = document.getElementsByTagName("h1");
    //let titulo = document.getElementsByClassName("container")
    let titulo = document.getElementById("tituloPincipal");
    titulo.className = "text-primary";
    titulo.innerHTML = "Nuevo titulo";
    console.log(titulo);
    
}