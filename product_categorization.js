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
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/966f1d06-9abf-4757-bd4d-c506537a042c.cd427714216d2f90032be448909b0dec.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0b962b1e-6527-4036-8109-cbaec9f1f206.501ffd4d3f24e192233ae238213966a0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4a217337-55d3-43c7-afbd-90bd110a6ffb.a2f7d072e05b5f98434dce38f02c5803.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1277967/2021/09/22/08777d1b1fc84e0c8d87123d8939a9e2/e43c6f87-8cf3-426c-a51f-747e679b7c85.jpg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1255350/2021/09/16/0b2941418b9d49c28c2b95c880ca0db1/2de3e168-c191-414a-8504-05e67e18c40c.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8318a645-6509-42f0-ba97-36ac77a46c3c_1.22f95079b2435f7a2d4db620e26d6ad3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b89b7a0f-fafd-4b49-9c33-1523c224156f.772393d59b029ac9c9d8f233ae292515.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/244b5e18-6cb2-4264-8e25-ff2c5233249c.27b25bcf3480f518e740fc8843257f1f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/234cd69b-dd5a-4510-888b-5431417786e2.865ad671b01248050f07e17837c5b119.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2748a45f-0de2-4279-80a6-19db1117e294.54dbb1412907c3eb27ee749b69274a5e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f7c86811-c05a-4224-9946-4b9e0ef9fb2e.027dcc90fc0477dcae3dc18630791f6a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/db6f2f85-e840-4ad6-9bee-f495771fbb00.8ce5fb69e72666aa20ea9dfb773c9964.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/20d8ac2f-7767-4227-bc71-1875daf80d6f.1a12cddcd87fc1e18d5721d9d2b8cb4b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a42cb2ca-2d9a-417b-b155-ea544b87df64.d6e829c67d394c35a78bb93cb28b0605.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a27a8dae-c4e6-478a-aa28-fce6b3b0bca6.e524c59d11740fd32f511e900287df2b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f697d514-08f6-4dd5-aea6-99e36ac878e9.6fd63aaea930d199a4ac328a61e13a0b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/daa454cf-a1da-4fb4-a040-7dbe7f570b68.91285f94a5276c6b7a9a15116d34be65.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/da21edc4-d4a9-412b-bf7f-8accddd501c9.022f3660bcde4051b213566711b91d1c.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f009ec3b-01d8-4412-b76d-d83d90d04090.09408325815676279dccdb8ad426fb3e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bd04348b-1e4d-4d06-8918-6425d3a6eb9e.52f95a039d65e0120d6c111e99341e3e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8a53bd54-ec53-495a-a831-7fdeb09d6677_1.14d27e59be16e89ba4f9149cce34107d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4ea5506f-28c7-4ed2-97f6-8538fbe94d66.7675a69435a1952a12d624eb8c8d7184.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a7b75ab0-1ac4-45d9-be40-f8da03f70ad9.0b4bba246a560bb0f7f1fca811d6fb84.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/39a0aa39-4114-4f36-a1b3-abc887c440af.a529d12910a5cbbb622d24e32d724f11.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c1d3db66-b2a3-44df-895f-14d999bcc22b.f67951e2a68fbc6bf05af9241cc7bbfe.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/85449ea6-811a-43ae-970c-bd9bc77a50e7.80671921b19c97c6fb348dbe0c39a9fd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6890f6a6-458b-4a27-b22b-3c66265f0370.51175be89a5331984a124f9550adf750.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/209eb817-22ae-4eb2-aebe-4e463c629526.95b0cf3585ad229054dc927abde451c0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f233efd8-2028-4f57-a07d-0296ecd224d6.90f7b33b449a196eb0a5365c29330094.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a64420e2-d34e-4818-8071-fac19974d3ca.d46817a6165205e42e8dbbb677df8e16.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8a5df1ff-922b-467a-83f2-1a732a3efc8a.68f474745f5aebe9ad94d7b7a7370516.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b202d47d-43af-4b7e-b611-469626fecbf0.28cffa717d26f6ab370056f87e86e465.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6b43cb3e-f2c8-41bd-ac41-0f385601f00f.64e45a79bdcc8b3eabd7ad304d3ba9d2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ab800971-afa9-45ca-a1e9-963d65c20888_1.a65dbb1afcfabe5a7b7870ee8d7bdefe.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c1af1695-11d8-4b40-9100-0dd1fe7ffeb7.0b4c603410a3a9b0625c44382cafa635.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b49c62f3-c49f-436c-919a-8637ed95ca70_1.817164f81388585ceb05399da4994c34.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/68fd673c-a518-43cb-9edd-ba457a2e7da5.1e6cd1aacb65734d655f4810089b0283.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c50f2907-6919-4dcb-bbe0-9245ee14f009_1.7dd71667238948cb23c4d020482adf46.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1234538/2021/09/15/1fac161f521b476faefce434eeed1960/e36fcaae-6d81-4c65-bd40-7638c6a4bcb3.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d972e5b9-1e52-4d2f-a384-04abec28cf02.57c5fe95104a81c04698c13b5a461cbc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/41272935-837c-403f-9539-dcb18fe43d9c.509a06264fc026646683255909ab7e9f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a59b0e72-2fe5-47d2-828e-4ae63546a584.5f2623120d1fc904707c3b12289294d2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c85a6f11-336e-43ba-bdf5-2ad11dc97a8f.36b1f913ef2f95d0ebee653b69583141.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/aa05aeb7-8dc0-48d5-a559-8f2a8327d4f6.30396f0cdff51c836ad7d1c43d9e05d0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e54bee20-1522-488a-b624-cdca601af613.b62de236883b21ed4f7588dd0e2c6ca3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/507ff624-ab68-4952-9d96-b4bc0e549a9e.f7679a42705aef809c27fb19eca87282.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8e513c5b-50ef-4b0f-af44-912f5ff0b20e.78395d8d030bf5d9f55628ad2436bc41.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532826/2021/11/19/0a17f4222a1148088c08fd030fd890f9/d00e530b-017b-413d-94a5-ddb523a644e4.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5e3f1021-5f71-447b-a05b-b391be15c713.3f3691d74be2d7f7c66619b699f564be.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/36363734-e7b3-49dd-b563-cff5716551c7.6cf4f8069cde72169efc31a55ac5a5b7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/da46e39d-3959-4fe7-8d0c-9355b23932e5.c29c58a695687727b540c5a44d09cb55.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1254728/2021/09/16/07b1a78258d94c699a03348a5c800bac/b1d7dccf-5b10-47f4-b9e2-eaeb69bdf159.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/499f0191-4e22-425b-a82f-4c28e12d3cfc.453e6374aa00811b009532419d768981.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4d10def7-8e2e-4852-97b6-b38376b16497.e265078e23e76b00b0dbfa406ec81b21.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/941955a4-509a-4eb9-9b44-2797e07bcb89.45e56b0ae6cb37ccec6db256ea9fc5ca.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4e4b4f88-a581-4afd-89a7-1d77f2479724.a2acdfa59e05952c6a4aaf5434befa4c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5525ace2-d202-4ede-92d1-840e721baecc.d3a9418939d69845b89ec0b236ca1344.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/67c9b74e-45ed-4ad2-84ab-72239c12eb8b.a466c3c5e43d1d96d90e65b40663dfbc.jpeg",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("Listo poor ahora");
