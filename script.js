function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
}

let myLibrary=[];

function addBookToLibrary(Book){
    myLibrary.push(Book);
}

function Display(){
    myLibrary.forEach(element => {
        console.log(element.title);
    });
}


const newButton = document.querySelector('.newButton');

const form = document.querySelector('.popupForm');
form.style.display = "none";


newButton.addEventListener('click',()=>{
    form.style.display = "block";
}); 

const submitButton = document.querySelector('.submit');
const table = document.querySelector('.table');

submitButton.addEventListener('click',(event)=>{
    
    
        let book={};
        addBookToLibrary(book=new Book(form.title.value,form.author.value,form.pages.value));
        table.innerHTML+=`<tr>
                                <td>${myLibrary[myLibrary.length-1].title}</td>
                                <td>${myLibrary[myLibrary.length-1].author}</td>
                                <td>${myLibrary[myLibrary.length-1].pages}</td>
                                <td><div class="text" data-text="${row}"> Not Read</div><input type="checkbox" data-id="${row}" onclick="change()"></td>
                                <td><button data-row="${row}" class="remove" onclick="remove(event)">Remove</button></td>
                            </tr>`
        event.preventDefault();
        form.title.value='';
        form.author.value='';
        form.pages.value='';
        form.readStatus.value='';
        form.style.display = "none";

        row+=1;
});

let row=0;

function remove(event){
   var td=event.target.parentNode;
   var tr=td.parentNode;
   tr.parentNode.removeChild(tr);
   myLibrary.splice(document.querySelector(`[data-row="${row}"]`),1);
}

function change(){
    let check = document.querySelector(`[data-id="${row}"]`);
    let readStatus = document.querySelector(`[data-text="${row}"]`)
    if(check.checked===true){
        readStatus.innerHTML="Read";
    }
    else{
        readStatus.innerHTML="Not Read";
    }
}


