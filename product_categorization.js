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
{url:"https://i5.walmartimages.com/asr/5e2f52a7-ca77-42b7-90bd-636834482ceb.01883472fbeabc6584147b2f62c0ef1a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c6f8cbae-8ea8-488e-8f6f-80a649a870bc.fb717eb27e7fef8d65444fc7730cd14f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/667ae477-1f18-47d7-b240-bbed37e4a9d1.1b26bfec988f4d10422da2784583484a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c490b84d-289b-4e54-b4a0-7abad441dda3.784cc6c6bf82e51bee93332918ba1405.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ba69a255-2c78-4998-8b31-22c49a5d9d9f.be64cb566127cddab71c561761f082a3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e566a3c9-f919-4563-81a7-97c413055079.ec28fe518e59583e65036df6dcf0d4cc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e616c84c-77ce-49a9-8c9f-499a95cb72b6.c0197d4fc94a48cf59be3a04d822f679.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8b8a1182-192b-4065-8d40-3844ee9edc87.4c556eba7f730206e320a3fb64dcb0ec.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/234b94f9-29f4-4f36-893b-98e0ec7667c8.041543d700c7601566a8f1efdd4c9dfa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ca1fd891-1d97-4486-8713-c55c8ecd0a50.a80b1d8550dd75868190131879d2ba75.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b85404bf-0555-4dc3-900b-7aa17133a6f7.a10c77dd78d9eacb490f28ece2ffc523.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c501cae4-1010-48c6-881c-4352e58b738b.23849596da72db6f82f6edf9207b37b0.jpe",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f6312fea-29b3-4c60-aa6e-98e9232789cc.e142412daaea5ad55b90ee9957ea4fee.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e9cdc8d6-d009-42cf-9293-9b82d49fc84a.7d38dce5d07159961379e7cd0b28ff94.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/120ff024-ecab-44f3-ab88-7525f126777c.29bf786cd590d73402165ca17c09939c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/26e6de73-d549-454e-a9cc-71448ddcd9e0.af575a1c371ae1a8312067ff47765a91.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/af717c86-8441-4f3f-8ca6-b17e3a153319.10828f1b9a3dbf8f83954144c62d6e64.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/98522343-987f-4ade-a1bc-fa22c5d5ba03.8db88a1ba1ca65f336414403b2fb3ec2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8ebdd10f-2551-4b8b-a3ac-d7f01096bbfc.13dae1b3a1823d0cad5e043fee804421.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8b4389b7-f182-4f88-a069-2e184a308177.e6e9ff5782d6e142b7c258142eea0885.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8ad2a364-e099-4b87-afa4-bc349d8cde89.f6c2e6572aed953d9523d505ea6c48c0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2594daf8-1fe3-4214-8c72-c5401f81cd46.ceca24b9ce68a5e1d41704bee2d9deda.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9ae12cdb-6a3e-461d-a650-8b78d446031b.8a763d4c776e497295c8c09c3a436257.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/51dc3b5f-f6a3-4d12-9edc-dda568ac297c.620117a9c6f4d31549efeddb2257673c.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d89503b0-e5c8-4683-80cd-8b855d029471.7709a6781206ef89c0b68e9112b7b8fb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fcb3b9b2-adec-4d22-b7e0-174a73c006ae.e0a2e9e59cb88994e37c94720a42bddd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5931f385-2f9e-425d-bc73-d7afa594e3d1.fd77307d2e75ed34ee381f12fe9a50c9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5ce15df1-74b0-41c1-8efc-f1be813fb454.ce5fde8e32c3c59acfd82e0bde805942.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/72ca2f84-2293-4142-81cc-ed2008f408e9.656c34eee3af0083b11dd59ce03a9f55.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e550cd6a-ff64-4799-bf62-de77afaeb196.bb96ad7c50d0eef3a9b6ed1f15943741.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9c51802b-895a-490d-a881-5e05427604d7.10a1776a2930193afd6663d29f510dfc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/aaf99d38-7154-4fcd-b6f5-7e47f0d1a724.4437e9b41a028aa9fdc45b83845de2e2.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/84b8d512-16eb-4359-9cc0-23e3b4f1a031.3ce4382fbf46ba47a8212922aeb0af70.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f57a8111-de41-49fc-a360-97a4c638964e.5f532f508e631b471060eb166713b5a2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f933a6d6-a326-4fb5-a8a4-a4746b7bb60f.dc1ec3702dd8cd50d0ba287abab0025f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fb8208a2-5181-40dd-9e43-62f6753b15df.2d19c1f00463c4932502bd17ec245050.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a0735e4d-c90b-4b5d-85ea-c9e8daa53664.eb0fe6362933cafa9f5d58253ba59c8b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/47773a12-2d06-4490-9fb2-ca4dd30bdd38.3d9dbd0c52307c8681b5b53104eff465.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ace50267-cc4c-48b2-907c-6c711f2032d9.a83b260cc59abc5b459c433914d4b5ca.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/11b0a59b-d113-46ed-a356-d62494a7119e.c9f458c70cc3492d45a237a7b1e053a0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/40d546c4-1bbb-49b7-8eab-06b480711d1c.624edea41e64918abc9bbab55f5bf82c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/69f03f8d-ed7b-4b45-9f39-12b2a35ced0b.f6f9eada640a7b7e6d0a2aff4463f45f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/55d6fa90-ee64-4624-8d05-a94af8c93fde.5930845baf852f08795713d9e133f62f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/029f47cf-3af0-4d1d-92a1-297b7d5d0f2a.4959f563d08a50198c146c89989877fa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7a0d6e82-77c3-46c0-b151-817f340033b5.13309fdfd446370572ea269b273467c5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/21976e18-2865-410f-94ae-d392655a7f72.3da56052844334505e5f88b42cef04c4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a8e74275-7627-4948-b6ea-f03a00d83166.c2504e83495604e194d2ba31658a58d1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/19a27011-87ea-4155-a591-1395d0d0f339.43bf37ffb27751be3743a0daa3b6524d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f149550a-7a44-4fef-9682-84f2c7cb29e9.852112385577f2a9c9eec82379c779a6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ef175309-5e80-4d11-ad87-a402fb6074d5.3dba2e6d843e481f0e2f3c8493680267.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a1b63d12-22ea-4ddd-8211-4110a561f03a.5335e5f7a806ef8afced370bb3164a9c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c7ff9907-b6f7-49cc-98c0-3b446ce8eafa.e311bcfc0d3c4c0a883d6496c7113fab.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e6fe62d7-eda9-4476-a5a2-dd9e44205af5.9f5ca383cf48978526898242a9f753e4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c4773bf0-e9fe-4634-b50c-46a5f2ccbadc.07a0057f6535900106ddfff4ef0e76c5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bbcdea8c-1025-4d42-b431-529aaa6ad031.a6385181dd108dd2c6170c77c75684cb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dda04a50-3468-4727-af21-d1eeadf0d3d7.78d8dacbba8e55902eb19479e00a596d.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cc5b7c49-d0b3-4475-a3da-d0940de64aad.d557df49c86538030fddaadc15587e72.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e06a8f2b-b275-41de-8c82-688a0e351afe.90cdbd7a15098e123f077967f535f49c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/03f74058-b74e-4236-9044-a70e22fc6a1f.12b61512e0d2bc212def7ea5e633c01f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/09d6135e-50b1-4640-8355-43214e066079.0560a88e5c2230117f843942ef75679b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4406c2b7-7394-4e57-9596-53fe5fce25ff.b0c0b42234e0223c363d42818b6dd48e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e31c7805-1e53-424b-95f5-9e2c1ea4d326.64268e69fcf97a6ba5c9fa47180bc2ad.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/49fad911-efb8-44ea-988d-086aebc98e81.d3744dd5a762d525f31501a9bd0c667b.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e7e5e8cb-8667-4c6b-ba29-44568542692e.9cfaf744c2ba8c94e14b43763ff6bc0b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fe836e44-ff56-42f5-86ea-e1eed217a3a3.21d703f8965c91bb1d6cd15d1cc35e43.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a8e713aa-7aa7-48a2-ae0a-2cb654884dd0.ccfb8308e555afc33f562224aa350854.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/805dcf6a-6b85-4791-adb2-defca488441c.f8856510e4bf207f025f8ff92d483218.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/12f770f6-6ea1-401c-813c-c25d3d838b99.f164ec9f6107c1d6662d41d8b46adf8b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2dc869d3-e15f-4ac5-ba37-011028706bbd.64b9fa9df3b3bff658f111f4902db325.jpeg",respuesta: false},
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
console.log(" patria 229 plata ");
