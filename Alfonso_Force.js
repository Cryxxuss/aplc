// ==UserScript==
// @name         Luis Armando
// @namespace    http://tampermonkey.net/
// @version      2024-10-17
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


function fetchPublicIP(callback) {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://api.ipify.org?format=json&timestamp=' + new Date().getTime(), // Agregar timestamp para evitar la caché
        onload: function(response) {
            if (response.status === 200) {
                const data = JSON.parse(response.responseText);
                callback(data.ip);
            } else {
                console.error('Error al obtener la dirección IP:', response.statusText);
                callback(null);
            }
        },
        onerror: function(error) {
            console.error('Error al realizar la solicitud:', error);
            callback(null);
        }
    });
}

// Variable para almacenar la dirección IP actual
let currentIP = '';

// Función para verificar cambios en la dirección IP
function checkIPChange() {
    fetchPublicIP(function(newIP) {
        if (newIP !== null && newIP !== currentIP) {
            console.log('La dirección IP ha cambiado:', newIP);
var segundoPaso = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(2) > label")
if(segundoPaso && segundoPaso.textContent.includes("City")){
setTimeout( function() {
document.querySelector("#main-content > article > div.center-column > form > section > button.relative.font-bold.text-white.rounded-full.w-68.h-14.bg-blue-dark").click();
},1000)
//setTimeout( function() { smsGet(); },10000);

}
            currentIP = newIP;
        } else {
            //console.log('La dirección IP sigue siendo la misma:', currentIP);
        }
    });
}

// Verificar cambios cada cierto tiempo (por ejemplo, cada 5 segundos)
setInterval(checkIPChange, 4000);

