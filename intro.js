var num = 1.345
var str = 'fish'
var bln = true

var nil = null
var und

var arr = [1,2,3,'str'] //arry

var odj = {
    age: 32,
    hairColor:'red',
    foo:{
    bar: 'bat'
    }
}

obj.foo.bar
obj['foo']['bar']
obj['age']

function sum(num1, num2) { //curly brases define a block
    return num1 + num2
}

var add = sum(2, 3) //call equal 5
sum // referance can be used to pass into another function

function foo(fn){ //callback functions - can pass functions into something that hasn't happened yet - asycn
    fn(2,3)
}


// conditional statements if, then - truthy vs falsey

//falsey - false, '', 0 , null , undefined
//everything else is truthy
if () {

} else if () {

} else {

}

switch() //switch statement

//loops

var counter = 0
while (counter <= 10){
    //runs while truthy
    console.log(counter)
    counter = counter +1
}

for (var counter = 1; counter <= 10; counter = counter + 1) {
    console.log(counter)
}

var arr = [1,2,3,4,5,6,9]
for (var i = 0; i < arr.length; i = i +1){
    console.log(arr[i])
}

// operators
=   //asignment not EQUAL
==  //equal value not worred about type (int vs str)
=== //strict equal
!= //not equal loose
!== // not equal strict

+ // overloaded operator, int addition, str cantactination (with corroision)
-, *, / //int only
% //modulus -reminder after division
&& //and
|| //or
. //dot operator

//ndn for more operators
