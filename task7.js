//🟢 Task 1 - Student Management System

let students = [
{
 name:"Naveen",
 id:101,
 mark:85
},
{
 name:"John",
 id:102,
 mark:45
},
{
 name:"Arun",
 id:103,
 mark:25
}
];

//Print All students
console.log("All Students :-");

for(let i=0; i<students.length; i++){
    console.log(students[i]);
}

// Print Only student names

console.log("Student Names :-");

for(let i=0; i<students.length; i++){
    console.log(students[i].name);
}

// Find student ID 102

console.log(" find Student ID(102) :-");
for(let i =0; i<students.length; i++){
    if(students[i].id==102){
        console.log(students[i]);
        
    }
}

//Print students who passed (mark >=35)
console.log("Passed Students :=");

for(let i=0; i<students.length; i++){
    if(students[i].mark>=35){
        console.log(students[i]);
        
    }
}

//Count total students
console.log("Total students : -");
let count=0;
for(let i=0; i<students.length; i++){
    count++;
    console.log("Total Students:",students.length);
}

//🟢 Task 2 - Employee Salary System

let employees = [
{
 name:"Naveen",
 salary:30000
},
{
 name:"John",
 salary:45000
},
{
 name:"Arun",
 salary:60000
}
];

//Find highest salary
console.log("highest Salary:-");

let highest = employees[0];

for(let i=1; i<employees.length; i++){
    if(employees[i].salary>highest.salary){
        highest = employees[i];
    }
}
console.log(highest);

//Find lowest salary.

console.log("Lowest Salary :-");

let lowest =employees[0];
for(let i=1; i<employees.length; i++){
    if(employees[i].salary<lowest.salary){
        lowest=employees[i];
    }
}
console.log(lowest);

//Add ₹5000 bonus.

console.log("Added 5000 Bonus:-");

for(let i=0; i<employees.length; i++){
    employees[i].salary=employees[i].salary+5000;
   console.log(employees[i]);
}

//Print total salary.

console.log("Total Salary :-");

let totalSalary = 0;
for(let i=0; i<employees.length; i++){
 totalSalary = totalSalary + employees[i].salary;
}
console.log(totalSalary);

//Print employees earning above ₹40,000
console.log("Employee Earing Above 40000 :-");

for(let i=0; i<employees.length; i++){
    if(employees[i].salary>=40000){
        console.log(employees[i]);
        
    }
}

//🟢 Task 3 - Shopping Cart

//Print product names

console.log("Product Names :-");

let products = [
{
 name:"Laptop",
 price:50000
},
{
 name:"Mouse",
 price:500
},
{
 name:"Keyboard",
 price:1500
}
];

for(let i=0; i<products.length; i++){
    console.log(products[i].name);
    
}

//Print total bill.
console.log("Total Bill:-");

let TotalBill = 0;
for(let i=0; i<products.length; i++){
    TotalBill = TotalBill + products[i].price

}
console.log(TotalBill);

//Search product "Mouse"

console.log("Search Product Mouse :-");

for(let i=0; i<products.length; i++){
 
    if(products[i].name == "Mouse"){
        console.log(products[i]);
        
    }
}

//Apply 10% discount
console.log("After 10% discount:-");

for(let i=0; i<products.length; i++){
    products[i].price = products[i].price -(products[i].price * (10/100));
    console.log(products[i]);
}

//Print the final bill

console.log("Final Bill:-");

let FinalBill = 0;

for(let i=0; i<products.length; i++){
    FinalBill = FinalBill + products[i].price
}

console.log(FinalBill);

// Task 4 - Bank Account


let account={
 name:"Naveen",
 balance:50000
};

console.log("After 10000 Deposited :-");

account.balance = account.balance + 10000;
console.log(account);


//Withdraw ₹5,000

console.log("Withdraw amount:-");

account.balance = account.balance -5000;
console.log(account);

//Print current balance

console.log("Current Balance :-");

console.log(account.balance);


//Check balance is below ₹20,000

console.log("Balance Check :-");

if(account.balance <= 20000){
    console.log("Balance is below 20000");
}else{
    console.log("Balance is above 20000");
    
}

//Print account details

console.log("Account Details :-");

console.log("Account holder Name:",account.name);
console.log("Account Balance:", account.balance);

//🟢 Task 5 - Company Login

console.log("Company login:-");

let UserName = prompt("Enter Your User Name");
let Password =  prompt("Enter your password");

if(UserName=="Vignesh"){
    if(Password==1234567){
        console.log("Welcome");
        
    }else{
        console.log("Invalid Username or Password");
        
    }
}else{
     console.log("Invalid Username or Password");
}

//🟢 Task 6 - Traffic Signal

console.log("Traffic Signal:-");


let Signal = prompt("Enter Signal (Red /Yello / Green");



switch (Signal){ case "Red" : console.log("Stop"); break;
                 case "Yellow" : console.log("Ready"); break;
                 case "Green" : console.log("Go"); break;
                default: console.log("Invalid Signal");
            }

//🟢 Task 7 - ATM Machine
console.log("ATM Machine:-");
//initial Balance

let Balance = 50000;

//Menu

console.log("1.Balance");
console.log("2.Deposit");
console.log("3.Withdraw");
console.log("4.Exit");

let choice = Number(prompt("Enter Your Choice"));

switch (choice) {

    case 1: console.log("Current Balance :",Balance); break;
    case 2:
        Balance = Balance + 10000;
        console.log("Amount Deposited");
        console.log("Current Balance :", Balance);break;
    case 3:
         Balance = Balance =5000;
         console.log("Amount Withdrawn");
         console.log("Current Balance :", Balance);break;
    case 4:console.log("Exit");break;
    default:console.log("Invalid Choice");
}

