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


if(jobTitle.includes("E-Product_1 V2 11-Feb -24")){

    var jsawesome = document.querySelectorAll(".cml");
    jsawesome.forEach(wrapper => {
        var titleDiv = wrapper.querySelector("div");
        var p = wrapper.querySelectorAll("p");

		var linkImg = wrapper.querySelectorAll("img")[1].src;

		//var data = processData(linkImg);
        var data = processData2(linkImg);
        var data2 = processData1(linkImg);

		if (data.length > 0) {

			titleDiv.style.backgroundColor = "Gold";
			titleDiv.style.color = "white";
			titleDiv.scrollIntoView({ block: "center" })

			var id= wrapper.id;

			var iddd=id+"[top_1]";
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
          	  setTimeout(enviar, Math.round(Math.random() * (35000 - 31000)) + 31000);
        }
        else if(data2.length > 0){

			titleDiv.style.backgroundColor = "blue";
			titleDiv.style.color = "white";
			titleDiv.scrollIntoView({ block: "center" })

			var id2= wrapper.id2;

			var iddd2=id2+"[question1]";
			var primero2 = document.querySelectorAll("[name='"+iddd2+"']");

         	  setTimeout(enviar,1000);
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
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/63YAAOSwfs9i1eez.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/9EAAAOSwE7tga-l-.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/AmUAAOSwYhNhfRNd.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/eUkAAOSwfUdlHBiF.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/ofUAAOSwxidiXJoE.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/5rkAAOSwNsNlHjBf.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/FGIAAOSwKZdigz3I.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/tg8AAOSwcJxgbN~0.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/~kQAAOSwH31kScNl.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/nt0AAOSwYp9g1gFM.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/PI8AAOSwyhti8XpN.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/E3AAAOSwxhNgbdKG.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/c70AAOSwoeJhebN5.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/va0AAOSwZNZhZMnz.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/afYAAOSw9JllXQIw.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/M9cAAOSwuaFiH6ow.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/DS4AAOSw0KxhBeAk.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/cMcAAOSwy9Rh8q2R.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/hfsAAOSwFFRir8P9.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/EzEAAOSwC6JjYmj4.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/k1IAAOSwsyNkIH8k.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/AtgAAOSwAxhlMUaz.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/OwgAAOSwSupkVOnV.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/dLsAAOSwu-Vk1UXy.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/kJgAAOSwHkZhKtIz.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/rzwAAOSwAzNkohBb.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/SWoAAOSwWWljSK84.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/BMIAAOSwliNiS4Uy.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/JWAAAOSwBbphDuKz.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/mU8AAOSwItJjV18S.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/JC0AAOSw~aNiZze0.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/NQYAAOSwg4Ri1Lqr.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/Y0cAAOSwaWxic-QP.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/lBcAAOSw6L1jnC7a.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/JX4AAOSwn8tjWZyv.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/rpcAAOSwreVhCySy.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/-5kAAOSw5vBimOQ7.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/query/A14AAOSwxK9lHEoT.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/yOgAAOSwxuJhT7VY.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/AtgAAOSwAxhlMUaz.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/v40AAOSwXGZiJOEO.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/bBQAAOSw2Y1hIxib.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/v7QAAOSwtnliAUeH.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/jhUAAOSwnvVhP-bi.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/uU8AAOSwCHFg7ddA.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/GGAAAOSwdjJjvYzP.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/ih0AAOSw-~JlASaM.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/~08AAOSw7l9h7J7z.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/SWoAAOSwWWljSK84.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/E3AAAOSwxhNgbdKG.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/3YAAAOSwzb1hSCaj.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/sF0AAOSwS2ZkI1j2.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/SAkAAOSwW6Rkp3-5.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/ksEAAOSwPMVjIx53.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/FeMAAOSwzblklWoI.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/dusAAOSw0NNjJhFu.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/O9YAAOSw5oRjShL8.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/TF8AAOSw3X1gwpPY.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/KZ8AAOSwZElkqvid.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/fCgAAOSwt0xjBZ3m.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/tuMAAOSwe4lkNWvx.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/M5AAAOSwdM1lJefD.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/tJkAAOSw-Nph1zi8.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/-5kAAOSw5vBimOQ7.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/bmMAAOSwVD9hKmse.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/IxQAAOSwnOpk7vnT.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/TFQAAOSwT-lkdgFQ.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/fcYAAOSwkspg0Bgo.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/OLwAAOSw-spi7wxM.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/kIIAAOSw8zhkoW0z.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/5qMAAOSwNYlhExFp.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/DE0AAOSwaI9h43~B.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/THcAAOSwk2xgj0s-.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/V1sAAOSwNG1ikM1f.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/LsUAAOSwA6Nky-2z.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/LsUAAOSwA6Nky-2z.jpg",respuesta: true},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/L84AAOSwUuZkREUK.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/index/FG8AAOSwXi9j41nk.jpg",respuesta: false},
{url:"https://storage.cloud.google.com/ai-vision/team/data/eproduct-v2/vision-eproduct-v2/query/1UAAAOSwVcllHI92.jpg",respuesta: true},
]
let vacias = [
{url:"http://image.issuu.com/230619103912-8f753627d79ed17bdb6f06366e0aa2a4/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/892853105e304d43b1c511f9e84c1a38/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/88acb5a886f54b4d8a0a8520c218fbb2/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/230614183929-08e72f257e96e094df08d395bd21fd46/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/230830165056-e816b3ae10f9f1ea91cfa4e2a3d4ca55/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/20b13f344fbe490c83b816efe276d0c5/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/150422135539-f20009e1c59e4605a57a15a8a813bbf3/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/230814234303-8288817ec174230b00729a7f2dab2451/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/231020132908-839d61a6220bec53600c415ffef6b81e/jpg/page_1_thumb_large.jpg"},
{url:"http://image.issuu.com/230624143208-6d41222aa85353c894f620f095719054/jpg/page_1_thumb_large.jpg"},
]
})();
console.log("Guia Full");
