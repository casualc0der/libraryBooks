
//array of book objects
let myLibrary = []
let myForm = []
let addBookToScreen = document.getElementById('addButton');
let button = addBookToScreen.addEventListener('click', () => bookForm());
let deleteBook = document.getElementsByClassName('deleteButton')
console.log(deleteBook)


// deleteButton.addEventListener('click', () => testFunc(obj));



window.onload = () => addGrid();




function Book(title, author, pages, yearPublished, readStatus) {
//book object constructor

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.yearPublished = yearPublished,
    this.readStatus = readStatus
}

function addBookToLibrary(title, author, pages, yearPublished, readStatus) {
    let book = new Book();
    book.author = author
    book.pages = pages
    book.title = title
    book.yearPublished = yearPublished
    book.readStatus = readStatus

    myLibrary.push(book)
    

}

function testFunc(x) {

    
    let id = x.replace('bookButton-','')
    console.log(`delete button ${id} is working`)
    console.log(typeof(id))

    
    myLibrary.splice(id, 1)
    refreshGrid();
    addGrid();
    clearInputs();
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 1955, true)
addBookToLibrary('The Lord of the Rings', 'J.R.R Tolkein', 526, 1958, false)
addBookToLibrary('Game of Thrones', 'George RR Martin', 627, 1998, false)

function addGrid() {

   

    for(obj in myLibrary) {
        gridElement = document.createElement('div');
        

        gridElement.innerHTML = `Title: ${myLibrary[obj].title}<br>
                                 Author: ${myLibrary[obj].author}<br>
                                 Pages: ${myLibrary[obj].pages}<br>
                                 Published: ${myLibrary[obj].yearPublished}<br>
                                 Read: ${myLibrary[obj].readStatus}                      
                                `

        gridElement.id = `bookObject${obj}`
        gridElement.classList.add('bookObj');

       

        let node = document.getElementById('bookshelf');
        

        node.appendChild(gridElement)

        buttonElement = document.createElement('button')
        buttonElement.id = `bookButton-${obj}`
        buttonElement.classList.add('deleteButton');
        let gridNode = document.getElementById(gridElement.id)
        gridNode.appendChild(buttonElement)
        
        
        

      

        // buttonElement = document.createElement('button')
        // buttonElement.id = `readButton${obj}`
        // buttonElement.classList.add('readButton');
        // let gridNode = document.getElementById(gridElement.id)
        // gridNode.appendChild(buttonElement)
        

    }

    let deleteButton = document.querySelectorAll('.deleteButton')
    

   for(let button of deleteButton) {
       button.addEventListener('click', () => testFunc(button.id))
   }
    

 
 

    

}



function refreshGrid() {

    const myNode = document.getElementById('bookshelf')
    while (myNode.firstChild) {
        myNode.firstChild.remove()
    }
}


function bookForm() {


    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let datePublished = document.getElementById('yearPub').value
    let readStatus = document.getElementById('readStatus').value

    console.log(typeof(title), typeof(author), typeof(pages)
                        ,typeof(datePublished) ,typeof(readStatus))

    if(title === ''|| author === '' || pages === '' || datePublished === '' || readStatus === '') {

        alert('please complete all fields!')
        return;
    }
    else{
            addBookToLibrary(title, author, pages, datePublished, readStatus)
            refreshGrid();
            addGrid();
            clearInputs();

    }

    
    
    }

function clearInputs() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('yearPub').value = ''
    document.getElementById('readStatus').value = ''

    

}
















