var radius = +prompt("input raduis:")
 var a = Math.PI* radius
 console.log(a.toFixed(4))
 var area = confirm("the area is " + a.toFixed(4))


var sqrt = +prompt("input number that you need its sqrt:")
var n = Math.sqrt(sqrt)
console.log(n)

var area = confirm("the number is " + n)
var angle = +prompt('Enter angle')
var coss = Math.cos(angle*Math.PI/180).toFixed(4)
console.log(coss)
document.write("<h1>"+"cos   "+ angle + "<sup>o</sup>" + " is "+" "+ coss)