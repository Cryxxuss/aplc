// ==UserScript==
// @name         Crow_full
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ejemplo de cómo obtener datos de una web con GM_xmlhttpRequest
// @author       Tu Nombre
// @match        https://crowdtap.com/*
// @match        https://www.google.com/
// @match        https://accounts.google.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      api.ipify.org
// @connect      worldnamegenerator.com
// @connect      litport.net
// @connect      daisysms.com
// ==/UserScript==

if(window.location.href.includes('dashboard')){

setTimeout(data_alaerta,10000)
function data_alaerta() {
var miDiv_12 = document.querySelector("#divContainer > div > div:nth-child(12) > app-tile > button > div.ng-star-inserted > span");
var miDiv_9 = document.querySelector("#divContainer > div > div:nth-child(9) > app-tile > button > div.ng-star-inserted > span");

if(miDiv_12 || miDiv_9){
alert(GM_getValue('Data'));
}else {
setTimeout(data_alaerta,5000)
}
}


pre_encuesta();
var puerta = false
function pre_encuesta(){

setTimeout(pre_encuesta,3000);

var elemento = document.querySelector('div.bg-body-light:nth-child(2)');
var star_boton1 = document.querySelector('.animation-submit-btn');
if (elemento || star_boton1) {

//

if (elemento && elemento.textContent.includes("Our top members use Crowdtap daily to earn big rewards, and tracking your")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('I’m excited to track my streak and participate daily!');
}

if (elemento && elemento.textContent.includes("Let's be honest, scrolling through social media")) {
function clickCheckboxesByText(texts) {
    let labels = document.querySelectorAll('label');
    let foundCheckboxes = 0;

    texts.forEach(text => {
        let checkboxFound = false;

        labels.forEach(label => {
            if (label.textContent.trim() === text) {
                let checkbox = document.getElementById(label.getAttribute('for'));
                if (checkbox && checkbox.type === 'checkbox' && !checkbox.checked) {

                    checkbox.click();
                }

                checkboxFound = true;
                foundCheckboxes++;
            }
        });

    });
}

clickCheckboxesByText(['Facebook', 'TikTok', 'Instagram']);
}

if (elemento && elemento.textContent.includes("Accessing Crowdtap through a VPN (Virtual Private Network)")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('I rarely use a VPN, so this likely won’t be an issue.');
}

if (elemento && elemento.textContent.includes("Before diving into more surveys, we'd love to know")) {
// Selecciona el textarea por su id
var textarea = document.getElementById('response');

// Establece el valor del textarea
textarea.value = 'My first impression of Crowdtap is that it is a simple and engaging platform to earn rewards by sharing reviews about products and services the activities seem fast and varied';

// Crea un nuevo evento de entrada
var event = new Event('input', {
  bubbles: true,
  cancelable: true,
});

textarea.dispatchEvent(event);
}

if (elemento && elemento.textContent.includes("To ensure you are paying attention, which of these animals can fly?")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('Bird');
}

if (elemento && elemento.textContent.includes("Honesty is Crowdtap's top priority! When we say we want your opinion, we mean")) {

let textarea = document.getElementById('response');
textarea.value = 'Crowdtap feels engaging and straightforward, It’s refreshing that they value honest opinions, making it easy to share thoughts without feeling pressured';
let event = new Event('input', {
  bubbles: true,
  cancelable: true,
});
textarea.dispatchEvent(event);
}

if (elemento && elemento.textContent.includes("Subscribing to email and push notifications is the best way")) {

let textarea = document.getElementById('response');
textarea.value = 'I would be interested in contests related to technology, entertainment and consumer products, as long as they are fun and relevant';
let event = new Event('input', {
  bubbles: true,
  cancelable: true,
});
textarea.dispatchEvent(event);
}

if (elemento && elemento.textContent.includes("How can you subscribe to push notifications? Great question")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('I only plan on using Crowdtap on the web.');
}

if (elemento && elemento.textContent.includes("For quality assurance purposes, what do you typically use to write?")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('A pencil');
}


//Crowdtap 101: Getting Rewarded
if (elemento && elemento.textContent.includes("Every 1,000 points equals $5")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('$50+/month');
}

else if (elemento && elemento.textContent.includes("Our rewards include gift")) {

function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAll2('Save up points for something big');
}

if (elemento && elemento.textContent.includes('Filling out your profile ensures you get more surveys, which means more points! Type "points"')) {
// Selecciona el textarea por su id
var textarea2 = document.getElementById('response');

// Establece el valor del textarea
textarea2.value = 'points';

// Crea un nuevo evento de entrada
var event2 = new Event('input', {
  bubbles: true,
  cancelable: true,
});

textarea2.dispatchEvent(event);
}

if (elemento && elemento.textContent.includes("For quality assurance purposes, how many picture frames")) {

let element = document.querySelector("div.text-sm > svg:nth-child(1)");

if (element) {
    // Crea un nuevo evento de clic
    let event = new MouseEvent('click', {
     //   view: window,
        bubbles: true,
        cancelable: true
    });

    // Dispara el evento en el elemento seleccionado
    element.dispatchEvent(event);
	setTimeout(() => {
        document.querySelector(".ft-x").click();
    }, 500);

}

function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAll2('2');
}

////Crowdtap 101: The Basic

if (elemento && elemento.textContent.includes("To get the most out of Crowdtap and start earning rewards at places like Amazon")) {

function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAll2('I’ll try to find a balance between answering quickly and being thoughtful.');
}


if (elemento && elemento.textContent.includes("Now that you've joined Crowdtap, you can achieve")) {

var textoIgnorar = "Do not select";

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  const label = document.querySelector(`label[for="${checkbox.id}"]`);
  if (label && !label.textContent.includes(textoIgnorar) && !checkbox.checked) {

    checkbox.click();
  }
});
}


if (elemento && elemento.textContent.includes("Crowdtap is different from many other survey")) {

var rangeInputs4 = document.querySelectorAll('input[type="range"]');

// Recorre cada input y establece su valor en 400
rangeInputs4.forEach((rangeInput4) => {
    rangeInput4.value = 200;

    rangeInput4.dispatchEvent(new Event('input'));
});
}

if (elemento && elemento.textContent.includes("A grid question allows you to rate multiple items using")) {

var checkboxes3 = [
  'input#radio-0-2',
  'input#radio-1-2',
  'input#radio-2-2'
];
checkboxes3.forEach(selector => document.querySelector(selector)?.click());
}

var marcador1 = document.querySelector("#\\30 ")
if (marcador1) {
if (marcador1.textContent.trim() === '' && elemento && elemento.textContent.includes("Crowdtap works with hundreds of the biggest brands in the world")) {

    document.querySelector("#\\30 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\31 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\32 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\33 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\34 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\35 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\36 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\37 ").click()
    document.querySelector("#l01").click()

}
}

if (marcador1) {
if (marcador1.textContent.trim() === '' && elemento && elemento.textContent.includes("In a rank question, you arrange items in order of preference")) {

    document.querySelector("#\\30 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\31 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\32 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\33 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\34 ").click()
    document.querySelector("#l01").click()

}
}

if (elemento && elemento.textContent.includes("If given the option to earn double,")) {

function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAll2('2');
}

//Crowdtap 101: Your Membership
if (elemento && elemento.textContent.includes("Being attentive is key! Checkpoints")) {
function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAll2('Give dishonest answers');
}

if (elemento && elemento.textContent.includes("We want to make sure the data we provide")) {

var rangeInputs = document.querySelectorAll('input[type="range"]');

// Recorre cada input y establece su valor en 400
rangeInputs.forEach((rangeInput) => {
    rangeInput.value = 400;

    rangeInput.dispatchEvent(new Event('input'));
});
}


if (elemento && elemento.textContent.includes("Please select all of the options that end in an odd number.")) {
function clickCheckboxesByText(texts) {
    let labels = document.querySelectorAll('label');
    let foundCheckboxes = 0;

    texts.forEach(text => {
        let checkboxFound = false;

        labels.forEach(label => {
            if (label.textContent.trim() === text) {
                let checkbox = document.getElementById(label.getAttribute('for'));
                if (checkbox && checkbox.type === 'checkbox' && !checkbox.checked) {

                    checkbox.click();
                }

                checkboxFound = true;
                foundCheckboxes++;
            }
        });

    });
}

clickCheckboxesByText(['6789', '1001']);
}


if (elemento && elemento.textContent.includes("Accidents happen! If you select an answer by mistake it's okay,")) {
function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAll2('Option C');
}


if (elemento && elemento.textContent.includes('Using Crowdtap on a Virtual Private Network ("VPN")')) {
function clickAll2(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAll2("I'm not sure");
}

//Crowdtap 101: Question Types

if (elemento && elemento.textContent.includes("Here's an example of a rating question, where you'll")) {

var rangeInputs8 = document.querySelectorAll('input[type="range"]');
// Recorre cada input y establece su valor en 400
rangeInputs8.forEach((rangeInput8) => {
    rangeInput8.value = 300;

    // Opcional: Dispara el evento 'input' para actualizar la UI
    rangeInput8.dispatchEvent(new Event('input'));
});
}

if (elemento && elemento.textContent.includes("Now let's try a scale question! A scale helps brands understand")) {

var rangeInputs9 = document.querySelectorAll('input[type="range"]');
// Recorre cada input y establece su valor en 400
rangeInputs9.forEach((rangeInput9) => {
    rangeInput9.value = 300;

    // Opcional: Dispara el evento 'input' para actualizar la UI
    rangeInput9.dispatchEvent(new Event('input'));
});
}

if (marcador1) {
if (marcador1.textContent.trim() === '' && elemento && elemento.textContent.includes("Ranking questions work just like you might think.")) {

    document.querySelector("#\\30 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\31 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\32 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\33 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\34 ").click()
    document.querySelector("#l01").click()
    document.querySelector("#\\35 ").click()
    document.querySelector("#l01").click()
}
}
if (!puerta && elemento && elemento.textContent.includes("This is an open end question, where we encourage you to tell us how you feel")) {

const pelicula=["The last movie I saw was 'Dune' directed by Denis Villeneuve. I really liked it, especially the cinematography and music, which helped create an intense and exciting atmosphere","I saw recently and I really liked it was 'The Father', I really liked Hopkins performance, which was incredibly moving and realistic.","The last movie I saw was 'Promising Young Woman' directed by Emerald Fennell. I really liked this movie as it is a dark and exciting story that addresses important themes such as sexual violence, justice and power.","The last movie I saw was 'Tick, Tick… Boom!', directed by Lin-Manuel Miranda. I really liked this movie, as it is an exciting story based on the life of composer and playwright Jonathan Larson.","I saw recently and I really liked was 'CODA', directed by Sian Heder. The film is about a teenager named Ruby (played by Emilia Jones) who is the only person who can hear in her deaf family.","Recently and I really liked it was 'Don't Look Up', directed by Adam McKay. The film is about two astronomers (played by Leonardo DiCaprio and Jennifer Lawrence) who discover that a comet is on a direct path towards Earth and could destroy it.","The last movie I saw was 'Tick, Tick… Boom!' and yes, I liked it a lot. It is a dramatic musical film that tells the story of Jonathan Larson, an American composer and playwright. The film is directed by Lin-Manuel Miranda and stars Andrew Garfield as Jonathan Larson.","I saw recently and I really liked was 'The Power of the Dog'. It is a drama film directed by Jane Campion and starring Benedict Cumberbatch and Kirsten Dunst.","The last movie I saw was 'The French Dispatch,' directed by Wes Anderson. I really liked the film, since it is a celebration of journalistic writing and journalism itself. The film is divided into three separate stories, each with its own unique style and tone, but all connected by its setting in a fictional American newspaper in France.","I recently saw and really liked was 'Licorice Pizza', directed by Paul Thomas Anderson. The film is a comedy-drama set in the 1970s in the San Fernando Valley, California.","I saw recently and I really liked was 'The Worst Person in the World', directed by Joachim Trier. The film is a Norwegian drama that follows the life of Julie, a 30-year-old woman who is trying to find her place in the world.","I saw recently and I really liked was 'Dune' (2021), directed by Denis Villeneuve. The film is an adaptation of the science fiction novel of the same name by Frank Herbert.","I recently watched and really liked was 'Drive My Car' (2021), directed by Ryusuke Hamaguchi. The film is a Japanese drama based on a short story by writer Haruki Murakami.","I saw recently and I really liked was 'Spencer' (2021), directed by Pablo Larraín. The film is a biographical drama that follows the life of Princess Diana of Wales during a Christmas weekend in which she decides to separate from her husband, Prince Charles.","The last movie I watched was Everything Everywhere All at Once. I loved it for its creativity and emotional depth. The blend of sci-fi, action, and heartfelt moments was refreshing. The performances were outstanding, and the multiverse concept was brilliantly executed.","The last movie I watched was Spider-Man: Across the Spider-Verse. I really enjoyed it because of its stunning animation, compelling storyline, and the depth it added to the characters. The visuals were breathtaking, and the plot twists kept me engaged throughout.","The last movie I watched was Dune. I found it visually stunning with its expansive desert landscapes and impressive special effects. The storytelling was immersive, and the world-building was intricate. I enjoyed the performances and the film's ability to bring the complex novel to life.","The last movie I watched was Free Guy. It was a fun and entertaining film with a unique concept of a video game character becoming self-aware. The humor was on point, and Ryan Reynolds's performance was enjoyable. The action sequences were well-executed, making it an enjoyable watch overall.","The last movie I watched was The French Dispatch. I appreciated its quirky and visually striking storytelling style, typical of Wes Anderson's films. The ensemble cast delivered strong performances, and the film's blend of humor, drama, and artistic flair kept me engaged from start to finish.","The last movie I watched was No Time to Die. It was a thrilling and action-packed James Bond film with a gripping storyline and intense performances. The action sequences were top-notch, and the film did justice to Daniel Craig's tenure as Bond. The emotional depth added to the characters and the satisfying conclusion made it a memorable watch.","The last movie I watched was The Matrix Resurrections. It was an intriguing continuation of the original Matrix trilogy, exploring themes of reality, identity, and choice. The visual effects were impressive, and the action scenes were well-choreographed. However, some viewers might find the plot complex and the pacing uneven.","The last movie I watched was 'Dune.' I enjoyed it for its stunning visuals, intricate world-building, and strong performances. The adaptation stayed true to the source material while adding its own flair. However, some might find its pacing slow. Overall, it was a captivating experience.","I also recently watched 'No Time to Die,' the latest James Bond film. I found it to be a thrilling and action-packed ride, with great performances from the cast, especially Daniel Craig in his final outing as Bond. The movie had a good balance of suspense, drama, and classic Bond elements. However, some critics pointed out its lengthy runtime and certain plot inconsistencies. Overall, though, it was a satisfying conclusion to Craig's Bond era.","I recently saw 'The Matrix Resurrections.' It was a visually stunning film with thought-provoking themes about reality, identity, and freedom. The action sequences were impressive, and the return of familiar characters added depth to the story. However, some viewers felt that the plot was convoluted at times, and the pacing could have been tighter. Overall, it was an enjoyable experience, especially for fans of the original trilogy.","I recently watched 'Spider-Man: No Way Home.' It was an exhilarating film that brought together multiple Spider-Man iterations in a seamless and satisfying way. The action scenes were fantastic, and the emotional depth added layers to the story. However, some viewers might find certain plot elements predictable. Overall, it was a thrilling ride for fans of the Spider-Man franchise.","I recently watched 'Black Widow.' It is an action-packed Marvel film with a focus on Natasha Romanoff's backstory. The dynamic action sequences and strong performances make it an enjoyable watch, though the plot could be more original. Overall, a fun addition to the MCU.","I recently watched 'A Quiet Place Part II.' It is a tense and gripping sequel with superb direction and performances. The suspenseful atmosphere and creative use of silence make it a thrilling experience, although some plot points may feel familiar. Overall, a must-see for horror fans.","I recently watched 'Knives Out.' It is a clever and entertaining murder mystery with a stellar ensemble cast. The plot twists and turns keep you guessing until the end, and the film's humor adds a delightful touch. However, some viewers may find certain characters or plot elements a bit cliché. Overall, It is a fun and well-crafted movie that's worth watching.","I recently watched 'Squid Game.' It is a gripping Korean series that delves into the dark side of human nature through a deadly game. The intense storytelling, complex characters, and social commentary make it compelling to watch. However, it contains graphic violence and may not be suitable for all audiences. Overall, It is a thought-provoking and impactful series that leaves a lasting impression.","I recently watched 'The Green Knight.' It is a visually stunning and thought-provoking fantasy film based on the Arthurian legend. The cinematography and performances, especially from Dev Patel, are captivating. The film's exploration of honor, destiny, and mortality adds depth to the story. However, its slow pace and ambiguous ending may not appeal to everyone. Overall, It is a unique and immersive cinematic experience.","I recently watched 'Don't Look Up.' It is a satirical comedy-drama film that cleverly addresses societal issues like climate change and media sensationalism. The star-studded cast delivers strong performances, and the film's dark humor and poignant message make it both entertaining and thought-provoking. However, some viewers may find its satirical tone too heavy-handed. Overall, It is a timely and impactful movie with a powerful message.","I recently watched 'Shang-Chi and the Legend of the Ten Rings.' It is a thrilling Marvel superhero film with spectacular action sequences and a compelling storyline. The film's focus on Asian representation and culture adds depth to the characters and setting. However, some viewers may find certain plot elements predictable. Overall, It is a fun and exciting addition to the Marvel Cinematic Universe.","I recently watched 'The Power of the Dog.' It is a hauntingly beautiful drama with powerful performances, particularly from Benedict Cumberbatch and Kirsten Dunst. The film's exploration of complex characters and themes like masculinity and loneliness is gripping. However, its slow-paced narrative may not appeal to all viewers. Overall, It is a masterfully crafted film that lingers in your thoughts long after watching.","I recently watched 'The Witcher: Nightmare of the Wolf.' It is an animated fantasy film exploring Geralt's mentor, Vesemir. The animation and action are impressive, but it could delve deeper into character development. Overall, a treat for 'Witcher' fans.","I recently watched 'Dune' (2021). It is a visually stunning adaptation with a great cast and epic scale. The story's depth and world-building are impressive, though some may find it slow-paced. Overall, a cinematic masterpiece.",
"I recently watched 'Free Guy.' It is a hilarious action-comedy with Ryan Reynolds as an NPC gaining consciousness. The humor and video game references are spot-on, though the plot is somewhat predictable. Overall, a fun and entertaining movie.","I recently watched 'No Time to Die.' It is a thrilling James Bond film with great action and emotional depth. However, its lengthy runtime and certain plot elements may not appeal to everyone. Overall, a fitting conclusion to Daniel Craig's Bond era.","I recently watched 'The Matrix Resurrections.' It is a visually stunning and thought-provoking sequel with exciting action and deep themes. However, the plot can be complex and divisive. Overall, a must-watch for fans of the franchise.","I recently watched 'The Suicide Squad' (2021). It is a wild and irreverent superhero film with a diverse cast and dark humor. The action and character development are well-done, but some may find it too chaotic. Overall, a refreshing take on the genre.","I recently watched 'Cruella.' It is a stylish and captivating origin story of the iconic Disney villain. Emma Stone's performance and the film's visuals are impressive, although the plot can be predictable at times. Overall, a visually stunning and entertaining movie.","I recently watched 'Jungle Cruise.' It is a fun adventure film with Dwayne Johnson and Emily Blunt. The chemistry between the leads and the action-packed scenes make it enjoyable, but the plot is formulaic. Overall, a good popcorn flick.","I recently watched 'The Lost City.' It is a hilarious and adventurous romantic comedy with Sandra Bullock and Channing Tatum. The chemistry between the leads and the comedic moments make it a delightful watch, though the plot is somewhat formulaic. Overall, a fun and entertaining film.","I recently watched 'The Adam Project.' It is a heartwarming sci-fi adventure with Ryan Reynolds. The film combines action, humor, and emotional depth effectively, although the plot can be predictable. Overall, a fun and enjoyable family movie.","I recently watched 'The Batman' (2022). It is a dark and gritty take on the superhero, with Robert Pattinson delivering a brooding performance. The film's atmosphere and detective elements are engaging, but the pacing may feel slow for some viewers. Overall, a compelling reboot of the Batman franchise.","I recently watched 'Encanto.' It is a heartwarming animated film with vibrant visuals and catchy songs. The story about family and self-acceptance is touching, but some may find it predictable. Overall, a delightful and enjoyable movie for all ages.","I recently watched 'Black Panther: Wakanda Forever.' It is a poignant and action-packed tribute to Chadwick Boseman's legacy as T'Challa. The film explores themes of leadership and identity, though some plot points may feel rushed. Overall, a heartfelt continuation of the Black Panther story.","I recently watched 'House of Gucci.' It is a stylish and dramatic film with captivating performances, especially from Lady Gaga and Adam Driver. The story of ambition, betrayal, and family drama is gripping, though some may find it overly long. Overall, a compelling and visually stunning movie.","I recently watched 'The Wheel of Time.' It is an epic fantasy series with a rich world and engaging characters. The plot twists, magic system, and political intrigue are compelling, though the pacing can be slow at times. Overall, a promising adaptation of the book series.","I recently watched 'Squid Game.' It is a captivating and intense Korean series about life-or-death games. The story, characters, and social commentary are powerful, but it contains graphic violence and dark themes. Overall, a must-watch for its compelling storytelling.","I recently watched 'Euphoria.' It is a gripping drama series exploring the lives of teenagers dealing with complex issues. The performances, writing, and cinematography are outstanding, though the content can be intense and mature. Overall, a compelling and thought-provoking show.","I recently watched 'Spider-Man: Across the Spider-Verse (Part One).' It is a visually stunning animated film with a compelling storyline and diverse characters. The animation style and action sequences are top-notch, although some viewers may find it confusing due to its multiverse concept. Overall, an exciting and promising start to the Spider-Verse sequel.","I recently watched 'Don't Look Up.' It is a dark comedy about a comet threatening Earth, with a star-studded cast delivering strong performances. The satire is sharp and relevant, though the tone may feel heavy-handed to some. Overall, an entertaining and thought-provoking film.","I recently watched 'Ghostbusters: Afterlife.' It is a nostalgic and fun continuation of the original series, with a mix of humor and heart. The performances and special effects are great, though the plot is somewhat predictable. Overall, an enjoyable ride for fans of the franchise.","I recently watched 'Tick, Tick... Boom!' It is a heartfelt musical drama about Jonathan Larson, creator of 'Rent.' Andrew Garfield's performance is stellar, and the music is captivating. Though the pacing can feel uneven, overall, It is an inspiring and emotional film.","I recently watched 'King Richard.' It is an inspiring biographical drama about Richard Williams, father of tennis stars Venus and Serena. Will Smith's performance is outstanding, though the film can feel formulaic at times. Overall, an uplifting and well-acted movie.","I recently watched 'West Side Story' (2021). It is a vibrant and emotional musical with impressive choreography and strong performances. The timeless story and modern visuals are captivating, though some may find it a bit lengthy. Overall, a beautiful reimagining of a classic.","I recently watched 'Red Notice.' It is a fun action-comedy with Dwayne Johnson, Ryan Reynolds, and Gal Gadot. The chemistry between the leads and the humor are great, though the plot is quite predictable. Overall, an enjoyable and entertaining film.","I recently watched 'Dune.' It is a visually stunning epic with a great cast and immersive world-building. The intricate plot and complex characters are compelling, though the pacing may feel slow to some. Overall, a remarkable adaptation of the sci-fi classic.","I recently watched 'The Tender Bar.' It is a heartfelt coming-of-age drama directed by George Clooney, with strong performances by Ben Affleck and Tye Sheridan. The story is touching, though it follows familiar tropes. Overall, a warm and engaging film.","I recently watched 'Encanto.' It is a visually stunning and emotionally resonant animated film with catchy music. The story about family and self-acceptance is heartwarming, though it follows some familiar Disney tropes. Overall, a delightful and enjoyable movie.","I recently watched 'Candyman' (2021). It is a chilling horror film with a fresh take on the urban legend. The social commentary and eerie atmosphere are effective, though the pacing falters at times. Overall, a solid entry in the horror genre.","I recently watched 'The French Dispatch.' It is a visually captivating film with Wes Anderson's signature style. The ensemble cast and quirky storytelling make it entertaining, though some may find it overly stylized. Overall, a unique cinematic experience.","I recently watched 'Shang-Chi and the Legend of the Ten Rings.' It is a thrilling Marvel film with impressive action and a compelling story. The representation and character development are highlights, though the pacing slows in parts. Overall, a fantastic addition to the MCU.","I recently watched 'Eternals.' It is a visually stunning Marvel film with a diverse cast and thought-provoking themes. The world-building and character dynamics are intriguing, although the plot may feel slow to some. Overall, an ambitious and engaging entry in the MCU.","The last movie I watched was 'Top Gun: Maverick.' I loved it for its exhilarating aerial sequences, nostalgic callbacks, and Tom Cruise's charismatic performance. The story was engaging, and the action scenes kept me on the edge of my seat, making it an unforgettable experience.","The last movie I watched was 'Guardians of the Galaxy Vol. 3.' I loved it for its humor, emotional depth, and character development. The action scenes were thrilling, and the soundtrack was fantastic. The film provided a satisfying conclusion to the trilogy, making it a memorable experience.","The last movie I watched was 'Inception.' I loved it for its mind-bending plot, stunning visuals, and exceptional performances by the cast. The exploration of dreams within dreams was fascinating, and the action sequences were thrilling, making it an unforgettable film.","The last movie I watched was 'Coco.' I loved it for its vibrant animation, heartfelt story, and celebration of Mexican culture. The music was enchanting, and the themes of family and remembrance were beautifully portrayed. It was a touching and visually stunning experience","The last movie I watched was 'Soul.' I enjoyed it for its profound exploration of purpose and passion, accompanied by stunning animation and a soulful soundtrack. The film's blend of humor and deep existential themes made it a touching and memorable experience.","The last movie I watched was 'The Green Knight.' I loved it for its mesmerizing visuals, deep themes of honor and destiny, and Dev Patel's compelling performance. The film's atmospheric storytelling and Arthurian legend adaptation made it a captivating and thought-provoking watch","The last movie I watched was 'Black Widow.' I enjoyed it for its thrilling action sequences, Scarlett Johansson's strong performance, and the exploration of Natasha Romanoff's backstory. The film blended espionage with family dynamics, making it a satisfying addition to the Marvel Cinematic Universe.","The last movie I watched was 'Cruella.' I loved it for its stylish visuals, Emma Stone's charismatic performance, and the fresh take on the classic Disney villain. The film's blend of fashion, wit, and origin story made it a captivating and entertaining experience.",
"The last movie I watched was 'Jungle Cruise.' I enjoyed it for its adventurous storyline, charming chemistry between Dwayne Johnson and Emily Blunt, and nods to classic adventure films. The blend of action, humor, and fantasy made it a fun and enjoyable watch.","The last movie I watched was 'Luca.' I loved it for its heartwarming story, beautiful animation capturing the Italian seaside, and themes of friendship and acceptance. The film's humor and emotional depth made it a delightful and touching experience for all ages.","The last movie I watched was 'Candyman.' I found it gripping for its social commentary on race and urban legends, effective horror elements, and strong performances. The film's atmosphere and thought-provoking narrative left a lasting impression.","The last movie I watched was 'Venom: Let There Be Carnage.' I enjoyed it for its intense action sequences, dark humor, and Tom Hardy's dual performance. The dynamic between Venom and Eddie Brock made it a thrilling and entertaining superhero film.","The last movie I watched was 'The Lost City.' I loved it for its adventurous plot, Sandra Bullock's comedic timing, and Channing Tatum's charming performance. The film's mix of romance, humor, and action made it a fun and engaging watch.","The last movie I watched was 'Inception.' I enjoyed it immensely because of its mind-bending plot, stunning visuals, and thought-provoking themes about reality and dreams. The intricate storytelling kept me engaged throughout, making it a truly memorable cinematic experience.","The last movie I watched was 'Parasite.' It left a deep impression with its sharp social commentary, compelling characters, and unpredictable plot twists. The blend of humor and suspense kept me captivated, making it a standout film that resonates long after watching.","The last movie I watched was 'Everything Everywhere All at Once.' I loved it for its unique blend of sci-fi, humor, and heartfelt moments. The innovative storytelling and stellar performances, especially by Michelle Yeoh, made it a memorable and thought-provoking experience."];
function obtenerTextoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * pelicula.length);
    return pelicula[indiceAleatorio];
}
var textarea5 = document.getElementById('response');

// Establece el valor del textarea
textarea5.value = obtenerTextoAleatorio();

var event5 = new Event('input', {
  bubbles: true,
  cancelable: true,
});
textarea5.dispatchEvent(event5);
puerta = true
}


