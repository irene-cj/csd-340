function sortBooks(order) {
    var list = document.getElementById('booksList');
    var items = list.getElementsByTagName('li');
    var booksArray = [];

    for (var i = 0; i < items.length; i++) {
        booksArray.push(items[i].innerHTML);
    }

    if (order === 'asc') {
        booksArray.sort();
    } else if (order === 'desc') {
        booksArray.sort().reverse();
    }

    for (var i = 0; i < items.length; i++) {
        items[i].innerHTML = booksArray[i];
    }
}
