function calc (){
let x =parseInt(document.getElementById("choose_x").value);
let y =parseInt(document.getElementById("choose_y").value);
let plus=x+y;
let Multiple=x*y;
document.getElementById("plus").value=plus;
document.getElementById("Multiple").value=Multiple;
}