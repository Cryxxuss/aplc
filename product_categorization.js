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
{url:"https://i5.walmartimages.com/asr/f60f1b53-2efb-45c2-a25a-e6c4298cbf1e.cb16181e454c3febdd633d41df569bdc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/306572de-bbd8-4608-aa50-a6906cd2d756.a203fdf2db7addf00bf61ba5cda94bca.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/df8aa3d1-9101-48a1-b3e7-8b89ea665f01.7d62a9dbc53c77600ca8a49e6002ac54.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cea94361-631c-47f5-8dd0-f3ec0b7a2d93.9404a704929e4cd673d6717719115e25.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/73d60e06-ad60-48b1-813a-2a7966ec2e3f.8278270610bc24993f42c7032597ad1f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/433ac8e6-4670-4801-93bd-b9a56bfa892c.dc74eccb54a7ab93c88a88839875143d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9ac34dae-6715-41be-af07-24db1ca9fbae.073f89668adeb50c48b49fd3b139cd69.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1223bc89-6a3f-443c-aec6-04dc60f7ae16.0531d565a5a5334c604214702f50549f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4192f2c7-3621-463d-a578-9f6df626857c.bfc136255830f58667189ca94e31fddd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8daf198b-c209-4f7f-b7e3-dfb150a9368b.fe466b30c3c844207791f50526cb5f60.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7015288e-059a-416f-9bc7-57a78d563993.a2e4daa73fe57fb6250a054212c33250.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/eb55df0b-8921-47ae-8bc9-434f51a85707.9dfe3ca545b01cb4a81cfc6df81763d3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/28fcec86-ee66-4b23-9d31-7355ac1fa8cb.fdda7ad64993858585c6ef8ddc341ead.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1d64620d-7b86-4e4d-9fd7-c267f1cb8a53.952f7e4d20b069ca8e8749e7e469d547.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b1d383fe-e93a-419b-8313-bfa4bf314330_1.46087303f41f179399576fa5e6b0f1aa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/83779aa2-da85-438c-9514-99aa2b33dd98.a40a2b94eeddfa600910af9ee8cc8d37.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e42c49ae-1038-4da1-9fcb-d31b5a2cbe93.631a881e5081cec5cbf11110abde5663.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/185605d2-0ee1-4760-a814-3e8be785c332_1.474ee673387faa9edc12003eb2d811fa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a18cc7f2-7b3b-4379-8bb4-4a7168bd95ca.c137e14f828d2663ff4e2d34c7c2114c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/401be67d-30f4-4a83-82af-62a0b159b8b0.27f52cc4e9a88f7b175778dfb480d5ca.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ad798b65-b611-4076-970e-977fb9afc9c0.a42dbe3ecee2ad7da8003905d4aa825c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/057842ac-fca3-4bda-8ce8-3ccfa624ad30.e13ff5a144b1845a30f524203742d7b2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/aa363c4a-dd3d-4448-97eb-0e17b730d784.b6fd1f481d38ed1cc827ca0cf67af1d5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d68f1a26-22d1-4010-8c9b-0bbcf80f915b.10003aa357fce0eb01094bf6957b4f49.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/29d5efc8-2166-463d-9730-795e025dd7eb.50125a063c78c6b3f0bffd8ab123b9ad.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ab01b0d1-78b4-4ae9-9412-7e25e0c45df4.e6b04e102967a39224eb96da190ffa76.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/41eaf655-9237-4041-a549-42d38b14b057.5354df1e19807f1a698573fdcc27cfd3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1f7b5b14-7b0d-48d3-bf88-bed27677b924.69c58dbc60ddb4dc0b4711a7b396541a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/efc372c5-9e11-45f4-98e4-9638a73d773a.ef37785f93b4cc00390fa34dbcfd785a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/40d48368-3747-4ad1-a424-cdbe92587794.ebf23258d5ff699518e1e89b581d0dcd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/67c2f1ed-3d50-4b2e-ac23-2172fb582805.5ce71aca03aa09418fe83bf4981030a5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/78de1ada-ca44-4769-8730-1b38546e47c9.20bc659a1476a6c71cfa3ceb2eb7a02b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fc0a8d10-7501-4cdb-8de2-bb1316ca2890.eefa678adcfbd96220c6d915152d9f56.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/95f94902-e206-4f0b-89d0-0b074ce2183d.e109a4f957b8c45fdc8b65e80f979936.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/84f33679-ec47-43f9-b4a7-a1c02c85a4e8.a2d8e7bf41fa9bd553b10e19a7e5aaa0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/96d1143c-275e-4ec5-85ed-74450386a03e.c79e5f8e61b96775e4d2c6ba5178e19c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/300afe70-4be2-4dae-9aa4-6fce3db7ccae.57207f44cab1c9164460f35a252d1d7d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0ddfda0d-9bc0-420e-974d-bef11f273294.e4354a2dc14f565853fc468f6c17ca21.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f21fecbd-e19f-491b-b4d0-f10bf232585c.b83e6c71709d69c9836e0b23c4287fad.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/464e5589-96f2-4cdb-b823-13e9803380b0.c4e60518888dfc4d7c46e4cdd1a784e5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/89706d26-5824-4991-86e3-a9e890d4f071.200a92a129d0c6c97fb787aa155fd5bb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/85f681f6-9909-473e-bd6c-cb8d75eb7695.ee69ba3648bfb4a43fff9e76e7ab210b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1dc4ad98-ad28-495c-82b4-7e8ef2668e84.c72810a2d58615394eb5e19e392a6499.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2d2e816f-baca-483e-9d5d-ca38c78109b3.08437049ced2db32a2de37a15ed1e646.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8424c687-04bb-47e8-95c0-d4ce4099aecf.c2007ade5ab3233d0dec71fa95c9584f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c5cb17f9-5c39-4671-8d83-458582caab86.a534ce17517f10e26b60485d9e548d05.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f99086ad-5266-458f-9fab-798f3f048f88.2cd7b0b32027051a628af13cb6369120.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cfea6e63-8de0-4abe-bd1e-61e59efdbe57.c9587bbea882e68de6e16e6879487de2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/156467db-aac7-4c3b-8678-4faa17e61bcf.0ba5bcbd23ebe0cbb9b69663a67313f5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ae532b60-41ac-450f-9b5e-d0201db68045.1a04a52adae5a7ffd9161f176b70b8d9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/048a9f62-e8fe-42d1-9050-f1fb60933bfe.2d053627d1f2174fddbf0fcf1776ed4c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/73d05dac-110d-4a9b-aaa7-770c4bff3069.47a793dc71b3b7a702be90c7fef7608e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7856fd6c-a784-4930-ae83-13640bcb5d9f.9f8d536a4f063082fa5e0e561272b566.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a5bfc478-db53-41cf-97ce-b82762f168b9.e210e8fcf0b5bdd0b57fb4077691164e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1a0f75c6-8bf7-4a6d-a49d-ad41df9c1d96.5f6473712bc861fc40b0054420f61746.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3da028bc-9cf9-4461-a202-83db4f058a60.9d32913311e71a9b57d3876d88577715.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5df82927-bbe0-4004-95d1-7b99e52ac465.9d1e2f7e9c92bc95cf82833f09506a3c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1060a805-348a-4185-b846-129ffd622b4f.1d5cf803065d3166928f81be096688e7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b2a76d30-049e-43e7-848e-e1863c80e65b.64d9316800d65212e44ce8d115c4ffd7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/99468c03-1b59-48c1-9770-e192fa36c07b.aaaf9ed838373053705a2d3a322e625f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ae01318c-1f8f-4551-a8d8-2923148c6896.2980c5bbf6d8d0741cef1bb669d6cfad.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/25e4e878-f23c-43c7-8b65-63b339d46ae2.e5804d4c84e0584fe344150da6b3c3ae.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a5cc05db-c96d-447c-aff2-b2ea86fd2298.4d6cda547e2b46ac071c4079ad995d84.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f5a75efd-9ec3-49f0-8b99-3b10c1b77ee4.f3aab2455249f682124b5a2b17eaf872.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/396fd7f1-91d3-4aa2-a909-88f02c297e28.3cb33e647c6449c46fc9e1f5de79f8be.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/091049aa-8a2e-46c1-a23a-be628bcc1c14.122e03a39b7dee00b79ec39ba5451292.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3d0d1665-3ef5-4903-83ac-518b129408ee.370c89d1eaaa714fdda0f2811efeff74.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/78f0552c-94a4-400d-a651-92bd9281eca6.cdb2d0fe3cc1cbee27186c306e06ebc3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f2724f7d-445a-4578-bd59-945a6daba409.2cc7d479000ac5fccec75804c78b1a23.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a3c1621f-09c7-49f2-a31e-be258967797a.7a6d36183b5c600c4bb08070fe5a727d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5fc52e0c-4120-4a4a-9c3f-fd43ea24af34.8971759b95e10a993cab8f1e41c80694.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7180565e-b19c-4de7-911c-b8748abe06c2.46e215d9ae06afa7f513919f73a49dc5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f111a03c-6598-497e-a127-6dabd32b5bd5.2233e5a839281ffdb37be68d69b28406.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c79ee097-ae4b-4f8a-a31a-4a264c7f42cd.afdb81338ec318534b0f5c3089604f07.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7cf4243e-43e7-4529-9acc-fbb784a4c651.4869ed271072fee2043903b3c2f1e7b7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d8bf1002-b08f-4ee1-9b9e-a048716a33bb.1a0366cf9e18d67ef136f4b42b87fddc.jpeg",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("segunda id van 70+");
