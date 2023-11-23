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
{url:"",respuesta: false},
{url:"",respuesta: false},
{url:"",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log(" patria 100 plata ");
