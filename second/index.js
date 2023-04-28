let personName = "Lamija";
console.log(personName);
//name:value pairs
const person = {
    firstName: "Lamija",
    lastName: "Herceg", 
    age: 13, 
    eyeColor: "blue"
};
person.eyeColor="green";

console.log(person.eyeColor);
console.log(person.lastName);


const person2 = {};
person2.name="Ajka";
person2.surname="Mahmutović";
person2.age=23;
person2.eyeColor="brown";
console.log(person2.eyeColor);

//person3 JS objekat
const orginalTarik = new Object();
orginalTarik.name="Tarik";
orginalTarik.surname="Brčić";
console.log(orginalTarik.surname);
//kopiju -> Objekti su mutabilni i kopirani po referenci ne po vrijednosti
const tarikovaKopija = orginalTarik;
tarikovaKopija.surname="Kuldija";
console.log(orginalTarik.surname);
console.log(tarikovaKopija.surname);


const auto = {
    marka:"Ferrari", 
    boja:"Sivi",
    age:12
}
//console.log(auto.marka);
//console.log(auto["marka"]);
for(let propertyName in auto){
    console.log(propertyName +" -> "+ auto[propertyName]);
}

const person = {
    name:"Saša", 
    surname:"Bogdanović", 
    age: 24, 
    eyeColor: "brown"
}
function showPersonInParagraf(){
    //Saša Bogdanović 24 brown -> person   for in loop  for(let propertyName in person)
    //paragrafu i ubacite u paragraf tako formatiran sadržaj
}

const pet = {
    id: 123,
    name: "Tom", 
    surname:"Jerry", 
    age: 4, 
    fullName: function(){
        return this.name+" " + this.surname;
    }
}
pet.fullDescription = function(){
    return (this.name+" "+ this.surname+" , age: " + this.age).toUpperCase();
}

console.log(pet.fullName());
console.log(pet.fullDescription());


const person = {
    name: "Ajka", 
    surname: "Mahmutović", 
    age:23, 
    eyeColor:"green", 
    language:"en", 
    get lang(){
        return this.language;
    },
    set lang(param){
        this.language = param;
    }, 
   /* fullName: function(){
        return this.name+" " + this.surname;
    }*/
    get fullName(){
        return this.name+" " + this.surname;
    }
}
console.log(person.fullName);


console.log(JSON.stringify(person));
let personArrray = Object.values(person);
for(let i in personArrray){
    let poljeNizaPerson = personArrray[i];
    console.log(poljeNizaPerson);
}
for(let propertyName in person){
    console.log(propertyName);
}










const person = {
    name: "Ajka", 
    surname: "Mahmutović", 
    age:23, 
    eyeColor:"green", 
    language:"en"
}

function Person(name, surname, age, eyeColor){
    this.name  = name;
    this.surname = surname;
    this.age = age;
    this.eyeColor = eyeColor;
    this.fullName = function(){
        return this.name+" " + this.surname;
    }
}
const father = new Person("Hamo", "Hapić", 61, "black");
const mother = new Person("Angelina", "Jolie", 45, "green");
console.log(father.eyeColor);
console.log(mother.eyeColor);




