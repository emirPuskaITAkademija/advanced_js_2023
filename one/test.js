

//varijabla
let person = "Jasenko Božinović";
console.log(person);

//objekat JS 
let person2 = {
    name:"Jasenko", 
    surname: "Božinović",
    age: 23, 
    favouriteSport: "Šah", 
    fullName: function(){
        return this.name +"  " + this.surname;
    }, 
    run: function(){
        return "Trčim trčim al u snu...";
    }
};
console.log(person2.run());



const person3 = {};
person3.firstName="Ibrahim";
person3.lastName="Memišagić";
person3.programer=true;

console.log(person3.lastName);


const person4 = new Object();
person4.surname="Skopljak";
person4.sport="Basketball";
console.log(person4.sport+" " + person4.surname);


const movie = {
    title: "Kum", 
    director: "Copola", 
    rating: 6, 
    get rate(){
        return this.rating;
    },
    set rate(rate){
        if(rate >10){
            this.rating = 10;
        }else if(rate < 1){
            this.rating = 1;
        }else{
            this.rating = rate;
        }
    }
}

console.log(movie.title+" je ocijenjen " + movie.rate);

movie.rate = 20;
console.log(movie.title+" je ocijenjen " + movie.rate);

movie.rating = 50;
console.log(movie.title+" je ocijenjen " + movie.rate);