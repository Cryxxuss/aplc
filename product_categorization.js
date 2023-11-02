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
{url:"https://i5.walmartimages.com/asr/7b34ee55-59ae-4b86-ab06-efe489907b21_1.45fa3b43c978e46004737aca3d010797.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/82f50721-c0db-41f4-9be9-00140ce7dcc6.d0c34e1b4e0e3c7fa34d5a843a56a0f8.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7e5c20bb-c26f-42b9-893b-11ccd5269ee0.d8bd51954f48fbf8a168d83795a6fc1d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1c98b872-cd2c-4d12-804f-4df4ecbc4dc6.9090d1cf7027bc40dd2b9b3a35fab0f6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ce5916f5-e4b2-4781-bb6f-a310d06af0c0.d1dc0f773afceb8188b86f55e1adcd5d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/117d5ef4-fccd-4adb-b427-a9f830f633a8.24a310ab051355e8a5aac64ef1946f5e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ac88687b-1628-43ff-bbde-8ad7f1eea4ed.46e4153d8b23c7b92f72eb5071956e81.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7913b3ad-67ad-4bf7-bc60-71abf79ac01c_1.cb8ec49a9c2e020c44c802e74f3cfe67.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/48718fb9-e333-4dbb-8c56-5e3bc51493b9.bb84183d9bd217ba16f20b3cb16fa22a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dc0df2b6-5b26-4403-90f0-9059f9cc0e07.fe50e248bfdd2c31fde8c0f01f2ef11e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c038968e-6287-4f9c-bf0a-a1b657c107e5.5869749c2fdadfbe7096e9a30ca6ecef.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/746e3c7a-72d0-4f74-a7b7-3e1796c7eae9.aa6290ad730c6215b36954d391451247.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/eb07273f-70ce-49c4-b1c8-52812ab68c1e.aa5db62bc3e4263a21d6e228ff3898d2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e4f42e05-1724-4a98-839e-cdf6b1e0b464_1.d321d5db7f6271564e0224ebc97a6ca4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/070bb2ec-2a72-44b4-8417-7d50dce855a5.f73d33cab5b0c5c79db3fc06f03789f1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/43bb4555-4ec7-4b65-adac-94ca5c637fa4.8d3865633092fcdec1197f8ba97242ba.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3cbe4647-c2ea-4d6a-9462-329dc7b182b9_1.c4864a5558263b0b936cf41355ef3915.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/05dda826-a859-4a6e-ad45-75ef60a86320.c4329ea42e06b1944f568e1ccc623daa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2f58f569-470c-45b8-a56c-275b84b9b191.126738e68cb33282cfa370437bc96917.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/de2ec803-06dc-452a-99f1-ab98ece2f5a1.1c5c2346c405b90074e99f66b74100c3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3733e2df-649a-4796-88e9-b1acc21968d1.2dcb5478828c34c4f908e0836e4abfeb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a49de50e-4903-4b0a-8e25-7326a08a3866.09cb976d43b7b15df962dab08e3444dc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7cbefed9-9b74-4339-b803-29810158889b.334d9576592023cbc354890dfbd8797f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c66745b7-42a4-46b4-8193-e381349ae9ec.369b164acba00871a25531b4cdcdb743.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ea077a82-0920-4661-9666-fe3035c12a97_1.2ab52e149794cdfb4191a9d489c53007.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3fb5cc30-ab47-43fa-8055-05c12d3a06c9.191e051b1379aa79f02d32d8b9a36fc7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9bfe00cb-c873-4afe-a431-4746ceddd996.7a642953a3a9a5d0e2c949d75e42c028.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dd0259e2-5de3-47ac-8cc1-8210cc52d657.9583365a2b9f1942c6a4ab171921e3d5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e89808a0-0857-4348-b819-d678e1a9c341.69d1c9eadc10f44bc2f4519f4f9817ce.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9efe64ae-cd26-4555-8822-52799355aced.f828591ba332830bb102f3da8f9b814e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/966f934b-4dac-4572-b44c-cde8a5bc9171.4e2ead4206e49bb0d7db31f06cf4ac93.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/576a49a0-d1c7-4910-99ef-06933065d669.e20283c25e6ba6294ff61fa11b994784.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f8adeb3d-5e42-4170-a090-91b4b0ac95a0.c36bf0fa3f7832fb23003e6961d637cc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dd6afc75-1e54-44d2-b223-dae9b72a5f23.88e805b5578397659d1169796f257e2e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/860e8caa-b06e-452f-a5cd-d8924eb06563.d422f90ca8853533dd39d060844c2502.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/613629ee-258a-4969-856a-c9de9be407d7.2e6b8899cb421fa28ebdae94ac74a8fc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/14972a83-e75c-403f-986a-1706c6af89f3.e7875d91ae870629d422e918bc50eca7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a9cf05a1-0c8b-4efa-87ef-08ec64ce73e3.840838695850a3fb051b1ee379ef346e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/95b24b04-e3c2-4d0c-a5bb-b9f26c0ad720.6555d0b8ff40ce1a0737c29ff7b84868.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0a20a3bf-4c62-4922-ba9a-1f6020169337.1929d54953730d044ed681bc0cc0893e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9a35a16f-6ea6-46c1-8f5c-43edda19fc8c.fd3cf13ea779855053074cf0644a4476.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/215d422d-a581-4ee3-ade5-b52087ad3b10.71e891e79591b6d1070ae0a9627123d3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6ed106c0-972d-4fea-894e-4bf24703c9c1.ca04f1fee72c7e5dfbd29c5536d43568.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0d7c4c3c-7c67-491c-91c6-904db5a10248.00d3be86d207140719c0aa00e3a1236e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ae3699af-814c-4acc-8105-68bc01631644.bc109962373ef307f8db96f93e12ec6d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a3339870-c556-4926-86bf-9f2fb85b33e0.9077c8ec7b285ebce7932ebafbee7de6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/647f6fbd-dad6-4bc1-b2d8-bbcce62a64c8.1116b9d8d956612a69230ccb501bbbc6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5a74d430-d222-47f0-be6c-94dc57b400cf.021bc9b0c4b36c7faf7ea00aa25ed4d5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f21a1bea-cb36-455a-bf76-d56a5099c716.f5c44c9edb4b3f10deb14f6ea846e4a4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1477e7e6-21e6-47ae-ba67-50a879aa9686.6a3d47d353a660a950087822d4b1c67b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d5f75b3c-0146-4d9c-a5c3-45c640157717.f8150956d23dc7c1b4fa4517bc237e6e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c3f61d2b-9ae1-4df2-8e79-2d5aaa2333c4.255cebf0b11098f34191c7197e421a3b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/84cb1132-547e-4f7a-8b1d-a0e8c1e68aee.089740316ffb19001647a764eeb750da.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f6aeae7a-4cc0-4a73-bd12-e45cd2bd276d.9e83728e1cf7cd78913b0b1c8866e8f4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5f213a6e-cfe8-4279-a8d0-14cba2a86edf.4da3196149996347413ae59b0e6b7bc0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/92f63519-6cff-4918-a2db-484616ba9019_1.b36da87a8319b8805c4ff765a94a2ff6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2cb2592f-8c6e-4ce0-b37f-c1f9fdc0d193.48a0058a3bdae72941a4e2a84693150f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/aa9f3178-3aa9-46c6-a755-966434170ee4.2fbef3bbb0c68d91c77cc15daf2d543f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1a54dc0e-0c2f-4a88-8f5c-3e9049984b45.76ff1cf2366379355301d966bdcc7da7.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/498d435a-2b4b-4783-9bf6-37f74525b1e2.e97827a182e0c96d5880973e0427e4a4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5db16c40-4c7f-4ea5-aaa1-fb1c71533aa0.ad2127f4bd522e0e176061e0ab5056ba.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/40ab41d6-38be-4744-9ed5-1172afc8224d.6a24efb1810a8652b2a287e8109b721b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/17130315-594d-4e2c-aa99-c2677aa4370a.acdb971151763db7314f4cd6b96fb176.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/34ba6ce8-a5ee-4646-9026-e69dc7ae4db4_1.5af8d3b908433efe2378ded7304ea19c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cd512bc2-e817-4ea8-8fc9-a0ccad5dea6b.07e0485b0e57b77fb3c1a004b4f02c94.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e96acb8e-fc65-4502-90c0-d547e4efc093.14643c5e41a8785402f764a4fb13c522.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1e4c545e-c621-4008-8468-954e0c43fd9c.42047281074e5b18956ce12e611c8c23.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/99cb63c6-dc7d-43e6-8068-3ed557010dea.2f3314b9f5294c86b55f55d71d7b38e8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/825452cb-b181-4235-a3df-b63a8362dccd.db338df728d69a4faec12301c75bcfc1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/63d7fbc0-eed6-498b-a644-bd8f74291517.0ea7d12343e2dd604e8d5031ef5c6a7a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bf7228c6-3dcb-41da-ba54-48e7826b3dbb.59534a3119ce9015f950445817ea021f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/13481ef8-7c0e-465d-a565-ef6c803f9c5a.b95958a6d42d1ee4bac4b04e9b599d73.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d49cea24-a8ed-419c-8b0b-ee276e3cc86d.dfc87deab8b7b68971b03821acbc480f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/488e3800-b471-486b-9388-76127531ceed.78ea078cd9db5959b2f17827706bc0a9.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ef0a5f6d-ea32-4c87-abcb-5d96421b6349.fd6448c76a5bbda8cfa5895c013f121a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/92906e2c-6999-4c85-96f1-1cdad9ae14d3.f759bcbe064e578a5dd83ec02fda0990.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/eaffa969-114b-47be-af43-96602b0c8bfb.bb7e5bf5f30adf2ff718f9b698021368.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/507ef473-6464-4a77-85f2-461b0c816269.898fb6767dea280bcc34c69b1e2d3995.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c53c62e0-b255-4f29-acd3-e43f65e7f8d9.9446a6ee76f69986fdf9dac4ff3ba651.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/149bfe8e-47f0-43cb-ab67-c33ee9c9135f.0a6742991cf7d94e0db6e47e050101a5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/de93af1b-2070-4141-b294-c415c0d24c02.5dff03340e1699fc4f5f444655b75ca4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/035d04b2-8d6a-44b0-a98a-c43e3995f990.c7d767bc34e0fdf87cb86ab134656a1c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/aa78a3f4-196c-46fe-a4ed-47a8e2ccae79.26652b59aaf84c7ba2e28f08e0822d95.jpeg",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("Listo");
