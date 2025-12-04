




const myLibrary = [];

const library1 = document.getElementById("library");  //main container to display library books

const addButton = document.getElementById('addBookButton'); // Add Book Button used to open the "add book form"
const closeButton = document.getElementById('closeButton'); // button to close the "add book form" if user decides not to add a new book
const addBookForm = document.getElementById('addBookForm'); // Add Book Form where users inputs his book details to add them to the library

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

 
function addBookToLibrary(title, author, noOfPages){
    const addBook = new Book(title, author, noOfPages);
    addBook.getId();
    myLibrary.push(addBook);
}

addBookToLibrary('main theme', 'jackson', 5);
addBookToLibrary('the covenent', 'winon rider', 522);
addBookToLibrary('main theme', 'jackson', 5);
addBookToLibrary('the covenent', 'winon rider', 522);
addBookToLibrary('main theme', 'jackson', 5);
addBookToLibrary('the covenent', 'winon rider', 522);
addBookToLibrary('main theme', 'jackson', 5);




//functie care adauga elementele in DOM

function addElements(){

    let libraryContainer = document.getElementById('library');

    myLibrary.forEach((item)=>{
        let bookTitle = document.createElement('div');
        let bookAuthor = document.createElement('div');
        let bookPages = document.createElement('div');
        let booksCard = document.createElement('div');
        let bookId = document.createElement('div');
        let bookRemoveButton = document.createElement('button');


        bookTitle.innerText = `Title: "${item.title}"`;
        bookAuthor.innerText = ` Written by: "${item.author}".`;
        bookPages.innerText = `Pages: ${item.nrOfPages}`;
        bookId.innerText = `Book Id: ${item.idNr}`;
        bookRemoveButton.innerText = `Remove`;

        booksCard.appendChild(bookTitle);
        booksCard.appendChild(bookAuthor);
        booksCard.appendChild(bookPages);
        booksCard.appendChild(bookId);
        booksCard.appendChild(bookRemoveButton);

        booksCard.classList.add("books");
        
        libraryContainer.appendChild(booksCard);
    }

    )
   

 };

 addElements();

 console.log(myLibrary)