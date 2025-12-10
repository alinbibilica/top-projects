const myLibrary = [];   //array to store books

const library1 = document.getElementById("library");  //main container to display library books

const addButton = document.getElementById('addBookButton'); // Add Book Button used to open the "add book form"
const closeButton = document.getElementById('closeButton'); // button to close the "add book form" if user decides not to add a new book
const addBookForm = document.getElementById('addBookForm'); // Add Book Form where users inputs his book details to add them to the library
const submitBookButton = document.getElementById('submitNewBook'); // Add New Book Submit button
const removeButton = document.getElementsByClassName('bookButton');

addButton.addEventListener("click", function(e){
    addBookForm.style.display = "grid";
});

closeButton.addEventListener("click", function(e){
    addBookForm.style.display = "none";
});


//add event listener to the container (library) so we can target the "remove" button which is create dinamically
library1.addEventListener("click", function(e){
    const bookUniqueId = e.target.getAttribute('data-book-id'); //get unique if for clicked div
    const changeButton = e.target.classList.contains('bookStatus');    

    if(e.target.classList.contains('bookButton')){
        const divToDelete = document.querySelector(`[data-book-id="${bookUniqueId}"]`); //target the books div that has the data attribute equal to clicked remove button
        divToDelete.remove();
    }

    if(changeButton){
        if(e.target.innerText === 'Status: Read'){
            e.target.innerText = 'Status: Not Read';
            e.target.style.color = "red";
        }
        else { e.target.innerText = 'Status: Read';
                e.target.style.color="green";
         }
    }

    
})

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
        
        bookRemoveButton.dataset.bookId = item.idNr;
        booksCard.dataset.bookId = item.idNr;

        bookRemoveButton.classList.add("bookButton"); //add a class off "bookBUtton" to the Remove button 
        bookStatus.classList.add("bookStatus");
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

    addBookToLibrary(newBookTitle, newBookAuthor, newBookNrOfPages);
    addElements();
 
});

 