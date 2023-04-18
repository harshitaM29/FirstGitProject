// console.dir(document)

// console.log(document.URL);
// console.log(document.title);
// document.title = 123;

// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// document.all[10].textContent = "HELLO";
// console.log(document.forms[0])
// console.log(document.links)


//console.log(document.getElementById('header-title'))


var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')

// headerTitle.textContent = 'HELLO'

header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('title');
items[0].style.fontWeight = 'bold'
items[0].style.color = 'green'