if (elemento && elemento.textContent.includes("This is a rating question, where you will be")) {

var rangeInputs1 = document.querySelectorAll('input[type="range"]');
// Recorre cada input y establece su valor en 400
rangeInputs1.forEach((rangeInput1) => {
    rangeInput1.value = 100;

    // Opcional: Dispara el evento 'input' para actualizar la UI
    rangeInput1.dispatchEvent(new Event('input'));
});
}

if (elemento && elemento.textContent.includes("This is a scale question, where you can rate many items")) {

var ranges1 = document.querySelectorAll('input[type="range"]');

// Verifica que haya al menos 3 elementos y ajusta sus valores
if (ranges1.length >= 8) {
  ranges1[0].value = 300;
  ranges1[1].value = 500;
  ranges1[2].value = 500;
  ranges1[3].value = 500;
  ranges1[4].value = 400;
  ranges1[5].value = 400;
  ranges1[6].value = 400;
  ranges1[7].value = 500;

  // Dispara el evento 'input' para que se apliquen los cambios si es necesario
  ranges1[0].dispatchEvent(new Event('input'));
  ranges1[1].dispatchEvent(new Event('input'));
  ranges1[2].dispatchEvent(new Event('input'));
  ranges1[3].dispatchEvent(new Event('input'));
  ranges1[4].dispatchEvent(new Event('input'));
  ranges1[5].dispatchEvent(new Event('input'));
  ranges1[6].dispatchEvent(new Event('input'));
  ranges1[7].dispatchEvent(new Event('input'));

  }
}


