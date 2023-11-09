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
{url:"https://i5.walmartimages.com/asr/215355fe-4600-47f2-a133-5e74a6c6f575.b77bec86aa9625824523c2a9c02824a1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/267d5592-6aed-4a64-972d-14b95f177db8.2a2bca1b7b9ca4606898422c29c46862.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c89462f7-1e40-40f0-8e17-c06c451eb0c4.6801464d01b0149643abc9493534b935.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7389e0c0-553f-4962-acab-65ed3161991e.fc43654d945132a663966bcc203837d1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/98b70bba-bfba-46ab-80f2-a2cde1ab3f07.2c8989bf4c3dd27e7565c8d710972984.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c6f14cc0-a541-4f66-b136-430c5b339697.d272e7d49902fc5dc69415bf5355c585.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9febf40e-20e8-4c00-bec5-d8e8c656c588.ed20cb8d75f0cc04b9c1fef7ec02f514.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/396fd7f1-91d3-4aa2-a909-88f02c297e28.3cb33e647c6449c46fc9e1f5de79f8be.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8b5509fd-d502-41d2-92e4-7188d4a09157.3b80536a9363621b1bdae642b01444f9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/16ad259e-3c39-4cf7-b088-8a93b61fc6e1.81b7c273e41d2a28fceb182591883893.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b541edfa-f5de-471a-9307-b7a6bba5aaa6.cf533910f43a49cea12946164ee09214.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7341a25b-96af-4b66-8eeb-980122f5d658.cece5599d517e636789807edf8c18aeb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6ea22cf9-c899-4c08-96f2-9a6e221b289d.8dfd3c350ab3307e17cac6fd614e3f89.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f516c3f7-12e7-4cc3-ba84-991d3259a617.70b83f15ac2c5a8af707aa2c8d0a923b.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/42386080-bed4-4567-8425-322e8ec457e9.796fc37d45a92e6da2441acb5baa60c3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7e67a8f8-7c34-4325-9d22-7e47fd8127ab.eeb27f8789ba9c88acbc2ccb921bafe8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b218793b-8214-4250-9e7c-34318f1d47ec.d78fe2ce0f29964e21d77f968b282329.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4d69bb3c-9193-475d-903c-9d3fb423c18d.6290494821b187e34ecd83118ec209da.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2b953c83-057e-4f6f-b4c0-c19c3cb757f5.264a9676c17191d505b2341b7a424415.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f0866ef0-ec01-4982-970d-3e45ebf93b17.964df3653950ba56cd790d98b4fc9068.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3da028bc-9cf9-4461-a202-83db4f058a60.9d32913311e71a9b57d3876d88577715.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2ebc2c6c-b39e-458a-a77a-a377d64509f0.891f606f047dcbe1ae1f04aca2ea5d5f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/996dd9df-dd6a-4897-9bc3-67b4a62b5c43.36b788696c09e351de525d70b6c240a9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f72526c1-6f2a-4638-9098-190d94c5c449.b87175c887519aab676d3a49513ebc10.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7180565e-b19c-4de7-911c-b8748abe06c2.46e215d9ae06afa7f513919f73a49dc5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/52951e32-690e-4ee7-9c6d-ed4a1af61792.f9f1572e6057613feb92fecb8f11ef14.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/49869a32-f6a8-4bfc-8ef1-4c194b3c08a9.a0f26328513edd3630bbe7bf101203e6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1830ffb4-641d-4135-907f-bb89a01c101e.5f6ac30bd6616448cc3993d07133fc1e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8c926e3d-845c-4740-b96e-5e2f12686d39.57550a88ca127c4bba58d50589455a6b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b06da746-7c56-4cc2-bdad-1a91aabd956c.45e8689cbba1dddf6adccb28d4a5ca7e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7fbebbb0-f3f2-4ca5-a440-4365cc81aefd.ed32e244f3253cf42673575621f59629.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4b3a060f-2589-4daf-b7af-e24a511e0a3b.1c96dac2f0944445079e7c62396f0c3a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/167702a3-70e2-4b87-880e-ccfa86a5aaba.9e42f72d54f620c55fbfa1e0d4c0ff3d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b12537fc-d773-4e58-b904-3637af7add85.b1bb72df710ddbd98f5d7e75b59fdf5e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f1b2d77b-88c1-430e-898f-2421618d1eb2.ca18fd2a5427f83e59d1e097a53864a8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b44c977f-346f-4912-bd25-5b0bb8e08f85.4c7336804022259a635c306d59d5f720.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4178a3c6-b878-4e6e-b5bd-fac5d69fbc49.e887da204f19033cdc88a1dbeabb6f4b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bc80f9cc-97cd-4c1f-a41e-dbdc4710c249.f574d932e66b3a859538ed49548572b8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1a607953-4243-4115-bf51-1291a04b6ffa_1.97915b86d987fb9c1c2598c387c470dd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/79016211-2fc2-44ba-92fc-42cce9e7ec57.1678a45af73e1083e3eaf8eb730bafcd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dc2014b7-873e-41b3-b643-a44ce1f8416f.38e08770a6c15687c363ebb1adde802b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/35ea25c1-3ad8-49d1-a3a3-6f6eb7ff94b9.95e56628b0a72f63734a63514a8f0feb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6e6ddec0-c11f-4943-b170-41505bcca464.4ae242bbb7466a2f80f69e916f454623.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e75feff2-1c65-4798-9c1b-e3a3b4d7ee22.a819bc5c736ba9d789ca13d7320c924f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c27938ac-7611-4f71-b839-88fa6a9eab20.d90339e899757f7b2dabf3db908671a5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9a5392ce-5b8c-4704-b5fc-ab003d43f881.f36ef4f428b77cafa828dd6e33e5e920.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8be13314-58e9-484b-b0d5-e38896de36ae.3dfb027179844ef15169a6e9409bdc66.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/36775d19-5844-4262-9ad9-a6a4367581f6.2ed059d85bdd7c63587458658877117f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/43fe6931-75bb-43aa-a881-0017d150c892.e324c6152e24bc4382921d0166d4a2f4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6c334c39-cc24-4107-8c57-e3ca64a9729d.19e60003eddf055ff7999fd2d4b6ce55.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f1012902-45e6-45ab-8589-c300551fe849.d6ba38e298ec056870c4e556f3eae8b7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3185a97a-b702-4536-9d98-0d9670ae4495_1.c6f747810c518f3277f7da8c911a8b5f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f5f2231d-7568-44d2-84b7-43b8b9943f97.ca77952fec9eb205f0ab7a325e15f3d4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e9e11b2e-950b-4aa5-b623-54a97ccb62a6.3f446fdfe451a1124384c154950b1908.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9ca3a4d6-4de6-4824-86e1-d4de61186b65.6fc73ddb6db3e8a5e52e43dffa745fd3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6dc58a1c-a098-4a60-a325-cf93b6367f59.4aa01fe191bf479a3dbab2aed8b70979.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/048a9f62-e8fe-42d1-9050-f1fb60933bfe.2d053627d1f2174fddbf0fcf1776ed4c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/93a59243-f673-42b7-81ee-96e9d67afe54.07ae7b2da9309b873816de7a05458835.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dada334b-36ea-4d2f-82e9-8493f7d9e348.b7a45806fc73fa16f43970689957c539.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6e93313f-0607-48a4-b99b-9c3a55256ece.22abe1909daf846666d90ab57927ab1a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/50a75b06-cb84-48ed-9ec0-5d245689b479.be215fbcf7a04c30c0f96d85d44ca4dd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a216b5c1-aa61-4467-be96-e4e7cc9d4e6b.350d2e927d0a722f2a4321c3732e73f7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5e76fb65-1de4-4300-a3a3-29edd4008187.9b3989830fdfaffe92f0ac1fe2d97f6d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1a0f75c6-8bf7-4a6d-a49d-ad41df9c1d96.5f6473712bc861fc40b0054420f61746.jpeg",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("1ra ID actualizado");
