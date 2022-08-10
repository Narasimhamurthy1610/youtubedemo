x=5
console.log(x)

function addinTwoNum (a,b){
    return console(a+b)
}
addinTwoNum(4,5)

let a = function(){
    console.log('hello')
}
a();

function findEvenNumb(){
    let a= [20,30,40,50,15]
    for (i=0; i<a.length; i++){
        if(a[i]%2==0)
    console.log("the number is Even"+a[i])
    else
    console.log("the number is odd"+a[i])
} 
}
findEvenNumb()

function reverseString(){
    let name='mamatha'
    let rName=name.split('').reverse().join('')
    if(name==rName)
    console.log("its a palindrome")
    else
    console.log('its not a palinodrome')
}
reverseString()

function factorialNum(){
let a=10
for(i=a-1; i>=1; i--){
    a=a*i
}
console.log(a)
}
factorialNum();

function toPrintPrimeNum(){
    let a=10
    for(i=0; i<=a;i++)
    if(a%2==0)
    console.log("the number is prime"+""+a)
    else
    console.log("the number s not prime"+""+a)
}
toPrintPrimeNum();












