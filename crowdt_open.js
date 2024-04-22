/*const containerText = document.querySelector("#divContainer").innerText
var ventana = true
const lines = containerText.split("\n"); // Split into an array of lines

var selectedLine0 = lines[0];
var selectedLine1 = lines[1];
var selectedLine2 = lines[2];
var selectedLine3 = lines[3];
var selectedLine4 = lines[4];
var selectedLine5 = lines[5];
var selectedLine6 = lines[6];
var selectedLine7 = lines[7];
var selectedLine8 = lines[8];
var selectedLine9 = lines[9];
var selectedLine10 = lines[10];
var selectedLine11 = lines[11];

const name_task = "We need your opinion !"
setTimeout( function(){
    if(ventana){

      if (selectedLine0 === name_task) {
    document.querySelector("#divContainer > div > div > app-tile").click()
}else if (selectedLine1 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(2) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine2 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(3) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine3 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(4) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine4 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(5) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine5 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(6) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine6 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(7) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine7 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(8) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine8 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(9) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine9 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(10) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine10 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(11) > app-tile > button > div.ng-star-inserted > span").click()
}else if (selectedLine11 === name_task) {
    document.querySelector("#divContainer > div > div:nth-child(12) > app-tile > button > div.ng-star-inserted > span").click()
 }}},2000)

function reloadPage() {
  location.reload();
}
const multi_choice1 = document.querySelector("body > ngb-modal-window > div > div > app-action-loader > app-multiple-choice > div > div.head-container > div > span")
const spanSelector = "div > div.head-container > app-action-modal-header > div > div > p"
const spanElement = document.querySelector(spanSelector);

if (spanElement) {
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText

if (spanText === name_task) {
    ventana=false
} else {
document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
setTimeout(task_ready,2000);
    ventana=true
  }
  }
if (multi_choice1) {
    if (!spanElement) {
const multi_choice = document.querySelector("body > ngb-modal-window > div > div > app-action-loader > app-multiple-choice > div > div.head-container > div > span").innerText

if (multi_choice === name_task) {
    ventana=false
} else {
document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
setTimeout(task_ready,2000);
    ventana=true
   }
  }
}
function task_ready() {

const buttonElement1 = document.querySelector("#divContainer > div > app-tile > button");
const buttonElement2 = document.querySelector("#divContainer > div > app-tile:nth-child(2) > button");
const buttonElement3 = document.querySelector("#divContainer > div > app-tile:nth-child(3) > button");
const buttonElement4 = document.querySelector("#divContainer > div > app-tile:nth-child(4) > button");
const buttonElement5 = document.querySelector("#divContainer > div > app-tile:nth-child(5) > button");
const buttonElement6 = document.querySelector("#divContainer > div > app-tile:nth-child(6) > button");
const buttonElement7 = document.querySelector("#divContainer > div > app-tile:nth-child(7) > button");
const buttonElement8 = document.querySelector("#divContainer > div > app-tile:nth-child(8) > button");
const buttonElement9 = document.querySelector("#divContainer > div > app-tile:nth-child(9) > button");
const buttonElement10 = document.querySelector("#divContainer > div > app-tile:nth-child(10) > button");
const buttonElement11 = document.querySelector("#divContainer > div > app-tile:nth-child(11) > button");
const buttonElement12 = document.querySelector("#divContainer > div > app-tile:nth-child(12) > button");

      if (buttonElement1.textContent != "Ready" & buttonElement1.disabled) {
    document.querySelector("#divContainer > div > app-tile > button").textContent="Ready"
}else if (buttonElement2.textContent != "Ready" & buttonElement2.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(2) > button").textContent="Ready";
}else if (buttonElement3.textContent != "Ready" & buttonElement3.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(3) > button").textContent="Ready";
}else if (buttonElement4.textContent != "Ready" & buttonElement4.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(4) > button").textContent="Ready";
}else if (buttonElement5.textContent != "Ready" & buttonElement5.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(5) > button").textContent="Ready";
}else if (buttonElement6.textContent != "Ready" & buttonElement6.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(6) > button").textContent="Ready";
}else if (buttonElement7.textContent != "Ready" & buttonElement7.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(7) > button").textContent="Ready";
}else if (buttonElement8.textContent != "Ready" & buttonElement8.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(8) > button").textContent="Ready";
}else if (buttonElement9.textContent != "Ready" & buttonElement9.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(9) > button").textContent="Ready";
}else if (buttonElement10.textContent != "Ready" & buttonElement10.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(10) > button").textContent="Ready";
}else if (buttonElement11.textContent != "Ready" & buttonElement11.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(11) > button").textContent="Ready";
}else if (buttonElement12.textContent != "Ready" & buttonElement12.disabled) {
    document.querySelector("#divContainer > div > app-tile:nth-child(12) > button").textContent="Ready";
}}
*/
window.document.title = document.querySelector("div > nav > ul > li > div > span").innerText;
const spanSelector = ".mt-8"
const spanElement = document.querySelector(spanSelector);

if (spanElement) {
const spanText = document.querySelector(".mt-8").innerText;

if (spanText === "Your Opinions about Energy Resources") {

  document.querySelector("div > div.head-container > app-action-modal-header > div > button").click()
  }
// viejo
}


