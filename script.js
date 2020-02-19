
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
addBookToLibrary('Harry Potter and the Order of the Phoenix', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('Harry Potter and the Order of the Phoenix', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('Harry Potter and the Order of the Phoenix', 'J.R.R Tolkein', 287, 'Yes')
addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 287, 'Yes')


function addGrid() {


    for(obj in myLibrary) {
    
        gridElement = document.createElement('div');
        

        gridElement.innerHTML = `
                                <div class="card-body">
                                <h5 class="card-title">${myLibrary[obj].title}</h5><br>
                                <h5 class="card-title">${myLibrary[obj].author}</h5><br>
                                <p class="card-text">${myLibrary[obj].pages} pages</p><br>
                                <p class="card-text">Read: ${myLibrary[obj].readStatus}</p>
                                </div>                  
                                `

        gridElement.id = `bookObject${obj}`

        if(myLibrary[obj].r === undefined) {
            myLibrary[obj].r = rnd(0,255)
            myLibrary[obj].g = rnd(0,255)
            myLibrary[obj].b = rnd(50,255)
            

        }

        gridElement.style.backgroundColor = `rgb(${myLibrary[obj].r},${myLibrary[obj].g},${myLibrary[obj].b})`;

        gridElement.classList.add('bookObj');
        


       

        let node = document.getElementById('bookshelf');
        node.appendChild(gridElement)

        let buttonElement = document.createElement('button')
        buttonElement.id = `bookButton-${obj}`
        buttonElement.classList.add('deleteButton');
        buttonElement.innerHTML = 'Delete Book'
        
        let gridNode = document.getElementById(gridElement.id)
 
        let readButtonElement = document.createElement('button')
        readButtonElement.id = `readButton-${obj}`
        readButtonElement.classList.add('readToggle');
        readButtonElement.innerHTML = 'Read?'

        gridNode.appendChild(readButtonElement)
        gridNode.appendChild(buttonElement)

    }
    let deleteButton = document.querySelectorAll('.deleteButton')
    let readToggle = document.querySelectorAll('.readToggle')
    
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

        alert('Please complete all fields!')
        return;
    }
    else{
            addBookToLibrary(title, author, pages, readStatus)
            refreshGrid();
            addGrid();
            clearInputs();
            modal.style.display = "none";

    }
    }

function clearInputs() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('readStatus').value = ''
  
}

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


//modal functionality 

let modal = document.getElementById('bookModal')
let btn = document.getElementById('menuModal')
let span = document.getElementsByClassName('close')[0];

btn.onclick = () => modal.style.display = "block";
span.onclick= () => modal.style.display = "none";

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

//stick nav 

window.onscroll = () => stickyBar();

var header = document.getElementsByClassName('header')[0]

var sticky = header.offsetTop;

function stickyBar() {
    if(window.pageYOffset > sticky) {
        header.classList.add("sticky")
        btn.classList.add("bookLogo")
    } else {
        header.classList.remove("sticky")
        btn.classList.remove("bookLogo")
    }

}
















