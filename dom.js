function test(event)
{
    event.preventDefault();
    var name = document.getElementById('name').value;
    var em = document.getElementById('email').value;
    var ph = document.getElementById('phone').value;
    var dt = document.getElementById('date').value;
    var tm = document.getElementById('time').value;

    let myObj = {name,em,ph,dt,tm};
    

    let myObj_serialized = JSON.stringify(myObj)
    console.log(myObj_serialized)

    localStorage.setItem('myObj',myObj_serialized)
   
    showOnScreen(myObj);
}
function showOnScreen(myObj)
{
    let myObj_dserialized = JSON.parse(localStorage.getItem('myObj'));
    var nm = myObj_dserialized.name
    var a = myObj_dserialized.em;
    var b = myObj_dserialized.ph;
    var c = myObj_dserialized.dt;
    var d = myObj_dserialized.tm;
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    // para.style.fontSize = '20 px'
    // para.style.fontWeight = 'bold'
    li.textContent = "Name = " + nm + " Email = " + a + " Phone = " + b;
    li.style.fontWeight = 'bold'
    ul.append(li);
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary btn=sm delete'
    btn.textContent = 'DELETE'
    btn.addEventListener("click", function(e){
        if(confirm('are you sure'))
                {
                    localStorage.clear();
                    var li = e.target.parentElement;
                    var item = document.getElementById('list');
                    item.removeChild(li);
                }
    });
    li.append(" ",btn)
    //edit button
    var btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-success btn=sm edit'
    btnEdit.textContent = 'EDIT'
    btnEdit.style.borderRadius = '5 px'
    btnEdit.style.border = 'black'
    btnEdit.addEventListener("click", function(e){
        
                
                    localStorage.clear();
                    var li = e.target.parentElement;
                    var item = document.getElementById('list');
                    item.removeChild(li);
                    var textField1 = document.getElementById('name')
                    var emailField = document.getElementById('email');
                    var phoneField = document.getElementById('phone');
                    var dateField = document.getElementById('date');
                    var timeField = document.getElementById('time');
                    textField1.value = nm;
                    emailField.value = a;
                    phoneField.value = b;
                    dateField.value = c;
                    timeField.value = d;


                    
                
    });
    li.append(" ",btnEdit)

}

