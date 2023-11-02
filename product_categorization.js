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
{url:"https://i5.walmartimages.com/asr/974623d8-8652-42fb-896e-6b3e57920dec.c515e1782669a7cec66255dac9923981.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8d567ba7-c6e3-437f-bd6a-cf11bbaa6219.a5bf16810adacb04d6a44f695bdd0539.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2dd3c7c4-5ba4-4316-ade7-23f7bac1d4dd.2d08aeca33d32ecf61d564ef2c43d227.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/67d6ef14-c553-4e79-a627-c6487163e7f0.a42ff852dc14d12b3c47265f491f000b.png",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0fe44a31-7820-4c15-a957-973bf93626ff.1e32ba0baabc97f546b69a66caacc5a2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ff8cccc5-8725-4593-8ed0-9b41af3655ec.c9e541c53df7adcfea5aee5c1f7b6c2a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/dc1404e3-64bd-4a47-9936-4b530c1a4c8a.cb75b226e18cd15988315daca82182bc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/25ac8d78-3c4f-4e7a-9964-a10ba0c5ef12.08284dead05d06dd3777173e8d268876.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4c7f0e4c-f38e-4272-a5ed-e44161f7f94b.02122bd95b3cc86d41885e47dc0bcacb.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/958ff4ca-72a2-480b-a901-5ad9c979bb45.46062e3d26e03b6889e60e8c506c2e6f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9dd287ab-9b10-43e1-a29a-6c374c263a60.aaed84ea886e37fd9c96f8c610d8da61.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/46fbb014-4fcc-4c48-8cde-87c0f171ba4c.c0e1653133ab10c9c60207936058ade4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6d885b8d-d26b-4e92-831b-e55835a27061.04ea96854dd8eaeccab46320159ba9c5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/890a27ac-0705-4fed-a2cb-0c16377e0c2b.416c96c5cccdc44829e70a8cbca44f04.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/855f308d-372a-40f3-8213-5a21a39d0552.333fd8f9b1c026c66e5bdef61f32e07e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/df2c846e-92c1-47a7-8ca0-beaba34b83a9.90fe55c25ea06f45de8bf316ccc05d00.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/81a02bcb-631d-441a-9eb8-dfe309c3d37f.a93acc2d5d4d9e46095f355961b73440.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b85c7fdb-dbd2-4190-9a1e-f12d45db0063.67fe4b22d41f0c3e630e2b07e7bb5725.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/547d7029-33e8-4acb-b6c9-2f73be861f32.b12192e4c56edb003a235a256ca7d4b4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/55f254f1-d66a-45ce-9727-937d27f8d6da.f27fd5c525358eb719e276b84de32281.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/74b3dd20-d85c-48fe-8141-7ebdf27bdb83_1.f201aafc8743d2779206860d30ebcc16.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f1299cac-c4b2-42e7-811e-d5859213fc4e.433e03f1cc7ea35a8e0275fdd463b91e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c8a14085-b0f2-4103-ac1a-8d97e9b74e25.dfa11d39f8b617071690119472faeaba.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/496cb246-0246-4f4b-a806-20507f9c0bb2.000beca53814fcd9a92d080d06865d55.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/559abfae-026b-40cd-8e88-4561b6c71d9c.25a8c14458d6c6d9560a0e00e578b308.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e82333e6-b104-4bfa-a521-84dd3934667d.4632af10bb994ec7a8876e54ca4c181a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2744c46a-13d8-4232-a28e-a2a6dc2aaa0d.730ac1d716a55b23050336d22daeba05.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cc50690c-adb8-4581-8d41-83ce3253cd1d.eaa2f7630845bf201991f402792aa0bc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6b5b7a49-ab64-44e6-b283-74816a8d94f4_1.bf3f44a864cbea2f0a3318f0600dac87.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/afa5d157-361c-419d-8cf0-9521805b8f37.9542d60f61de4ff9915aaab878c09ca2.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e4fa4a28-c5fd-46a4-9749-1350d4c45501.9c3c41af1a3c737ef2dac8ccfe31e961.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9436c7e6-72f7-4259-8ec5-e9db805def0c.9b6e61538425dc6f2b4f3ca3f5bde703.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c6246120-091d-47d3-bfe1-47400ec1ae75.790697adbc9b505ab6add0ca1997d5fd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1d1f7974-373b-43b2-aadb-e56d5d8b5267.8e07559ea1e61489f2f6824123008fa0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/38bfcf4f-3cde-4658-80b3-8a950f1e4ad7.7cecbccd7eed740fc72b127009c2c689.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6debc67c-c02b-49ba-9dc2-5c821e6f447f.a4ab84630281124a689395c7b6747749.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6da8912a-0d8d-4607-b259-7e1d13eadb4d.ed295428f5a7b8ad70d0b59fec53cad5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e09ea414-1e21-4549-9c9c-7ba0ddb79959_1.1d6e41b6f48420e37594d7207e1df19b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/79e8bf98-c5a9-4190-8eaf-6bad04bdf2f0.73683320850ca2df51625c0760efe0de.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/628c1dbd-61c7-4291-af60-19a540601a32.d04f23d501204e42ac768acefc5fe8e5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5cd3f38f-70c1-4989-a47e-d89d2c5e6c01.2a9cb6ea36bc4ea65cca115cb9ec1c16.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a6e7fcb3-faa9-4e10-bd4e-57c68fe98292.59e83b45b803a03b1cec04c373c0c9ef.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a3a707b0-bfb9-4522-8834-c3af4019ac3d_1.a62e7fb7dd47df9b0e9a0e8a1e7b2c94.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2d0304cd-c019-4276-9d29-a2135b8367d9.4cd2d822fb41fb7c2baad03996aec998.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6cf18900-edf7-41fe-831b-86f42aeaf91c.5f46db72f3e269d2ac6bae7f7f60e180.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e4cb5ba7-43d5-4c73-a3aa-81109718688f.af47458c84da8ffa95c7ffdbbcf40b1e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/537c4966-c9f4-4f53-87ff-e595ad6f8f21_1.c6429b867a4031a2070820259d7964fc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/eb4500f9-d7f4-4be7-a390-32d9dfae46f8.ca8ea7c8007d9ccbeb8fef6bbb306d58.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2f6ba2d2-6aa5-417f-ae35-3d9ab79c74a5.bfbd6d35fe14e31fe7b915b2c334c81d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2c64523f-49e7-4fcc-9cf6-09ce66f29815.987e2b1174fda044e77c33ace8e5c07e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4a1c3dac-7f57-4533-a7f2-205ab119226f.e362145520e7955da0f2320e26ba11af.jpeg",respuesta: false},
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
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("Listo poor ahora");
