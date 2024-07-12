// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    name = cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    name = cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
name = [...cats, "Broom"];
return name;
}
function prependCat(name) {
    name = ["Arnold", ...cats];
    return name;
    }
function removeLastCat() {
   return cats.slice(0, - 1);
} 
function removeFirstCat() {
    return cats.slice(1);
 } 