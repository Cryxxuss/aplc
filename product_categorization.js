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
{url:"https://i5.walmartimages.com/asr/461c2180-5226-4628-8c72-6268711764c6.464641fc570d976d95d97566ab4ed448.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5a29c73f-7282-46bc-9619-64e7812e143b.82ca0d8af243b2184579afa31c6ecef7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b14e29b6-7fed-4ac3-abfd-b9456d302205_1.f438b2231e123f1e2b962f0d7434061a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/36eb76fd-1c19-4db9-9f45-79a7aea35a7b.0d45beb23f4ae23be92f86e3848b322f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a2a17b1a-be2d-406b-b335-8736d3e86992.027da58e5fc6f5ffa27eaba25e99fc3d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cdc668dc-f33b-4ef0-94b2-683487cd4871.decc8220d9a3a00d4c2c30806723d8a5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ed4a8506-f4d1-4141-8c63-33f317e62ffd.9691d655f79147d231abb9e6abae4680.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/01174bf4-e21c-492f-b376-1a5808a29429.a0d6902ea85c165165908acac70b212d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/875d8823-f47e-42a7-b0b3-c56b6f1fd701.bffa61d0bd5b021229b1fc59b275f316.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cca694a7-17e2-4b0f-9dd0-9f16698aefc0.add3bfcadf7dc616ecdcba41a42e53d8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8dd147f4-6e00-493d-99ab-541c129df53a.ee475384f8ce7ba4a8b12d51a37988a6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/864132a5-e327-4c63-a86d-9d21f6cc9fde.ae14a59ed43d11941afa157e54256893.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/615bc03f-0fa6-44ea-bb22-a5cb99ea3613.d37e6d84584496e45ff8ba3ba87b1f96.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/07e5516a-d9dc-43a1-bf48-e72d0e50662c.1a01f2cbbec8a7baa715aa7e54a120ad.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b2b75cd3-ac74-4f5d-8fe6-cb5b3865a1a7.7bf5817187b47b89cebb5cb148912178.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ff06340d-bc37-4ea2-ac73-b7c15270164b.4afb9ed72a1e371000b8494c1b5d2949.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/df325834-6e9e-4b1b-aade-cb6c3b178397.89358b1fd59aa9b1a5054ad0186e02f8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c974d92-8d04-4e5a-acc4-2aea8a92fc36.5f91c9933d04d8970226551fd38be46e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c65b24cc-ba75-47e0-b66e-22d4f6670375.e26e35ecf1362854c84287c1b82dd4ca.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c9047099-f4d1-47bb-a97a-0d0f938204e1.0bc083e734c1bb2326611ed294db40c8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7a0485c8-c590-41ee-91bf-030d1635a74f.d1a6bbdb42e0da42fcd99394f9dc342a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6cbc9e84-9ec3-4059-a5c1-6a40457fc0da.a56011880c5f8268997126b0ad512c63.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b543a0e9-8834-47b5-854f-49615a8997ad_1.a7204e2b6aa47eaa9bd4ed5d4d6d0ce0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4ecff2dd-98f6-491d-9913-e80cc0ba3cc0.8ad8a1c3e1ea9959194089f7d1468743.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/18e37aaa-67e2-479b-af87-a4ac147daebc.5e2883c3d34e327136732d883ad166c5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ff094a45-1c74-4b5e-bb27-c71a639b0411_1.1095da86fcc89aebf38449f192689cf5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/62fee56c-b42b-4457-b2dd-b88a5cb234dc.14d3cca89808538907a59f6b2c7ed72f.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ffce27ce-912b-439f-b8ed-fa07cf441677_1.ef33141e605e17a5637dc751a9dbba8f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cf5feb08-c4f5-446e-9133-6d28729a1791.d292118799d0a856dbbe0f57879b2230.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ba39ad3a-5e76-435a-9780-6dd488291c27_1.82e6c2ffa79be92dd5d2dd38bbb07dfc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a6a700c9-0114-42db-9a78-a5f023a1af46.5523785d6868114f69baef0713df9bf3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cee82387-ec5d-414e-8e81-8e4be13fede2.b41664cbea0b415b3d38b73516c279c9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/74a578fd-00e5-48fa-849c-c8324422da63.84d5fd0de2166feb931887a1e98028e3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/74281958-5733-4af8-ac39-446641fcd2ea.efcfd26bbb7e5da6782795abdaf09020.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0b222b1f-ba46-47c1-b8ff-e80ac0b17eb9.618024b90e89d993e27fe0bd57db8890.jpeg",respuesta: false},
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
