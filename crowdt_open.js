const containerText = document.querySelector("#divContainer").innerText
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

const name_task = "What's important to you?"
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
const spanSelector = "div > div.head-container > app-action-modal-header > div > div > p"
const spanElement = document.querySelector(spanSelector);

if (spanElement) {
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText

if (spanText === name_task) {
    ventana=false
} else {
 setInterval(reloadPage, Math.round(Math.random() * (60000 - 1000)) + 1000);
    ventana=true
  }
 }
