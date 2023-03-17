"use strict";
const langFiles = [
    "./Output_pokes/pokes_lang_",
    "./Output_abilities/abilities_lang_",
    "./Output_items/items_lang_",
    "./Output_teras/teras_lang_",
    "./Output_moves/moves_lang_"];

const langs = ['chs', 'cht', 'en', 'es', 'fre', 'ger', 'ita', 'jpn', 'jpn_kanji', 'kor'];
const className = ['poke', 'ability', 'item', 'tera', 'move'];

for (let i = 0; i < langs.length; i++) {
    for (let z = 0; z < langFiles.length; z++) {
        var myScript = document.createElement('script');
        myScript.setAttribute('class', 'lang');
        myScript.setAttribute('src', langFiles[z] + langs[i] + '.js');
        document.head.appendChild(myScript);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function setLang(element){

    var contentStatus = document.querySelector("#content");
    var pdfStatus = document.querySelector("#pdf");
    if (contentStatus.classList.contains('start') && pdfStatus.classList.contains('start')) {
        contentStatus.classList.remove("start");
        pdfStatus.classList.remove("start");
        document.querySelector('.languages').classList.add("top");
        await sleep(300);
        document.querySelector("#loader").classList.add("show");
        await sleep(700);
    }
    else{
        document.querySelector("#content").classList.remove("show");
        document.querySelector("#pdf").classList.remove("show");
        document.querySelector("#loader").classList.add("show");
        await sleep(500);
    }

    // check if lang button active
    if (element.classList.contains('active')){
        return;
    }

    // set all lang button to NOT active
    var buttonsLang = document.querySelectorAll(".buttonLang");
    for (let i = 0; i < buttonsLang.length; i++) {
        buttonsLang[i].classList.remove('active');
    }

    // Set current lang button as active
    element.classList.add('active');

    // get old content
    var oldIds = [];
    var Buttons = document.querySelectorAll('.buttons .text');
    for (let i = 0; i < Buttons.length; i++) {
        oldIds.push(Buttons[i].getAttribute('name'));
    }

    // get current selected language
    var Lang = element.getAttribute('id');

    // check if is first time
    if (!document.querySelector('.poke.list').children.length) {
        fillLanguage(Lang)
    } else {
        for (let i = 0; i < className.length; i++) {

            if (className[i] == 'ability'){
                var globalVar = Lang + 'Abilities';
            }
            else {
                var globalVar = Lang + className[i].charAt(0).toUpperCase() + className[i].slice(1) + 's';
            }

            var elements = window[globalVar];
            changeLanguage(elements, className[i]);
        }
    }

    // set old content with new language
    for (let i = 0; i < oldIds.length; i++) {
        if (oldIds[i]){
            var element = Buttons[i].closest('.container').querySelector('div[name="' + oldIds[i] + '"]');
            chosenElement(element);
        }
    }

    document.querySelector("#loader").classList.remove("show");
    document.querySelector("#content").classList.add("show");
    document.querySelector("#pdf").classList.add("show");
}

function fillLanguage(lang){

    // create placeholder for font
    var placeholder = document.createElement('div');
    placeholder.style.position = 'absolute';
    // set the same classes to placeholder so it inherits the font style of the bottom define 'element'
    placeholder.setAttribute("class", className + " element");
    placeholder.style.whiteSpace = 'nowrap';
    document.body.appendChild(placeholder);

    for (let i = 0; i < className.length; i++) {
        if (className[i].includes("ability")){
            var globalVar = lang + 'Abilities';
        }
        else {
            var globalVar = lang + className[i].charAt(0).toUpperCase() + className[i].slice(1) + 's';
        }
        var elements = window[globalVar];

        var Lists = document.querySelectorAll('.' + className[i] + '.list');

        for (let z = 0; z < Object.keys(elements).length; z++) {
            var id = Object.keys(elements)[z];
            var element = document.createElement("div");
            element.setAttribute("name", id);
            element.setAttribute("class",  className[i] + " element");
            element.setAttribute("onclick", "chosenElement(this)");
            element.innerText = elements[id];

            var elementFont = window.getComputedStyle(placeholder).fontFamily;

            placeholder.style.font = "bold 12px " + elementFont;
            placeholder.innerText = elements[id];
            var nameWidth = placeholder.clientWidth;

            if (nameWidth > 188) {
                var size = 120;
                while(nameWidth > 188){
                    size -= 1;
                    placeholder.style.font = "bold " + size/10 + "px " + elementFont;
                    nameWidth = placeholder.clientWidth;
                }
                element.style.fontSize = size/10 + "px";
            }
            else {
                element.style.fontSize = "12px";
            }

            for (let x = 0; x < Lists.length; x++) {
                if (x==0){
                    Lists[x].appendChild(element);
                }
                else {
                    Lists[x].appendChild(element.cloneNode(true));
                }
            }
        }

    }
    document.body.removeChild(placeholder);
}

function changeLanguage(elements, listClass){
    var Lists = document.querySelectorAll('.' + listClass + '.list');

    // create placeholder for font
    var placeholder = document.createElement('div');
    placeholder.style.position = 'absolute';
    // set the same classes to placeholder so it inherits the font style of the bottom define 'element'
    placeholder.setAttribute("class", listClass + " element");
    placeholder.style.whiteSpace = 'nowrap';
    document.body.appendChild(placeholder);

    for (let i = 0; i < Object.keys(elements).length; i++){
        if (!elements[i+1]){
            break;
        }
        var newText = elements[i+1];

        var elementFont = window.getComputedStyle(placeholder).fontFamily;

        placeholder.style.font = "bold 12px " + elementFont;
        placeholder.innerHTML = newText;
        var nameWidth = placeholder.clientWidth;
        var fontSize = 120;

        if (nameWidth > 188) {
            while(nameWidth > 188){
                fontSize -= 1;
                placeholder.style.font = "bold " + fontSize/10 + "px " + elementFont;
                nameWidth = placeholder.clientWidth;
            }
        }
        for (let z = 0; z < Lists.length; z++) {
            var elementId = Object.keys(elements)[i];

            var element = Lists[z].querySelector('div[name="' + elementId + '"]');
            element.innerText = newText;
            element.style.fontSize = fontSize/10 + "px";
        }
    }
    document.body.removeChild(placeholder);
}

//FUNCTION TO GET TEXT WIDTH
function textWidth(text, fontProp) {
    var tag = document.createElement('div')
    tag.style.position = 'absolute'
    tag.style.left = '-99in'
    tag.style.whiteSpace = 'nowrap'
    tag.style.font = fontProp
    tag.innerHTML = text

    document.body.appendChild(tag)
    var result = tag.clientWidth
    document.body.removeChild(tag)
    return result;
}

// Search filter for items
function elementFilter(element){
    var filter = element.value.toUpperCase();
    if (element.classList.contains("item")){
        var articles = element.parentElement.querySelectorAll('.item.element');
    }
    else if (element.classList.contains("poke")){
        var articles = element.parentElement.querySelectorAll('.poke.element');
    }
    else if (element.classList.contains("tera")){
        var articles = element.parentElement.querySelectorAll('.tera.element');
    }
    else if (element.classList.contains("ability")){
        var articles = element.parentElement.querySelectorAll('.ability.element');
    }
    else if (element.classList.contains("move")){
        var articles = element.parentElement.querySelectorAll('.move.element');
    }

    for (let i = 0; i < articles.length; i++) {
        var txtValue = articles[i].textContent || articles[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          articles[i].style.display = "flex";
        } else {
          articles[i].style.display = "none";
        }
    }
}

// Toogle itemsList visibility
function buttonClick(element) {

    var currentButton = element.parentElement;
    var Slots = document.querySelectorAll('.slot');

    if (currentButton.classList.contains('show')){
        currentButton.classList.remove('show');
    }
    else {
        for (let a = 0; a < Slots.length; a++) {
            var Buttons = Slots[a].querySelectorAll('.buttons .container');
            for (let i = 0; i < Buttons.length; i++) {
                var Button = Buttons[i];
                    Button.classList.remove('show');
            }
        }

        var List = element.parentElement.querySelector('.list');
        var Input = element.parentElement.querySelector('.input');
        currentButton.classList.add('show');
        List.scrollTop = 0;
        Input.value = "";
        elementFilter(Input);
        Input.focus();
        Input.select();
    }

}

// Update Buton text and img with chosen element
function chosenElement(element) {
    var id = element.getAttribute("name");

    var name = element.textContent;
    var Input = element.closest(".container").querySelector('.input');
    var List = element.parentElement;
    var Container = element.closest(".container")
    var ButtonText = element.closest(".container").querySelector('.button .text');

    if (element.classList.contains("item")){
        var x = itemsCoordinates[id][0];
        var y = itemsCoordinates[id][1];
        var Sprite = element.closest(".slot").querySelector('.item.sprite');
        Sprite.style.backgroundImage="url(./Output_items/GENERAL50x50p64.png)";
        Sprite.style.backgroundPosition = "-" + x + "px -" + y + "px";
        var Text = element.closest(".slot").querySelector(".info .item.text");
        Text.innerText = "Item: " + name;
    }
    else if (element.classList.contains("poke")){
        var x = pokesCoordinates[id][0];
        var y = pokesCoordinates[id][1];
        var Sprite = element.closest(".slot").querySelector('.poke.sprite');
        Sprite.style.backgroundImage="url(./Output_pokes/GENERAL35x35p192.png)";
        Sprite.style.backgroundPosition = "-" + x + "px -" + y + "px";
        var Text = element.closest(".slot").querySelector(".info .poke.text");
        Text.innerText = name;

        var type1 = element.closest(".slot").querySelector(".type1.sprite");
        type1.style.backgroundImage="none";
        var type2 = element.closest(".slot").querySelector(".type2.sprite");
        type2.style.backgroundImage="none";

        var tid = pokesTypes[id];
        for (let i = 0; i < tid.length; i++) {
            var typeId = tid[i] + 1;

            var x = typesCoordinates[typeId][0];
            var y = typesCoordinates[typeId][1];
            var typeSprite = element.closest(".slot").querySelector(".type" + (i+1) + ".sprite");
            typeSprite.style.backgroundImage="url(./Output_types/GENERAL18x1p24.png)";
            typeSprite.style.backgroundPosition = "-" + x + "px -" + y + "px";

        }

    }
    else if (element.classList.contains("tera")){
        var x = terasCoordinates[id][0];
        var y = terasCoordinates[id][1];
        var Sprite = element.closest(".slot").querySelector('.tera.sprite');
        Sprite.style.backgroundImage="url(./Output_teras/GENERAL18x1p60.png)";
        Sprite.style.backgroundPosition = "-" + x + "px -" + y + "px";
        var Text = element.closest(".slot").querySelector(".info .tera.text");
        Text.innerText = "Teratype: " + name;
    }
    else if (element.classList.contains("ability")){
        var Text = element.closest(".slot").querySelector(".info .ability.text");
        Text.innerText = "Ability: " + name;
    }
    else if (element.classList.contains("move")){
        var position = element.closest(".container").classList[1];
        var Text = element.closest(".slot").querySelector(".moves ." + position + " .text");
        var tid = movesTypes[id][0] + 1;
        var x = typesCoordinates[tid][0];
        var y = typesCoordinates[tid][1];
        var Sprite = element.closest(".slot").querySelector(".moves ." + position + " .sprite");
        Sprite.style.backgroundImage="url(./Output_types/GENERAL18x1p24.png)";
        Sprite.style.backgroundPosition = "-" + x + "px -" + y + "px";
        Text.innerText = name;
    }

    var buttonFont = window.getComputedStyle(ButtonText).fontFamily;
    var nameWidth = textWidth(name, "bold 15px " + buttonFont);

    var size = 150;
    if (nameWidth > 188) {
        var tag = document.createElement('div');
        tag.style.position = 'absolute';
        tag.style.left = '-99cm';
        tag.style.whiteSpace = 'nowrap';
        document.body.appendChild(tag);

        while(nameWidth > 188){
            size -= 1;
            tag.style.font = "bold " + size/10 + "px " + buttonFont;
            tag.innerHTML = name
            nameWidth = tag.clientWidth;
        }

        document.body.removeChild(tag);
        ButtonText.style.fontSize = size/10 + "px";
    }
    else {
        ButtonText.style.fontSize = "15px";
    }

    ButtonText.innerText = name;
    ButtonText.setAttribute("name", id);
    ButtonText.style.background = "none";
    Container.classList.remove("show");

}

function mouseListener(event){
    if (!event.target.closest('.buttons')) { // is true if click outside class="buttons"
        var Buttons = document.querySelectorAll('.buttons');
        for (let a = 0; a < Buttons.length; a++) {
            for (let i = 0; i < Buttons[a].children.length; i++) {
                var Child = Buttons[a].children[i]
                if (Child.classList.contains('container')){
                    Buttons[a].children[i].classList.remove('show');
                }
            }
         }
    }
}


function getBase(element) {

    // Get computed styles of element
    var computedStyle = window.getComputedStyle(element);
    // Get background image and its position
    var backgroundImage = computedStyle.backgroundImage.slice(4, -1).replace(/"/g, "");
    var imagePosX = computedStyle.backgroundPositionX;
    var imagePosY = computedStyle.backgroundPositionY;
    // Create a new image element with the background image
    var image = new Image();
    image.src = backgroundImage;
    // Create a canvas element
    var canvas = document.createElement("canvas");
    canvas.width = parseInt(computedStyle.width);
    canvas.height = parseInt(computedStyle.height);
    // Draw the visible part of the background image on the canvas
    var ctx = canvas.getContext("2d");
    imagePosX = Math.abs(imagePosX.replace('px', ''));
    imagePosY = Math.abs(imagePosY.replace('px', ''));
    ctx.drawImage(image, imagePosX, imagePosY, canvas.width, canvas.height,
    0, 0, canvas.width, canvas.height);
    // Get base64 string of the visible part of the background image
    var base64 = canvas.toDataURL();
    return base64;
}


function langChecked(element){

    if (element.querySelector('img').src.includes('ERROR')){
        var langs = document.querySelectorAll('.langcheck');
        for (let i = 0; i < langs.length; i++) {
            langs[i].querySelector('img').src="checkOFF.png"
        }
    }

    if (element.classList.contains("active")) {
        element.classList.remove("active");
        element.querySelector('img').src="checkOFF.png";
    }
    else {
        element.classList.add("active");
        element.querySelector('img').src="checkON.png";
    }
}


function lostFocus(element){
    element.style.borderBottom = "2px solid #b5b5b5";
}


function generatePDF() {

    var tourText = document.querySelector('input.tournament').value;
    var playerName = document.querySelector('input.player').value;
    var commentText = document.querySelector('input.comment').value;

    if (!tourText.trim()) {
        document.querySelector('input.tournament').style.borderBottom = "2px solid red";
        return;
    }
    else if (!playerName.trim()) {
        document.querySelector('input.player').style.borderBottom = "2px solid red";
        return;
    }

    var generate = false;
    var langs = document.querySelectorAll('.langcheck');
    for (let i = 0; i < langs.length; i++) {
        if (langs[i].classList.contains('active')) {
            generate = true;
            break;
        }
    }

    if (!generate){
        for (let i = 0; i < langs.length; i++) {
            langs[i].querySelector('img').src="checkERROR.png";
        }
        return;
    }

    // craete PDF object
    var doc = new jsPDF();

    // create font to be recognized by the library
    doc.addFileToVFS("customFont.ttf", multiLangFont);
    doc.addFont('customFont.ttf', 'customFont', 'normal');
    doc.setFont("customFont", 'normal');

    // create canvas for drawing line
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 100, 100);
    const line = canvas.toDataURL(); // The image data in base64 encoded string format

    // get all selected languages
    var langcheck = document.querySelectorAll('.langcheck.active');
    for (let u = 0; u < langcheck.length; u++) {

        var currentLang = langcheck[u].classList[0]

        if (u > 0){
            doc.addPage();
        }

        // draw lines
        doc.addImage({imageData:line, format:'png', x:9, y:80, width:0.5, height:165});
        doc.addImage({imageData:line, format:'png', x:109, y:80, width:0.5, height:165});

        // write tournament name and Lang
        doc.setFontSize(20);
        doc.text(tourText, 105, 30, 'center');
        doc.text(currentLang.toUpperCase(), 190, 15, 'center');

        // write player name and comments
        doc.setFontSize(12);
        doc.text(gui[currentLang]['playername'] + ': ' + playerName, 20, 46, 'left');
        if (commentText.trim()) {
            doc.text(gui[currentLang]['comment'] + ': ' + commentText, 20, 55, 'left');
        }

        doc.setFontSize(10);

        // draw pokemon sprite
        var Sprites = document.querySelectorAll('.poke.sprite')
        for (let i = 0; i < Sprites.length; i++) {
            var x;
            var y = 80;

            if (i % 2 == 0){
                x = 15;
            }
            else {
                x = 115;
            }
            y = y + 60 * Math.floor(i/2);

            var img = getBase(Sprites[i]);
            doc.addImage({imageData:img, format:'png', x:x, y:y, width:35, height:35});
        }

        // draw teratype sprite
        var Sprites = document.querySelectorAll('.tera.sprite')
        for (let i = 0; i < Sprites.length; i++) {
            var x;
            var y = 80;

            if (i % 2 == 0){
                x = 50;
            }
            else {
                x = 150;
            }
            y = y + 60 * Math.floor(i/2);

            var img = getBase(Sprites[i]);
            doc.addImage({imageData:img, format:'png', x:x, y:y, width:10, height:10});
        }

        // draw item sprite
        var Sprites = document.querySelectorAll('.item.sprite')
        for (let i = 0; i < Sprites.length; i++) {
            var x;
            var y = 92;

            if (i % 2 == 0){
                x = 50;
            }
            else {
                x = 150;
            }
            y = y + 60 * Math.floor(i/2);

            var img = getBase(Sprites[i]);
            doc.addImage({imageData:img, format:'png', x:x, y:y, width:10, height:10});
        }

        // draw pokemon types sprites
        var Sprites = document.querySelectorAll('.slot .data');
        for (let i = 0; i < Sprites.length; i++) {
            var stype1 = Sprites[i].querySelector('.type1.sprite');
            var stype2 = Sprites[i].querySelector('.type2.sprite');

            var x;
            var y1 = 80;
            var y2 = 85;

            if (i % 2 == 0){
                x = 10;
            }
            else {
                x = 110;
            }
            y1 = y1 + 60 * Math.floor(i/2);
            y2 = y2 + 60 * Math.floor(i/2);

            var img = getBase(stype1);
            doc.addImage({imageData:img, format:'png', x:x, y:y1, width:4.4, height:4.4});
            var img = getBase(stype2);
            doc.addImage({imageData:img, format:'png', x:x, y:y2, width:4.4, height:4.4});
        }

        // write pokes names
        var pokesNames = document.querySelectorAll(".poke.button span");
        var names = window[currentLang + "Pokes"];
        for (let i = 0; i < pokesNames.length; i++) {
            var id = pokesNames[i].getAttribute("name");

            var x; 62
            var y = 80;

            if (i % 2 == 0){
                x = 62;
            }
            else {
                x = 162;
            }
            y = y + 60 * Math.floor(i/2);

            if (names[id]){
                doc.text(names[id], x, y, { maxWidth: 40 });
            }
        }

        // write abilities names
        var abilitiesNames = document.querySelectorAll(".ability.button span");
        var names = window[currentLang + "Abilities"];
        for (let i = 0; i < abilitiesNames.length; i++) {
            var id = abilitiesNames[i].getAttribute("name");

            var x; 62
            var y = 90;

            if (i % 2 == 0){
                x = 62;
            }
            else {
                x = 162;
            }
            y = y + 60 * Math.floor(i/2);

            if (names[id]){
                doc.text(gui[currentLang]['ability'] + ": "  + names[id], x, y, { maxWidth: 45 });
            }
        }

        // write items names
        var itemsNames = document.querySelectorAll(".item.button span");
        var names = window[currentLang + "Items"];
        for (let i = 0; i < itemsNames.length; i++) {
            var id = itemsNames[i].getAttribute("name");

            var x; 62
            var y = 95;

            if (i % 2 == 0){
                x = 62;
            }
            else {
                x = 162;
            }
            y = y + 60 * Math.floor(i/2);

            if (names[id]){
                doc.text(gui[currentLang]['item'] + ": "  + names[id], x, y, { maxWidth: 45 });
            }
        }

        // write teras names
        var terasNames = document.querySelectorAll(".tera.button span");
        var names = window[currentLang + "Teras"];
        for (let i = 0; i < terasNames.length; i++) {
            var id = terasNames[i].getAttribute("name");

            var x; 62
            var y = 100;

            if (i % 2 == 0){
                x = 62;
            }
            else {
                x = 162;
            }
            y = y + 60 * Math.floor(i/2);

            if (names[id]){
                doc.text(gui[currentLang]['teratype'] + ": "  + names[id], x, y, { maxWidth: 45 });
            }
        }


        // draw move types sprites
        var Moves = document.querySelectorAll('.moves');
        var movesNames = document.querySelectorAll(".move.button span");
        var names = window[currentLang + "Moves"];
        for (let i = 0; i < Moves.length; i++) {

            var x; 62
            var y = 105;

            if (i % 2 == 0){
                x = 62;
            }
            else {
                x = 162;
            }
            y = y + 60 * Math.floor(i/2);

            var Sprites = Moves[i].querySelectorAll('.sprite');
            for (let z = 0; z < Sprites.length; z++) {
                var id = movesNames[z+(4*i)].getAttribute("name");
                if (names[id]) {
                    var img = getBase(Sprites[z]);
                    doc.addImage({imageData:img, format:'png', x:x, y:y, width:4.4, height:4.4});
                    doc.text(names[id], x+6, y+3.3, { maxWidth: 45 });
                    y = y + 5;
                }
            }
        }

    }

//    doc.addImage({imageData:img, format:'png', x:10, y:80, width:35, height:35});

    doc.save("SUFIIIII.pdf");
}



document.addEventListener('mousedown', mouseListener);
window.jsPDF = window.jspdf.jsPDF;
