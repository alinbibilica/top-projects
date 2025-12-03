

//initialize construction functions

function Hero(name, level){
    this.name = name,
    this.level = level;
}

function Warrior(name, level, weapon){

    Hero.call(this, name, level);

    this.weapon = weapon;
}

function Healer(name, level, spell){
    Hero.call(this, name, level);

    this.spell = spell;
}

//Link prototypes and add methods

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

//best practice is to add methods through the prototype

Hero.prototype.greet = function(){
    return `${this.name} says hello!`;
}

Warrior.prototype.attack = function(){
    return `${this.name} attacks with the ${this.weapon}`;
}

Healer.prototype.heal = function(){
    return `${this.name} will use the spell on you -> ${this.spell}.`;
}

//initialize character instances

const hero1 = new Warrior('Sungocu', 3 , 'Katana');
const hero2 = new Healer('Gandalf', 3 , 'Store turning');

console.log(hero1.attack());

for(let items in hero2) {

  let isOwn = hero2.hasOwnProperty(items);

  if(isOwn){
    console.log(items );
  }
  else {
    console.log(items + " - >inherited");
  }
   
}

 
console.log(this.window.innerWidth)