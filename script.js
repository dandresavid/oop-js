'use strict';
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never do this
//     // this.calcAge = function(){
//     //     console.log (2037 -this.birthYear)
//     // };
// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);


//1. New {} is created
//2. Fuction is called, this = {}
//3. {} linked to prototype
//4. fuction actomatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// Person.hey = function() {
//     console.log('Hey there !!!')
//     console.log(this);
// }

// Person.hey();
// jonas.hey(); -------> this is not possible

// Prototype
// console.log(Person.prototype);

// Person.prototype.calcAge = function(){
//     console.log (2037 -this.birthYear)
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Spiens';
// console.log(jonas.species,matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Experiement dont do it in practice
Array.prototype.unique = function(){
    return [...new Set(this)];
};

//console.log(arr.unique());

const h1 = document.querySelector('h1');

// Challenge #1

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)

}

const bmw = new Car(`bmw`, 120);
const mercedez = new Car(`Mercedes`, 95);

bmw.accelerate();
bmw.accelerate();
mercedez.accelerate();
bmw.brake();
mercedez.brake();
mercedez.brake();
mercedez.brake();

console.log(bmw,mercedez);

// class expression
//const PersonCl = class{}

// class declaration
class PersionCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to .prototype propoerty
    calcAge(){
        console.log(2037 - this.birthYear);
    }
    greet(){
        console.log(`Hey ${this.fullName}`);

    }
    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    // Set a property that already exists
    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey () {
        console.log('Hey there !!!')
        console.log(this);
    }
}

const jessica = new PersionCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersionCl.prototype);

// PersionCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT Hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersionCl('Walter White', 1965);

PersionCl.hey();

/*
const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        return this.movements.push(mov);
    }
};

console.log(account.latest)

account.latest = 50;
console.log(account.latest)
*/

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, bithYear){
        this.firstName = firstName;
        this.birthYear = bithYear;
    }
}

const steven = Object.create(PersonProto);
console.log(`Yo soy: ${steven}`);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah Fanco', 1979);
sarah.calcAge();

// Challenge 2



// class Car2 {
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate(){
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//     }
//     brake (){
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h`)
//     }
//     getSpeedUS(){
//         console.log(`${this.make} is going at ${this.speed/1.6} Mil/h`);
//     }
//     setSpeedUS(speedUS){
//         this.speed = speedUS*1.6;
//         console.log(`${this.make} is going at ${this.speed*1.6} Mil/h`);

//     }

// }

// const ford = new Car2(`ford`, 120);
// ford.getSpeedUS();

// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.brake();
// ford.getSpeedUS();
// ford.brake();
// ford.brake();
// ford.setSpeedUS(130);
// ford.getSpeedUS();

// console.log(ford);

///////////////////////////////
//Inheritance Between "Classes": Constructor Fuctions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log (2037 -this.birthYear)
};


const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear)
    this.course = course;
}

// Linking prototypes.
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Challenge 3
//////////////////////


const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// Link the prototypes --- Inheritance 
EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const teslaEV = new EV(`Tesla`, 120, 23)
console.log(teslaEV.__proto__);
console.log(teslaEV.__proto__.__proto__);
console.log(teslaEV.__proto__.__proto__.__proto__);
console.log(teslaEV.__proto__.__proto__.__proto__.__proto__);
teslaEV.accelerate();
teslaEV.chargeBattery(90);
console.log(teslaEV);
teslaEV.brake();
console.log(teslaEV);

// Static method

class StudentCl extends PersionCl{
    constructor(fullName, birthYear, course){
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);

    }
    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years old, but as student I feel more like ${2037 - this.birthYear + 10}`)
    }
}
const martha = new StudentCl('Martha Jones' ,2012, 'Computer Science')
martha.introduce();
martha.calcAge();