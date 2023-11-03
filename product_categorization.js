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
{url:"https://i5.walmartimages.com/asr/0f8486d3-baf4-4bf9-9807-4fa083c613d4.851fea41994d0545670e3322468da59b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b4f4b962-6301-4c26-b6aa-cbcd030f1420.576e9098fd9e9a30126b90b66f5421ba.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/abad3f03-025e-4e34-a84e-a8f55adc69d3.be0b0494f0d489b23ea263664812bac4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9bfe1a9f-a818-4ff9-a455-0393239ac8f1.e43f365ecf171b7f309ea6ca7e7cdb8c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8cb9d4fd-b06b-425e-9088-e4404ae19076.8de241fe81abe6ff691c3f7a3fe00efe.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/25800127-fbb5-4501-8a39-87a9d7afd2a1.61a6a7682127a07b2b6c990b823e40d4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/36a654ae-85e5-4541-bf7b-98cc3cd24dfe.8438c729ed5c33ce8ab801c89abb5363.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a43b100a-2f38-4e8d-acdd-e0c83140b263.902e46d858f200d2ec5b20e1fe71c576.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f9d5c1b7-f980-44d6-9932-8499a2119e66.916616129c31b10d01f6f850781783aa.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bc2bd4c2-66dd-4633-b61e-07ca0f57ade4.9f99d58d1512e0f42288698971fa0d5c.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/49ad4e1f-0c6e-4f8d-92af-3e18a92d3f7e.0f605be37328dd27d4d34cd5f85b38f0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/95f369e8-b54e-45be-8476-573dfd67a77f.6dbcee12ff53bdc570b551c012c37008.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/25800127-fbb5-4501-8a39-87a9d7afd2a1.61a6a7682127a07b2b6c990b823e40d4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/38fbfda4-5671-4a42-97a3-8b18497d675a.9c5061d96b8a0938606c48d9022289b1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/45bb0382-cf93-45bc-abbd-94df1c615f61.2d6fc3a17cceea06924456a45769ae2e.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5162ce38-56b4-40ca-8f7e-1878346006d0.a2184d7a965ecac890eb6e027bee802f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/851bfcdd-24fe-47bd-88e7-9ed3a8dcbca8.e9818f265bcef72eb8842645409e8a82.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5b8868b8-c7b5-4faf-9ee1-1ef8270a83aa.1dc1ca5fb4c87ec0fd7b44113e6ea69d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b71f1f58-565e-4c79-8c6f-a4209f0c80ff.844e485b930ffa84174cdd93db155ba8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0649d5dc-7eab-4651-8bee-bad0ce364d2b.c106890c89186cb33e3b8beb27df8d97.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/50bbc493-d3b8-46e9-b068-33ce5669e212.daebcfebabd1978a60d448b2e368d900.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d8ba6ee3-b846-49bc-8499-694e0336b131.3413f79c7a9477ca7a80cd9a975a0811.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/906711e1-a0c0-4d24-b4ea-395316f778d0.78a515f007db457ae1ba4bfa8d45de09.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/a433cbad-de62-4420-8051-afec85c43c68.4863f409bb8963c4512ee052897199fe.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/71543ec9-eabf-4e61-9b0c-bc628a9dfd3d.d0cfe36708a89851098801ae99b2a517.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/8225eb82-a1b3-48e2-98d2-693e3fabdfe4.bcd093b0b46ae8ba60869800f29aa81a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d57a619f-d1fc-49b6-a470-d7950871cc20.96315f44974675121639615e91c958c5.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3976294b-6647-47e8-85b6-970b7cc599b3_1.91e6dbf31a30c54412a81ba7d50dfc90.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/b807c885-ebbd-41dd-9490-0c6a1fb9d750.6ed1d030e23f74e465c24a366da67866.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/259d84ba-d70f-4075-a403-63540777f39f.3a4dfe4523987edb4a6294dfe47c2e3f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/c4d78ea7-13e0-426b-825d-62d9d33e4b2a.3639acec0adec2c10e6f49a1554eba49.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/365fecd0-e095-495b-9042-8bf895e2b31c.9687f0258003702fdc05d380d1d6a574.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/cf0ecf62-e3c1-444e-915c-bfd8e1fc3155.fc59d13633f13ec5fd09485a5b981af6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/3c6c564e-2bae-4df6-a54b-409b26f141f2.6c092060f793906eb2c93fb7acb904ff.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f42a7705-0957-4942-83b9-2f22df287e7b.dafe1168deb8ca14166405483a4eae37.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f90cf285-b5ef-408e-bb2c-3982cab61555.29d8cce4ef2073e03dc7df3e917a2cda.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9a05e5e8-6368-4644-8d24-908b5cf0bada_1.c945fe537cd0be7a965e12579306a25f.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9e2a1d74-bfe5-4f7f-ab1d-bc2ab20f390d.f47d022e2156f227600bffd44d37962d.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1d100f74-d2bc-4314-9c9a-de8532cf0a07.29a7936f35cec41c81211c6fe62f6b23.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/7f6732b4-d402-4155-bcee-ab24493eae6c.973a137ca9af245f2894d9ba4f049449.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/9bfcccdf-51c0-4a6b-972c-3b57822ca141.f837920fa581f73f90bcc3efdc5b31c4.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/d8bf1002-b08f-4ee1-9b9e-a048716a33bb.1a0366cf9e18d67ef136f4b42b87fddc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/16059eb3-4274-4648-a8dc-ba9eef084b0f.659df3fe5a7f510eb362a53e9fe0da61.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4e8fbcf5-4236-45ee-91b4-45d6265b7503.bc9ae7c87911d1a863ef8a84c49212b0.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6dd49d10-5aea-4716-8d20-19cfbd22b386.3ab30fdccd2ef258e7d8ba4991f6339a.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/95015172-74ee-4bed-88e5-1ff09daf3494.fa8236073ac97b9f2febd0dc1c5c5faf.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/04a10847-0b65-468a-8278-ef25b962f39a.d699c1e1dade358c8f5b1102d762a159.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/16258dad-0271-43c8-b257-219a0a63291b.a5d66e08a8cc7a08f57798352ac6e3f3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/de41f72f-e7e5-49e5-9c2b-f07b8931123f.65e96903b04a03abb69469e8a74ba9f8.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/39ed3a6b-481c-47e2-98bd-0fbafb6c7fec.5199a31429e4b523469115a47b88125b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5975d123-4c10-4c2d-9fca-305b529a3d6c.b2bc7d0ad7caad09f0cccc1451816a39.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5d4c202a-faea-4761-b067-9d90d807bbdb.8ad4d2b761506ea6166b58dd26d08256.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/6ce03dd1-c7be-499a-aff0-e6baaf9b5246.fc70384cac9ed3cc29fe7bbaac62ac37.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/45592b49-e9ed-461d-b447-7c14fe4e04b5.6a838309cb0243a0b99bf46315455eca.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/801dc15a-51e1-43e7-9751-1445f365224d.fb62a88c4eafde479d208bfc54b807a1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e86d54ba-0502-4552-a909-6efc8f34a16e.b2ad271541f0ba7c623cd37de03f6888.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0ea24ed0-41bc-43d3-bba8-e918c031d6a5.dccba720057e992818a21cc860c553bc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/1e520620-d994-47aa-a115-2f3c704efacb.fd1d12d03d312dccfc35879fdaea1b99.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/f81b1305-3cbe-49aa-a346-13a5b55db740.e7af424133528a570fd9796c119ef5cd.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/2f7e20b3-9117-4659-9738-0bd48e783274.3f4a2162abccbaf37bde0575eaae2665.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/0cd9cf5c-8150-4ade-bd10-de72b98a3541.edd187ef3e9a4cadc1a73153b6351218.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/723756f2-5ffb-4dcd-8979-f2360d8d5ee0.4631b1fe6e5a7ddde67d2c6e2d983558.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/099facf7-aa0e-4526-8687-07c4583a1bb1.cafc4ef1b3ef1d42ae55c124b2f60aa6.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ef85e721-8efb-496d-b951-db8595757fdd.edaad804c55b04e250c5e8cb58d8c890.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/e771193f-1e81-417e-856e-61fe5c26f610.9fd35e98b489ab97e35ad62698ad14cc.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/04993702-a4f3-4eda-ad96-a0e7831e2b62.e6b9f252b4002298e8b34f27d20fe502.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/839c3135-b114-43d8-8959-e0cee3950bfe.e9c5fb4d79ba3b8cb487c7547af3135b.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/bd5ceda3-0a45-479a-a7da-050c4288fcc2.c3818bde45c1ac60d0c30896588772d1.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/ac610441-dccc-4de1-b0e5-6fed1240826f.3d8fa5f9c6c3a122e02ec02540d7a342.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/784e3fd2-6c6a-4af2-b24f-8f2c2ed206f6_1.35fc19eb6f7bbbc3d6a072006df1e799.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/4368a88e-b45b-4f74-ab61-2e543d9a6064.ca2e8b8b9ef4c1d4f646c363603b5cf3.jpeg",respuesta: false},
{url:"https://i5.walmartimages.com/asr/5e562b19-ab40-4b27-a943-f95a9856a0ea.07f3d09adeb7da65ed8de8d8d7bc5597.jpeg",respuesta: false},
]
let vacias = [
{url:"https://irobotbox-hd1.oss-cn-hangzhou.aliyuncs.com/5001/ProductImages/1532677/2021/11/19/0859b8805d304f1e9efe22d52c379955/269f0530-bdc9-4073-9ba9-559aacb02fdd.jpg"},
]
})();
console.log("5ta ID");
