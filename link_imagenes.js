(function() {

    var arreglodetask = [];

    //agregar nombre de la task
    arreglodetask.push('Rate The Relevance Of Template Search Results');
    arreglodetask.push('Sort Museum Images Into Categories');
    arreglodetask.push('Image Style');
    arreglodetask.push('Adult Content According');
  //  arreglodetask.push('Rate The Image');


//agregar nombre de la task



    'use strict';
    var nombretask;
    var bandera = false;

    if (document.querySelector("#remix_cml_container > h1")){
        nombretask = document.querySelector("#remix_cml_container > h1").textContent;
    }
    for (var i = 0; i < arreglodetask.length; i++) {
        if (nombretask.includes(arreglodetask[i])){
            console.log("inlcuye el nombre")
            bandera = true;
        }
    }

if (bandera){
    setTimeout(verlink,800);
}


function verlink(){

var imagenes = document.querySelector("#job_units").querySelectorAll("img");
  try {
  for (let imagen of imagenes){
      var linkElement = null;
      var spanElement = null;
      var imagenurl = imagen.src;

        linkElement = document.createElement("a");
        spanElement = document.createElement("span");
        linkElement.setAttribute("href", imagenurl);
        linkElement.setAttribute("target","_blank");
        linkElement.appendChild(document.createTextNode(imagenurl));
        spanElement.setAttribute("class", "classImagenes");
        spanElement.setAttribute("style", "font-weight: bolder");
        spanElement.appendChild(linkElement);
        imagen.parentNode.insertBefore(spanElement,imagen);
  }} catch (error) {}
}

})();
