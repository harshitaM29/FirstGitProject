function test()
{
    var name = document.getElementById('name').value;
    var em = document.getElementById('email').value;
    var ph = document.getElementById('phone').value;
    var dt = document.getElementById('date').value;
    var tm = document.getElementById('time').value;

    localStorage.setItem('name',name)
    localStorage.setItem('email',em)
    localStorage.setItem('phone',ph)
    localStorage.setItem('date',dt)
    localStorage.setItem('time',tm)


}

