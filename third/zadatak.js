

class Person{
    constructor(name, surname, nin, birthday){
        this.name = name; 
        this.surname = surname; 
        this.nin = nin; //jmbg
        this.birthday = birthday;
    }

    age(){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let yearOfBirth = this.birthday.getFullYear();
        return currentYear - yearOfBirth;
    }

    ageInYear(year){
        let yearOfBirth = this.birthday.getFullYear();
        return year - yearOfBirth;
    }
}