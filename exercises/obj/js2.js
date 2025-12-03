

function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log('Hello, I am ' + this.name);
};


function Player(name, maker){
    this.name = name;
    this.maker = maker;
};

Player.prototype.getMaker = function(){
    console.log('My maker is ' + this.maker);
};


Object.getPrototypeOf(Player.prototype);

 
//make Player object ingerit from Person
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);


const player1 = new Player('steve', 'x');
const player2 = new Player('also steve' , 'o');

console.log(player1.sayName());
console.log(player2.getMaker());