//🟢 Task 8 - Cricket Score

//Highest Score

let score=[10,25,40,60,80,100]

console.log("Cricket Score :-");

let high = score[0]

for(let i=1; i<score.length; i++){
    if(score[i] > high ){
        high =score[i];
    }
}
console.log("Higest Score :",high);

//Lowest score

let lowest1 = score[0];

for(let i =0; i<score.length; i++){
    if(score[i] < lowest1){
        lowest1 = score[i];
    }
}

console.log("Lowest Salary :",lowest1);

//Total score

let TotalScore = 0;

for(let i = 0; i < score.length; i++){
    TotalScore = TotalScore + score[i];
}

console.log("Total Score :",TotalScore);

//Average score

let Average = TotalScore / score.length;

console.log("Average Score :", Average);


//🟢 Task 9 - Movie Ticket Booking

console.log("Movie Ticket Booking :-");

let Age = Number(prompt("Enter Your Age"));
let confirmation = confirm("Confirm Movie Ticket");

if(Age>=18){
    console.log("Allow Movie");
    
}else{
    console.log("Not Allowed");
}


// Hospital Appointment

// Enter Token

let token = prompt("Enter Token");

// Switch

switch (token) {
    case "1":console.log("Doctor A");break;
    case "2":console.log("Doctor B");break;
    case "3":console.log("Doctor C");break;
    default:console.log("Invalid Token");
}


//🟢 Task 11 - Array Method Practice
console.log("Array Methods :-");


let fruits=["Apple","Orange","Banana"];

//Original Array

console.log("Original Array :", fruits);

//Push()

fruits.push("Mango");
console.log("AfterPush()");

console.log(fruits);


//Pop()

fruits.pop();

console.log("After Pop()");
console.log(fruits);

//shift()
fruits.shift();
console.log("After Shift()");
console.log(fruits);

//Unshift()

fruits.unshift("Apple");
console.log("After Unshift()");
console.log(fruits);

//Splice()

fruits.splice(1, 1, "Grapes");
console.log("After Splice()");
console.log(fruits);

//Slice

let newFruits = fruits.slice(0,2);
console.log("After Slice()");
console.log(newFruits);


//🟢 Task 12 - Higher Order Methods

let employeess=[
{name:"A",salary:20000},
{name:"B",salary:35000},
{name:"C",salary:50000},
{name:"D",salary:70000}
];

//Using map() - Increase every salary by ₹5,000

console.log("High Order Methods :-");


let updatedSalary = employeess.map(function(Employee){
    return{
        name : Employee.name,
        salary : Employee.salary + 5000
    }
});

console.log("Updated Salary :",updatedSalary);

//Using filter() -Salary greater than ₹30,000

let highSalary = employeess.filter(function(Employee){
     return Employee.salary > 30000;
});

console.log("High Salary(>30000) :",highSalary);


// Using find() -Find salary ₹50,000

let Salarycheck = employeess.find(function(Employee){
       return Employee.salary == 50000;
});

console.log("Salary Check :",Salarycheck);


//Using reduce() -Calculate total salary

let TotalSalary = employeess.reduce(function(total,Employee){
      return total + Employee.salary;

},0);

console.log("Total Salary :",TotalSalary);

//Using some() -Check whether any employee earns more than ₹60,000

let Checksome = employeess.some(function(Employee){
    return Employee.salary > 60000;
});

console.log("CheckSome Salary  > 60000 :", Checksome);

//Using every() - Check whether every employee earns more than ₹15,000

let EveryEmployee = employeess.every(function(Employee){
       return Employee.salary> 15000;
});

console.log("Checking Salary > 15000 :", EveryEmployee);

//🟢 Task 13 - String Practice

console.log("String Practice :-");


let company = " Stackly IT ";

// 1. Convert to Uppercase


console.log("Uppercase :",company.toUpperCase());

// 2. Convert to Lowercase

console.log("Lowercase :",company.toLowerCase());

// 3. Remove Spaces

console.log("Remove Spaces :",company.trim());

// 4. Replace "IT" with "Software"

console.log();
console.log("Replace :",company.replace("IT", "Software"));

// 5. Check whether "Stackly" exists


console.log("Check Stackly :",company.includes("Stackly"));

// 6. Split using Space

console.log();
console.log("Split :",company.split(" "));

//🟢 Task 14 - Digital Clock

console.log("Digital Clock :-");

// Display Current Time Every Second

let clock = setInterval(function () {

    let time = new Date();

    console.log(time.toLocaleTimeString());

}, 1000);

// Stop After 10 Seconds

setTimeout(function () {

    clearInterval(clock);

}, 10000);


//🟢 Task 15 - Fake Store API

let API = "https://fakestoreapi.com/products";

fetch(API).then((response)=>{
   return response.json();
    
})
.then((products)=>{

    // All product titles

console.log("Product Titles:");

products.forEach((product)=>{

 console.log(product.title);
    
});

    //only prices

console.log("Products Prices :");

products.forEach((product)=>{
console.log(product.price);

});

   //products costing more than ₹100

   console.log("Products Above 100 :");
   
   products.forEach((product)=>{
    if(product.price>100){
        console.log(product.title);
        
    }
   });

   //Count total products

   console.log("Total Product :");
   
   products.forEach((product)=>{
   console.log(products.length);
    
   });

   //category names

   console.log("Category Names :");

   products.forEach((product)=>{
    console.log(product.category);
    
   });
})
.catch((error)=>{

    console.log(error);
    
});



 
 











 








 
























