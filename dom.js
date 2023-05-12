function test(event)
{
    event.preventDefault();
    var name = document.getElementById('name').value;
    var em = document.getElementById('email').value;
    var ph = document.getElementById('phone').value;
    var dt = document.getElementById('date').value;
    var tm = document.getElementById('time').value;

    let myObj = {name,em,ph,dt,tm};
    

    // let myObj_serialized = JSON.stringify(myObj)
    // console.log(myObj_serialized)

    // localStorage.setItem('myObj',myObj_serialized)

    axios.post("https://crudcrud.com/api/3ea7499aeb1340a39e21f98d1594cbdb/appointmendDetails", myObj)
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
    axios.get("https://crudcrud.com/api/3ea7499aeb1340a39e21f98d1594cbdb/appointmendDetails")
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
    var nm;
    var a;
    var b ;
    // var c = myObj.dt;
    // var d = myObj.tm;
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    // para.style.fontSize = '20 px'
    // para.style.fontWeight = 'bold'
     
    
   li.textContent = "Name = " + myObj.name + " Email = " + myObj.em + " Phone = " + myObj.ph;
    li.style.fontWeight = 'bold'
    ul.append(li);
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary btn=sm delete'
    btn.textContent = 'DELETE'
    // btn.addEventListener("click", function(e){
    //     if(confirm('are you sure'))
    //             {
    //                 localStorage.clear();
    //                 var li = e.target.parentElement;
    //                 var item = document.getElementById('list');
    //                 item.removeChild(li);
    //             }
    // });
    li.append(" ",btn)
    //edit button
    var btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-success btn=sm edit'
    btnEdit.textContent = 'EDIT'
    btnEdit.style.borderRadius = '5 px'
    btnEdit.style.border = 'black'
    // btnEdit.addEventListener("click", function(e){
        
                
    //                 localStorage.clear();
    //                 var li = e.target.parentElement;
    //                 var item = document.getElementById('list');
    //                 item.removeChild(li);
    //                 var textField1 = document.getElementById('name')
    //                 var emailField = document.getElementById('email');
    //                 var phoneField = document.getElementById('phone');
    //                 var dateField = document.getElementById('date');
    //                 var timeField = document.getElementById('time');
    //                 textField1.value = nm;
    //                 emailField.value = a;
    //                 phoneField.value = b;
    //                 dateField.value = c;
    //                 timeField.value = d;


                    
                
    // });
    li.append(" ",btnEdit)

}

