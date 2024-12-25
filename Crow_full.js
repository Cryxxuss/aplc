if(window.location.href.includes('dashboard')){

setTimeout(data_alaerta,10000)
function data_alaerta() {
var miDiv_6 = document.querySelector("#divContainer > div > div:nth-child(6) > app-tile > button > div.ng-star-inserted > span");
var miDiv_5 = document.querySelector("#divContainer > div > div:nth-child(5) > app-tile > button > div.ng-star-inserted > span");

if(miDiv_5 && miDiv_4){
alert(GM_getValue('Data'));
}else {
setTimeout(data_alaerta,5000)
}
}

(function() {
    'use strict';

pre_encuesta();
var puerta = false
var ciclo = false
var nube = false
var otra = false
function pre_encuesta(){

setTimeout(pre_encuesta,3000);

var elemento = document.querySelector('div.bg-body-light:nth-child(2)');
var star_boton1 = document.querySelector('.animation-submit-btn');
var marcador1 = document.querySelector("#\\30 ");
if (elemento || star_boton1) {


// Primera
if (elemento && elemento.textContent.includes("Here's an example of a rating question, where you'll")) {

var rangeInputs8 = document.querySelectorAll('input[type="range"]');
// Recorre cada input y establece su valor en 400
rangeInputs8.forEach((rangeInput8) => {
    rangeInput8.value = 300;

    // Opcional: Dispara el evento 'input' para actualizar la UI
    rangeInput8.dispatchEvent(new Event('input'));
});
setTimeout(function(){ enviar(); },500)
}

if (elemento && elemento.textContent.includes("Now let's try a scale question! A scale helps brands understand")) {

var rangeInputs9 = document.querySelectorAll('input[type="range"]');
// Recorre cada input y establece su valor en 400
rangeInputs9.forEach((rangeInput9) => {
    rangeInput9.value = 600;

    // Opcional: Dispara el evento 'input' para actualizar la UI
    rangeInput9.dispatchEvent(new Event('input'));
});
setTimeout(function(){ enviar(); },500)
}

if (elemento && elemento.textContent.includes("A grid question allows you to rate multiple items using")) {

var checkboxes3 = [
  'input#radio-0-4',
  'input#radio-1-4',
  'input#radio-2-4'
];
checkboxes3.forEach(selector => document.querySelector(selector)?.click());
setTimeout(function(){ enviar(); },500)
}

if (marcador1) {
if (marcador1.textContent.trim() === '' && elemento && elemento.textContent.includes("In a rank question, you arrange items in order of preference")) {

    document.querySelector("#\\30 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\31 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\32 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\33 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\34 ").click()
    document.querySelector("#l01").click()

setTimeout(function(){ enviar(); },500)
}
}

if (!puerta && elemento && elemento.textContent.includes("What is one piece of feedback you'd like to share about a brand you recently purchased from")) {
console.log("entro")
async function fetchData() {
let response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [{
                    role: "user",
                    content: `What is one comment you would like to share about a brand you recently purchased from? Please answer in first person and without using quotation marks. Keep it under 200 characters.`
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();


var textarea5 = document.getElementById('response');

// Establece el valor del textarea
textarea5.value = data.choices[0].message.content;

var event5 = new Event('input', {
  bubbles: true,
  cancelable: true,
});
textarea5.dispatchEvent(event5);
puerta = true

}
fetchData();
setTimeout(function(){ enviar(); },3000)
}

if (elemento && elemento.textContent.includes('For quality assurance purposes, in which position is the letter "b" in notebook?')) {
function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

clickAll2("5th position");
setTimeout(function(){ enviar(); },500)
}

// Segunda
if (elemento && elemento.textContent.includes("To get the most out of Crowdtap and start earning rewards at places like Amazon")) {

function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="checkbox"]');
      if (checkbox && !checkbox.checked) {
        checkbox.click();
      }
    }
  }
}

clickAll2('I plan to take my time and provide thoughtful, meaningful answers.');
setTimeout(function(){ enviar(); },500)
}

if (!ciclo && elemento && elemento.textContent.includes("Honesty is Crowdtap's top priority! When we say we want your opinion, we mean")) {
async function fetchData(inputTexto) {

const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [{
                    role: "user",
                    content: `Rewrite this text in first person while maintaining its meaning, I only want one option and remember not to give me notes, Don't send me the same text back: ${inputTexto}`
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

let textarea = document.getElementById('response');
textarea.value = data.choices[0].message.content;
let event = new Event('input', {
  bubbles: true,
  cancelable: true,
});
ciclo = true;
textarea.dispatchEvent(event);

}
fetchData("I find it an interesting platform to share opinions and receive rewards. I liked the variety of brands and products that I can evaluate. However, it seems to me that the platform could improve in terms of clarity and organization of the studies.");
setTimeout(function(){ enviar(); },3000)
}

if (!nube && elemento && elemento.textContent.includes("We'll only send content that's fun and relevant to you. What kinds of contests interest you?")) {
async function fetchData(inputTexto) {

const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [{
                    role: "user",
                    content: `Rewrite this text in first person while maintaining its meaning, I only want one option and remember not to give me notes, Don't send me the same text back: ${inputTexto}`
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

let textarea = document.getElementById('response');
textarea.value = data.choices[0].message.content;
let event = new Event('input', {
  bubbles: true,
  cancelable: true,
});
nube = true;
textarea.dispatchEvent(event);

}
fetchData("I'm most interested in contests that align with my interests and hobbies, such as fashion, technology, and entertainment.");
setTimeout(function(){ enviar(); },3000)
}

if (elemento && elemento.textContent.includes("How can you subscribe to push notifications? Great question")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('I only plan on using Crowdtap on the web.');
setTimeout(function(){ enviar(); },500)
}

if (elemento && elemento.textContent.includes("For quality assurance purposes, please select all of the options that contain the letter B and number six.")) {
function clickCheckboxesByText(texts) {
    let labels = document.querySelectorAll('label');
    let foundCheckboxes = 0;

    texts.forEach(text => {
        let checkboxFound = false;

        labels.forEach(label => {
            if (label.textContent.trim() === text) {
                let checkbox = document.getElementById(label.getAttribute('for'));
                if (checkbox && checkbox.type === 'checkbox' && !checkbox.checked) {

                    checkbox.click();
                }

                checkboxFound = true;
                foundCheckboxes++;
            }
        });

    });
}

clickCheckboxesByText(['60NBZ', 'ZB2T6']);
setTimeout(function(){ enviar(); },500)
}

// TERCERA
if (elemento && elemento.textContent.includes("Our top members use Crowdtap daily to earn big rewards, and tracking your")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('I’m excited to track my streak and participate daily!');
setTimeout(function(){ enviar(); },500)
}

if (elemento && elemento.textContent.includes("Let's be honest, scrolling through social media")) {
function clickCheckboxesByText(texts) {
    let labels = document.querySelectorAll('label');
    let foundCheckboxes = 0;

    texts.forEach(text => {
        let checkboxFound = false;

        labels.forEach(label => {
            if (label.textContent.trim() === text) {
                let checkbox = document.getElementById(label.getAttribute('for'));
                if (checkbox && checkbox.type === 'checkbox' && !checkbox.checked) {

                    checkbox.click();
                }

                checkboxFound = true;
                foundCheckboxes++;
            }
        });

    });
}

clickCheckboxesByText(['Facebook', 'TikTok', 'Instagram']);
setTimeout(function(){ enviar(); },500)
}

if (elemento && elemento.textContent.includes("Accessing Crowdtap through a VPN (Virtual Private Network)")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('I rarely use a VPN, so this likely won’t be an issue.');
setTimeout(function(){ enviar(); },500)
}


if (!otra && elemento && elemento.textContent.includes("Before diving into more surveys, we'd love to hear—what are you hoping to accomplish while using Crowdtap?")) {
async function fetchData() {

const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [{
                    role: "user",
                    content: `Before diving into more surveys, we'd love to know what you hope to achieve by using Crowdtap. Please provide a brief, single response without using quotation marks and keep it under 200 characters.`
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

let textarea = document.getElementById('response');
textarea.value = data.choices[0].message.content;
let event = new Event('input', {
  bubbles: true,
  cancelable: true,
});
otra = true;
textarea.dispatchEvent(event);

}
fetchData();
setTimeout(function(){ enviar(); },3000)
}

if (elemento && elemento.textContent.includes("Alice and Bob are brother and sister. Alice has 10 sisters. How many sisters does Bob have?")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

clickAllCheckboxesExcept('11');
setTimeout(function(){ enviar(); },500)
}


function enviar(){
var enviar = document.querySelector('div.primaryTitle:nth-child(1)');
enviar.click();
}
var star = document.querySelector("h2.text-sm")
var star_boton = document.querySelector('.animation-submit-btn');

    if (elemento && (elemento.textContent.includes("No se necesita")
            || elemento.textContent.includes("Hundreds of brands look to Crowdtap members to hear"))){
    }else{
        if (star && star_boton.textContent.includes("Get started")) {

            setTimeout(function(){ star_boton.click();},500)
        }
    }
}
}

})();


   setTimeout(keep,10000)

function keep(){
setTimeout(keep ,10000)
var text = document.querySelector("#response")
var existe = document.querySelector(".button-cta")

if (existe){
document.querySelector(".button-cta").click()

setTimeout( function(){
//document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
},7000)

}
if (text){
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText
if(spanText === "Crowdtap 101: Getting Rewarded" || spanText === "Crowdtap 101: Survey Types" || spanText === "Crowdtap 101: Your Crowdtap Habits"){
}else{
//document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
    }
}

}

var data = GM_getValue('Data')
var palabras = data.split("	");

function calcularEdad(fechaNacimiento) {
    // Convertir la fecha de nacimiento en un objeto Date
    let fechaNac = new Date(fechaNacimiento);
    let hoy = new Date();

    // Calcular la diferencia en años
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    // Ajustar la edad si el cumpleaños aún no ha pasado este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}
var ventanaa = true
var div = true
setTimeout(function dataa(){
setTimeout(dataa,1000)
let fechaNacimiento = palabras[7]; // Fecha en formato YYYY-MM-DD
        var miDiv = document.querySelector('body > app-root > app-default-layout > div.flex-col.h-screen.hidden.sm\\:flex.ng-tns-c14-0.ng-star-inserted > app-general-header > header > div > a');

        var nuevoTexto = document.createElement('p');
        nuevoTexto.textContent = "Edad: "+calcularEdad(fechaNacimiento)+" ---> "+palabras[7]
        nuevoTexto.style.fontWeight = '700'
        nuevoTexto.style.color = 'green';
        nuevoTexto.style.fontSize = "25px";

 // Ajusta la altura según tus necesidades
      //  miDiv.style.display = "none"
        // Paso 3: Inserta el nuevo elemento justo después del div
       // miDiv.parentNode.insertBefore(nuevoTexto, miDiv.nextSibling);

if(div){
    div = false
 //   miDiv.parentNode.insertBefore(nuevoTexto, miDiv.nextSibling);
  }

var navElement = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p")
var data_green = document.querySelector(".justify-end > div:nth-child(1) > p:nth-child(3)")

if(navElement){
if(ventanaa || !data_green){

ventanaa=false
    nuevoTexto.style.fontSize = "20px";
    navElement.insertAdjacentElement("afterend", nuevoTexto, navElement.nextSibling);
  }
}else{
  ventanaa = true
  }

},1000)

 verifiedd_interval()
function verifiedd_interval(){
var verified = document.querySelector("#divContainer > app-unlock-full-experience > div > div.buttons-container > button")
if (verified) {
setTimeout( function() { verified.click() },3000);
}else{
setTimeout(verifiedd_interval,5000);
}
}

var ventana = true
setTimeout(corriendo,10000)
function corriendo(){
setTimeout(corriendo,9000)
var containerText = document.querySelector("#divContainer").textContent
var lines = containerText.split("  ");

var selectedLine1 = lines[0];
var selectedLine2 = lines[1];
var selectedLine3 = lines[2];
var selectedLine4 = lines[3];
var selectedLine5 = lines[4];
var selectedLine6 = lines[5];
var selectedLine7 = lines[6];
    if(ventana){

if (selectedLine1 === "Crowdtap 101: Question Types") {
document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
}else if (selectedLine2 === "Crowdtap 101: Question Types") {
document.querySelector("#divContainer > div > div:nth-child(3) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
}else if (selectedLine3 === "Crowdtap 101: Survey Types") {
document.querySelector("#divContainer > div > div:nth-child(6) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
  }
 }

var spanElement = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p");
if (spanElement) {
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText
if (spanText === "Crowdtap 101: Getting Rewarded" || spanText === "Crowdtap 101: Your Membership"
    || spanText === "Crowdtap 101: Question Types" || spanText === "Crowdtap 101: Your Crowdtap Habits"
    || spanText === "Crowdtap 101: The Basics" ){
ventana=false
} else {
setTimeout( function(){
//document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
//setTimeout(task_ready,3000);
  //  ventana=true
//setTimeout(corriendo,3000);
  },3000)}
}

function task_ready() {}

}
}

else if(window.location.href.includes('name?continue')){

var data_correo = GM_getValue('Data')
var palabras_correo = data_correo.split("	");
console.log(palabras_correo[2])
var password = palabras_correo[2];
var correo = palabras_correo[1].split("@gmail.com");
var nombre_full = palabras_correo[0].split(" ");
console.log(nombre_full)
var nombre = nombre_full[0]
var apellido = nombre_full[1]
var diaAleatorio = Math.floor(Math.random() * 28) + 1;
var mesAleatorio = Math.floor(Math.random() * 12) + 1;
var year_aleatorio = Math.round (Math.random() * (1985 - 1981) + 1981);
var butonCorreo2 = "span > div:nth-child(3) > div > div.uxXgMe > div > div.SCWude > div";

// para input
function set_InputGmail(value,selector,button,butonCorreo) {
    var input = document.querySelector(selector);
  //  if (!input) return false;

    var butonCorreo1 = document.querySelector(butonCorreo);
    if(butonCorreo1){
    butonCorreo1.click();
    }
    var originalProto = Object.getPrototypeOf(input);
    var originalValidation = Object.getOwnPropertyDescriptor(originalProto, 'value');

    // Establecer nuevo valor con sobrescritura de validación
    Object.defineProperty(input, 'value', {
        set: function(val) {
            this.setAttribute('value', val);
            this.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatchEvent(new Event('change', { bubbles: true }));
        },
        get: function() {
            return this.getAttribute('value');
        }
    });

    input.value = value;
    input.focus();
    input.click();


    // Disparar una serie de eventos en orden específico
    var events = [
        new Event('focus', { bubbles: true }),
        new Event('input', { bubbles: true }),
        new InputEvent('input', { inputType: 'insertText', data: value, bubbles: true }),
        new Event('change', { bubbles: true }),
        new Event('blur', { bubbles: true })
    ];

    events.forEach(event => {
        input.dispatchEvent(event);
    });

        var button1 = document.querySelector(button);
        setTimeout( function(){button1.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));},500);
    return true;
}
// para select
function set_SelectGmail(select,selector,button) {
    var selectElement = document.querySelector(selector);
   // if (!selectElement) return false;

selectElement.value = select;

const event = new Event("change", { bubbles: true });
selectElement.dispatchEvent(event);
        var button1 = document.querySelector(button);
        setTimeout( function(){button1.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));},500);
    return true;
}

var match1 = "";
var getNumero = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=go&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
    var data = await response.text();
    var bodyContent = data;
    match1 = bodyContent.split(":");

    const originalNumber = match1[2];
    const newNumber = originalNumber.toString().slice(1);
    set_InputGmail(newNumber, "#phoneNumberId");

setTimeout( function(){
    var butonCorreo1 = document.querySelector("button");
    if(butonCorreo1){
    butonCorreo1.click();
    }
},500);

setTimeout(() => {getCode();}, 10000);
};

var getCode = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getStatus&id=${match1[1]}&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.text();
   console.log(data);

    var bodyContent = data; // Obtiene el contenido de la respuesta

if(bodyContent == "STATUS_WAIT_CODE"){

        setTimeout(() => {getCode();}, 10000);

    }else{//else global
        var match = bodyContent.split(":"); // Busca el patrón en el contenido

if(bodyContent == "STATUS_CANCEL"){
    }
else if(match[0] !== "STATUS_OK"){
setTimeout(() => {getCode();}, 10000);

}else{
        var inputField = document.querySelector('input');
    if(inputField){
        set_InputGmail(match[1], "#code");

        var done = match1[1];

        setTimeout( function(){

setTimeout( function(){
    var butonCorreo1 = document.querySelector("button");
    if(butonCorreo1){
    butonCorreo1.click();
    }
},500);

var funcion_realizado = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=setStatus&id=${done}&status=6&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.text();
   console.log(data);
};

funcion_realizado();

            },1000);
    }}

    await delay(4000);
    var recoverySkip = document.querySelector("#recoverySkip");
    if(recoverySkip){
    recoverySkip.click();
    }
    await delay(4000);
        recoverySkip = document.querySelector("button");
    if(recoverySkip){
    recoverySkip.click();
    }
    await delay(4000);
        recoverySkip = document.querySelectorAll("button")[3];
    if(recoverySkip){
    recoverySkip.click();
    }
    await delay(2000);
        recoverySkip = document.querySelectorAll("button")[6];
    if(recoverySkip){
    recoverySkip.click();
    }
}
};

async function fillGmailForm() {
    // Cargar nombres
    set_InputGmail(nombre, "#firstName");
    set_InputGmail(apellido, "#lastName", "button");

    // Esperar antes de llenar fecha de nacimiento
    await delay(3000);
    set_InputGmail(diaAleatorio, "#day");
    set_SelectGmail(mesAleatorio, "#month");
    set_InputGmail(year_aleatorio, "#year");
    set_SelectGmail("2", "#gender", "button");

    // Esperar antes de llenar correo
    await delay(4000);
    set_InputGmail(correo[0], "div > div.Xb9hP > input", "button", butonCorreo2);

    // Esperar antes de llenar contraseñas
    await delay(4000);
    set_InputGmail(password, "#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
    set_InputGmail(password, "#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input", "button");

    await delay(4000);
    getNumero();
//    if (!getNumero) return false;

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, (ms+3000)));
}

// Ejecutar la función al cargar la ventana
setTimeout(fillGmailForm,3000);
}
else if (window.location.href.includes('unknownerror?continue')){
setTimeout( function(){
    var continuar = document.querySelector("button");
    if(continuar){
    continuar.click();
    }
  },3000);
}
else if (window.location.href.includes('signin/identifier?continue')||window.location.href.includes('gmail/#inbox')||window.location.href.includes('intl/en-US/gmail/')){
    window.location.href = "https://accounts.google.com/lifecycle/steps/signup/name?continue=https://www.google.com/&ddm=1&dsh=S1677978371:1731609060260322&ec=GAZAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&ifkv=AcMMx-eWt8qrVVQVH57i_WNWIttptmfwugDnTptX7oM2NfBznWPh9zOueKAUjaaDgiCrC0OmyRRq&TL=AKOx4s3ogZ-MKS_ul1prvJ7-xxc-xy15MB9MCIJT8R_VxZGHum1Sxvu0mIABdpsw";
    }
