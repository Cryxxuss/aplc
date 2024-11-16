// ==UserScript==
// @name         SMS GET
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Obtiene datos de FakeNameGenerator
// @match        https://crowdtap.com/*
// @match        https://www.google.com/
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_xmlhttpRequest
// @connect      daisysms.com
// ==/UserScript==

window.onload = function () {
     setTimeout(() => {
        getBalance();
    }, 1000);
}

var getBalance = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=sx&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.json();
   console.log(data.contents);

var balance = "https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getBalance"
var crow_global = "https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=sx"
var crow_tmo = "https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=sx&carriers=tmo"
var crow_att = "https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=sx&carriers=att"
var crow_vz = "https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=sx&carriers=vz"
var area_NC = "https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=sx&areas=252,336,704,828,910,919,980"
var inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});
    var bodyContent = data.contents; // Obtiene el contenido de la respuesta
    console.log(bodyContent)
        var match1 = bodyContent.split(":"); // Busca el patrón en el contenido
    console.log(match1)

        const originalNumber = match1[2];
        const newNumber = originalNumber.toString().slice(1);
        console.log("Solicitud Exitosa", match1[2]);

        var inputField = document.querySelector('.form-control');
        inputField.value = newNumber;
        inputField.dispatchEvent(inputEvent);

setTimeout( function(){document.querySelector("#main-content > article > div.center-column > section > form > section.text-center > button").click()},1000)

var muestra = document.querySelector("#main-content > article > div.center-column > h1")
if(muestra){
if(muestra.innerText==="Let’s get you verified"){

setTimeout(() => {getCode();}, 10000);
var getCode = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getStatus&id=${match1[1]}&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.json();
   console.log(data.contents);

    var bodyContent = data.contents; // Obtiene el contenido de la respuesta
        var match = bodyContent.split(":"); // Busca el patrón en el contenido

if(match[0] !== "STATUS_OK"){
setTimeout(() => {getCode();}, 10000);

}else{
        var inputField = document.querySelector('input.block');
    if(inputField){
        inputField.value = match[1];
        inputField.dispatchEvent(inputEvent);
        var done = match1[1];
        setTimeout( function(){
document.querySelector("#main-content > article > div.center-column > section > form > section.text-center > button").click()

var funcion_realizado = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=setStatus&id=${done}&status=6&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.json();
   console.log(data.contents);
};

funcion_realizado();

            },1000);
    }
}
}
}
};
};
