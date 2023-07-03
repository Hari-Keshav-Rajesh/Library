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
        alert("Please enter appropriate values in the specified case");
        event.preventDefault(); 
    }
    else{
        let book={};
        addBookToLibrary(book=new Book(form.title.value,form.author.value,form.pages.value,form.readStatus.value));
        table.innerHTML+=`<tr>
                                <td>${form.title.value}</td>
                                <td>${form.author.value}</td>
                                <td>${form.pages.value}</td>
                                <td>${form.readStatus.value}</td>
                            </tr>`
        event.preventDefault();
        form.title.value='';
        form.author.value='';
        form.pages.value='';
        form.readStatus.value='';
        form.style.display = "none";
    }

});