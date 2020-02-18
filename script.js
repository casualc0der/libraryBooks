
//array of book objects
let myLibrary = []
let myForm = []
let addBookToScreen = document.getElementById('addButton');
let button = addBookToScreen.addEventListener('click', () => bookForm());




window.onload = () => addGrid();

function Book(title, author, pages, readStatus) {
//book object constructor

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}

function addBookToLibrary(title, author, pages, readStatus) {
    let book = new Book();
    book.author = author
    book.pages = pages
    book.title = title
    book.readStatus = readStatus

    myLibrary.push(book)
    

}

function removeBookFromLibrary(x) {
    
    let id = x.replace('bookButton-','')
    console.log(`delete button ${id} is working`)
    console.log(typeof(id))
    
    myLibrary.splice(id, 1)
    refreshGrid();
    addGrid();
    clearInputs();
}

function readBookToggle(x) {
    
    let id = x.replace('readButton-','')
    console.log(`read button ${id} is working`)

    if(myLibrary[id].readStatus === 'Yes'){
        myLibrary[id].readStatus = 'No'
    }
    else if(myLibrary[id].readStatus === 'No'){
        myLibrary[id].readStatus = 'Yes'
    }

    console.log(myLibrary[id].readStatus)
    refreshGrid();
    addGrid();

}

addBookToLibrary('Harry Potter and the Order of the Phoenix', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')

function addGrid() {


    for(obj in myLibrary) {
        gridElement = document.createElement('div');
        

        gridElement.innerHTML = `<h1>${myLibrary[obj].title}</h1><br>
                                 <h2>${myLibrary[obj].author}</h2><br>
                                 <h3>${myLibrary[obj].pages} pages</h3><br>
                                 <h3>Read: ${myLibrary[obj].readStatus}</h3>                      
                                `

        gridElement.id = `bookObject${obj}`
        gridElement.classList.add('bookObj');


       

        let node = document.getElementById('bookshelf');
        

        node.appendChild(gridElement)

        let buttonElement = document.createElement('button')
        buttonElement.id = `bookButton-${obj}`

        buttonElement.classList.add('deleteButton');
        buttonElement.innerHTML = 'Delete Book'
        let gridNode = document.getElementById(gridElement.id)
        gridNode.appendChild(buttonElement)
 
        let readButtonElement = document.createElement('button')
        readButtonElement.id = `readButton-${obj}`
        readButtonElement.classList.add('readButton');
        readButtonElement.innerHTML = 'Read?'
        gridNode.appendChild(readButtonElement)

        // let bookBackground = document.createElement('img')
        // bookBackground.src = '/Users/eddsansome/Desktop/libraryBooks/book.png'
        // bookBackground.classList.add('bookBackground')
        // gridElement.appendChild(bookBackground)


        
    }
    let deleteButton = document.querySelectorAll('.deleteButton')
    let readToggle = document.querySelectorAll('.readButton')
    
   for(let button of deleteButton) {
       button.addEventListener('click', () => removeBookFromLibrary(button.id))
   }

   for(let button of readToggle) {
       button.addEventListener('click', () => readBookToggle(button.id))
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
    let readStatus = document.getElementById('readStatus').value

    console.log(typeof(title), typeof(author), typeof(pages)
                        ,typeof(readStatus))

    if(title === ''|| author === '' || pages === '' || readStatus === '') {

        alert('please complete all fields!')
        return;
    }
    else{
            addBookToLibrary(title, author, pages, readStatus)
            refreshGrid();
            addGrid();
            clearInputs();

    }
    }

function clearInputs() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('readStatus').value = ''
  
}















