(function() {
    'use strict';
var id=""
var auto_fill_radios="";
var autofill_radios_random=["1","2"];
var autofill_rating_random=["1","2"];
var AutoFill_Image_Preference=[""];
var autofill_checkboxes_random=["1,2"];

setTimeout(cambiar_id);
function cambiar_id(){
const span = document.getElementById('assignment-job-id');
    //Agregar ID
span.innerHTML = '<span style="background-color: coral">'+id+'</span>';
}
var titleDivapp = document.createElement("div");
var titleapp = document.querySelector(".job-title").innerText;
titleDivapp.innerHTML = titleapp;
var jobTitle = titleDivapp.innerText;

    setInterval(getGuia_interval,30000);
function getGuia_interval(){

document.getElementsByClassName('fas fa-file-signature ')[0].click();
}
    setTimeout(getGuia,5000);
function getGuia(){

document.getElementsByClassName('fas fa-file-signature ')[0].click();
}

setTimeout(Auto_Fill);
function Auto_Fill(){
/*var jsawesome = document.querySelectorAll(".jsawesome");
        jsawesome.forEach(wrapper => {
                var pares_content = wrapper.querySelectorAll(".radios.cml_field");
                    for(var preg of pares_content.entries()) {
                    let radios = preg[1].querySelectorAll(".radios.cml_field input");
                    let st = auto_fill_radios;
                    let indice=st.charAt(preg[1])-1;
                     if(indice!==-1){
                     radios[indice].checked=1;
                     radios[indice].click();
                   }
                }
      });*/
var jsawesomee = document.querySelectorAll(".jsawesome");
        jsawesomee.forEach(wrapper => {
                var pares_content = wrapper.querySelectorAll(".radios.cml_field");
                    for(var preg of pares_content.entries()) {
                    let radios = preg[1].querySelectorAll(".radios.cml_field input");
                    let select = autofill_radios_random;
                    const indice = Math.floor(Math.random() * select.length);-1;
                     if(indice!==-1){
                     radios[indice].checked;
                     radios[indice].click();
                   }
                }
      });
var jsawesome_rating = document.querySelectorAll(".jsawesome");
        jsawesome_rating.forEach(wrapper => {
                var pares_content = wrapper.querySelectorAll(".ratings.cml_field");
                    for(var preg of pares_content.entries()) {
                    let radios = preg[1].querySelectorAll(".ratings.cml_field input");
                    let select = autofill_rating_random;
                    const indice = Math.floor(Math.random() * select.length);-1;
                     if(indice!==-1){
                     radios[indice].checked=1;
                     radios[indice].click();
                   }
                }
        });
var jsawesome_checkboxes = document.querySelectorAll(".jsawesome");
        jsawesome_checkboxes.forEach(wrapper => {
                var pares_content = wrapper.querySelectorAll(".checkboxes.cml_field");
                    for(var preg of pares_content.entries()) {
                    let radios = preg[1].querySelectorAll(".checkboxes.cml_field input");
                    let select = autofill_checkboxes_random;
                    const indice = Math.floor(Math.random() * select.length);-1;
                     if(indice!==-1){
                     radios[indice].checked;
                     radios[indice].click();
                   }
                }
        });
 var jsawesome_Image_Preference = document.querySelectorAll(".jsawesome");
        jsawesome_Image_Preference .forEach(wrapper => {
                var pares_content = wrapper.querySelectorAll(".radios.cml_field.center-container");
                    for(var preg of pares_content.entries()) {
                    let radios = preg[1].querySelectorAll(".radios.cml_field input");
                    let select = AutoFill_Image_Preference;
                    const indice = Math.floor(Math.random() * select.length);-1;
                     if(indice!==-1){
                     radios[indice].checked=1;
                     radios[indice].click();
                   }
                }
      });
}
switch (true) {

     case jobTitle.includes("Company Deduplication"):

id="1957144"
autofill_radios_random=["1","2"];

        setInterval(Enviar_task, Math.round(Math.random() * (13000 - 11000)) + 11000);
     break;

     case jobTitle.includes("Olhe O Anúncio E Dê Sua Opinião."):

id="2231203";
autofill_radios_random=["1","2"];

        setInterval(Enviar_task, Math.round(Math.random() * (35000 - 31000)) + 31000);
     break;

     case jobTitle.includes("Observa Los Anuncios Y Júzgalo Tú Mismo"):

id="2233827";
autofill_radios_random=["1","2"];

        setInterval(Enviar_task, Math.round(Math.random() * (35000 - 31000)) + 31000);
     break;

     case jobTitle.includes("Look At Advertisements"):

id="2232246";
autofill_radios_random=["1","2"];

        setInterval(Enviar_task, Math.round(Math.random() * (32000 - 31000)) + 31000);
     break;

     case jobTitle.includes("Uk_search-Science"):

id="2263232"
autofill_radios_random=["1","2"];

		setInterval(Enviar_task, Math.round(Math.random() * (11000 - 10000)) + 10000);
     break;

     case jobTitle.includes("Adult Content According"):

id="2185656"
autofill_radios_random=["1","2"];

		setInterval(Enviar_Sin_marcar, Math.round(Math.random() * (13000 - 11000)) + 11000);
     break;

     case jobTitle.includes("Find The Official Website Of Businesses"):

id="1847605";
autofill_radios_random=["1"];
setTimeout(URL_aleatorio,5000);

		setInterval(Enviar_task, Math.round(Math.random() * (15000 - 10000)) + 10000);
     break;

     case jobTitle.includes("Outline Boxes With 4-Point Polygons"):

id="2186718"
setTimeout(rocktq,150000);
autofill_radios_random=["1"];

		setInterval(Enviar_task, Math.round(Math.random() * (184000 - 181000)) + 181000);
     break;

     case jobTitle.includes("Keyword Relevance"):

id="2238365"
autofill_radios_random=["1","2","3"];

		setInterval(Enviar_task, Math.round(Math.random() * (12000 - 11000)) + 11000);
     break;

     case jobTitle.includes("Determine Stances In Reddit"):

id="2257660"
autofill_radios_random=["1","2"];

		setInterval(Enviar_task, Math.round(Math.random() * (12000 - 11000)) + 11000);
     break;

     case jobTitle.includes("Find Communities In Reviews"):

id="2258585"
autofill_radios_random=["1","2"];

		setInterval(Enviar_task, Math.round(Math.random() * (32000 - 31000)) + 31000);
     break;

     case jobTitle.includes("Select The Product Which"):

id="2261762"
setInterval(eliminarnotq,8000)
autofill_radios_random=["1","2"];

		setInterval(Enviar_task, Math.round(Math.random() * (62000 - 61000)) + 61000);
     break;

     case jobTitle.includes("Matching Voices With"):

id="2249957"
autofill_radios_random=["1","2"];

		setInterval(Enviar_task, Math.round(Math.random() * (32000 - 31000)) + 31000);
     break;

     case jobTitle.includes("Classify Web Pages"):

id="2003568"
autofill_radios_random=["1","2","3"];

		setInterval(Enviar_task, Math.round(Math.random() * (62000 - 61000)) + 61000);
     break;

     case jobTitle.includes("Evaluating Synthetic Voices"):

id="2267903"
autofill_rating_random=["1","2","3","4"];
autofill_checkboxes_random=["1","2","3","4","5"];

		setInterval(Enviar_task, Math.round(Math.random() * (62000 - 61000)) + 61000);
     break;

     case jobTitle.includes("Evaluating Human Faces"):

id="2243270"

		setInterval(Enviar_task, Math.round(Math.random() * (62000 - 61000)) + 61000);
     break;

     case jobTitle.includes("Music Description Assessment"):

id="2271691"
autofill_rating_random=["1","2","3","4","5","6"];

		setInterval(Enviar_task, Math.round(Math.random() * (32000 - 31000)) + 31000);
     break;

     case jobTitle.includes("Name Your Job"):

id="2271691"
autofill_radios_random=["1","2","3"];

		setInterval(Enviar_task, Math.round(Math.random() * (62000 - 61000)) + 61000);
     break;

     case jobTitle.includes("Judge Whether Sentences"):

		setInterval(given_up,2000);
     break;

     case jobTitle.includes("Classify Text Into Categories") || jobTitle.includes("Classify Reviews As"):

id="2278086"
autofill_radios_random=["1","2"];

		setInterval(Enviar_task, Math.round(Math.random() * (12000 - 11000)) + 11000);
     break;

     case jobTitle.includes("Census Geographic Identifier Research"):

id="2276120"
setInterval(eliminarnotq,8000)
autofill_radios_random=["1","2"];

		setInterval(Enviar_task, Math.round(Math.random() * (32000 - 31000)) + 31000);
     break;

    default:

    break;
}
	function given_up(){document.getElementsByClassName('btn btn-primary')[0].click();}

function Enviar(){document.getElementsByClassName('submit btn btn-cf-blue')[0].click();}

function Enviar_Sin_marcar(){
var WM = document.createElement("div");
var titleapppe = document.querySelector(".navbar").innerText;
WM.innerHTML = titleapppe;
var QuizMM = WM.innerText;
        if(QuizMM.includes("Work")){
        document.getElementsByClassName('submit btn btn-cf-blue')[0].click();
}}
   function URL_aleatorio(){
   var hijos = document.querySelector("#job_units").childNodes;
   for (var hijo of hijos){
    if (hijo.tagName =='DIV' && !hijo.classList.contains('form-actions')){
var nombrecompleto = hijo.querySelector("div > div:nth-child(1) > div > p:nth-child(1)").innerText

nombrecompleto = nombrecompleto.substring(17)
nombrecompleto = nombrecompleto.replace(/\s+/g, '');
        nombrecompleto = nombrecompleto.replace('.', '');
        nombrecompleto = nombrecompleto.replace(',', '');
console.log(nombrecompleto)

var input = hijo.querySelector("input.domain");
        input.value = "WWW."+nombrecompleto+".COM"
      }
   }
}
function Enviar_encuesta(){
document.getElementsByClassName('submit btn btn-cf-blue')[0].click();
}

//setInterval(clickPro,60000);
function clickPro(){
var QM = document.createElement("div");
var titleappp = document.querySelector(".navbar").innerText;
QM.innerHTML = titleappp;
var QuizM = QM.innerText;
    if(QuizM.includes("accuracy") || jobTitle.includes("Find The Official Website Of Businesses")){
        document.getElementsByClassName('fas fa-file-signature')[0].click();
    }
    else if(QuizM.includes("Quiz")){
 if(QuizM.includes("1/") || QuizM.includes("2/") || QuizM.includes("3/") || QuizM.includes("4/") || QuizM.includes("5/") || QuizM.includes("6/") || QuizM.includes("7/") || QuizM.includes("8/") || QuizM.includes("9/") || QuizM.includes("10/")||
    QuizM.includes("11/") || QuizM.includes("12/") || QuizM.includes("13/") || QuizM.includes("14/") || QuizM.includes("15/") || QuizM.includes("16/") || QuizM.includes("17/") || QuizM.includes("18/") ||
    QuizM.includes("19/") || QuizM.includes("20/") || QuizM.includes("21/") || QuizM.includes("22/") || QuizM.includes("23/") || QuizM.includes("24/") || QuizM.includes("25/")){
document.getElementsByClassName('fas fa-file-signature')[0].click();
         }
    }
}
function Enviar_work(){
var QM = document.createElement("div");
var titleappp = document.querySelector(".navbar").innerText;
QM.innerHTML = titleappp;
var QuizM = QM.innerText;
    if(QuizM.includes("Work")){
	 var hijos = document.querySelector("#job_units").childNodes;
    for (var hijo of hijos){
		if (hijo.tagName =='DIV' && !hijo.classList.contains('form-actions')){
			var stilo = hijo.getAttribute("Style");
			if (stilo.includes("green")){
				document.getElementsByClassName('submit btn btn-cf-blue')[0].click();
            }}
      }}}
function Enviar_task(){
var QM = document.createElement("div");
var titleappp = document.querySelector(".navbar").innerText;
QM.innerHTML = titleappp;
var QuizM = QM.innerText;
setTimeout(Enviar_work);
    if(QuizM.includes("2/2") || QuizM.includes("3/3") || QuizM.includes("4/4") || QuizM.includes("5/5") || QuizM.includes("6/6") || QuizM.includes("7/7") || QuizM.includes("8/8") || QuizM.includes("9/9") || QuizM.includes("10/10")||
       QuizM.includes("11/11") || QuizM.includes("12/12") || QuizM.includes("13/13") || QuizM.includes("14/14") || QuizM.includes("15/15") || QuizM.includes("16/16") || QuizM.includes("17/17") || QuizM.includes("18/18") ||
       QuizM.includes("19/19") || QuizM.includes("20/20") || QuizM.includes("21/21") || QuizM.includes("22/22") || QuizM.includes("23/23") || QuizM.includes("24/24") || QuizM.includes("25/25")){
       document.getElementsByClassName('submit btn btn-cf-blue')[0].click();
    }else{
        if(jobTitle.includes("Text Classification - Agreement") || jobTitle.includes("Look At Advertisements") || jobTitle.includes("Classify Web Pages")
           || jobTitle.includes("Classify Reviews As")){
           if(QuizM.includes("4/5") || QuizM.includes("5/6") || QuizM.includes("8/10") || QuizM.includes("9/10")){
               document.getElementsByClassName('submit btn btn-cf-blue')[0].click();
           }
      }
}}

setInterval(enviar_WM,30000);
function enviar_WM(){
var QM = document.createElement("div");
var titleappp = document.querySelector(".navbar").innerText;
QM.innerHTML = titleappp;
var QuizM = QM.innerText;
   if(QuizM.includes("Work")){
       if(QuizM.includes("accuracy")){
           }else{
               document.getElementsByClassName('submit btn btn-cf-blue')[0].click();
       }
   }
}

function eliminarnotq(){
var QM = document.createElement("div");
var titleappp = document.querySelector(".navbar").innerText;
QM.innerHTML = titleappp;
var QuizM = QM.innerText;
   if(QuizM.includes("Work") || QuizM.includes("5/6")){
       if(QuizM.includes("1/") || QuizM.includes("2/") || QuizM.includes("3/") || QuizM.includes("4/") || QuizM.includes("5/")){
    var hijos = document.querySelector("#job_units").childNodes;
   for (var hijo of hijos){
    if (hijo.tagName =='DIV' && !hijo.classList.contains('form-actions')){
        var stilo = hijo.getAttribute("Style");
        if (stilo === null){
            hijo.style.display = 'none';
            if (hijo.previousSibling.classList.contains('checkboxTotalProjectF8')){
            hijo.previousSibling.remove();
            }
        }else{
            if (stilo.includes("green")){
            }else{
                 if (hijo.previousSibling.classList.contains('checkboxTotalProjectF8')){
                     hijo.previousSibling.remove();
            }
                hijo.style.display = 'none';
            }}
       }}
   }}}

function rocktq(){
var QM = document.createElement("div");
var titleappp = document.querySelector(".navbar").innerText;
QM.innerHTML = titleappp;
var QuizM = QM.innerText;
    if(QuizM.includes("Work")){
    var hijos = document.querySelector("#job_units").childNodes;
   for (var hijo of hijos){
    if (hijo.tagName =='DIV' && !hijo.classList.contains('form-actions')){
        var stilo = hijo.getAttribute("Style");
        var bandera = false;
          if (stilo === null){
bandera = true;
        }else{
            if (stilo.includes("green")){
            }else{
                //hacer
                bandera = true;
            }}
        if (bandera){
        var inputs = hijo.querySelectorAll('input[type="hidden"]');
        var resp = '[{"name":"4592ce62-9914-47d8-b543-55be424b977a","number":1,"type":"box","coordinates":{"x":182,"y":174,"w":144,"h":160}}]';
        for (var inpu of inputs){
                 if (inpu.classList.contains("annotation")){
                     inpu.value = resp;
        }}}}
    }}}
})();
 setTimeout(function(){
 location.reload();
}, 240000);
console.log("Classify Reviews As Relevant To Medical Topics (Ar)");