if (elemento && elemento.textContent.includes("This is a grid question! Try it out by telling us how often")) {

var checkboxes2 = [
  'input#radio-0-0',
  'input#radio-1-0',
  'input#radio-2-2',
  'input#radio-3-0',
  'input#radio-4-2',
  'input#radio-5-1',
  'input#radio-6-1'
];
checkboxes2.forEach(selector => document.querySelector(selector)?.click());
}


if (elemento && elemento.textContent.includes("Tell us, how did you hear about Crowdtap?")) {

var checkboxes1 = [
  'input#radio-0-0',
  'input#radio-1-2',
  'input#radio-2-3',
  'input#radio-3-0',
  'input#radio-4-3'
];
checkboxes1.forEach(selector => document.querySelector(selector)?.click());
}

if (elemento && elemento.textContent.includes("Multiple choice questions are most popular on Crowdtap! They")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

clickAllCheckboxesExcept('Option 1');
}

//Crowdtap 101: Your Crowdtap Habits
if (elemento && elemento.textContent.includes("Making Crowdtap a part of your routine earns you the most rewards.")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

// Llamada a la función con el texto a excluir
clickAllCheckboxesExcept('Mornings');
}

if (elemento && elemento.textContent.includes("On a scale of 1 to 7, how likely are you to incorporate Crowdtap")) {

var rangeInputs3 = document.querySelectorAll('input[type="range"]');

// Recorre cada input y establece su valor en 400
rangeInputs3.forEach((rangeInput3) => {
    rangeInput3.value = 600;

    rangeInput3.dispatchEvent(new Event('input'));
});
}

