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
{url:"https://i5.walmartimages.com/asr/6e05c30f-6bb4-433d-ad3b-282d818ebc72.ad332dd57f778102c6b52dcb7b12b7ee.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e848985b-d156-452d-a85c-c5c38d5f7e62.32c9cd9a8714881c939bbf855a1c7d21.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/25673e21-a79f-4ee4-a951-277840594c59.556cde8aef8238fd30ac89a62b15f794.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f1040c6c-e561-4ccd-80ad-f9953c01e4e7.5d166538d377510757047bf089792c58.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/fb49fadb-bb37-4b1d-8f78-0bf817031a7a.25e947b545e7c6aaacd18c04c1c91b59.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/52d91c43-b2cc-410e-bfff-597583e7c150.7cad9d15ff5108ba3ae3c201dde54d2b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/537a514d-599e-4b35-87e6-662424f6654e.91500a49645e58b9a49993fea0d3ae43.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a5b136bc-4e13-4fd4-88d4-2c4fc996a044.f2fef5ccc15c7f8e7e09ca2a7844498b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0649d5dc-7eab-4651-8bee-bad0ce364d2b.c106890c89186cb33e3b8beb27df8d97.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c9f431ba-e7f3-4dd9-9cb0-e6211d9b7ffe_1.092115e098123f2951b2ce4d8154bfb6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c3a3f13-dc1e-415b-ba10-cf5f19a45435.63e9d6c0cd008889e611d74e6e1e3267.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/60dd07f7-42d8-4b08-8770-f641dfe70f50.6c9772524746afa9bf54fe51c360b7fe.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/60255039-3e7c-4354-94ba-7d249b7070e2_1.4dcc144f29d35c85219d9366a9a736a7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/80eae429-defa-440f-9f88-71f2492556bf.16b6a31aecb14679ccb8c194b56729d7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0efedfd0-bb29-4174-91f8-24bb482b2bc3.2e7222cbd285cf41d58e39aa486778ab.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/46f5312e-d677-494d-b753-1990115daa23.24ad6a6c1caf24c6714a0aa6b5cd4b2c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3b4042e6-65af-435f-a6c7-ea5f2621e0db.2f04937dc97f40f24b61aaf9cc6e34f7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/85189770-39fd-4d11-982f-8d9d00c698d4.6ee57b8372ad8c018566c7c9799f9801.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b94335cd-ba9c-4eab-9142-d18eb3cc38a1.d8ae143f71eb2a105a68c9f8a1f4fedc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/013b9d66-295c-47fb-911e-e391d076033c.9d4254a3b6844b8ff566d49f06891a1d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6bef0af3-1a40-4dad-9a52-30569fc4a618.33c9d423dbed4650b485df7e9e09d966.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d8bf1002-b08f-4ee1-9b9e-a048716a33bb.1a0366cf9e18d67ef136f4b42b87fddc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dd382811-717d-48dd-b8f3-5f4f185e0aae.4dcc144f29d35c85219d9366a9a736a7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ea583106-05cd-4607-b254-6decf56c75b3.25cd5ad496bd8df53067ead1d31acf22.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/68f0108a-2ff0-4aa9-983a-8c01dd81fb68_1.53c58fc1ee4dfd011b524a63d38ccbcc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6c441864-f21a-4f07-8bbf-01a7da4286ef.440b7ae0ddbeaf39eeca097122ad005a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4ef91fab-9d28-4d07-9b18-3953d36634af.b1ee07b17fbd7c61f67bfe4bdde4d6f3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ab7b586f-e088-4c63-bafc-aa73a29a5cee.bb5349093cadaa55a3190a6c7c875f98.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7f9b6c9c-6136-4427-805a-eb74b92851ba_1.4dcc144f29d35c85219d9366a9a736a7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/62fc8fcf-5162-4f22-908e-c9b17daddd6c.64ef2892048c27e78df1368c0233f600.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b09fe02c-b166-4c8b-b3c4-53849b87a51c.9afc8b74391fe986e7ffbb76e9bd8801.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9d361c76-56a0-4a11-a1cc-e56ba2efd4a8.bef5264bacfd502a9b391a74f253d215.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ef349309-6e30-4c66-8c6c-826c8e63ff01.93004cc7b906ac52374d0cf778b6c45e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e1d7c75a-5326-40be-927c-cb238c1d7e54.0bbd377db72156c5be02dd4a9a16a364.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/375d1fae-b441-4cca-9bf3-f2c9150f5002.2b91f57924c6c12633fcbffc3c386b32.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c71278ee-ccee-42ac-9eba-af91f55ada2e.b7c5085dffe18b9dbe5cbd908e5cdc8a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0760a417-f00d-4b52-803a-5a63055015c3.25982e2ea0453d4972446f6bda53f918.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/946e8ad5-046b-40da-bdd9-81f5da5405fd.353c946a10bf5592f05c82fbc1ef724d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b03244b7-4223-4cb2-bfcf-d8ec6211a852.cf6568f2ae20082bc1643f40b11b0bca.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e42c1f5d-b61f-4d57-84f9-259f52ceaa21.7f9bc41c780452a47f9621f1bfa3d814.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/28a067b5-b394-4d29-8626-26d830220329.84906c52aadb75ae3b51e1505f1b45f1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9b8081e6-5ccc-40c5-87ae-11458860c3ec.e6f2566abc7deedad504284fa40a64e1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/198c1f9b-8199-49d6-a6a3-d773baf70f5e.fa4e8a9957cc055c55d9e2fe1b76b1e6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7a70ea0e-d268-42f7-a8aa-7b1501f3cc79_1.505b9a49a7078da43babc4f9cc43e630.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b0f755de-0c55-48fb-8aec-21506573120f.a4a51d032586cb073b0e19c98ba33484.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e2896d3f-ed59-488f-bf86-eeb16a43247a.e9f34e12ad7da866386b7f9d6e0ce061.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0fcd63b7-aa81-45f2-b56a-edda726f7436.7c8b3b3fe0da26ef27c3f3d67b2253fc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0b390cbd-0f32-4f4b-bebf-acc436e76243.a6a9e92363c01162368307fba233cc7f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/62f9638d-6ace-4705-a8cc-08e8b571b2b2.6f7eb5b2953b99afe5c3efee6063911d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/08f1ccf3-279d-418f-92ae-d43f4769c653.97f22189c7352b1b42633e7dd1ce6852.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ad820391-f550-4efe-9015-2f4119c7b31c.81bfdc733385b377d2299b6c779813d3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/90d9d28d-6ea1-4606-af87-01be904cba26.0e5fbde808e8d54d95dd3216aa960640.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9ef63df4-0245-4c18-ba8a-e9169c6f72a1.5d2a2773c364e1a99c938ed1f3a585c2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/31a25ac9-ab05-4b76-a85a-a281e577da6d.dd8c94dcba6b8c572fcdc40aa7518596.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f6ad54bf-5742-4869-934c-f5c535f5f032_1.f60ec3ab3d3f3990b4994d128dd70f42.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/380aca7b-de7a-4c49-be0a-0b391734815b_1.dd301e2f6dbd61657a0a056758335753.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0760a417-f00d-4b52-803a-5a63055015c3.25982e2ea0453d4972446f6bda53f918.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/110b3ee6-a3f4-4dcb-9fb9-5ff6d50209b6.b34675ce9ff2390030e0ceb8bb00fb47.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/32bee12a-6f5f-49a4-a6dc-790b4d52eeee.929a6c0b37dffbf561794eea72100005.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/604bc33d-6259-4597-9973-a6bb66a53f8f.a6f54dc4014a3e90fb4c25e52aa2fadd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3440ff0c-8178-4420-b1d8-6463f9d7f111_1.da35409589836b49afc333cd05d6e4e7.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1268364/2021/09/17/4221f3009f354e4b83fe26c71bd2ecfa/65814f0d-a4ef-41a2-b63c-abe648a22474.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/62f064da-ba96-4be1-ac5b-563c52ba8d0c.5b68a9929e3fd28b295bdcf7e7e8da1a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/580a00af-fc90-475d-8fd2-6dd71ce438de.104492933ff4249bc8ce9904a9e28f09.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bda8518b-eb46-4c57-b179-969cc301d36d.5f5e14b3dc3e707072fcec4de5d1ff87.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8d153f7c-47ec-4074-9183-09e9d8c2d051.9cdda84f90fb74552ddba35fc20dfd2a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f94e8ea1-fbe0-430d-acf3-86aa7d1d2027.09bb3896187d7359dc36948e53c2cf05.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ce767dd0-7662-4f2c-aecd-3d0f370aed6f.88d6101990f479faed087526164e14aa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1223bc89-6a3f-443c-aec6-04dc60f7ae16.0531d565a5a5334c604214702f50549f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f35c8499-ffaa-4b57-8155-f4b373d3bfd4.7f4959a650b07b08db4f552a882dc811.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bc2958eb-8d9e-4c7c-bd0e-53f345b5de31.ee0f7c45a3a90398882aeddba1cd92a6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/90d231f4-c88b-43b0-96e7-6943a1bf1bf6.1b8c9a5a59e5f06f172c8bb5ae0ac523.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c312977f-3a6e-41ac-bef8-c2365e033e42.5cc9fb8e9dd82091c5367d8b2e336d24.jpe",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5a31e223-f2f8-4244-affa-b5211ef40e7f.b3aa8ed018a00264e8a601b9a995a926.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/15c9fc2b-892f-43c2-a140-21e75e6e9045.4d26429e4aa9f1acb8250d62988a766a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e12b9253-4454-42e8-99b6-e956170cb85e.8f3c7cbff2e25fdd847f1b0628c5d85a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7a46c74d-5b3d-4dd4-aafd-1fb5166fb24a_1.4c21d95e98df557be2d286a44cc9ac4a.jpe",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a0eaa8a3-fd52-4939-8d0b-c997025b8af1.e5056e953373d24686b0e11958f198f0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/49ad4e1f-0c6e-4f8d-92af-3e18a92d3f7e.0f605be37328dd27d4d34cd5f85b38f0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/28816996-b87e-4727-8096-b8e954cdb8c9_1.80cd1088ee5a0d1c443b3b716bc32c9e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/461a8644-713e-495a-b6b4-5b4c585172d9.3ca04db3800139c60fe700f11a976790.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/128ef117-7c7c-4276-aa54-a85c2cae5496.4a7da389fe5e3e0f465e2a1f562bfb0e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9787acce-6980-4838-9b13-9f334ed17259.2b41da2a8fe2d7859fe3536124b0c2b5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/86c69ae7-5adb-44f4-ae83-ca4a44b4c4b5.e77d280e6efd234a3ac15b899e27d732.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ab4099b7-a577-4833-9b22-a04668d73de3.f0c72cb1f735ce824881aba2e1fd0a1e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dd33e5aa-3e52-45d0-956e-1c4eacc01557.0f51af9834d59713c1506f7fb98ae55c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6777b6b3-61db-4ac5-8a7e-14e8a8cb15ef.20c0ada7ec93e506c5c365f4efcaaf58.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2b78de8d-6d79-471c-b364-a918393c360a.51a9c12b6f4f03e17bbae4b0860cdf82.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ebc76bda-04ef-4c36-9635-5560066d02d4.0c7f1ee39496b3b5a026ace3dbee504f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7f0aaa18-e21d-40a6-bdc0-ff1596f5650d.86a15333b2faac35493b37ff3fce4c84.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c28c49a-7698-4b17-b072-3375d641c1b4.9240fc0218aab5ec2fd7d0d839bdf826.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/086d2db8-12b3-46a3-ab33-448ffb8b438b_1.3dd36416552f75649e4b710ea964d112.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6be53d79-0a19-4192-9ca6-a815d10fe56e.fe46784fb4bc1909d349f149f495bc7f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d500bfd0-3d90-4c2c-bd2b-8ef0c61ea881.2c232d6258e99b42232d161c215eb6f6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/81f18411-ad17-4b10-852f-7835ea5e0ef0_1.66699fbaf956595f650bde77f885f197.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4d97f4d8-d56b-4126-b865-157fbebf4852.8bf802dbfbdaa0632a935b6a31433eef.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/22937a6e-0554-4032-935a-a159742cb585.7374636add4e6ff2634224d19f26a790.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7719358a-0ead-4ff2-8a04-839dbc524ca6.df44dab2bd243c04b4c06be2548c7b0b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7ac34ad4-4f67-4671-947d-92451b785d1a.8a56760e200a528ceeac457c7a8e56d0.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0938695e-0f2f-4aa5-9c32-1fa4ec88845e.ed0b41133bae71d3c5770fb07bd7768f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0938695e-0f2f-4aa5-9c32-1fa4ec88845e.ed0b41133bae71d3c5770fb07bd7768f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d92ec5fa-8e44-4b2a-a04f-c9a1e6f998da.d682a7c08ad83a3ce7351296058ff9ae.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/751c6ca0-a02f-4926-bcfe-eeb22216da59.6bb3e7382943cfe738acb42d8f060614.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/eac14a85-6035-42e2-9dfe-ed5506196e78.b07e9796202d2189bfd016bda38ca0e4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a8f3aadb-2ade-4e46-ba8e-bf2b6af125f4.475f660e1a8cdccc12fe874eccd7a0f7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cdea7747-4610-4a96-b102-f9ba27eadfc6.506bbe42086d8b401d53cbefd03f7839.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/020e366d-d6ef-43b8-a04b-5982cc3fa718.f58855c91286f57be1e838db4084f746.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/aa38a743-29ad-4dcc-b2b5-d122a9f9fd8e.df6d656442b397abf724c171a37ccbc9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8b1f5b0a-f8ae-4e5b-b4c6-c4b0e45cb54d.81aaea7f3d116676851698f459afc006.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9a3cd511-68ca-49ed-b93d-3b6c227109b2.2290aec0fc416cde878f77fc1f23164b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d76bcbbb-19d9-4477-9f93-bbd736a6df96.907859cd52ffc43b7b81d4f2e545724c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cf2e69cb-b0e2-4ab5-b4a1-a8d45fa3e9ac.5f4b4a0b92d9a706edac35b58c254440.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/615bb697-927e-4095-a861-176010ad621c.61cb195a2fb38fbc8ae2cdbeaf54829d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/938f3ec1-f925-4c02-991a-1ee470f995ef.2d0b823f1269bbeb9ab9ea88aa474e74.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/af502104-dcf8-4490-b2b0-7677d5994815.07f2b465ce91db49f7c07778353d9e60.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ba7c3f13-3a83-4d82-a318-4d8360655c8d_1.ef8258122854f4ab5f859b33dbcd03f0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/55c9b97e-c87f-4ead-86a5-188385cc2a10.cd82f99ce87334715223edb5c8806266.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/55c9b97e-c87f-4ead-86a5-188385cc2a10.cd82f99ce87334715223edb5c8806266.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/faa98aee-87cb-45ca-b39f-0834d77f8616.49abaddac665be5a3cc8cb39c30b7c5c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/475a4e55-3c37-445b-a65d-08d43ba343c6.6ca6281c038d2a3a9e7056a5d90b42fa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cab465dd-fafb-4f54-b15a-d2db4e2addff.c4f4702edd3cb315694c978921ddc1b9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e3065bb6-df2f-4cc2-917c-5ed237a6de59.dacd2140b2ed48b22aca122e9b2f0589.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/06b19ef2-38bb-4d9a-a5ba-82fcb5775a7f.29398d0336433f95fa3652ba0a3fb937.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bee9b095-dec3-4a70-8704-7c4ac8a9e53c.6e7f98a6bd67d1b3de82c10cf34380e7.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/492b22bb-6d38-4886-b7aa-357b6383ec19.c46e52a1f375d25e543012f33d715818.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/76c136e6-e2f9-4a1f-b7ec-a30702bee3d8.f9373ac8ad8ac6a6c5916b7d844037e0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/62a007b3-94ee-4777-8367-8ee5f70d518f.457b218cf7af5e65349da426a3b3728f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9535b6e9-e84f-4398-bff5-778f26a44233_1.8f4ea77ec751adb98534ba080e00dfe5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d8b68784-0218-40bb-94bd-f357c6a57659.01ae6bde7d421d96187abf80f787a5f2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d2ac1ec8-54af-4192-8b26-c16acc639ba5.1159c40d36008ff37426ad678b661652.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/48b55154-a38d-412a-a9eb-df994c5154c6.9d78da9e600ccfcde46bb7aec349334a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a1a8ce91-96f8-4b9e-a622-5a105f1ec723.56aceef1bd24e4e60f6c8eb941e9439d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5a7a1d2b-e4fd-4b69-bf58-e17b445e202f.12ba3b98bc85d18569ea7debb6c7837a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a68aa58a-f490-405c-b01c-6617fc5de6e4.2aea5a586534f99dd2e05a5c21202488.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6632d35a-a271-44ab-bbb2-12d6122f9e26.020bcc3bebe35d3a751c1f6d8d6d9983.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3cdfbd4b-8607-44e7-92cd-b48bc1d43ba1.17f443937728696b8318e5a26fa23ffa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/532c62a1-d594-494a-b794-c93bee6c5515.673f933682367e053703b5ce57cfe3ae.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/29921697-d930-4bdf-8f76-7e768b0fc339.f9f3b1cf614200641b57852ea512fc7c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/188c923b-0f26-4cf7-86f5-0b5c7714b4df.49399c3ff900ddf92eeaab9cdffaceda.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/462793cf-bd0f-44ff-9517-3046bbdb2211.44d7f833f0690c820503bc2160dceab6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cbd429ab-756a-49bb-9803-651737c9b28c.b95b0bd1b9ba53498db94e614811a4f0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3b30c9d2-b935-4c1b-a849-ad7c7d3d102a.728030dbfdb877adac228cbd55250f29.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9b8081e6-5ccc-40c5-87ae-11458860c3ec.e6f2566abc7deedad504284fa40a64e1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d81fc75f-f8b5-47d9-aabb-9181b9fe7741.4d0597d3b977f769daab387d7095d6cb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e731b28a-6225-4365-bfea-819a6e17408b.17a0500731cd792b2f2e7e494e1e5826.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c9e23f0-8782-42b3-ab73-e5b1ca0828e3.272e28d61b14b2bb3cc4c4c854ccd3fa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e2a8b424-9d2d-4305-9767-6188171d7b10.90440b1c4b541dfd090ceea547138a58.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4e8d1d69-2fe1-4553-8f85-9de16c44ecf8.aadfd77e56e4016c5e6a7a88771fcae6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2b081a5b-a83b-4565-9ffa-d111af9008db.5e4d0404ad02827b2bf955502e924400.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/541bf5bb-7f2d-4cdd-ab42-1fa2520cdf7c_1.096640e721cd3ca0b38cfbc0ab1d6cb9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7ff77e24-d828-4017-994e-f1abdc796dd4.04507b2a43a7567201907253cbd56c23.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9e82d6c3-0659-473d-bfd5-0516edb600fd.88890df1f55a8ab4b01ef1fdea91358b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8e05586b-be30-418f-9405-84256b0c8b0c.ae264fe8cab33f41b7c60f29d4d3c2e7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/989e712a-ac4e-472a-9512-654033740793.108c059737eea9609cd51a776e029efd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2a4780b3-d5e9-43e4-b0c3-3f817e30473b.5d22b1ab52b2d14b52cd595e269b5377.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2305084a-a9c3-45d3-a785-8b6efcece829.b3c311f6cb79bc61741bc64558651787.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4013f24e-026e-44f9-9e29-b154d4654fac_1.aa01675831027819cb260fb441bb7830.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7f4adf2f-014f-4a90-af58-c29061046892.4b9c7e9ab508d18b1d4af9b5277b4bd9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c8a7e227-00be-43e3-80b9-82c520578b41.6e13c6ce16d4f50601a2408479413382.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ec35f2cf-1955-4b3a-8f35-7441f7991862.f956a7f7f705664e14252a78f84ccf54.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0c0cc75a-bb0d-4dec-98d0-8309dd422c91.0e5c4808a6fd6daab683b25e7e3df12b.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/2067413/2022/09/22/213d159a3ae2467f94c30c9ef781a85f/05300895-3dfa-4e2b-87bf-016f0c457fc5.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b53602b3-e854-47e5-a8c5-a52deeaf2fe6.978ca51fafc591593e63b604f19c4b5a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c307b15e-3493-435f-ab34-a1af6655f0dc.8f8383b52446705c3c2a6f6547bc8269.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0a3d7225-6a51-4106-b18e-adc5cd99a5dc.c17bd4427eca4cea8c92ddbc762f26d7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/95692ad9-74ec-4c6a-94ab-cd02b6fed1e2.7f65053816882cbec22fde2eabb2f9bc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/63c084ca-b95a-490a-88d9-291a35465b8f.a85620f056ced73ae0860886d453a8f0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d5475000-1dce-46cd-9230-23139ec76ef9.b5f8daa1e222d3c4a58d211157e50180.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2936af79-d80c-462c-8963-b64d87a12a14.63b2ef9ddd9c45b68fdb3b3e1bd5a385.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d1df7dbd-dbfe-4d4d-927d-96ecf8123dec.cc7755bf0b85baa2b25fe239b56d37eb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/859a440b-ca65-4a1f-bcbd-9a20c0723815.b820a4736741b0128760fc9b2bc0faac.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1268911/2021/09/17/22b9664763de4d84be4781ea5dfd66da/0205f6b3-8ca4-49da-8cfe-9d276419115a.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/da8d0076-6c73-4df2-a1f3-005c1cc1f8bd.84605b88fdf438eb2d93eac90ee65d67.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e10e249c-1b22-40e7-9900-9af9c53053a9.f474e20a35916af9203bc5f347b32a18.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1234365/2021/09/15/0750f396fa9147b79e823ad65e4bb315/ce49f828-1a4c-4a18-9125-581522a64e3c.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/638ad409-6d54-4d77-a80b-7df2d7b1524f.7c5b2847b93854258034b891429a5c43.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c7d0a5f4-c40d-4e35-b599-5a2bc431e46d_1.c18949e9b513c865eec6741867adf5cb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/59816a7e-25c6-4f80-a278-c3c80285f386_1.f17dd01a7eeb33b2e0d00fdc443ee6c5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f9a14e81-f1dd-410e-b88c-8ec10bd84cf8.2b9ab2ae3d3fa8b48546be02da6e86a0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bf6055f1-67e2-4ed1-9aee-1ad44ed2b560.c3093edeb7baefb95fb1832355694377.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/51eb9c5f-a1b0-453f-adf5-b9f91a24fe39.9bcb973898bc805ebd6f52895f548b2f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/410eff10-6e3d-459c-a01f-c519f353f436_1.577900925883fa5b447b1f14a8100c9c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8a9b7c27-f067-41c5-8604-7ebd2d7d268b.f80fb75f4a7e92efd21744ad28f2c9f1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ea13ec6b-451a-4a06-b6c5-4e72bb8c25ab.56c81edb441c933321aee38f0b491073.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3403061f-489c-4097-98af-ec9f5cecac16.513f4543a7595607cedd9416e7750ad0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dd382811-717d-48dd-b8f3-5f4f185e0aae.4dcc144f29d35c85219d9366a9a736a7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/96dc9aba-5206-4cd4-82fb-6aa59896396d.efb742b7e03818b7340d7ccf832957f0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/54d8bf92-3c0d-4d43-a006-8772644f3cb3_1.4dcc144f29d35c85219d9366a9a736a7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/adf1d6ac-65ac-4653-a2e7-35fb1d78d444.90d6a4d547cb9e2f345accb14bb5286f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b948c8c9-05bd-467e-86c4-95177fd5f46f.a09eaaad1c6acb428969b28a00f3a602.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7d5936e9-4130-44d1-a235-76c5da43e0a5.a285f630761909678155ad7a0e567809.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1360026/2021/10/26/085d7b85ce0d48769427850540dc19cd/fc5acb97-bf62-4a23-83d1-4a08a644df46.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cb89aecb-be60-4862-8b2b-22fc69cdc05b.4bb09059a3a0faab4c7510f32600092d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1e9e6606-d4c6-4c06-97ef-dfd9970149f3_1.ffe6ec4c6d6e9d366a017acec9063d2b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bbc7cb55-fa4b-4327-867c-de17e3a06696.d9785e9fc1425ff100c6ecf3b34bb6e2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c5713491-eb8d-497e-88c0-80ff5d2b1a18.d315a28324059be2dfc687784fd8bcb9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/313a0b9b-ae36-4dcb-b831-3eb7409092a2.30e178077c91b9c26d1be74d2e32e8a0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8d7fe872-ded2-4ea8-a201-49dc313d26ea.94b8691212eab03da895cf78fb4209dc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3707d5f9-2863-4f17-88d7-88559caa15f0.3d3a51e604365fbf0e38a5c574da6fb9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1dd4a0dc-35b5-4eb8-a62c-ab913dcdb949.344108696a5d702c9752809416ba75cc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/708ea696-7b7e-4709-bccd-94f361424097.701164dc6c381f57a92bbfc0fc82fd74.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f77c2712-98c5-4044-86f0-5e60278bc08b.24586ebb048899bddc167fc209b6385a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ed384701-4642-45f2-9f10-e47eae0d7550.2c37402c7b289e99a5c11773fe98e814.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6e103d6b-8948-452d-9176-1faee6ea2c31.913f2311839256833cc3303df0524981.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bb64dbbc-0200-45e2-90a8-600d9c40d3f5.0a559d9e2d5fb5f46193509be98d724e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5f59f9bd-cdf6-4cac-a84a-a14d2848497a.3b1f60c372eab47b88e7387205c7d2c6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/56b18078-c0d2-4a4a-989b-9d6dbe4d6e11.0d495289345c670bf2dd593696436309.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7c6121d0-b987-441f-8184-41bd9d1f055c.892f368527d92c59e49f8299cb67e1b2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f0356943-249c-436d-8d7b-7c3ddef9c252.68b59aae4fdafedc3734c84999a63154.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9c1cfa84-f470-4e97-bbf7-b513958be598.c45994fec83de87a88349e3933ddde62.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9fdee019-043f-49be-b3af-e48c6dc12f7d.793c77a7659ae2011fa7bc2f676b19d7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/866c761a-db01-413a-8351-7664ce46f033.61b9c78b74b0b49f371b73f19af04bb9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/10de46db-6375-49be-8e1d-53c6e843ba5c.12e49c44543af23373fe0027ca7c22ca.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/495451c0-b6c4-45a8-8c02-b1c77bc1b03d.65c7f9a57f0c76440ea47a0b9ee3374d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9dbc6f65-f4c6-4054-a2af-f931caef138b.2d450bd6baf31e9106caa03993611725.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1348518/2021/10/01/126203fc488c4772b657bdfc530ee702/3e3e3034-1de8-4d94-8919-9f9ba2dc0fab.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c006918f-c9ec-485d-91a5-1a893e57f586.696ea5746567049babc292cc9a104170.jpeg",respuesta: false},
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1235038/2021/09/15/43ee7a0c5b9847488b59336715c45614/f779b978-57dc-40e9-afd8-820a1a522279.jpg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/14d0a841-a6de-4bba-b6eb-e3fa76c25a99.ce9c02111cef73b67db44ee1051c198a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6e83cd99-ace4-479b-a314-05ca417f9b66.916ea364515c4858d14628ca2f159fe7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5a32df78-c00e-40aa-b3e3-d858fe73076c.843f44afd58479501ffe83b5c0c2d402.gif",respuesta: false},
{url:"https://i5.walmartimages.com/asr/866c761a-db01-413a-8351-7664ce46f033.61b9c78b74b0b49f371b73f19af04bb9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bd8047a7-2611-4a43-ab3c-1a5bf0d7b670.e49417303dbd40663eec296a3cc932d5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/176d9040-6515-4b7b-9051-3711ae648a37.ea82a5201ef43f84840843782127e7de.jpeg",respuesta: false},
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
console.log(" patria 226 plata ");
