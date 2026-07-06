
//⭐ Final Mini Projec

console.log("Final Mini Project");

//View Employees

let Employees = [
{
 name:"Naveen",
 id:101,
salary:30000
},
{
 name:"John",
 id:102,
 salary:45000
},
{
 name:"Arun",
 id:103,
salary:60000
}
];

console.log("1.View Employees:-");

for(let i=0; i<Employees.length; i++){
    console.log(Employees[i]);
    
}

//Search Employee by ID

console.log("2.earch Employee by ID :-");

let id = Number(prompt("Enter Employee ID"));
for(let i =0; i<Employees.length; i++){
    if(Employees[i].id==id){
        console.log(Employees[i]);
        
    }
}

//Add Bonus

console.log("3.Add Bonus(5000) :-");


//Add Bonus


for(let i=0; i<Employees.length; i++){
    Employees[i].salary=Employees[i].salary+5000;
   console.log(Employees[i]);
}

//Find highest salary
console.log("4.highest Salary:-");

let highest = Employees[0];

for(let i=1; i<Employees.length; i++){
    if(Employees[i].salary>highest.salary){
        highest = Employees[i];
    }
}
console.log(highest);

//Find lowest salary.

console.log("5.Lowest Salary :-");

let lowest =Employees[0];
for(let i=1; i<Employees.length; i++){
    if(Employees[i].salary<lowest.salary){
        lowest=Employees[i];
    }
}
console.log(lowest);

//Calculate Total Salary

console.log("6.Total Salary :-");

let totalSalary = 0;
for(let i=0; i<Employees.length; i++){
 totalSalary = totalSalary + Employees[i].salary;
}
console.log(totalSalary);

//Filter Salary Above ₹40,000

console.log("7.Filter Salary Above ₹40,000 :-");

function filtersalary(){
    let result = Employees.filter(function(employee){
        return employee.salary > 40000;
    });
console.log(result);
}
filtersalary();

//Print Employee Report

console.log("8.Employee Report : -");

function employeeReport(){
    Employees.forEach(function(employee){
        console.log(`
Employee ID : ${employee.id}
Employee Name : ${employee.name}
Employee Salary : ${employee.salary}
`);
    });
}
employeeReport();

//Display Current Date & Time

console.log("9.Current Date & Time :-");

function CurrentDate(){
    console.log(new Date());
    
}
CurrentDate();



// Exit

console.log("11.Exit :-");

function Exit(){
    console.log("THANK YOU");
    
}
Exit();



//Fetch Employee Data from an API

console.log("10.Fetch Employee Data from API :-");

function fetchEmployee() {
    fetch("https://dummyjson.com/users").then(function(response) {
            return response.json();
        })
    .then(function(data) {
         data.users.forEach(function(employee) {
                console.log(`
Employee ID : ${employee.id}
Employee Name : ${employee.firstName} ${employee.lastName}
Employee Email : ${employee.email}
                `);
            });
        })
        .catch(function(error) {
            console.log(error);
        });
}
fetchEmployee();



 


 




