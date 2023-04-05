let btnVerMas = document.querySelector("#btnVerMas");
//agregar un manejador de eventos.

btnVerMas.addEventListener("click", mostrarOcultarParrafo);
//funcion con argumentos
//btnVerMas.addEventListener("click", ()=> mostrarOcultarParrafo (arg1,arg2));

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
//contenedorPadre
//btnVerMas

function mostrarOcultarParrafo(){
    //Traer el contenedor padre
    let section = document.getElementById("contenedorPadre");
    console.log(section)
    //crear elemento.
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ad quisquam quae officia dolorem? Aliquid blanditiis debitis temporibus, cumque consequatur laudantium vel obcaecati magni nisi dolorum quae neque quis, ratione quasi praesentium rem possimus sit quod distinctio earum deleniti reprehenderit ex. Possimus magnam voluptas fuga, quo vero temporibus perspiciatis mollitia odit deleniti provident quam vel expedita a libero impedit eum ipsa asperiores corrupti perferendis nulla aperiam dolorem neque vitae quia. Cupiditate ut cumque, dolorum fuga, soluta cum libero debitis, quasi fugiat recusandae tempora? Reiciendis illo, beatae tenetur sit fuga dolores, sapiente suscipit, quae vero asperiores qui impedit nobis iste ipsum quam. Fugiat earum, veritatis ab ipsa doloribus corrupti dignissimos deserunt, distinctio vel, maxime dolor iure obcaecati id magni voluptas cupiditate?";
    parrafoNuevo.className = "lead text-secondary";
    //agregar elementos hijos.
    //section.appendChild(parrafoNuevo); // agrega nodo hijo al final.
    //section.prepend(parrafoNuevo); // agrega nodo hijo al principio
    section.insertBefore(parrafoNuevo, btnVerMas); // agrega un nodo antes de donde colocamos en insertBefore.
}