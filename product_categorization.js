(function() {
    'use strict';

setTimeout(function(){fillAnwsers();}, 5000);
//activar abrir en otra pestaña
/*let element = document.querySelector('.btn-cf-blue');
element.setAttribute("formtarget", "_blank");*/

function fillAnwsers(){

    var titleDivapp = document.createElement("div");
    var titleapp = document.querySelector(".job-title").innerText;
    titleDivapp.innerHTML = titleapp;
    var jobTitle = titleDivapp.innerText;


if(jobTitle.includes("Product Categorization")){

    var jsawesome = document.querySelectorAll(".cml");
    jsawesome.forEach(wrapper => {
        var titleDiv = wrapper.querySelector("div");
        var p = wrapper.querySelectorAll("p");

		var linkImg = wrapper.querySelectorAll("img")[0].src;

		//var data = processData(linkImg);
        var data = processData2(linkImg);
        var data2 = processData1(linkImg);

		if (data.length > 0) {

			titleDiv.style.backgroundColor = "Gold";
			titleDiv.style.color = "white";
			titleDiv.scrollIntoView({ block: "center" })

			var id= wrapper.id;

			var iddd=id+"[does_the_predicted_category_match_the_product]";
			var primero = document.querySelectorAll("[name='"+iddd+"']");

			switch(data[0].respuesta) {
			  case true:
				primero[0].checked=1;
				primero[0].click();
				break;
			  case false:
				primero[1].checked=1;
				primero[1].click();
				break;
			}
            setTimeout(enviar,1000);
        }
        else if(data2.length > 0){

			titleDiv.style.backgroundColor = "blue";
			titleDiv.style.color = "white";
			titleDiv.scrollIntoView({ block: "center" })

			var id2= wrapper.id2;

			var iddd2=id2+"[question1]";
			var primero2 = document.querySelectorAll("[name='"+iddd2+"']");

        //    setTimeout(enviar,1000);
        }
     });
	}
}

    function processData2(url) {
        let data = datos.filter(datos => datos.url == url)
        return data;
    }
    function processData1(url) {
        let data2 = vacias.filter(vacias => vacias.url == url)
        return data2;
    }

	function enviar(){
var WM = document.createElement("div");
var titleapppe = document.querySelector(".navbar").innerText;
WM.innerHTML = titleapppe;
var QuizMM = WM.innerText;
        if(QuizMM.includes("Work")){
        document.getElementsByClassName('submit btn btn-cf-blue')[0].click();
}}

let datos= [
{url:"https://i5.walmartimages.com/asr/aa37552f-5bd3-42cc-8020-558587b4d177.21f7b4d23623250f3dca1affca82aafc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/211e69d3-606e-4231-a4f0-dc56934f66bd.dbdc1256d7609e44d55ad596d6ad7965.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b7ee781b-93ca-43cd-83a4-8f0c3e740fdb.1f3a3d88f296a72172106c70e0792543.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0ff5ca2b-8b42-4ebd-8ed6-dfad62e91696.f7b44b661bbfe3c598fd396a7ab04ad3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a1daf617-fcb1-4c72-9e64-9c34741d9550.8c5d8edc4de070a50bcc14f45944de6a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b86faef9-1542-458f-b68c-d115d8b358dd.a4cf15991e6a8a4f51199eb8cb29c325.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e804217a-1258-46b7-8dfd-9055d525272f.91695bac6ffc1c1650391612b92ff285.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ed0d3314-67a2-4250-8ef3-bffd15105ef4.55952283b27aa7a805ec074a75f016ff.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d7a6b704-06ab-4c01-bf8e-2c58dc285409.eb55b44b8f3ce6f45e475be1f851c887.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7e263322-eca4-48f3-8bb1-b2b848201681.dd9995390c37e3e08e4e68e478a9fdcd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/84a879c1-abe3-4669-baa2-80689a525710.89167fc14e3ed8b9f403da1182980680.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e71b46a2-3857-4b6d-be56-dfaa92667448.cd002444e1d2a5aae0f7c2cb84910f1a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8f6184ca-1a5e-4b85-a36b-f3a975886286.147f595385ed4d71692823a419b8910a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/708c90ee-c3b9-453f-9e95-d705bd07e5fe.fef9f332080d028beeaa46316c888879.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5fdd1b77-77bb-43d6-986b-a424c466d636.74d529cca747f354b284a407546fb0d4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/330a847e-25c1-4fed-8511-06f724c6f533.01597c71d8837344bf43ebee4e4559c9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a83acd2d-2171-442c-aa1c-f98ad6c41f87.a7c3bab02a666547742d945b0bd002b1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8be5c387-8b19-47e8-b7c9-b9ea80f69d84.9669f0e6194b3600d4f70111845c62b8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/71328e76-fb43-4515-9f29-8bcc5123e4b6.32e5fe0b66d55bea2a90d303a085f344.jpeg",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
]
let vacias = [
{url:"url"},
]
})();
console.log("nuevas tqs");