function create() {
// URL de la página web
var url = "https://www.worldnamegenerator.com/World_Address/get_us_address1/sex/Male/state/TX";

GM_xmlhttpRequest({
    method: "GET",
    url: url,
    onload: function(response) {
let datos = ""
const code_correo = Math.round (Math.random() * (9999 - 1000) + 1000);
const code_clave = Math.round (Math.random() * (99999 - 10000) + 10000);
const añoo = Math.round (Math.random() * (1985 - 1981) + 1981);
const mess = Math.round (Math.random() * (12 - 1) + 1);
const diaa = Math.round (Math.random() * (28 - 1) + 1);
   setTimeout(crearboton, 1000);
function crearboton(){
setTimeout(crearboton, 2000);
        (function() {
    var textofinal;
    var prefcorreo = "@hotmail.com"

var inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});
var event = new Event('change', {
 bubbles: true
});


var nombrefull = $(response.responseText).find("table.common-table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)").text()

nombrefull = nombrefull.match(/\b\w{2,}\b/g);

var palabras = nombrefull

var nombre = palabras[0]+" "+palabras[1];

var direccion_response = $(response.responseText).find("table.table:nth-child(7)").text();
var direccion = direccion_response.split(/[\t\n\r ]{2,}/);


        textofinal = nombre

        textofinal += "\t"+generarcorreo(nombrefull);

        //colocar clave
        textofinal += "\t"+generarclave(nombrefull);


        textofinal += "\t"+generarcalle(direccion);

        //direccion
        textofinal += "\t"+generardireccion(direccion);


var primerPaso = document.querySelector("#main-content > article > div.center-column > form > div.text-center > button")
if(primerPaso){

//correo
var inputCorreo = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(1) > div > input");
inputCorreo.value = generarcorreo(nombrefull);
inputCorreo.dispatchEvent(inputEvent);

//clave
var inputClave = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(2) > div > input")
inputClave.value = generarclave(nombrefull);
inputClave.dispatchEvent(inputEvent);

//nombre
var inputNombre = document.querySelector("#main-content > article > div > form > div:nth-child(3) > div > input")
inputNombre.value = palabras[0];

//apellido
var inputApellido = document.querySelector("#main-content > article > div > form > div:nth-child(4) > div > input")
inputApellido.value = palabras[1];

inputNombre.dispatchEvent(inputEvent);
inputApellido.dispatchEvent(inputEvent);
setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > div.text-center > button").click()},500)
}

var label_existe = document.querySelector("#main-content > article > div > form > div.mb-6.form-row.ng-star-inserted > label")
if(label_existe){
var segundoPaso = document.querySelector("#main-content > article > div > form > div.mb-6.form-row.ng-star-inserted > label").innerText;
if(segundoPaso==='Your Birthday'){

//Your Birthday
var inputFecha = document.querySelector('input[name="dp"]');
var fecha = new Date(añoo, mess - 1, diaa); // Restamos 1 al mes porque los meses en JavaScript van de 0 a 11
var formatoFecha = fecha.toISOString().slice(0, 10);
inputFecha.value = formatoFecha;
textofinal += "\t"+formatoFecha
datos=textofinal
console.log(textofinal)
GM_setValue('Data', datos);
inputFecha.dispatchEvent(inputEvent);

//Your gender preference
var select_gender = document.querySelector('[formcontrolname="gender"]');
var value_female = select_gender.querySelector('option[value="2"]');
value_female.selected = true;
select_gender.dispatchEvent(event);

// raza
var selectElement = document.querySelector('[formcontrolname="ethnicity_id"]');
var opcionSeleccionada = selectElement.querySelector('option[value="3bfcadda-33db-4091-82e2-c3b1d8f86d1b"]');
opcionSeleccionada.selected = true;
selectElement.dispatchEvent(event);
setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > section > button.relative.pl-4.pr-4.font-bold.text-white.rounded-full.bg-blue-dark.h-14.action-btn").click()},500)

//Education
var select_education = document.querySelector('[formcontrolname="education_id"]');
            var ome_high_school = "037cf01a-093c-4a9c-9f37-81b26c9b52c4";
            var High_school_graduate_or_equivalent = "c2e8341e-8078-4e11-a135-6dd1c705dbeb";
            var Trade_or_vocational_school_degree = "a0492057-b8a5-4d14-b362-9aade76e3362"
            var Some_college = "db35b9e4-2a17-49cd-84cf-b8245a016518"
            var Associate_Degree = "b8e10485-169b-4fac-b9cb-a5fd64456e4d"
            var Bachelor_Degree = "90cf49cf-89f4-44a7-bec5-461b3561317f"
            var Graduate_or_professional_degree = "5a1abe67-353f-4101-ba98-f086bfbdf71e"
            var prefer_not_answer = "8ecd787f-6803-4d87-ae9c-3737c55eccf6"
//colocar en value la opcion deseada
var value_option = select_education.querySelector('option[value="8ecd787f-6803-4d87-ae9c-3737c55eccf6"]'); //
value_option.selected = true;
select_education.dispatchEvent(event);
}
}
var label_tercero_paso = document.querySelector("#main-content > article > div > form > div:nth-child(1) > div > div > label")
if(label_tercero_paso){
var tercerpaso = document.querySelector("#main-content > article > div > form > div:nth-child(1) > div > div > label").innerText
if(tercerpaso==="Employment status"){

GM_xmlhttpRequest({
        method: "GET",
        url: "https://litport.net/sys/rotate-ip?key=c55b043660a16dc1a79d8fa5c6e86d78",
        onload: function(response) {
            console.log(response.responseText);
        },
        onerror: function(error) {
            console.error(error);
        }
    });
setTimeout( function() {
//document.querySelector("#main-content > article > div.center-column > form > section > button.relative.font-bold.text-white.rounded-full.w-68.h-14.bg-blue-dark").click();
},50000)



//Employment status
var select_employment = document.querySelector('[formcontrolname="employment_id"]');
    var Employed_full_time = "7aa2e6a4-09c9-4ec6-9420-b167b55428d4"
    var Employed_Part_time = "6d297cd1-d3a6-4542-adff-e44cef89ff4a"
    var Self_employed = "c3de7a69-4964-4511-8d22-e073a762cae2"
    var Unemployed = "b6113a80-4f57-478e-938e-c7adef917070"
    var Student = "0c97b9e1-ae90-441d-8867-1e76287e2afa"
    var Homemaker = "6a0583fc-e6da-4edd-9803-e4e189f27559"
    var Retired = "79945f54-bfd8-4bb3-b55e-526c304fe40f"
    var Unable_to_work = "a9830f20-8b64-419a-bd2a-053a2f868475"
    var prefer_not_to_answer = "485386e7-8102-4b50-85b9-6a2a670c6577"

value_option = select_employment.querySelector('option[value="6d297cd1-d3a6-4542-adff-e44cef89ff4a"]');
value_option.selected = true;
select_employment.dispatchEvent(event);


//Relationship status
var select_relationship_status = document.querySelector('[formcontrolname="relationship_id"]');
    var Married = "9b27945c-a6be-4572-a13d-fd786253de44"
    var Civil_Union_Domestic_Partnership = "19ec1d42-4d33-4f16-a469-9dccacfebc89"
    var Separated = "276bd37a-966d-4720-ada9-f7b5b98cd9d8"
    var Widowed = "0e6062ea-0b14-4181-8384-2fa5b1a36f9b"
    var Divorced = "fd42fecd-8fa9-45fb-8427-0753c9019594"
    var Single_never_married = "9a46f945-8047-4492-b448-8ab4926f66d6"
    var prefer_not_to_answerr = "a40c802b-7acb-4140-af18-ec1dc7aa1cbc"

value_option = select_relationship_status.querySelector('option[value="9b27945c-a6be-4572-a13d-fd786253de44"]'); // Married POR DEFECTO
value_option.selected = true;
select_relationship_status.dispatchEvent(event);


// Size of household
var select_size_of_household = document.querySelector('[formcontrolname="household_id"]');
    var uno = "4fd68f22-7446-4fb3-b291-0e568dd26dc1"
    var dos = "209892b1-9980-4f98-bd5f-cd29ef468396"
    var tres = "06620023-41bd-4b97-92f1-ee2e9df44a62"
    var cuatro = "409ac301-5777-4c23-81dd-8fc098419de0"
    var cinco_mas = "428127c4-34e7-4973-8c7d-f5cbd009031f"

value_option = select_size_of_household.querySelector('option[value="06620023-41bd-4b97-92f1-ee2e9df44a62"]'); // 3 POR DEFECTO
value_option.selected = true;
select_size_of_household.dispatchEvent(event);


// Parenting status
var select_parenting_status = document.querySelector('[formcontrolname="parenting_id"]');
    var I_dont_have_any_children = "a85fba83-46f8-4f5b-9402-d2f124aa397e"
    var I_dont_have_any_children_2 = "718df18e-1619-4381-9733-0cbb6f3c3c36"
    var I_have_children_at_home = "96d17442-51c8-4b92-a44e-22b54c6d4f7d"
    var I_prefer_not_to_answer = "08f3ad6e-acd6-413b-928e-e68515081b00"

value_option = select_parenting_status.querySelector('option[value="96d17442-51c8-4b92-a44e-22b54c6d4f7d"]'); //  I have children at home POR DEFECTO
value_option.selected = true;
select_parenting_status.dispatchEvent(event);

setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > section > button.relative.pl-4.pr-4.font-bold.text-white.rounded-full.bg-blue-dark.h-14.action-btn").click()},500)
 }
}


var label_ultimo_paso = document.querySelector("#main-content > article > div > form > div > label")
if(label_ultimo_paso){
var ultimopaso = document.querySelector("#main-content > article > div > form > div > label").innerText
if(ultimopaso==="Combined household income"){

//Combined household income
var select_combined_household_income = document.querySelector('[formcontrolname="income_level_id"]');
    var Under_$25000 = "007a2ff7-fdc0-46e0-863b-21ecda7b6bce"
    var $25000_$34999 = "e70539de-dbbb-4f24-bba9-10038143d01c"
    var $35000_$44999 = "aa1aa735-53b4-4e54-bb2f-f0eab62ff80b"
    var $45000_$59999 = "c7da83dc-19a0-459d-9a4b-28402ca85af3"
    var $60000_$74999 = "aa6cca88-4925-47c8-9184-f12010f66c2f"
    var $75000_$99999 = "16bad03e-b8f1-4131-89f6-50df8417eae1"
    var $100000_$149999 = "54682b61-85e0-465a-806f-32ab6dc3a374"
    var $150000_or_more = "40c7d945-55e8-4883-8daa-849a7647d4ec"
    var I_prefer_not_to_answerr = "0a64e748-cab4-4f00-8489-e0c280127138"

value_option = select_combined_household_income.querySelector('option[value="0a64e748-cab4-4f00-8489-e0c280127138"]'); //   $75000_$99999  POR DEFECTO
value_option.selected = true;
select_combined_household_income.dispatchEvent(event);


//Ciudad
var inputCiudad = document.querySelector("#main-content > article > div > form > div:nth-child(2) > div > input");
var selectedLine0 = direccion[5]
inputCiudad.value = selectedLine0;
inputCiudad.dispatchEvent(inputEvent);

//Estado
var select = document.querySelector('.form-select');
var opcion = Array.from(select.options).find(option => option.text === direccion[7]);
if (opcion) {
    select.value = opcion.value;
    select.dispatchEvent(event);
}


//Codigo Postal
var inputCodigo = document.querySelector("#main-content > article > div > form > div:nth-child(4) > div > input");
var selectedLine2 = direccion[11]
inputCodigo.value = selectedLine2;
inputCodigo.dispatchEvent(inputEvent);

//Boton Check
var checkbox = document.getElementById('check-1');
if (checkbox) {
    checkbox.setAttribute('checked', 'true');
    checkbox.checked = true;
    checkbox.dispatchEvent(event);
}
   }
}

       // portapapeles(textofinal);

    function generarcorreo(nombrecompleto){
    var correofinal;

        correofinal = nombrecompleto[0]+code_correo+nombrecompleto[1]+prefcorreo;

     return correofinal.toLowerCase();
    }

    function generarclave(nombrecompleto){
    var clavefull;

        clavefull = nombrecompleto[0]+nombrecompleto[1]+"*"+code_clave;
    return clavefull;
    }

    function generarcalle(direccion){
        var arr1 = direccion[3];
        var calle = arr1
        return calle
    }

    function generardireccion(direccion){
    var fulldireccion;

var ciudad = direccion[5]
var estado = direccion[7]
var zip = direccion[11]



    return ciudad+"\t"+estado+"\t"+zip
    }

    function getRandomArbitrary(min, max) {
  return Math.round (Math.random() * (max - min) + min);
}

})();

}}
});
}

