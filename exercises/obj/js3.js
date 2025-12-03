 

 let x = {
    
 };

Object.getPrototypeOf(x);
 
console.log(x.valueOf())


let y = [];
let xy = new Array();

// Object.getPrototypeOf(y);

console.log(x instanceof Object);

//Hero constructor
function Hero(name, level){
    this.name = name;
    this.level = level;
}
 

//link Hero propertier to Warrior and Healer

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype , Hero.prototype);

let hero1 = new Hero('John','2');
let value = Object.getPrototypeOf(hero1);

//add greet method to the hero prototype
Hero.prototype.greet = function(){
    return `${this.name} says hello`;
}



// Warrior constructor
function Warrior(name, level, weapon){
    //chain constructor with call
    Hero.call(this, name, level);

    //Add new property
    this.weapon = weapon;
}

//initialize Healer constructor
function Healer(name, level, spell){
    Hero.call(this, name, level);

    this.spell = spell;
}

//add attack() method to warrior  and heal() to Healer

Warrior.prototype.attack = function(){
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function(){
    return `${this.name} casts ${this.spell}`;
}

const hero12= new Warrior('Bjorn', 1 , 'axe');
const hero2 = new Healer('Damian', 3 , "cure");

console.log(hero12.greet());