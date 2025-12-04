const myLibrary = [];

const library1 = document.getElementById("library");  //main container to display library books

const addButton = document.getElementById('addBookButton'); // Add Book Button used to open the "add book form"
const closeButton = document.getElementById('closeButton'); // button to close the "add book form" if user decides not to add a new book
const addBookForm = document.getElementById('addBookForm'); // Add Book Form where users inputs his book details to add them to the library
const submitBookButton = document.getElementById('submitNewBook'); // Add New Book Submit button
 
addButton.addEventListener("click", function(e){
    addBookForm.style.display = "grid";
});

closeButton.addEventListener("click", function(e){
    addBookForm.style.display = "none";
});

function Book(title, author, nrOfPages ){
    if(!new.target){
        throw Error('You must use the "new" operator to call the constructor');
        }
        this.title = title,
        this.author = author
        this.nrOfPages = nrOfPages; 
        
}

Book.prototype.getId = function(){
    this.idNr = crypto.randomUUID();
}

Book.prototype.getStatus = function(){
    this.status = bookStatus;
}
 
function addBookToLibrary(title, author, noOfPages){
    const addBook = new Book(title, author, noOfPages);
    addBook.getId();
    addBook.getStatus();
    myLibrary.push(addBook);
    addBookForm.style.display = "none";
}

let libraryContainer = document.getElementById('library');
//functie care adauga elementele in DOM
function addElements(){

        let bookTitle = document.createElement('div');
        let bookAuthor = document.createElement('div');
        let bookPages = document.createElement('div');
        let booksCard = document.createElement('div');
        let bookId = document.createElement('div');
        let bookStatus = document.createElement('div');
        let bookRemoveButton = document.createElement('button');

    myLibrary.forEach((item)=>{


        bookTitle.innerText = `${item.title.value}`;
        bookAuthor.innerText = ` Written by: "${item.author.value}".`;
        bookPages.innerText = `Pages: ${item.nrOfPages.value}`;
        bookStatus.innerText = `Status: ${item.status.value}`;
        bookId.innerText = `Book Id: ${item.idNr}`;
        bookRemoveButton.innerText = `Remove`;

        booksCard.appendChild(bookTitle);
        booksCard.appendChild(bookAuthor);
        booksCard.appendChild(bookPages);
        booksCard.appendChild(bookId);
        booksCard.appendChild(bookStatus);
        booksCard.appendChild(bookRemoveButton);

        booksCard.classList.add("books");
        


        libraryContainer.appendChild(booksCard);
    }
    )
        
        if(bookStatus.innerText === 'Status: Read'){bookStatus.style.color="green";}    //change color of status based on value
        else bookStatus.style.color="red";                                              //change color of status based on value
 };


submitBookButton.addEventListener("click", function(e){
    console.log("submit pressed");

    const newBookTitle = document.getElementById('bookTitle');
    const newBookAuthor = document.getElementById('bookAuthor');
    const newBookNrOfPages = document.getElementById("bookPages");
    const newBookStatus = document.getElementById("bookStatus");

    event.preventDefault();

    console.log(`Book title is: ${newBookTitle.value} written by ${newBookAuthor.value} , it has ${newBookNrOfPages.value} pages and it was ${newBookStatus.value}`);

    addBookToLibrary(newBookTitle, newBookAuthor, newBookNrOfPages);
    console.log(myLibrary);

    addElements();
});


// addBookToLibrary('main theme', 'jackson', 5);
// addBookToLibrary('the covenent', 'winon rider', 522);
// addBookToLibrary('main theme', 'jackson', 5);
// addBookToLibrary('the covenent', 'winon rider', 522);
// addBookToLibrary('main theme', 'jackson', 5);
// addBookToLibrary('the covenent', 'winon rider', 522);
// addBookToLibrary('main theme', 'jackson', 5);





 //addElements();

 console.log(myLibrary)