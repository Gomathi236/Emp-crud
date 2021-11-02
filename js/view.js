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
let employees = [];
let nameElem = document.getElementById("name");
let numberElem = document.getElementById("number");
let emailElem = document.getElementById("email");
let addressElem = document.getElementById("address");
let cityElem = document.getElementById("city");
let roleElem = document.getElementById("role");
let employeeIndex = null;

// function onDelete(element) {
//     selectedRow = element.parentElement.parentElement;
//     employeeIndex = selectedRow.getAttribute('index');
//     employeeIndex = parseInt(employeeIndex)
//     selectedRow.remove();
//     console.log( employeeIndex)
//     employees.splice(employees,1);
//     console.log(employees)
//     localStorage.setItem('employees', JSON.stringify(employees));
  
//     location.href = "showemployee.html" ;
    
//   }


function onDelete(){
  let datas= localStorage.getItem('employees');
  const employees = JSON.parse(datas);
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const emp = urlParams.get('idx')
  console.log(emp)

  const val = emp;

    
    
        let employee = {
        name: nameElem.value,
        number: numberElem.value,
        email: emailElem.value,
        address: addressElem.value,
        city: cityElem.value,
        role: roleElem.value,
       
      }
      employees[val].name = employee.name
      employees[val].number = employee.number
      employees[val].email = employee.email,
      employees[val].address = employee.address,
      employees[val].city =employee.city,
      employees[val].role = employee.role,
      
      
    
  
      
      localStorage.removeItem('employees',JSON.stringify(employees))

      location.href = "showemployee.html";
     
     
  }


  
