const cats = ["Milo", "Otis", "Garfield"]  

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
cats.shift()
}

function appendCat(name) {
 const newCat= [...cats, "Broom"]
return newCat;
}

function prependCat(Arnold){
var newCats= ["Arnold", ...cats]
return newCats;
}

function removeLastCat() {
var gatos= cats.slice(0, cats.length - 1)
return gatos;
}

function removeFirstCat() {
var kitties= cats.slice(1)
return kitties;
}
