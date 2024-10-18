// ==UserScript==
// @name         White caucasian NC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ejemplo de cómo obtener datos de una web con GM_xmlhttpRequest
// @author       Tu Nombre
// @match        https://crowdtap.com/*
// @match        https://www.google.com/
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

if(window.location.href.includes('google')){
if(!GM_getValue('Data')){
location.href ='https://crowdtap.com/auth/account-create-email';
}
}

else if(window.location.href.includes('dashboard')){

setTimeout(data_alaerta,10000)
function data_alaerta() {
var miDiv_12 = document.querySelector("#divContainer > div > div:nth-child(12) > app-tile > button > div.ng-star-inserted > span");
var miDiv_9 = document.querySelector("#divContainer > div > div:nth-child(9) > app-tile > button > div.ng-star-inserted > span");

if(miDiv_12 || miDiv_9){
alert(GM_getValue('Data'));
}else {
setTimeout(data_alaerta,10000)
}
}


pre_encuesta();
var puerta = false
function pre_encuesta(){

setTimeout(pre_encuesta,4000);

var elemento = document.querySelector('div.bg-body-light:nth-child(2)');
var star_boton1 = document.querySelector('.animation-submit-btn');
if (elemento || star_boton1) {

//Crowdtap 101: Getting Rewarded
if (elemento && elemento.textContent.includes("Every 1000 points")) {

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
var textarea = document.getElementById('response');

// Establece el valor del textarea
textarea.value = 'points';

// Crea un nuevo evento de entrada
var event = new Event('input', {
  bubbles: true,
  cancelable: true,
});

textarea.dispatchEvent(event);
}

////Crowdtap 101: The Basic
if (elemento && elemento.textContent.includes("Now that you're joined Crowdtap, you can achieve")) {

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
clickAll2('Give dishonest or inappropriate answers');
}

if (elemento && elemento.textContent.includes("We want to make sure the data we provide")) {

var rangeInputs = document.querySelectorAll('input[type="range"]');

// Recorre cada input y establece su valor en 400
rangeInputs.forEach((rangeInput) => {
    rangeInput.value = 400;

    rangeInput.dispatchEvent(new Event('input'));
});
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

//Crowdtap 101: Survey Types
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
var antess = document.querySelector("body > ngb-modal-window > div > div > app-cover div > div.modal-content > h2")
if (antess && antess.textContent.includes("Crowdtap 101: Learning More About You!")){

    }else{
if (star && star_boton.textContent.includes("Get started")) {

  setTimeout(function(){ star_boton.click();},1500)
}
else{ if (enviar) {

 setTimeout(function(){ enviar.click();},1500)
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
document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
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
setTimeout(corriendo,10000)
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

if (selectedLine1 === "Crowdtap 101: The Basics") {
document.querySelector("#divContainer > div > div:nth-child(1) > app-tile > button > div.ng-star-inserted > span").click()
ventana=false
}if (selectedLine2 === "Crowdtap 101: Your Membership") {
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
    || spanText === "Crowdtap 101: Survey Types" || spanText === "Crowdtap 101: Your Crowdtap Habits"
    || spanText === "Crowdtap 101: The Basics" ){
ventana=false
} else {
setTimeout( function(){
document.querySelector("div > div.head-container > app-action-modal-header > div > button").click();
setTimeout(task_ready,3000);
    ventana=true
setTimeout(corriendo,3000);
  },3000)}
}

function task_ready() {}

}
}else{

function fetchPublicIP(callback) {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://api.ipify.org?format=json&timestamp=' + new Date().getTime(), // Agregar timestamp para evitar la caché
        onload: function(response) {
            if (response.status === 200) {
                const data = JSON.parse(response.responseText);
                callback(data.ip);
            } else {
                console.error('Error al obtener la dirección IP:', response.statusText);
                callback(null);
            }
        },
        onerror: function(error) {
            console.error('Error al realizar la solicitud:', error);
            callback(null);
        }
    });
}

// Variable para almacenar la dirección IP actual
let currentIP = '';

// Función para verificar cambios en la dirección IP
function checkIPChange() {
    fetchPublicIP(function(newIP) {
        if (newIP !== null && newIP !== currentIP) {
            console.log('La dirección IP ha cambiado:', newIP);
var segundoPaso = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(2) > label")
if(segundoPaso && segundoPaso.textContent.includes("City")){
document.querySelector("#main-content > article > div.center-column > form > section > button.relative.font-bold.text-white.rounded-full.w-68.h-14.bg-blue-dark").click();
}
            currentIP = newIP;
        } else {
            //console.log('La dirección IP sigue siendo la misma:', currentIP);
        }
    });
}

// Verificar cambios cada cierto tiempo (por ejemplo, cada 5 segundos)
setInterval(checkIPChange, 4000);

function create() {
// URL de la página web
var url = "https://www.worldnamegenerator.com/World_Address/get_us_address1/sex/Female/state/NC";

GM_xmlhttpRequest({
    method: "GET",
    url: url,
    onload: function(response) {
let datos = ""
const code_correo = Math.round (Math.random() * (999999 - 100000) + 100000);
const code_clave = Math.round (Math.random() * (99999 - 10000) + 10000);
const añoo = Math.round (Math.random() * (1985 - 1981) + 1981);
const mess = Math.round (Math.random() * (12 - 1) + 1);
const diaa = Math.round (Math.random() * (28 - 1) + 1);
   setTimeout(crearboton, 1000);
function crearboton(){
setTimeout(crearboton, 2000);
        (function() {
    var textofinal;
    var prefcorreo = "@hotmail.com"

var inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});
var event = new Event('change', {
 bubbles: true
});


var nombrefull = $(response.responseText).find("#main > div > div.col-sm-9.no-padding > div > div:nth-child(4) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2) > b").text();
nombrefull = nombrefull.match(/\b\w{2,}\b/g);
var palabras = nombrefull
var nombre = palabras[0]+" "+palabras[1];

var direccion_response = $(response.responseText).find("#main > div > div.col-sm-9.no-padding > div > table:nth-child(7)").text();
var direccion = direccion_response.split(/[\t\n\r ]{2,}/);


        textofinal = nombre

        textofinal += "\t"+generarcorreo(nombrefull);

        //colocar clave
        textofinal += "\t"+generarclave(nombrefull);


        textofinal += "\t"+generarcalle(direccion);

        //direccion
        textofinal += "\t"+generardireccion(direccion);


var primerPaso = document.querySelector("#main-content > article > div.center-column > form > div.text-center > button")
if(primerPaso){

//correo
var inputCorreo = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(1) > div > input");
inputCorreo.value = generarcorreo(nombrefull);
inputCorreo.dispatchEvent(inputEvent);

//clave
var inputClave = document.querySelector("#main-content > article > div.center-column > form > div:nth-child(2) > div > input")
inputClave.value = generarclave(nombrefull);
inputClave.dispatchEvent(inputEvent);

//nombre
var inputNombre = document.querySelector("#main-content > article > div > form > div:nth-child(3) > div > input")
inputNombre.value = palabras[0];

//apellido
var inputApellido = document.querySelector("#main-content > article > div > form > div:nth-child(4) > div > input")
inputApellido.value = palabras[1];

inputNombre.dispatchEvent(inputEvent);
inputApellido.dispatchEvent(inputEvent);
setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > div.text-center > button").click()},500)
}

var label_existe = document.querySelector("#main-content > article > div > form > div.mb-6.form-row.ng-star-inserted > label")
if(label_existe){
var segundoPaso = document.querySelector("#main-content > article > div > form > div.mb-6.form-row.ng-star-inserted > label").innerText;
if(segundoPaso==='Your Birthday'){

//Your Birthday
var inputFecha = document.querySelector('input[name="dp"]');
var fecha = new Date(añoo, mess - 1, diaa); // Restamos 1 al mes porque los meses en JavaScript van de 0 a 11
var formatoFecha = fecha.toISOString().slice(0, 10);
inputFecha.value = formatoFecha;
textofinal += "\t"+formatoFecha
datos=textofinal
console.log(textofinal)
GM_setValue('Data', datos);
inputFecha.dispatchEvent(inputEvent);

//Your gender preference
var select_gender = document.querySelector('[formcontrolname="gender"]');
var value_female = select_gender.querySelector('option[value="1"]');
value_female.selected = true;
select_gender.dispatchEvent(event);

// raza
var selectElement = document.querySelector('[formcontrolname="ethnicity_id"]');
var opcionSeleccionada = selectElement.querySelector('option[value="3bfcadda-33db-4091-82e2-c3b1d8f86d1b"]');
opcionSeleccionada.selected = true;
selectElement.dispatchEvent(event);
setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > section > button.relative.pl-4.pr-4.font-bold.text-white.rounded-full.bg-blue-dark.h-14.action-btn").click()},500)

//Education
var select_education = document.querySelector('[formcontrolname="education_id"]');
            var ome_high_school = "037cf01a-093c-4a9c-9f37-81b26c9b52c4";
            var High_school_graduate_or_equivalent = "c2e8341e-8078-4e11-a135-6dd1c705dbeb";
            var Trade_or_vocational_school_degree = "a0492057-b8a5-4d14-b362-9aade76e3362"
            var Some_college = "db35b9e4-2a17-49cd-84cf-b8245a016518"
            var Associate_Degree = "b8e10485-169b-4fac-b9cb-a5fd64456e4d"
            var Bachelor_Degree = "90cf49cf-89f4-44a7-bec5-461b3561317f"
            var Graduate_or_professional_degree = "5a1abe67-353f-4101-ba98-f086bfbdf71e"
            var prefer_not_answer = "8ecd787f-6803-4d87-ae9c-3737c55eccf6"
//colocar en value la opcion deseada
var value_option = select_education.querySelector('option[value="90cf49cf-89f4-44a7-bec5-461b3561317f"]'); //Bachelor_Degree por defecto
value_option.selected = true;
select_education.dispatchEvent(event);
}
}
var label_tercero_paso = document.querySelector("#main-content > article > div > form > div:nth-child(1) > div > div > label")
if(label_tercero_paso){
var tercerpaso = document.querySelector("#main-content > article > div > form > div:nth-child(1) > div > div > label").innerText
if(tercerpaso==="Employment status"){

GM_xmlhttpRequest({
        method: "GET",
        url: "https://litport.net/sys/rotate-ip?key=a0f9e64d765bab0ec97cb54300030e9d",
        onload: function(response) {
            console.log(response.responseText);
        },
        onerror: function(error) {
            console.error(error);
        }
    });
setTimeout( function() {
//document.querySelector("#main-content > article > div.center-column > form > section > button.relative.font-bold.text-white.rounded-full.w-68.h-14.bg-blue-dark").click();
},40000)



//Employment status
var select_employment = document.querySelector('[formcontrolname="employment_id"]');
    var Employed_full_time = "7aa2e6a4-09c9-4ec6-9420-b167b55428d4"
    var Employed_Part_time = "6d297cd1-d3a6-4542-adff-e44cef89ff4a"
    var Self_employed = "c3de7a69-4964-4511-8d22-e073a762cae2"
    var Unemployed = "b6113a80-4f57-478e-938e-c7adef917070"
    var Student = "0c97b9e1-ae90-441d-8867-1e76287e2afa"
    var Homemaker = "6a0583fc-e6da-4edd-9803-e4e189f27559"
    var Retired = "79945f54-bfd8-4bb3-b55e-526c304fe40f"
    var Unable_to_work = "a9830f20-8b64-419a-bd2a-053a2f868475"
    var prefer_not_to_answer = "485386e7-8102-4b50-85b9-6a2a670c6577"

value_option = select_employment.querySelector('option[value="6d297cd1-d3a6-4542-adff-e44cef89ff4a"]'); // Employed Part-time POR DEFECTO
value_option.selected = true;
select_employment.dispatchEvent(event);


//Relationship status
var select_relationship_status = document.querySelector('[formcontrolname="relationship_id"]');
    var Married = "9b27945c-a6be-4572-a13d-fd786253de44"
    var Civil_Union_Domestic_Partnership = "19ec1d42-4d33-4f16-a469-9dccacfebc89"
    var Separated = "276bd37a-966d-4720-ada9-f7b5b98cd9d8"
    var Widowed = "0e6062ea-0b14-4181-8384-2fa5b1a36f9b"
    var Divorced = "fd42fecd-8fa9-45fb-8427-0753c9019594"
    var Single_never_married = "9a46f945-8047-4492-b448-8ab4926f66d6"
    var prefer_not_to_answerr = "a40c802b-7acb-4140-af18-ec1dc7aa1cbc"

value_option = select_relationship_status.querySelector('option[value="9b27945c-a6be-4572-a13d-fd786253de44"]'); // Married POR DEFECTO
value_option.selected = true;
select_relationship_status.dispatchEvent(event);


// Size of household
var select_size_of_household = document.querySelector('[formcontrolname="household_id"]');
    var uno = "4fd68f22-7446-4fb3-b291-0e568dd26dc1"
    var dos = "209892b1-9980-4f98-bd5f-cd29ef468396"
    var tres = "06620023-41bd-4b97-92f1-ee2e9df44a62"
    var cuatro = "409ac301-5777-4c23-81dd-8fc098419de0"
    var cinco_mas = "428127c4-34e7-4973-8c7d-f5cbd009031f"

value_option = select_size_of_household.querySelector('option[value="409ac301-5777-4c23-81dd-8fc098419de0"]'); // Cuatro POR DEFECTO
value_option.selected = true;
select_size_of_household.dispatchEvent(event);


// Parenting status
var select_parenting_status = document.querySelector('[formcontrolname="parenting_id"]');
    var I_dont_have_any_children = "a85fba83-46f8-4f5b-9402-d2f124aa397e"
    var I_dont_have_any_children_2 = "718df18e-1619-4381-9733-0cbb6f3c3c36"
    var I_have_children_at_home = "96d17442-51c8-4b92-a44e-22b54c6d4f7d"
    var I_prefer_not_to_answer = "08f3ad6e-acd6-413b-928e-e68515081b00"

value_option = select_parenting_status.querySelector('option[value="96d17442-51c8-4b92-a44e-22b54c6d4f7d"]'); //  I have children at home POR DEFECTO
value_option.selected = true;
select_parenting_status.dispatchEvent(event);

setTimeout(function() {document.querySelector("#main-content > article > div.center-column > form > section > button.relative.pl-4.pr-4.font-bold.text-white.rounded-full.bg-blue-dark.h-14.action-btn").click()},500)
 }
}


var label_ultimo_paso = document.querySelector("#main-content > article > div > form > div > label")
if(label_ultimo_paso){
var ultimopaso = document.querySelector("#main-content > article > div > form > div > label").innerText
if(ultimopaso==="Combined household income"){

//Combined household income
var select_combined_household_income = document.querySelector('[formcontrolname="income_level_id"]');
    var Under_$25000 = "007a2ff7-fdc0-46e0-863b-21ecda7b6bce"
    var $25000_$34999 = "e70539de-dbbb-4f24-bba9-10038143d01c"
    var $35000_$44999 = "aa1aa735-53b4-4e54-bb2f-f0eab62ff80b"
    var $45000_$59999 = "c7da83dc-19a0-459d-9a4b-28402ca85af3"
    var $60000_$74999 = "aa6cca88-4925-47c8-9184-f12010f66c2f"
    var $75000_$99999 = "16bad03e-b8f1-4131-89f6-50df8417eae1"
    var $100000_$149999 = "54682b61-85e0-465a-806f-32ab6dc3a374"
    var $150000_or_more = "40c7d945-55e8-4883-8daa-849a7647d4ec"
    var I_prefer_not_to_answerr = "0a64e748-cab4-4f00-8489-e0c280127138"

value_option = select_combined_household_income.querySelector('option[value="e70539de-dbbb-4f24-bba9-10038143d01c"]'); //   $25,000 - $34,999  POR DEFECTO
value_option.selected = true;
select_combined_household_income.dispatchEvent(event);


//Ciudad
var inputCiudad = document.querySelector("#main-content > article > div > form > div:nth-child(2) > div > input");
var selectedLine0 = direccion[5]
inputCiudad.value = selectedLine0;
inputCiudad.dispatchEvent(inputEvent);

//Estado
var selectEstado = document.querySelector('[formcontrolname="state_id"]');
var opcionSeleccionada1 = selectEstado.querySelector('option[value="4ff12f39-04ad-463b-a62d-5d29334512b1"]');
opcionSeleccionada1.selected = true;
selectEstado.dispatchEvent(event);

//Codigo Postal
var inputCodigo = document.querySelector("#main-content > article > div > form > div:nth-child(4) > div > input");
var selectedLine2 = direccion[11]
inputCodigo.value = selectedLine2;
inputCodigo.dispatchEvent(inputEvent);

//Boton Check
var checkbox = document.getElementById('check-1');
if (checkbox) {
    checkbox.setAttribute('checked', 'true');
    checkbox.checked = true;
    checkbox.dispatchEvent(event);
}
   }
}

       // portapapeles(textofinal);

    function generarcorreo(nombrecompleto){
    var correofinal;

        correofinal = nombrecompleto[0]+nombrecompleto[1]+code_correo+prefcorreo;

     return correofinal;
    }

    function generarclave(nombrecompleto){
    var clavefull;

        clavefull = nombrecompleto[0]+nombrecompleto[1]+"*/-"+code_clave;
    return clavefull;
    }

    function generarcalle(direccion){
        var arr1 = direccion[3];
        var calle = arr1
        return calle
    }

    function generardireccion(direccion){
    var fulldireccion;

var ciudad = direccion[5]
var estado = direccion[7]
var zip = direccion[11]


    return ciudad +"\t"+estado+"\t"+zip
    }

    function getRandomArbitrary(min, max) {
  return Math.round (Math.random() * (max - min) + min);
}

})();

}}
});
}

// Verificar cambios cada cierto tiempo (por ejemplo, cada 5 segundos)
setTimeout(create, 5000);
}
