//Template to display books information brought from array called books!
var elBooksList = document.querySelector('.books__list');
var elBooksItemTemplate = document.querySelector('#books-item-template').content;
// FUNCTIONS
function showBooks (books) {
    // Empties the list
    elBooksList.innerHTML = '';
    var elBooksFragment = document.createDocumentFragment();

    for (var book of books) {

    var elNewBooksItem = elBooksItemTemplate.cloneNode(true);

    elNewBooksItem.querySelector('.book__img').src = book.imageLink;
    elNewBooksItem.querySelector('.book__title').textContent = book.title;
    elNewBooksItem.querySelector('.book__author').textContent = book.author;
    elNewBooksItem.querySelector('.book__country').textContent =`Country: ${book.country}` 
    elNewBooksItem.querySelector('.book__language').textContent = `Language: ${ book.language}`;
    elNewBooksItem.querySelector('.book__pages').textContent =`Pages: ${book.pages}` 
    elNewBooksItem.querySelector('.book__year').textContent = ` Published ${book.year}`;

    elBooksFragment.appendChild(elNewBooksItem);

    }
    elBooksList.appendChild(elBooksFragment);
}

showBooks(books).slice(0,10);
// .slice(0, 30)