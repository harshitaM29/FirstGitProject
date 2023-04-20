function test(event)
{
    event.preventDefault();
    var name = document.getElementById('name').value;
    var em = document.getElementById('email').value;
    var ph = document.getElementById('phone').value;
    var dt = document.getElementById('date').value;
    var tm = document.getElementById('time').value;

    let myObj = {name,em,ph,dt,tm};
    localStorage.clear();

    let myObj_serialized = JSON.stringify(myObj)
    console.log(myObj_serialized)

    localStorage.setItem('myObj',myObj_serialized)
   
    let myObj_dserialized = JSON.parse(localStorage.getItem('myObj'));
    var nm = myObj_dserialized.name
    var a = myObj_dserialized.em;
    var b = myObj_dserialized.ph
    var fm = document.getElementById('form');
    var para = document.createElement('pre');
    para.style.fontSize = '20 px'
    para.style.fontWeight = 'bold'
    para.textContent = "Name = " + nm + " Email = " + a + " Phone = " + b;
    fm.append(para)

   

   

    

    


}

