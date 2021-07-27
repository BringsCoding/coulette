console.log("Hello");
///////////Golable Variabelen//////////////////////////////
let randomColor = undefined; //Der zuletzt gespeicherte Wert
let colors = []; //ARRY wird gemacht //!!!WICHTIG!!!///
let colorToDelet = [];

///FÜR DEN BUTTON /////////////////////
const generateColorButton = document.querySelector("#generate"); //Nimm den Button
generateColorButton.addEventListener("click", generateColor); //Auf dem Button soll ein Click event statt finden
/////////////////////////////////////////

/////HINTERGRUND FARBE DIFINIEREN HEADER///////////////////
function generateColor() {
  //---------------------------------------//
  const header = document.querySelector("#header"); //Box wird gepackt mit hedader ID drin
  const colorValueParagraph = document.querySelector("#color-value"); //Box wird gepackt mit dem Button drin
  randomColor = randomHexColor(); //Soll die HEX zahl ausgeben
  //--------------------------------------//

  header.style.backgroundColor = randomColor; //Gibt die Hintergrund Farbe wieder
  colorValueParagraph.innerText = randomColor; //Gibt die HEX-Zahl als Text Wieder

  updateSaveButtonStatus();
}

generateColor(); //Beim Seiten neu Laden wird Sofort eine Farbe aufgerufen !

////////////Button wird Genariert SAVE COLOR///////////////////////////////////////
const saveButton = document.querySelector("#save"); //Es wird nach dem SaveButton gesucht
saveButton.addEventListener("click", saveColorToList); //Der SaveButton bekommt ein Event
function saveColorToList() {
  const colorToSave = randomColor; //Undefinde
  colors.push(colorToSave); //Aryya//Daten sollen in die Prüfung!//Und werden Gespichert//
  console.log(colors);

  //if (colors.includes(randomColor)) //Hast das Aryy schon dies Farbe Gespeichert ?
  //{
  //return;
  //}

  updateSaveButtonStatus();

  //----------------------------------------//

  const colorListElement = document.querySelector("#color-list"); //Box wird gepackt // Wir Holen uns die liste
  const newListItem = document.createElement("li"); //Erzeugz eine Liste
  const colorTextNode = document.createTextNode(randomColor); //Hier wird Die HEX-Zahl gespeichert

  //-------------------------------------//

  colorListElement.appendChild(newListItem); // Liste wird ausgegebn !
  newListItem.appendChild(colorTextNode); //Hex Zahl wird in die Liste aufgenommen
  newListItem.style.backgroundColor = colorToSave; //Gibt die Hintergrund Farbe in der Lsite aus!

  //--------In der Liste Löschen--------///
  const deleteButton = document.createElement("button"); //Wir erzeugen ein Element
  deleteButton.id = "DelteButton";
  deleteButton.innerText = "delet me"; //Text auf dem Button
  newListItem.appendChild(deleteButton); //Button wird in der Liste Angezeigt

  //---------------Delet Button----------------------------//Data fehlt
  deleteButton.addEventListener("click", deleteColorFromList);
  const index = colors.indexOf(colorToDelet);
  if (index > -1) {
    colors.splice(index, -1);
  }

  //--------SAVE BUTTON-----DEAKTIVIEREN------//
  const saveButton = document.querySelector("#save");
  saveButton.disabled = false;
  newListItem.couletteColor = colorToSave;

  updateSaveButtonStatus();
}

function deleteColorFromList(MyNameIst) {
  const buttonWasClicked = MyNameIst.target; //Wo wurde geklickt
  buttonWasClicked.parentElement.remove(); //Farbe kann aus element gelöscht werden wegen dem Parameter
  console.log();
  console.log(colorToSave);
}

//-----------Blockiert den SaveButton---------///
function updateSaveButtonStatus() {
  const saveButton = document.querySelector("#save");
  saveButton.disabled = colors.includes(randomColor); //Abfrage//Disabled ist true//Sicherstellen das ich keine Farbe Doppelt habe//
}

////////Erstellen der Zahl////////////////////
function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

//Wirft mir einen Wert zwichen 0 und 255 raus !
function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}

//Wirft 3 Zahlen raus
function randomHexColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();

  return ("#" + red + green + blue).toUpperCase();
}
///////////////////////////////////////////
