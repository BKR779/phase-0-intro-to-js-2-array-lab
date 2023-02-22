// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
  cat = cats.push("Ralph")
}

function destructivelyPrependCat(cat) {
  cat = cats.unshift("Bob")
}

function destructivelyRemoveLastCat(cat) {
  cat = cats.pop()
}
function destructivelyRemoveFirstCat(cat) {
  cat = cats.shift()
}

function appendCat(cat) {
  cat = [...cats, "Broom"]
  return cat;
}

function prependCat(cat) {
  cat = [cat, ...cats]
  return cat;
}

function removeLastCat(cat) {
  cat = [...cats];
  cat.pop();
  return cat;
}

function removeFirstCat(cat) {
  cat = [...cats];
  cat.shift();
  return cat;
}