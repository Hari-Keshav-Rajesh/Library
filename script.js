function Book(title,author,pages,readStatus){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
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
    
    if((form.readStatus.value !== 'Yes'&&form.readStatus.value!=='No')===true){
        alert("Please enter Yes or No in the specified case");
        event.preventDefault(); 
    }
    else{
        let book={};
        addBookToLibrary(book=new Book(form.title.value,form.author.value,form.pages.value,form.readStatus.value));
        table.innerHTML+=`<tr>
                                <td>${myLibrary[myLibrary.length-1].title}</td>
                                <td>${myLibrary[myLibrary.length-1].author}</td>
                                <td>${myLibrary[myLibrary.length-1].pages}</td>
                                <td>${myLibrary[myLibrary.length-1].readStatus}</td>
                                <td><button data-row="${row}" class="remove" onclick="remove(event)">Remove</button></td>
                            </tr>`
        event.preventDefault();
        form.title.value='';
        form.author.value='';
        form.pages.value='';
        form.readStatus.value='';
        form.style.display = "none";
        }
        row+=1;
});

let row=0;

function remove(event){
   var td=event.target.parentNode;
   var tr=td.parentNode;
   tr.parentNode.removeChild(tr);
   myLibrary.splice(document.querySelector(`[data-row="${row}"]`),1);
}



