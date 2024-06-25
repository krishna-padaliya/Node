// console.log("HELLO WORLD")

// for(let i=0; i<=5; i++)
// {
//     console.log("HELLO WORLD")
// }

// function printHello(){
//     console.log("HELLO WORLD")
// }

// setInterval(printHello,2000)
// setTimeout(printHello,4000)



// TASK 
// Q1. Find maximum between 2(REPL)
console.log("Q1.Find maximum between 2(REPL)")
let a=50
let b=40
if(a>b){
    console.log("A is Big")
}
else{
    console.log("B is Big")
}


// Q2. Find addition of 3 numbers(REPL)
console.log("Q2. Find addition of 3 numbers(REPL)")
let x=10
let y=10
console.log("Addition of X & Y:",x+y)


// Q3. Use loop print even numbers(REPL)
console.log("Q3. Use loop print even numbers(REPL)")
for (let i = 2; i <= 20; i += 2) 
{
    console.log(i);
}


// Q4. Use loop print 10 - 1(REPL)
console.log("Q4. Use loop print 10 - 1(REPL)")
for(let k=1; k<=10; k++)
{
    console.log(k)
}


// Q5.Use setTimeout print after 5s(Global Object)
console.log("Q5.Use setTimeout print after 5s(Global Object)")
function Print(){
    console.log("HELLO NODE")
}
setTimeout(Print,5000)


// Q6.Use setInterval print after every 2s(Global Object)
console.log("Q6.Use setInterval print after every 2s(Global Object)")
setInterval(Print,2000)