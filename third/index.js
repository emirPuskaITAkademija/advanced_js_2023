//Način da kreirate String
const text = "ITAkademija";  // [I, T, A, k, a, d, e, m, i, j, a]
// String niz karaktera for of 
for(const t of text){
    console.log(t);
}

const letters = ["I", "T", "A", "k", "a"];
for(const letter of letters){
    console.log(letter);
}

const person = {
    name: "Adi", 
    surname: "Ibrahimagić"
};
for(let p in person){
    console.log(p);
}

// Svoj vlastiti Iterable
function noviBroj(){
    let number = 0;
    return {
        next: function(){
            number = number+10;
            return{
                value: number,
                done: false
            }
        }
    }
}

const vlastitiIterable = noviBroj();
for(let v of vlastitiIterable){
    console.log(v);
}
console.log(vlastitiIterable.next().value);
console.log(vlastitiIterable.next().value);
console.log(vlastitiIterable.next().value);


//Kako dizajnirati objekat koji će se moći koristiti unutat for of ime_objekta ?
let objekat = {
    number: 30,
};
//1. objekat[Symbol.iterator]
//2. next() -> value, done
objekat[Symbol.iterator] = function(){
    let vrijednost = this.number;
    let zavrseno = false;
    return{
        next(){
            vrijednost=vrijednost+10;
            if(vrijednost == 100){zavrseno=true;}
            return{value:vrijednost, done: zavrseno};

        }
    }
}
//next()    {value: vrijednost, done: true/false}  40 false
//next()    {value: 50, done: false}  50 false
for(let nekaVarijabla of objekat){
    console.log(nekaVarijabla);
}

//Specijalne kolekcije Set -> 

const elementi = new Set();
elementi.add("Ibrahim");
elementi.add("Saša");
elementi.add("Saša");
elementi.add("Ibrahim");
elementi.add("Ajka");
//elementi.values()
//elementi.keys()
//entry   key:value
for(let e of elementi.entries()){
    console.log(e);
}

//Map -> kolekcija entry elemenata
// entry   [key, value]
let tezgaAsObject = {
    "apples": 200, 
}

const tezga = new Map();
tezga.set("apples", 200);
tezga.set("banana", 100);
tezga.set("apples", 300);
console.log(tezga.get("apples"));
console.log(tezga.has("ananas"));
for(let e of tezga){
    console.log(e);
}
tezga.forEach(handleMapElement);

function handleMapElement(key, value){
    console.log(key+" : " + value);
}

for(let x of tezga.values()){
    console.log(x);
}













