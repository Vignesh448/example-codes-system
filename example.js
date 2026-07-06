let vijaymovies = ["NalaiyaTheerpu","Jilla","Thuppaki","kaththi","Mersal"];

vijaymovies.forEach((a,b,c)=>{
console.log(a);

});

let numbers =[20,30,40,50,60];

let result = numbers.map((a,b,c)=>{
    return c + c.length
    
});

console.log(result);

let numbers1 =[20,30,40,50,60];

let result1 = numbers1.reduce((a,b,c,d)=>{
    return a + b
    
},0);

console.log(result1);


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

let newReduce = students.filter((a,b,c)=>{
  return a.mark < 45
});

console.log(newReduce);
