setTimeout(function(){fillAnwsersa();}, 700);

function fillAnwsersa(){
var titleDivap = document.createElement("div");
var titleap = document.querySelector(".content").innerText;
titleDivap.innerHTML = titleap;
var jobTitlee = titleDivap.innerText;

if(jobTitlee.includes("There is no work")){
location.reload();
}}
/*function refresh() {jQuery('#content').html("APPEN");setTimeout(jQuery('#content').load(document.URL + ' #content')); }

var titleDivap = document.createElement("div");
var titleap = document.querySelector(".content").innerText;
titleDivap.innerHTML = titleap;
var jobTitlee = titleDivap.innerText;

if(jobTitlee.includes("There is no work")){

    var url = (document.querySelector("#contributor-support-form .modal-body #contributor-support-contact-form"))
        ? new URL(document.querySelector("#contributor-support-form .modal-body #contributor-support-contact-form").getAttribute("data-src")) : "";
    var jobTitle = (url) ? url.searchParams.get("ticket[custom_job_title]") : "";
    var counter = 0;

        ajaxAR();

    function ajaxAR() {
        GM_xmlhttpRequest({
            method: "GET",
            url: window.location.href,
            onload: function (r) {
                setTimeout(function () {
                    //console.log(r.finalUrl);
                    var url = window.location.href;
                    var a;
                    if (url.includes("conversion_name")) {
                        a = url.split("?conversion_name")[0];
                    }
                    else {
                        a = url.split("?secret")[0];
                    }
                    var id = a.split("tasks/")[1];
                    if (r.finalUrl.includes("view")){ // task grabbed
                        window.location.href = r.finalUrl;
                    }
                    else if (r.status==405 || r.status==404) {
                        location.reload();
                    }
                    else if (r.responseText.includes("Expired")) {
                        location.reload();
                    }
                    else {
                        counter++;
                        document.title = counter + " " + jobTitle;
                        ajaxAR();
                        refresh();
                    }
                },400);
            }
        })
    }
}
 setTimeout(function(){
 location.reload();
}, 300000);
console.log("Actualizando a 400");*/
