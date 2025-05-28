
function textStyle() {
    text.style.backgroundColor = "red";
    text.style.fontSize = "2em";
    text.style.color = "white";
}

function textstyle() {
    texts.style.backgroundColor = "pink";
    texts.style.color = "blue";
    texts.style.fontSize = "2em";
}
function textstyle2() {
    texts.style.padding = "15px 0";
    texts.style.border = "10px solid red";
}
function a () {
    textstyle();
    textstyle2();
}
function erasetextstyle() {
    texts.style.backgroundColor = "";
    texts.style.color = "";
    texts.style.fontSize = "";
    texts.style.padding = "";
    texts.style.border = "";
}
function a() {
    textstyle();
    textstyle2();
}
text.addEventListener("mouseover", function (){
    textstyle();
    textstyle2();
});
text.addEventListener("mouseout", erasetextstyle);


/*window.addEventListener("click", function (e) {
    box.style.top = e.clientY + "px";
    box.style.left = e.clientX + "px";

})*/


var x = 10;
if (x < 0) {
    console.log(x);
}
var squareRootOfNight = Math.sqrt(9);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old.";
console.log(person)
  
console.log("hello javascript");


//function
/*
function funStyle() {
    fun.style.backgroundColor = "red";
    fun.style.fontSize = "2em";
    fun.style.color = "white";
}
*/


function triangleArea() {
    const w = width.valueAsNumber;
    const h = height.valueAsNumber;
    const output = w * h / 2;
    alert (output);
}
const squareRoot = Math.sqrt(81)



const hello = "khode";
const hello1 = new String("khode");
document.getElementById("a").innerHTML = hello.bold().italics().toUpperCase();

const name = "chheng coke";
console.log(name);
console.log(typeof name)