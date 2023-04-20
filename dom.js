var form = document.getElementById('addForm');
var  itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// form submit event
form.addEventListener('submit', addItem);
//delete event

itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup',filterItems);




function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var newDescription = document.getElementById('description').value;

    //create new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(newDescription));

    var edit = document.createElement('button');
    edit.className = 'btn btn-primary btn-sm float-right edit';
    edit.appendChild(document.createTextNode('E'));
    li.appendChild(edit);
    //create delete button element
    var delButton = document.createElement('button');

    //add classes to del button
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode('X'));
    li.appendChild(delButton);
    itemList.appendChild(li);

  



}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you Sure'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e)
{
    var text =  e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item ) {
        var itemName = item.firstChild.textContent;
        var itemSecond = item.childNodes[1].textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1 || itemSecond.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
       
        else{
            item.style.display = 'none';
        }

    });

}


