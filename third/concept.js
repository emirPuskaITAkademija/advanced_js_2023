class Person{
    constructor(name, surname, year){
        this._name = name;
        this._surname = surname; 
        this._year = year;
    }

    age(){
        const date = new Date();
        const currentYear = date.getFullYear();
        return currentYear-this.year;
    }

    get name(){
        console.log("Pozvana je get function");
        return this._name;
    }
    set name(x){
        console.log("Pozvana je set function");
        this._name = x;
    }
}
let ahmet = new Person("Ahmet", "Kuljanović", 1996);
ahmet.name="Ahmo";
console.log(ahmet.name);


class Penzioner extends Person{
    constructor(name, surname, year, pensionAmount){
        super(name, surname, year);
        this.pensionAmount = pensionAmount;
    }

}

let penzioner = new Penzioner("Hamed", "Hlapić", 1943, 2000);
console.log(penzioner.age());

let elvis = new Person("Elvis", "Hodžić", 1998);
console.log(elvis.name+" has " + elvis.age()+" years");
let ibrahim = new Person("Ibro", "Memišagić", 1990);
let saša = new Person("Saša", "Bogdanović", 2003);
let ajka = new Person("Ajka", "Mahmutović", 2004);
let ado = new Person("Ado", "Ahmetohodžić", 1998);
let tare = new Person("Tarik", "Brčić", 1988);