if (elemento && elemento.textContent.includes("Tell us how much the following statements apply (or don't apply)")) {

const ranges = document.querySelectorAll('input[type="range"]');

// Verifica que haya al menos 3 elementos y ajusta sus valores
if (ranges.length >= 3) {
  ranges[0].value = 600; // Primer elemento en 600
  ranges[1].value = 600; // Segundo elemento en 600
  ranges[2].value = 0; // Tercer elemento en 0

  // Dispara el evento 'input' para que se apliquen los cambios si es necesario
  ranges[0].dispatchEvent(new Event('input'));
  ranges[1].dispatchEvent(new Event('input'));
  ranges[2].dispatchEvent(new Event('input'));
  }
}


if (elemento && elemento.textContent.includes("What specific features or functionalities would encourage you to use our app daily?")) {
// Selecciona el textarea por su id
var textarea1 = document.getElementById('response');

// Establece el valor del textarea
textarea1.value = 'obtain bonus points or virtual coins as an insentive';

var event1 = new Event('input', {
  bubbles: true,
  cancelable: true,
});
textarea1.dispatchEvent(event1);
}


if (elemento && elemento.textContent.includes("Would you prefer incentives or rewards to motivate daily use of Crowdtap?")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

clickAllCheckboxesExcept('Points or virtual currency');
}


