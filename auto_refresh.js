setTimeout(Complete,3000);
    function Complete(){
var titleDivapp = document.createElement("div");
var titleapp = document.querySelector(".content").innerText;
titleDivapp.innerHTML = titleapp;
var jobTitle = titleDivapp.innerText;

if(jobTitle.includes("There is no work")){

location.reload();
}
}
