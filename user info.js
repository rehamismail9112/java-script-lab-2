var name = prompt("Enter your name:");
var ph = prompt("Enter your phone number:");
var email = prompt("Enter your email:");
var mn = prompt("Enter your mobile number:");

var color = prompt("Choose a color (red, green, or blue):");



var name = /^[A-Za-z]$/ig;
var ph = /^[0-9]{8}$/;
var email= /^[@,.]$/;
var mn= /^[0-9]{11}$/;

do{
    var name = prompt("enter your name")
}while(!name.match(name));
do{
    var ph = prompt("enter your phone")
}while(!ph.match(ph));
do{
    var email = prompt("enter your email")
}while(!email.match(ph));
do{
    var mn = prompt("enter your mobile phone")
}while(!mn.match(ph));

console.log(namee , ph,email,mn);

var x = new RegExp("^[A-Za-z]{8}","gim");
var y = '1245';
console.log(y.match(x)); 
console.log(x.test(y));  

if (!isNaN(name) || isNaN(ph) || !validateEmail(email) || isNaN(mn)) {
  console.log("Invalid input. Please try again.");
} else {

  switch (color)
  {
    case "red":
      console.log("%cWelcome " + name + "!\nPhone number: " + ph + "\nEmail: " + email + "\nMobile number: " + mn, "color:red");
      break;
    case "green":
      console.log("%cWelcome " + name + "!\nPhone number: " + ph + "\nEmail: " + email + "\nMobile number: " + mn, "color:green");
      break;
    case "blue":
      console.log("%cWelcome " + name + "!\nPhone number: " + ph + "\nEmail: " + email + "\nMobile number: " + mn, "color: blue");
      break;
    default:
      console.log("Invalid input. Please try again.");
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

window.location.href ="./user info.html"