if (elemento && elemento.textContent.includes("For Crowdtap members who earn the most, which of")) {

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Hace clic en cada checkbox
checkboxes.forEach(checkbox => {
  if (!checkbox.checked) { // Verifica si no está marcado
    checkbox.click(); // Hace clic en el checkbox
  }
});
}

if (elemento && elemento.textContent.includes("Exclusive brand opportunities like product sampling and paid focus")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

clickAllCheckboxesExcept("Yes, I'm interested");
}


if (elemento && elemento.textContent.includes("What is your current age range?")) {

function clickAllCheckboxesExcept(textToExclude) {
  // Obtiene todos los elementos label en la página
  var labels = document.getElementsByTagName('label');

  // Itera a través de cada label
  for (var i = 0; i < labels.length; i++) {
    // Comprueba si el texto del label NO contiene el texto a excluir
    if (labels[i].textContent.trim() === textToExclude) {
      // Encuentra el checkbox dentro del label y hace clic en él
      var checkbox = labels[i].querySelector('input[type="radio"]');
      if (checkbox) {
        checkbox.click();
      }
    }
  }
}

clickAllCheckboxesExcept("38-45");
}

// Selecciona el elemento usando el selector CSS
var star = document.querySelector("h2.text-sm")
var star_boton = document.querySelector('.animation-submit-btn');
var enviar = document.querySelector('div.primaryTitle:nth-child(1)');

