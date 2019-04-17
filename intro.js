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

