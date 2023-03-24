var name = '';
var ph = '';
var email = '';
var mn = '';





var nameexp = /[0-9]/;
var phexp = /^[0-9]{8}$/;
var emailexp= /[0-9]/;
var mnexp= /^[0-9]{11}$/;

do{
    var name = prompt("enter your name")
}while(name==='' || (nameexp.test(name)));


do{
    var ph = prompt("enter your phone")
}while(ph==='' || !(phexp.test(ph)));

do{
    var email = prompt("enter your email")
}while(email==='' || (emailexp.test(email)));

do{
    var mn = prompt("enter your mobile phone")
}while(mn==='' || !(mnexp.test(mn)));


var color = prompt("Choose a color (red, green, or blue):");
  switch (color)
  {
    case "red":
      document.write(`<label style="color: red;">Welcome</label>` + name + `<br><label style="color: red;">Phone number: </label>` + ph + `<br><label style="color: red;">Email: </label>` + email + `<br><label style="color: red;">Mobile number: </label>` + mn);
      break;
    case "green":
    document.write(`<label style="color: green;">Welcome</label>` + name + `<br><label style="color: green;">Phone number: </label>` + ph + `<br><label style="color: green;">Email: </label>` + email + `<br><label style="color: green;">Mobile number: </label>` + mn);
      break;
    case "blue":
    document.write(`<label style="color: blue;">Welcome</label>` + name + `<br><label style="color: blue;">Phone number: </label>` + ph + `<br><label style="color: blue;">Email: </label>` + email + `<br><label style="color: blue;">Mobile number: </label>` + mn);
      break;
    default:
    document.write("Invalid input. Please try again.");
  }