if (elemento && (elemento.textContent.includes("No se necesita")
|| elemento.textContent.includes("Hundreds of brands look to Crowdtap members to hear"))){
    }else{
if (star && star_boton.textContent.includes("Get started")) {

  setTimeout(function(){ star_boton.click();},500)
}
else{ if (enviar) {

 setTimeout(function(){ enviar.click();},500)
  }
 }
}
}
}


   setTimeout(keep,10000)

function keep(){
setTimeout(keep ,10000)
var text = document.querySelector("#response")
var existe = document.querySelector(".button-cta")

if (existe){
document.querySelector(".button-cta").click()

setTimeout( function(){
//document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
},7000)

}
if (text){
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText
if(spanText === "Crowdtap 101: Getting Rewarded" || spanText === "Crowdtap 101: Survey Types" || spanText === "Crowdtap 101: Your Crowdtap Habits"){
}else{
//document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
    }
}

}

var data = GM_getValue('Data')
var palabras = data.split("	");

function calcularEdad(fechaNacimiento) {
    // Convertir la fecha de nacimiento en un objeto Date
    let fechaNac = new Date(fechaNacimiento);
    let hoy = new Date();

    // Calcular la diferencia en años
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    // Ajustar la edad si el cumpleaños aún no ha pasado este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}
var ventanaa = true
var div = true
setTimeout(function dataa(){
setTimeout(dataa,1000)
let fechaNacimiento = palabras[7]; // Fecha en formato YYYY-MM-DD
        var miDiv = document.querySelector('body > app-root > app-default-layout > div.flex-col.h-screen.hidden.sm\\:flex.ng-tns-c14-0.ng-star-inserted > app-general-header > header > div > a');

        var nuevoTexto = document.createElement('p');
        nuevoTexto.textContent = "Edad: "+calcularEdad(fechaNacimiento)+" ---> "+palabras[7]
        nuevoTexto.style.fontWeight = '700'
        nuevoTexto.style.color = 'green';
        nuevoTexto.style.fontSize = "25px";

 // Ajusta la altura según tus necesidades
      //  miDiv.style.display = "none"
        // Paso 3: Inserta el nuevo elemento justo después del div
       // miDiv.parentNode.insertBefore(nuevoTexto, miDiv.nextSibling);

if(div){
    div = false
 //   miDiv.parentNode.insertBefore(nuevoTexto, miDiv.nextSibling);
  }

var navElement = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p")
var data_green = document.querySelector(".justify-end > div:nth-child(1) > p:nth-child(3)")

if(navElement){
if(ventanaa || !data_green){

ventanaa=false
    nuevoTexto.style.fontSize = "20px";
    navElement.insertAdjacentElement("afterend", nuevoTexto, navElement.nextSibling);
  }
}else{
  ventanaa = true
  }

},1000)

 verifiedd_interval()
function verifiedd_interval(){
var verified = document.querySelector("#divCompleted > app-taskboard-completed > div > div > h3 > span")
var verified1 = document.querySelector("button.ng-tns-c116-3");
if (verified||verified1) {
verifiedd();
}else{
setTimeout(verifiedd_interval,5000);
}
}
function verifiedd(){
document.querySelector("#divContainer > app-unlock-full-experience > div > div.buttons-container > button").click()
setTimeout(function(){

var enter = document.querySelector("#recaptcha-anchor")
if (enter) {
    const enterEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'Enter',
      keyCode: 13
    });

    enter.dispatchEvent(enterEvent);
  }
setTimeout(resolver,3000);
},4000)
function resolver(){
document.querySelector("#solver-button").click()
}
}
var ventana = true
setTimeout(corriendo,10000)
function corriendo(){
setTimeout(corriendo,9000)
var containerText = document.querySelector("#divContainer").textContent
var lines = containerText.split("  ");

var selectedLine1 = lines[0];
var selectedLine2 = lines[1];
var selectedLine3 = lines[2];
var selectedLine4 = lines[3];
var selectedLine5 = lines[4];
var selectedLine6 = lines[5];
var selectedLine7 = lines[6];
    if(ventana){

if (selectedLine1 === "Crowdtap 101: Question Types") {
document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
}else if (selectedLine2 === "Crowdtap 101: Question Types") {
document.querySelector("#divContainer > div > div:nth-child(3) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
}else if (selectedLine3 === "Crowdtap 101: Survey Types") {
document.querySelector("#divContainer > div > div:nth-child(6) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
  }
 }

var spanElement = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p");
if (spanElement) {
const spanText = document.querySelector("div > div.head-container > app-action-modal-header > div > div > p").innerText
if (spanText === "Crowdtap 101: Getting Rewarded" || spanText === "Crowdtap 101: Your Membership"
    || spanText === "Crowdtap 101: Question Types" || spanText === "Crowdtap 101: Your Crowdtap Habits"
    || spanText === "Crowdtap 101: The Basics" ){
ventana=false
} else {
setTimeout( function(){
//document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
//setTimeout(task_ready,3000);
  //  ventana=true
//setTimeout(corriendo,3000);
  },3000)}
}

function task_ready() {}

}
}

else if(window.location.href.includes('name?continue')){

var data_correo = GM_getValue('Data')
var palabras_correo = data_correo.split("	");
console.log(palabras_correo[2])
var password = palabras_correo[2];
var correo = palabras_correo[1].split("@gmail.com");
var nombre_full = palabras_correo[0].split(" ");
console.log(nombre_full)
var nombre = nombre_full[0]
var apellido = nombre_full[1]
var diaAleatorio = Math.floor(Math.random() * 28) + 1;
var mesAleatorio = Math.floor(Math.random() * 12) + 1;
var year_aleatorio = Math.round (Math.random() * (1985 - 1981) + 1981);
var butonCorreo2 = "span > div:nth-child(3) > div > div.uxXgMe > div > div.SCWude > div";

// para input
function set_InputGmail(value,selector,button,butonCorreo) {
    var input = document.querySelector(selector);
  //  if (!input) return false;

    var butonCorreo1 = document.querySelector(butonCorreo);
    if(butonCorreo1){
    butonCorreo1.click();
    }
    var originalProto = Object.getPrototypeOf(input);
    var originalValidation = Object.getOwnPropertyDescriptor(originalProto, 'value');

    // Establecer nuevo valor con sobrescritura de validación
    Object.defineProperty(input, 'value', {
        set: function(val) {
            this.setAttribute('value', val);
            this.dispatchEvent(new Event('input', { bubbles: true }));
            this.dispatchEvent(new Event('change', { bubbles: true }));
        },
        get: function() {
            return this.getAttribute('value');
        }
    });

    input.value = value;
    input.focus();
    input.click();


    // Disparar una serie de eventos en orden específico
    var events = [
        new Event('focus', { bubbles: true }),
        new Event('input', { bubbles: true }),
        new InputEvent('input', { inputType: 'insertText', data: value, bubbles: true }),
        new Event('change', { bubbles: true }),
        new Event('blur', { bubbles: true })
    ];

    events.forEach(event => {
        input.dispatchEvent(event);
    });

        var button1 = document.querySelector(button);
        setTimeout( function(){button1.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));},500);
    return true;
}
// para select
function set_SelectGmail(select,selector,button) {
    var selectElement = document.querySelector(selector);
   // if (!selectElement) return false;

selectElement.value = select;

const event = new Event("change", { bubbles: true });
selectElement.dispatchEvent(event);
        var button1 = document.querySelector(button);
        setTimeout( function(){button1.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));},500);
    return true;
}

