
//array of book objects
let myLibrary = []
let myForm = []
let addBookToScreen = document.getElementById('addButton');
let button = addBookToScreen.addEventListener('click', () => bookForm());


const bookFactory = () => {
    //book object constructor
        return {title, author, pages, readStatus} 
      
    }
    
    function addBookToLibrary(title, author, pages, readStatus) {
        let book = bookFactory();
        book.author = author
        book.pages = pages
        book.title = title
        book.readStatus = readStatus
    
        myLibrary.push(book)
        localStorage.setItem('library', JSON.stringify(myLibrary))
       
    
    }
if ('library' in localStorage) {

    
    const localLibrary = JSON.parse(localStorage.getItem('library'));
    localLibrary.forEach((e) => {

        myLibrary.push(e)

    })
    
}
else {

    addBookToLibrary('Harry Potter and the Order of the Phoenix', 'JK Rowling', 287, 'Read')
    addBookToLibrary('The Hobbit', 'J.R.R Tolkein', 310, 'Read')
}



window.onload = () => addGrid();



function removeBookFromLibrary(x) {
    
    let id = x.replace('bookButton-','')
    
    const localLibrary = JSON.parse(localStorage.getItem('library'));
    localLibrary.splice(id,1)
    myLibrary.splice(id, 1)
    localStorage.setItem('library', JSON.stringify(localLibrary))

    
    refreshGrid();
    addGrid();
    clearInputs();
}

function readBookToggle(x) {
    
    let btn = document.getElementById(`${x}`);


  

    let id = x.replace('readButton-','')
    

    if(myLibrary[id].readStatus === 'Read'){
        myLibrary[id].readStatus = 'Unread'
        btn.innerHTML = myLibrary[id].readStatus
        

    }
    else if(myLibrary[id].readStatus === 'Unread'){
        myLibrary[id].readStatus = 'Read'
        btn.innerHTML = myLibrary[id].readStatus
        
    }

    
    refreshGrid();
    addGrid();

}





function addGrid() {


    for(obj in myLibrary) {
    
        gridElement = document.createElement('div');
        
        //<p class="card-text">${myLibrary[obj].pages} pages</p><br>
        //<p class="card-text">Read: ${myLibrary[obj].readStatus}</p>

        gridElement.innerHTML = `
                                <div style= class="card-body">
                                <h5 class="card-title">${myLibrary[obj].title}</h5><br>
                                <h5 class="card-title">${myLibrary[obj].author}</h5><br>
                                </div>
                                <div class= "card-buttons" id="buttons-${obj}">
                                
                                
                                </div>                  
                                `

        gridElement.id = `bookObject${obj}`

        if(myLibrary[obj].color === undefined) {

            switch(rnd(1,5)) {

                case 1:
                    myLibrary[obj].color = '#0b510b'
                    break;
                case 2:
                    myLibrary[obj].color = '#510b2f'
                    break;
                case 3:
                    myLibrary[obj].color = '#0b1b51'
                    break;
                case 4: 
                    myLibrary[obj].color = '#571c33'
                    break;
                case 5:
                    myLibrary[obj].color = '#000000'
                    break;

            }
          
        }


        gridElement.style.backgroundColor = `${myLibrary[obj].color }`;

        gridElement.classList.add('bookObj');
        
        let node = document.getElementById('bookshelf');
        node.appendChild(gridElement)

        let buttonElement = document.createElement('button')
        buttonElement.id = `bookButton-${obj}`
        buttonElement.classList.add('deleteButton');
        // buttonElement.innerHTML = 'Delete'
        
        let gridNode = document.getElementById(`buttons-${obj}`)
 
        let readButtonElement = document.createElement('button')
        readButtonElement.id = `readButton-${obj}`
        readButtonElement.classList.add('readToggle');
        

        readButtonElement.innerHTML = myLibrary[obj].readStatus;

     
        gridNode.appendChild(buttonElement)
        gridNode.appendChild(readButtonElement)
        

        

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
















