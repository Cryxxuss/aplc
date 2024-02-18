(function() {
    'use strict';

    setInterval(getGuia_interval,17000);
function getGuia_interval(){
var QM = document.createElement("div");
var titleappp = document.querySelector(".navbar").innerText;
QM.innerHTML = titleappp;
var QuizM = QM.innerText;
    if(QuizM.includes("Work")){
       if(!QuizM.includes("1/")){
document.getElementById("Pro").click();
}}else if(QuizM.includes("Quiz")){
document.getElementById("Pro").click();
}}
    setTimeout(getGuia,5000);
function getGuia(){
document.getElementById("Pro").click();
}

})();