var match1 = "";
var getNumero = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getNumber&service=go&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
    var data = await response.text();
    var bodyContent = data;
    match1 = bodyContent.split(":");

    const originalNumber = match1[2];
    const newNumber = originalNumber.toString().slice(1);
    set_InputGmail(newNumber, "#phoneNumberId");

setTimeout( function(){
    var butonCorreo1 = document.querySelector("button");
    if(butonCorreo1){
    butonCorreo1.click();
    }
},500);

setTimeout(() => {getCode();}, 10000);
};

var getCode = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=getStatus&id=${match1[1]}&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.text();
   console.log(data);

    var bodyContent = data; // Obtiene el contenido de la respuesta

if(bodyContent == "STATUS_WAIT_CODE"){

        setTimeout(() => {getCode();}, 10000);

    }else{//else global
        var match = bodyContent.split(":"); // Busca el patrón en el contenido

if(bodyContent == "STATUS_CANCEL"){
    }
else if(match[0] !== "STATUS_OK"){
setTimeout(() => {getCode();}, 10000);

}else{
        var inputField = document.querySelector('input');
    if(inputField){
        set_InputGmail(match[1], "#code");

        var done = match1[1];

        setTimeout( function(){

setTimeout( function(){
    var butonCorreo1 = document.querySelector("button");
    if(butonCorreo1){
    butonCorreo1.click();
    }
},500);

var funcion_realizado = async () => {
   var timestamp = Date.now();
   var response = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://daisysms.com/stubs/handler_api.php?api_key=gjIpsXdLN1wGEqVBo4KCbQ0nfoOQrX&action=setStatus&id=${done}&status=6&_=${timestamp}`)}`, {
       cache: 'no-store'
   });
   var data = await response.text();
   console.log(data);
};

funcion_realizado();

            },1000);
    }}

    await delay(4000);
    var recoverySkip = document.querySelector("#recoverySkip");
    if(recoverySkip){
    recoverySkip.click();
    }
    await delay(4000);
        recoverySkip = document.querySelector("button");
    if(recoverySkip){
    recoverySkip.click();
    }
    await delay(4000);
        recoverySkip = document.querySelectorAll("button")[3];
    if(recoverySkip){
    recoverySkip.click();
    }
}
};

