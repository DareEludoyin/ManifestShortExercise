
class Book {

    constructor (title,author,isbn) {
        this.title = title;
        this.author =author;
        this. isbn = isbn;
    }
}

class NewListing {

    showListing(book) {
        const listingPlace = document.getElementById("book-listing");
        const row = document.createElement("tr");
        row.innerHTML = `<td> ${book.title} </td> <td> ${book.author} </td> <td> ${book.isbn} </td> <td><a href="" class="delete">X</a></td>`;  

        listingPlace.appendChild(row);  
    }

    showAlert(message, styling){
 
        const div = document.createElement('div');

        div.className = `alert ${styling}`;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        const form = document.getElementById('book-form');

        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }

    clearFields() {
        
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    deleteListing(target){

        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

}

document.getElementById('book-form').addEventListener('submit', function(ev) {
    
    ev.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title,author,isbn);

    const listing = new NewListing();

    if(title == '' || author == '' || isbn == '') {

        listing.showAlert('please complete the form','error');
    } else {

        listing.showListing(book);
        listing.showAlert('book added','success');
        listing.clearFields();
    }
});

document.getElementById('book-listing').addEventListener('click', function(ev){

    ev.preventDefault();
    const listing = new NewListing();
    
    listing.deleteListing(ev.target);
});