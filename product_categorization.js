(function() {
    'use strict';

setTimeout(function(){fillAnwsers();}, 3000);
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
            //setTimeout(enviar,1000);
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
{url:"https://i5.walmartimages.com/asr/d8bf1002-b08f-4ee1-9b9e-a048716a33bb.1a0366cf9e18d67ef136f4b42b87fddc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5fc8ed1c-09aa-4ffe-ae2e-c4a2a96da645.11cd79f78436902269bae6b0aca84d0d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/578c4268-521a-49df-abd5-308b6666ff4c.1483c52ec3143ecf6a4e9d53955a1b9d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ba9bd662-a739-48e4-b6a0-2af767a2f4c0.959474ec2e9c72273b31a6dca5d562d0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c2c003db-bd9d-49cc-b110-80995e917c5d.f8723b17a0dca115b3cbaa7417baeae5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a9bf449b-bb34-48d9-ace2-989c4f0f6828.1703aab47df2563d59aa55747a015345.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/df0c6675-1960-4d14-9362-4427382ec23b.fff65c94b44201ee9716504c49903d04.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/24c10b39-63a5-4dee-b650-e6e64bf2acb2.4f3b0a2ecfe52fbfc3dd0167002ead16.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6e668567-dfc2-4556-8b02-dbb97e1c6b9b.5994133c68aceaa1695eb4131c867a52.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e2ba3f78-32be-4102-a09f-59ff725541d2.d1fc6ff48455bc2c023418f47f96ab57.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9c5265fb-a5d9-42fd-aaa3-a7b9ea464d0c.f00094d502101b64fc6490a47fbc4647.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5afb65d6-5d55-4ae9-ab84-d47b3e698c35.c0d5de6f2a9df56a7b392413695fa2ad.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/774b5cf5-186a-4570-91fe-d5705e9a8cfe.4aca65cd9db95e2583de3c49c00dc152.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d542ca27-6c88-451f-9c80-afc489073090.374f327ed107ec6a5d767bda8c53b604.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/06a01a1d-1ae0-4fce-a22a-db809b42b346.4a113835d5e460c6cad4c7730066caa8.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d50565f0-2b86-4e11-9db8-eff74bff0c0b.10b32953e94cb8327cca99b9b72b024a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4204332d-22b1-4c21-99b0-9185b0a36db5.bdb7aae67e24db6aca6621be08f6b2dd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c0f0cf9d-3cc1-4bb6-aa10-ae2794b0a245.63f9b56f072f37d29c11fea767952b14.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4869f060-5617-46ff-8438-f285d13bdc74.3f43412e3d604ab8bd08cb5c071fd98b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ce518b46-1ee4-4914-9dd6-d6f3e3f2d31d.5b772b230c04b4e4148deeff85d04058.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/54f1d790-7850-4f01-ad24-3fa15074b521_1.65ee4575dce000158adb803d1343ac32.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1204a5ef-95d1-4b29-bf55-092158044138.d4b14f23961783b3983ea228d6ec9d8f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c84bb33-057f-4bb0-8016-3310c130c8e4.0322d9530239f54ddad0214e329887c3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5c3093c2-c0e0-4fba-9077-244da3a7ef27.b3775276bdef3d1d795cb70cad82ae81.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e4e0e65a-874d-4b07-84fe-cf5b1adfc747.577fdffd176479e1dee1cdcab88dabfc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ecb1da3b-9343-4bfe-ac63-489ce8c2744d.bafcbda124ea5f0944c37e1f9f06faa1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/58f9e9bd-3a46-4225-a0b5-32b2acd71892.b52dacb67da22b98e98f2a9817607c82.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/020738ee-a06a-4140-ace8-2969f4b84740.7716cd1ef35ff2afb9c50e6cb30eb3eb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/31275503-e996-4a44-8a0d-5b6e0ca4539e.6c75dae7213ddce7ea076afee6c4e5ed.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e151f7bc-1ce0-47c0-b1f9-f45392b41bdc_1.9e32dfa140157719d1852cea181a1d30.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a9d4f416-4e41-40ab-9d8b-9565f1bae213.4389f90513bd9a58189cd7358b955a88.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/355bcdf9-aa52-469d-85bf-6a55328d896d.58fa3106e527cf1b52370139928004d0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e355a767-61dc-4eda-8c98-0c06e6e326e9.ba0d418bfc492e7bbae3e3e3072b0a65.jpeg",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("5ta ID actualizado");