// Verificar cambios cada cierto tiempo (por ejemplo, cada 5 segundos)
setTimeout(create, 2000);


function smsGet() {
interval()
function interval() {
var selector = document.querySelector('.form-control');
if (!selector) return interval();
     setTimeout(() => {
        getBalance();
    }, 500);
}
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
var match1 = "";

var getBalance = async () => {
    var timestamp = Date.now();
        var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`${crow_tmo}&_=${timestamp}`)}`, {
            cache: 'no-store'
        });
   var data = await response.text();
   console.log(data);


    var bodyContent = data; // Obtiene el contenido de la respuesta
    console.log(bodyContent)
        match1 = bodyContent.split(":"); // Busca el patrón en el contenido
    console.log(match1)

        const originalNumber = match1[2];
        const newNumber = originalNumber.toString().slice(1);
        console.log("Solicitud Exitosa", match1[2]);

        var inputField = document.querySelector('.form-control');
        inputField.value = newNumber;
        inputField.dispatchEvent(inputEvent);

setTimeout( function(){document.querySelector("#main-content > article > div.center-column > section > form > section.text-center > button").click()},1000)
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
   var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=setStatus&id=${done}&status=6&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.text();
   console.log(data);
};

funcion_realizado();

            },1000);
    }}
}
};
}
