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
{url:"https://i5.walmartimages.com/asr/ce956ca8-651b-485c-aae2-27ebb1b57a71.a288fd7372277a2055ee52e325afa42e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b99da477-3f76-4b11-839b-fc8c60efdedf.c20b62557bba058eabb36a8f22f7702f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ae835f05-9bc5-4641-9bf7-7057aaf972f2.2d24f1d775cd471c95534aca577f8624.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/aff8791c-113f-4ce5-a3c2-7136fdc5a839.3c4db99f5798fcb5772f4266d2fcc644.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e1d441c6-46db-4066-994b-8066e495d4d9.e216a694235295d60c554c6248ea3895.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9a100a20-e4fa-4ba9-8536-42064592f383.ec9724ab14e4c8fe220b06123f5ad89d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ebc52d4c-7d7e-4ff8-a19c-434c698c6b15.5514a4b32958946b10960a45053b914c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/180b4c64-7286-4e35-bfd7-1a25f7dcf077.e158aa4d31c43fbb8d4fe4db371d5dc5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a8e74275-7627-4948-b6ea-f03a00d83166.c2504e83495604e194d2ba31658a58d1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d53cefef-6563-493b-b3bb-a655b5789aad.e847a060a42b4a121b05dc389a080e0e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f1e8fcb9-8e62-4fb8-881a-37a0112b4725.624f4b906d2542bf32dc7084bb49c3d3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6d748e68-e3bd-4a7f-afa8-89c41dfa3852.b711f66768577bae1a73f8ce01c33b05.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fdfbc186-3861-4bbe-b076-2e93907e0334.9d4531b8a28f2db10ecf8935ef40d8ad.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/60ba5c3c-e016-44ba-b3b5-608406ea2b99.bb1d8b40d2e1ca56fe634de17ecb3332.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/db819dbb-79bc-4e78-92d3-3552a91f8458.80c0ce63c16417f246a7ea5c7f7b49d2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/762b7998-c6ae-4290-b764-47c8def44ae0.3db125b8d5f95b254e31403bf3b0a8b0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/164b7ff5-d7e6-4918-9f75-50a5570473c7_1.56afb77825ef752f59716225651119ec.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e5609872-5bd7-470e-91cc-ede7d9a9afd4.5b459f54d865a204709721f16aea5bdb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/69c0b4be-dfe5-436f-ae1a-2aefffbbc320.444ed65591aa2cf7a316e48b24a4cc8b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/14ea1d01-0976-4282-ae25-859aa94e1889_1.00afc7b7d1da8c625d80b84b4f50791b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/223ebe3f-f1f6-4906-91b9-01c0cb0d61ec.7a935c9ea2e7f82bc5609e405e84e843.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/88f109c7-be4d-4bd6-b162-95067af8ca94.4c462704771fa8bd8f87fea3b0391098.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/59fe044f-e05f-4815-be79-7805295ec45a.26b5ea8db1102740ff1426acb0c42633.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6b5da628-9e20-48a1-b9dc-c43c81473ba1.7c91d5a4d4a33cbca07abb4eef4cfb1a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/66f54332-37af-49b5-a375-cecd574cde49.ece2ac9c0ee965892556e61dac40259f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/46129157-f50c-498e-bd32-254f7fa54a13.d6f31828c8481e4aa099a65ff418bcfd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ce956ca8-651b-485c-aae2-27ebb1b57a71.a288fd7372277a2055ee52e325afa42e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8cdd0042-4ec8-47c9-98ed-ddbc8cb82fad.fd38f3513c3129dd0f3b3ab604846ffd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9d4f9602-1af7-4076-89d5-1b59b3cb1f1e.1e3b10725a45feddad183e6b0930e18e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/04b0165b-7936-48c4-b6fd-a722d7bbd65e.d2f1e637b49df84a0ab027d9606d1218.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/631edcb6-e7bf-4c0f-9e34-bb33a020f0d4.298ba92cac9190861d49bfd896ffe418.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5a4ba41a-da20-4464-bedb-8ce05f6cd885.a491974dc72e902c79fce0e6a8f958f7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/280e73b7-a616-4a6d-90b6-8d52ee143753.17c574896fbf6a8639fa05b81a96b91e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fab2aeb3-d000-4640-a08d-767b98b1bdfa.63c589604dc139b421974aa1b54dd4dc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7371783d-1fd1-416d-ae29-8f27a60c463b.cdc4db866110db2aad3ec064c085b2c8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/067357c6-0649-446c-ac04-f04f2f2541d9.0779f4c7d49ef35f90815c5333d1999f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/08a30b51-1669-46dd-9291-4b63112f962a.23be3ab2c97d074a7c6c51326d3692c0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9499195f-200a-45be-ae0b-8117a6d05178.6d663d0b8c9a2ef6619d38081cd4e3c3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/655630c3-b576-4c2e-bfbe-197032b1966f.938da2ba78a03c337133254de4c7f8c0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b99da477-3f76-4b11-839b-fc8c60efdedf.c20b62557bba058eabb36a8f22f7702f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f07c6d41-e870-4134-bf41-f7ad9a0fe12a.15a609f79d5133aafa84656181e9625f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/efc4b917-ee75-41f6-ac43-286eee162c7e.286646889dc5ce7dca7b951ff3f52b56.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/42374d31-58c7-4765-8352-469ee89cb398.062488172ea43738d879c0e240889173.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dfa7ff9a-e5a6-4a63-bc1c-ffd5dc22cdbb.09bd73d67ce7be697c1360ea76050c4d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c86e0a5b-47f2-4504-b19f-87d2e8746d76.bd11fb3af78a3cfe190b13094d9458ba.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/eb9a2e3e-7342-4944-873f-cd17928de35d.5a5c1c568bff174d1119c3ce35d18de1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/148a7b5a-97aa-4bb5-97e8-0b7e61bf2bf7.1989268071e1d286495191ea749ecab3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/61d2d747-807a-4d0e-94a6-aa31926388e0.4bdad138b3f411e1cccefe7fcccb87b6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8bb902b5-87b0-49ed-aa76-e16a44976d23_1.2d0b9427578bfeea71558460e0b71ab5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/da55cd47-77a4-4229-857f-c6e2a824151a.18522831a46bb4a9c9c14b721443df95.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c54bfe9b-e4b4-4dbb-9ccf-7fc86ee59470.4fd89cb2d5d6d8a76bd1f75a6759dbe5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/805bec9e-655d-40cb-99ba-78e774fbc160.83ef379ee411014a0a5b6d66c4d7a5e3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/62b6349e-eaef-425c-a41c-a279e3c1639b.2c9855ff8ae4a2b8d26f6a0e88cf5ba1.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/31bb908f-d44b-4707-a60f-2db68873db18.f2ac2cb12346e9eebc38ac7df5198428.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/59a05714-f263-4771-ba0a-396af3d71360.ce0c9f157de0a708b4d2683283feee62.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c21459c-0388-425a-a7d0-e4220ddcb52a.135f371a6f937370a42f754a8d7440c8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/40d546c4-1bbb-49b7-8eab-06b480711d1c.624edea41e64918abc9bbab55f5bf82c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/69b04248-6bf1-478e-ab8e-65c90de1ec10.2a8280b522340123753ced426aa0a7db.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e8efdd88-ef3d-4f03-8025-28263f8a1476.07981fef5ff10c60971bf8c2f60a84e5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8eff819d-2d4e-4fec-b33a-ea8f42e1f886.92db41ed1e26ac5abcde3bea58830880.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c5b1cd25-375b-4883-ba31-edf849d96845.4b4024967fb6d78d69d150127b32a82e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/234b94f9-29f4-4f36-893b-98e0ec7667c8.041543d700c7601566a8f1efdd4c9dfa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/805dcf6a-6b85-4791-adb2-defca488441c.f8856510e4bf207f025f8ff92d483218.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e566a3c9-f919-4563-81a7-97c413055079.ec28fe518e59583e65036df6dcf0d4cc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ef175309-5e80-4d11-ad87-a402fb6074d5.3dba2e6d843e481f0e2f3c8493680267.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8b8a1182-192b-4065-8d40-3844ee9edc87.4c556eba7f730206e320a3fb64dcb0ec.png",respuesta: false},
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
console.log(" Nuevas task plata ");
