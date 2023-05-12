function test(event)
{
    event.preventDefault();
    var name = document.getElementById('name').value;
    var em = document.getElementById('email').value;
    var ph = document.getElementById('phone').value;
    
    let myObj = {name,em,ph};
    

    // let myObj_serialized = JSON.stringify(myObj)
    // console.log(myObj_serialized)

    // localStorage.setItem('myObj',myObj_serialized)

    axios.post("https://crudcrud.com/api/37a29ba8081b4c1b8cf538a740a0f730/appointmendDetails", myObj)
    .then((reponse => {
        showOnScreen(reponse.data)
        console.log(reponse);
    }))
    .catch((err) =>
    {
        document.body.innerHTML = document.body.innerHTML + '<h4> Something went wrong </h4>';
        console.log(err);
    })
  
    
    
    // showOnScreen(myObj);
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/37a29ba8081b4c1b8cf538a740a0f730/appointmendDetails")
    .then((response) => {
        for(var i=0;i<response.data.length; i++){
            showOnScreen(response.data[i]);
        }   
        // console.log(response);
    })
    .catch((err) => {
        console.log(err)
    })
})
function showOnScreen(myObj)
{
    // let myObj_dserialized = JSON.parse(localStorage.getItem('myObj'));
  
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    // para.style.fontSize = '20 px'
    // para.style.fontWeight = 'bold'
     
    
   li.textContent =  "Name = " + myObj.name + " Email = " + myObj.em + " Phone = " + myObj.ph;
    li.style.fontWeight = 'bold'
    ul.append(li);
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary btn=sm delete'
    btn.textContent = 'DELETE'
    btn.addEventListener("click", function(e){
        if(confirm('are you sure'))
                {
                    
                    axios.delete(`https://crudcrud.com/api/37a29ba8081b4c1b8cf538a740a0f730/appointmendDetails/${myObj._id}`)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err)) 
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
    li.append(" ",btnEdit)
    btnEdit.addEventListener("click", function(e){
        
                
                   
                    var li = e.target.parentElement;
                    var item = document.getElementById('list');
                    // item.removeChild(li);
                    var textField1 = document.getElementById('name')
                    var emailField = document.getElementById('email');
                    var phoneField = document.getElementById('phone');
                    textField1.value = myObj.name;
                    emailField.value =myObj.em;
                    phoneField.value = myObj.ph;
                    document.getElementById('submit').value = 'Edit'      
                    var fm = document.getElementById('form');
                    fm.onsubmit = (event) => {
                        event.preventDefault();
                        var newName = textField1.value;
                        const newEmail = emailField.value;
                        const newPhone = phoneField.value;
                        axios.put(`https://crudcrud.com/api/37a29ba8081b4c1b8cf538a740a0f730/appointmendDetails/${myObj._id}`,{
                            name: newName,
                            em: newEmail,
                            ph: newPhone
                        })
                        .then((response) => {
                            window.location.reload()
                            console.log(response.data)
                        })
                        setTimeout
                        
                    }
                    
                    


                    
                
    });
    

}

