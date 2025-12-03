const playerOne = "Tim";
const playerOneMark = "X";

const playerTwo = "Mark";
const playerTwoMark = "o";

//object examples//

const player1 = {
    name: "Tim",
    mark: "X"
};

const player2 = {
    name: "James",
    mark: "o"
};



//object constructors//

function Player(name, marker, color){

    if(!new.target){
        throw Error("YOu must use the 'new' operator to call the constructor");
    }

    this.name = name;
    this.marker = marker;
    this.color = color;
    this.sayName = function(){
        console.log("My name is " + this.name )
    };
}

const firstPlayer =  new Player('steve', 'X', 'red');
const secondPlayer = new Player('Mark', 'Y', 'blue');


// console.log(firstPlayer.sayName());

//->....Write a constructor for making “Book” objects.....<=//

//create the object constructor (needs to have title, author, nr of pages , read/notread)

function Book(title , author, nrOfPages, status){
    this.title = title,
    this.author = author,
    this.nrOfPages = nrOfPages,
    this.status = status,
    this.info = function(){
        let bookStatus;

        if(this.status === "read"){
            bookStatus = " was read!";}

        else bookStatus = " was not read yet!";

        let value = "The book: " + this.title + " written by " + this.author + ", " + this.nrOfPages + bookStatus;
        
        return value;
    };
}

/* 
adaugare functie la prototipul constructorului,
astfel poti adauga functii sau variable direct in prototipul constructorului
devenidn astfel disponibile pt toate obiectele create
*/

Book.prototype.sayGoodbye = function(){
    console.log("Goodbye" + this.title);
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295' , 'not read');

console.log(theHobbit.info());

 

console.log(theHobbit.sayGoodbye());


//Object.getPrototypeOf(Book.prototype) === Object.prototype;

console.log(theHobbit.valueOf());

console.log(theHobbit.hasOwnProperty('title'))