async function fillGmailForm() {
    // Cargar nombres
    set_InputGmail(nombre, "#firstName");
    set_InputGmail(apellido, "#lastName", "button");

    // Esperar antes de llenar fecha de nacimiento
    await delay(3000);
    set_InputGmail(diaAleatorio, "#day");
    set_SelectGmail(mesAleatorio, "#month");
    set_InputGmail(year_aleatorio, "#year");
    set_SelectGmail("2", "#gender", "button");

    // Esperar antes de llenar correo
    await delay(4000);
    set_InputGmail(correo[0], "div > div.Xb9hP > input", "button", butonCorreo2);

    // Esperar antes de llenar contraseñas
    await delay(4000);
    set_InputGmail(password, "#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
    set_InputGmail(password, "#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input", "button");

    await delay(4000);
    getNumero();
//    if (!getNumero) return false;

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Ejecutar la función al cargar la ventana
window.onload = fillGmailForm;
}
else if (window.location.href.includes('unknownerror?continue')){
setTimeout( function(){
    var continuar = document.querySelector("button");
    if(continuar){
    continuar.click();
    }
  },2000);
}
else if (window.location.href.includes('signin/identifier?continue')||window.location.href.includes('gmail/#inbox')||window.location.href.includes('intl/en-US/gmail/')){
    window.location.href = "https://accounts.google.com/lifecycle/steps/signup/name?continue=https://www.google.com/&ddm=1&dsh=S1677978371:1731609060260322&ec=GAZAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&ifkv=AcMMx-eWt8qrVVQVH57i_WNWIttptmfwugDnTptX7oM2NfBznWPh9zOueKAUjaaDgiCrC0OmyRRq&TL=AKOx4s3ogZ-MKS_ul1prvJ7-xxc-xy15MB9MCIJT8R_VxZGHum1Sxvu0mIABdpsw";
    }
