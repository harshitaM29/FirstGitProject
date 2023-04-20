var form = document.getElementById('addForm');
var  itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
//delete event

itemList.addEventListener('click', removeItem);



function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    
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



