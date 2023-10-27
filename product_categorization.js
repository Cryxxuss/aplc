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
{url:"https://i5.walmartimages.com/asr/2beb5a4d-3a14-4ceb-8c16-a4c844fd1d39.22cb079409ec6f51c2a71bafd3fa2ecb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e5c5c6e4-d844-4993-b184-edbdf7631244.704419e982320d150ffbf497ebf47087.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c1874a50-d19e-4826-84a7-1864e52a5321.adb3dca016885bd6bfaae6752bda52a6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/18eaa332-cea4-4276-a4f2-518c5d789396.728cd5e5697ae6d9a31f3f4a5500967e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8da408a2-0deb-42f2-af9c-645d1a9fc1b7.dfb33a8a5d8572601891956c7a8a220d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a59caf0a-330b-4c2c-a1c2-4bdbac2232c8.0be095e1783c1ef50b77b1d63684a559.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4cd25791-421a-4159-8399-d34c34f0f8a7.72a01d19c1c872eff40032d9af1b3fb2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7964b046-8b2c-48a8-bc46-2ed93145c5f1.a7fa589c67421586b6891edf20a2be78.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7e263322-eca4-48f3-8bb1-b2b848201681.dd9995390c37e3e08e4e68e478a9fdcd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c0ff4f1e-5fe6-4f8d-b709-7afaaefdf63e.04d6d046fa8d68b483864684ba9d0980.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0000b71c-5639-491f-aea8-d390e6d7254a.b8ec15bff72410ddda2debc01d94ec2a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f35f4fd5-dc02-4ba7-a03d-b00ec82865bc.fe8604c89c5583ced09fae63851a30fb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3b49eb31-5164-4b62-a28f-5ef250d0a948.fb46c8b4a309232ce6ff80dcffaa4a5c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1c8a8b2d-b383-417b-934d-84617ab4f310.a3ea9e5975de9d3461cc3f02efe38524.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/22e019cc-1e0e-4da4-97a6-0f0e2a539100.0894102ef09e98511cd017d0921c7a36.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/49974998-0162-47b7-ad7a-5911211076bc.eea0bfed3fef44a0169760e7c641b030.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bc629b93-2687-4dd2-bf11-7c1da7f7d44a.c8078d99be4d350481a10d61c250faa6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b9030dd9-5588-48a1-8835-b4b3e47cb438.efe9708686bb8d33fe3ecf8a99f43f17.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ea774c13-1671-44fb-ba07-fb1cc92a6d27.95235dd56f1bcdaa90d2a2cceacc8855.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2776f36c-05d7-4bff-aefc-c75d238f6058.0e5ab76cfc04c00b25121c93c67d3cc4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d54797ed-a5b2-4101-9b2f-e21ac58b83f8.c434dea7f72b1c499af697726b9d2828.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/afbf4075-d8bb-41fe-a685-2dd54d6c287b.0b7ad902c1fd1a7c9cf35a06826c4ef2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2616aba9-da95-4a3d-a3c0-201bf726ad37.36d3aeceeec6c9873a4aafd9df46475d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/202b019c-3210-4621-8ce6-46d6e2c18e75.dadd5551b0c0fc83ebb259e2114179ac.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3a9fca23-890a-4a71-92da-c9d3c6c48c0c.4086b200133ebc36ec48a20561f36ce2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fb07a21a-c86f-4f38-aafa-9cd1776accd2.070b1e5dccba89a2a681ed15ee121631.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2531ce33-0c94-4858-bbdb-cb7f68952f64.2028f6e28d651b7c8cd82c7a87c050cf.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e8802fff-d76f-4fca-8e60-9b70f6c68e1a.1e511655ba13c4ffd94f5ed185e36916.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/da8a59a6-f667-4109-92e5-1abd99257e91.cdca26e3da5014f46a18ae24661fe3e3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8b9385f3-afaf-4694-bd36-2e692c5c1cfd.ef0ef2c7c6c1cfc2219c5d9d470dd748.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3c58437b-71de-4be7-a3a1-2af00ba55ce5.aa82ea3c96af2ab70535a3ca551250cc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/92371de2-d5d4-4e17-88ab-ff304295ce4a.9ceab5eae8c3cd8de56081b8014d3ebf.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b1c1aa6d-64a0-49db-b96a-d3b50895d9d7.8d211938c032054e54806040b5aaa20b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f1d9464f-a6f9-48c1-b20f-1537ec8e16c5.f8ded61a96e2798491dcba85bec5e992.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3cbb1095-f443-41cd-a5d1-5d6ea8b0d9b7.8f7d50580f91999d095240aa0fb9ec23.jpeg",respuesta: false},
]
let vacias = [
{url:"url"},
]
})();
console.log("Esta mejor mrk");
