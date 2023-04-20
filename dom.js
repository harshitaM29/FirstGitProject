function test()
{
    var name = document.getElementById('name').value;
    var em = document.getElementById('email').value;
    var ph = document.getElementById('phone').value;
    var dt = document.getElementById('date').value;
    var tm = document.getElementById('time').value;

    let myObj = {name,em,ph,dt,tm};

    let myObj_serialized = JSON.stringify(myObj)

    localStorage.setItem('myobj',myObj_serialized)
    


}

