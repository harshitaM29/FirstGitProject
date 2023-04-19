var itemList = document.querySelector('#items');

//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentElement.parentElement);

//childNodes


console.log(itemList.childNodes);
console.log(itemList.children)
itemList.children[1].style.backgroundColor = 'red'

//firstchild
console.log(itemList.firstChild)
itemList.firstElementChild.textContent = 'HELLO 1'

//lastchild
console.log(itemList.lastChild)
itemList.lastElementChild.textContent = 'HELLO 4'

//siblings
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling)

//previoussibling

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green'

//createElement
var newDiv  =  document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title', 'hello Div')

var newDivText = document.createTextNode("Hello world")
newDiv.appendChild(newDivText)
var container =  document.querySelector('header .container')
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1)

var menu = document.getElementById('items');
let li = document.createElement('p');
li.textContent = 'Hello world'
menu.insertBefore(li,menu.firstElementChild)

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green'

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none'

// var queryAll = document.querySelectorAll('.list-group-item');
// queryAll[1].style.color = 'red'

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = '#f4f4f4'
// }


// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green'

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold'
// }
// var li = document.getElementsByTagName('li');

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.fontWeight = 'bold'
// }
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


// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')

// // headerTitle.textContent = 'HELLO'

// header.style.borderBottom = 'solid 3px #000';

// var items = document.getElementsByClassName('title');
// items[0].style.fontWeight = 'bold'
// items[0].style.color = 'green'


