function init(){
    let data =localStorage.getItem('rowValue');
    employeeData = data ? JSON.parse(data):"nothing";
    if(employeeData){
        view();
    }
}

init();

function view(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const employee = urlParams.get('idx')
    console.log(employee)

    const val = employee;
    let data= localStorage.getItem('employees');
    const emp = JSON.parse(data);

    document.getElementById('name').innerHTML = emp[val].name;
    document.getElementById('number').innerHTML = emp[val].number;
    document.getElementById('email').innerHTML = emp[val].email;
    document.getElementById('address').innerHTML= emp[val].address;
    document.getElementById('city').innerHTML= emp[val].city;
    document.getElementById('role').innerHTML = emp[val].role;
}


  