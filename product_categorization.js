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
{url:"https://i5.walmartimages.com/asr/3e06f9e3-9440-47d2-a64e-1ffcddce49e3.388091a9965f41f02cc836c3cef0f054.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/49377d05-5d30-449f-9ef3-df3152dc3cc2.903def4022352b7c90f5c59685dcb0bb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fe0d685e-dad3-48a4-b48e-dfe9a7b5bc3e.8de3ddd57ba1b1e1e97029a9aeafc22f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6374329c-8c5f-43c7-babf-3a6353e9458d.e94f65c4ed50801d36b0bae0c3f6171e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5499e4b2-e180-4b03-8470-ac99ee47e2d9.86f38aa129d673a7fa73de4ccde35260.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f7ea4d25-4304-4d9f-96a6-0d9247bf1d91.0b0c9ac4662e1865a09ffafb35a0bda4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7fb7983c-6a46-409c-9d48-3b175e9a26e5.e1f09fb17d46ddce0cf793f57fa2a49d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5657a2c7-2b37-49ba-843b-632d4b3022df.f41bb43225bc06acadddb605159048b1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3a5cca04-d209-4c5b-9804-e3116842a192.eb746804c6b33315e8d4c487e009fbb3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c9f9f401-17eb-4adc-8499-2006caa4a9f3.13d6e8c160c237b25b12a81fda593d8b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/93ebe2dc-427a-44ff-92d5-09915d605bae.046dc4012bfd9f659affd5c7db10d61e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/93cde0dc-975f-452c-87e2-d9717d38343f.a66f49f7c2cb2ffa28a54380a0e3cb12.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d06a16a9-beb8-459e-96ef-b25e5c382569.63d75dd75b306cd2e90098865506d695.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f7a87d2c-9553-41be-9073-4a9bce4c39b5.86081f96d0cc47066644b21a8aad3811.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4d5b1fe2-1978-4af8-98ec-9db8f5cdd0ce.534dda663a2fe02740db8ef987e66b07.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0728bdfd-018b-4806-a7a2-05f73193d97a.4a81f8e5114e8deb1ba09ba14299357f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e87ad851-1c45-40c3-978f-ee3ea5312f48.0dbe23886bd455d06c61127eb1f5ea07.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/11b789a5-859e-4d6a-b8c6-46dafdf0f63d.bcb1b7b9a24849589e8bbe3895e89dfa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/213c5b4e-8074-4e6a-9f19-14338db9764d.2062028b6a2b98ceb7c9003222c49c6e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2dec951d-8a28-47b9-bffd-3aefce1435b3.85a216b4608f7321c44710fac3809ae8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/488a0f2f-c493-4b8f-b841-9bffed252847.0b3062a4e94aae0e5387a7189c66006a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cbf032c8-09ee-4ccc-8a20-0591efa26d43.5f1e44cc9db1c01e1dcf44990f05b704.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/07a400eb-feb8-4f8c-989e-21b2e8ff37b6.b4bcb67b2fc9c5256618f1c3edffc1bb.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a51837af-35c0-4974-8a18-4a9f40dad77c.ee391ac47ad40839faaffd3d6ddf3de2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fc305939-24a9-4302-b733-f13f533572f1.80dde2f569b1f6129a35fbcbe14e2c84.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4d5b1fe2-1978-4af8-98ec-9db8f5cdd0ce.534dda663a2fe02740db8ef987e66b07.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/68426168-40c9-4db2-930a-0582df7be80a.2f05016da157cbe125a6d1d314f4c540.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4f5be46f-c8ab-4c38-a4bd-70af70a09011.afff3fbf157efd067d03c8025cc48049.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/57429dbb-5ea4-438e-a990-52e1fc6b472c.8ec9900c76f58097f6127de5691d493b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/63990711-0554-4577-b55f-e61953dfa475.1429989395950bf1e06ff2f70cad227c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/323f98aa-1033-42d6-8681-c2b41db5aae2_1.27072f2ea7c7ec2a86a44fb75f8df45e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/937d95ad-f71d-4414-bc4c-0f095f849426.ff813115f2467b6805e9f4e2ac5945d5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2d7af71b-7c1a-41a2-852d-8f14f62264b8.712b291f195d01bbe96d8e60a0a9db70.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bdee7d92-b3ab-4bc8-bd48-4e347719a183.5524bdd64d74d8a60ffbcdf157f89f61.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f102d152-7e6a-4d33-940c-288c0dd1cf6e.5ad2674bb94855007fe409133a5835cf.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/acbbb515-1767-40b4-948a-53072af04b3f.4450f77af54c635112e76ecabfde7bd1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ec087e8a-94e5-4ea3-bcaf-d703317fbaaf.0f73ff6380d629a0da665a87c91e5a4c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/62bd5c74-7f5f-4247-b1ef-7af98b5861fb.255eaa42d5bcf30efa2226a9f4daf0d5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/16343fcc-561b-4b1e-b784-7258a11eb19c.9c37b6fc08351dc9723b7074a0f05546.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8c127293-9979-4b7a-a265-6d424726dc13.1e9c069bc1df4a0c72fa08ddd6bee2ab.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8bff0b5e-fb99-46d9-b3b7-fdc098f1e13f.1b40300f2a55ddb7b41c2455a2fdc20e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c1f7ad3f-22a1-44e5-941c-cbda9d4adb6d.85b3745c5de019fbb527b4cc44c7e839.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/338bebd8-0c43-4d7f-a248-4a239b6032c8.dc0759635e45599fae265f40123d0753.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6713f45a-78a6-438a-9eae-cadc1d8ff524.75a217261db5e1e68fc124ae68199922.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e044d7a4-c1bd-4f08-8217-10853159cb7b.0a386ad17dc909b40ffb258ffeb5fd12.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c97d8c8-5d8a-4b88-97a5-f7665612907c.76511cb08aa21786ba47666863f3fef4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/76ea610b-4dce-4b55-86fa-6056676da8eb.bc89f65620e6b62c6c131911cb5c6237.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/51757472-e3ad-47b7-9cc2-ce4bbe1aa2b6.db8232f6cb848caa0c17fb1aff5d526a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b12537fc-d773-4e58-b904-3637af7add85.b1bb72df710ddbd98f5d7e75b59fdf5e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7b65002d-fd08-4708-9cbf-b9820246cf41.fc91ca5384d1243dffb099c121bfb701.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1b441732-0e45-4032-9ad3-eed81097c952.34c2e85d29e995d4de5560fbc6734265.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/81263e03-19bc-4332-8c0a-25a00a7ae562.d53244a5725bd55c131e30f81c18b3cb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dafff747-fae4-4f69-858f-15aed50f6488.777838f58cd6fd29944ab05c31a901c3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/22a622ce-dd6f-4ec0-ae0d-5ea1eb3a0ff2.b79b36fd1455e65cd689c7c7986fda42.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/10c5449f-dead-4058-aece-9e73ab7eb850.5e76dfe7f4102ee89b64dd4b2dd62496.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5e015a06-f918-4f42-aeda-0aff4e85df1e.873ccda9bedf0172a82fe66292469c54.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f421b848-8aec-4965-b6c0-b2f6852cbbc4.56d717d08ad22bd22042d4dc367a1d21.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cda71006-d6ad-4a36-b411-fa6688797956.37cb48a089a7c639f09618423fd1931b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/48cb2220-cd45-4ac3-9f89-6d6301a8d8e2.0c85ecfdf753a63ae64f6988a105ecb8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/25e6e848-eac4-42b3-96b1-3f1a700c37f4.c2e6a147ecee2226a827a2d0e0ef3df0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fa644bd5-6557-419b-a46b-718f57ea357a.d29855172552a5a1cb15f3174385828c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/22bb6efa-7295-472a-bd3d-136ee2040ffb.122964b9d381b66e9cf57ad074c081d6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/71479199-21cf-4e5b-8513-877b151ee509.9379393020a07d7a4c176dd650882b27.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3070dfb2-a28a-45c1-9a37-8fa24c469ca4.73430ad7a935cf2cdd2d50a9354ebc87.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/64d9db76-fa3e-441b-b315-af0bf77f33f6.a7c6443f4f6b476047df84abe5b7924d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d6623e0c-a089-42a0-9a11-0eeb64204d88.73e54b5a05862d71058e654389454411.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/435081f6-81ab-43fd-8188-e0c61cfc5fc5.ad09252f9f16ea24d4b79c313d182bbb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d83a71df-ac18-4431-9290-992d52208bd9.73cc82768d2ef064c7b8cb76a8bfdefe.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dee124ed-ac87-4a93-8b2c-8d8d855f4bc0.ea03d72bd70f0917a195f2d44575dd09.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fa5526bb-aa26-4b8f-acd2-61e465e5492a.40cc6f1d3526929ec9bec0f6a372499f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3f15d027-2098-4001-8628-515561c6aaf7.51432d3fa24789fbf67bf40e4814025f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/45397fe5-7565-4dd5-b3c8-69fecb7ebda1.ebd8a0a16e54ef8b4b4f068842f31685.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9399c8ae-5d33-4703-8e39-128d676b1486.a7428db90a13d8d19abd20b0bcbc698e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/014a671e-fd07-4784-9b49-891dab9292cc.4c0e79e85bc5e663dba14311e8e1772f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e40aec90-5670-400e-94ca-cdd2730e63aa.1ffcbb7e095ab9c5bd2606f19a8344d9.jpeg",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("segunda id van 70+");
