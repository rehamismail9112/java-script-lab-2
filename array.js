var arr = [];
for (var i = 0; i < 5; i++) {
  var input = prompt("Enter a number:");
  arr.push(parseFloat(input));
}

var arrDesc = arr.slice().sort(function(a, b) { return b - a; });

var arrAsc = arr.slice().sort(function(a, b) { return a - b; });




document.write("Entered values: " + arr.join(", ") + "<br>");

document.write("Array in descending order: " + arrDesc.join(", ") + "<br>");

document.write("Array in ascending order: " + arrAsc.join(", ") + "<br>"); 

//*window.location.href ="./array.html"