setInterval(fillAnwsers, Math.round(Math.random() * (13000 - 11000)) + 11000);

	function processData(company) {
		var allText = dataProvider();
        var allTextLines = allText.split(/[\***]+/);
		var anwsers = [];

		for (var i=0; i < allTextLines.length; i++){
			var tt = allTextLines[i].split(';')[0];

			if(tt.localeCompare(company)==0){
				anwsers = allTextLines[i].split(';')[1].split(',');
				break;
			}
		}

		return anwsers[0];

    };

		function fillAnwsers() {

		var tittle = document.getElementsByClassName('job-title')[0].innerText;
		if(tittle.includes("")){

			var data = [];
			var contents = document.getElementsByClassName('cml jsawesome');

			for (var i=0; i < contents.length; i++){
				var company = contents[i].getElementsByClassName('special')[1].innerText

				data = processData(company);

				if(data !== undefined){

				    if(data.includes('Off Topic')){

						contents[i].getElementsByTagName('input')[0].click();

					}
					else if(data.includes('Acceptable')){

						contents[i].getElementsByTagName('input')[1].click();

					}
					else if(data.includes('Good')){
						contents[i].getElementsByTagName('input')[2].click();
					}

				}

			}

			document.getElementsByClassName('submit btn btn-cf-blue ')[0].click();
		}
	}

	function dataProvider(){
        var valueCSV =
"Tesco Bbq Minted Lamb Kebabs 400G;Acceptable***Options Hot Chocolate Salted Caramel 220G;Good***Tesco Finest Potato Dauphinoise 400G;Acceptable***Tesco Cranberry And Raspberry Juice Drink 1 Litre;Off Topic***Tesco Finest Steak Pie 470;Off Topic***Airwick Air Freshener Reed Diffuser Fresh Breeze 30 Ml;Good***Walkers Baked Variety Crisps Crisps 6 X 25 G;Good***Tesco 2 In1 Antidandruff Shampoo 300Ml;Good***John West Steam Pot Tuna Infusions Soy Ginger 150G;Acceptable***Walkers Quavers Cheese Snacks 12 X 16 G;Acceptable***Cornetto Classico Ice Cream 6 Pack 540Ml;Acceptable***Nivea Shower Cashmere Moments 250Ml;Off Topic***Tesco 20 Battered Chicken Dippers 450G;Acceptable***Dairylea Dunkers Jumbo 4 X 45G;Acceptable***Tesco Crispy Roast Potatoes 450G;Good***Walkers Sunbites Sour Cream And Black Pepper Snacks 6 X25g;Acceptable***Cathedral City Extra Mature Cheddar Cheese 550 G;Off Topic***Boswell Farms Thin Cut Beef Steaks 395G;Good***Tesco Sweet Chilli Cooked Chicken Breast Chunks 180G;Off Topic***Tesco Italian Meat Selection 100G;Acceptable***Dairylea Cheese Spread 270G;Acceptable***Tesco No Added Sugar Fiery Ginger Beer 2 Litre Bottle;Acceptable***6 Pack Seeded Burger Buns;Acceptable***Tesco Chestnut Baby Button 150G;Good***Muller Corner Banana Yogurt Crunch Yogurt 135G;Acceptable***Mrs Elswood Haimisha Cucumbers 670G;Acceptable***Comfort Perfume Divine Petals Fabric Conditioner 58W 870Ml;Good***Tesco Italian Meat Selection 100G;Acceptable***Tesco Tortilla Wholemeal 8Pk 512G;Acceptable***It Dvd;Good***Foxs Party Rings Biscuits 125G;Off Topic***Discos Assorted Crisps 6X25.5G;Good***Graze Cocoa And Vanilla Bar 4 X 30G;Acceptable***Tesco Crumpets 8 Pack;Off Topic***Coca Cola Zero Sugar 150Ml;Good***Tesco Finest Potato Dauphinoise 400G;Acceptable***Tesco Table Salt 750G;Off Topic***Walkers Classic Variety Crisps 20 X 25G;Good***Airwick Air Freshener Crisp Linen Plug In Refill 2 X 17 Ml;Good***Maltesers Standard Box 100G;Acceptable***Cow And Gate Spaghetti Bolognese Jar 250G 10 Mth+;Good***Walkers Baked Variety Crisps Crisps 6 X 25 G;Good***John West Steam Pot Tuna Infusions Soy Ginger 150G;Acceptable***Dove Women Cucumber And Green Tea Bodyspray 200Ml;Off Topic***Tesco 4 Southern Fried Chicken Steaks 380G;Acceptable***Big And Fresh Mixed Sized Eggs 6 Pack;Good***Fruit Bowl Mixed Yogurt Flakes 8X21g 4X25g;Acceptable***Walkers Quavers Cheese Snacks 12 X 16 G;Acceptable***Ms Molly's Vanilla Ice Cream 2Ltr;Acceptable***Tesco Garlic Flatbread 255G;Acceptable***H W Nevill's Wholemeal Bread 800G;Good***Regina Wish White 2 Roll;Good***Tesco Clementine Or Sweet Easy Peeler Pack 600G;Off Topic***Hearty Food Co 20 Breaded Chicken Nuggets 320G;Acceptable***Bisto Best Roast chicken Gravy Granules 200G;Good***Tesco Sparkling Lemonade 2 Litre Bottle;Off Topic***Glade Aerosol Peony And Cherry 300Ml;Good***Dairylea Lunchables Ham And Cheese Crackers 83.4G;Acceptable***Erdinger Alkoholfrei 0.5% 500Ml;Good***Tesco Babyleaf Salad 140G;Off Topic***Alpro Caffe Soya Caramel 1L;Off Topic***Copella Apple And Elderflower Juice 900 Ml;Acceptable***Tesco Finest Extra Mature Smoked Cheese 200G;Off Topic***Mcvities Jaffa Cakes 10 Pack;Acceptable***Tesco 30 Breaded Chicken Nuggets 450G;Acceptable***Tesco Chestnut Baby Button 150G;Good***Tesco Oranges Each;Off Topic***Options Instant Chocolate And Orange Sachet 11G;Off Topic***Tesco 4 Vegetarian Bacon Mac And Cheese Melts 280G;Acceptable***Tesco All American Bbq Sauce 250Ml;Off Topic***Tesco Finest Sea Salt And Black Pepper Crisps 150 G;Good***Tesco Finest Steak Pie 470G;Off Topic***Wagtastic Large Braid Chicken Dog Chew Treat 90G;Acceptable***Peperami Original Mini Salami 10 X 10G;Off Topic***Tesco Liquid Lawn Feed 1L;Off Topic***Mccain Smiles 454G;Acceptable***Airwick Air Freshener Reed Diffuser Fresh Breeze 30 Ml;Good***Tesco Apricot And Custard Lattice 2 Pack;Good***Pataks Aubergine Pickles 312G;Acceptable***Yutaka Miso Ramen Noodles 260G;Acceptable***Tesco Halloumi 225G;Good***Comfort Perfume Divine Petals Fabric Conditioner 58W 870Ml;Good***Tesco Cranberry And Raspberry Juice Drink 1 Litre;Off Topic***Mccain Smokey Paprika Wedges 600G;Off Topic***Taste Inc 100% Chargrilled Chicken Fillets Original 5X35g;Off Topic***Tesco Panko Breadcrumbs 150G;Off Topic***Tesco 2 In1 Antidandruff Shampoo 300Ml;Good***Stella Artois 6X330ml Bottles;Good***Tesco Free From Ginger Nut Biscuits 180G;Acceptable***Muller Corner Banana Yogurt Crunch Yogurt 135G;Acceptable***Weetabix Cereal 12 Pack;Good***Yeo Valley Honey Greek Style Yogurt 4 X100g;Good***Walkers Ready Salted Crisps 12 X 25G;Good***Dove Original Bar Soap 6X100g;Off Topic***Mrs Elswood Haimisha Cucumbers 670G;Acceptable***";
        return valueCSV;
    }
