if (typeof(Storage) !== "undefined") {
	console.log('Your browser supports localStorage/sessionStorage.');
} else {
	console.log('Sorry! No Web Storage support..');
}


let books = [] // array containing book objects {title: '', author: ''}

/* Check localStorage for books */

if (localStorage.books) {
	storedBooks = JSON.parse(localStorage.books);
}
else {
	storedBooks = [];
}


/* Check if books is empty and show/hide relevant message */
// data = JSON.parse(localStorage.books);
if (storedBooks.length !== 0) {
	$('#empty').css('display', 'none');
	storedBooks.map(function(currVal){
		$('#list').prepend(`<li><b>title</b>: ${currVal.title}, <b>author</b>: ${currVal.author}</li>`);
	});
}

/* If books is not emply, populate view with book details in #list */

/* Add a book button click should reveal the form */
$('#addForm').addClass('hideForm');
$('#show_add').click(function(){
	$('#addForm').toggleClass('hideForm');
});

/* On ADD button click, 
    ensure the input fields contain values, 
    then add the book to HTML view 
    also save updated books array to localStorage 
*/

$('#add').click(function(){
	let title = $('#title').val();
	let author =  $('#author').val();
	let book = {}
	if (title !== '' && author !== '') {
		book.title = title;
		book.author = author;
		books.push(book);
		books.map(function(c){
			storedBooks.push(c);
		})
		localStorage.books = JSON.stringify(storedBooks);
	}
})

/* Refreshing the page, should show all the stored books */
