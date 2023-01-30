
let currentyear = new Date().getFullYear();

console.log(currentyear);
const ResolveOld = () => {
let year = document.getElementById("year").value;
let incorrect = document.getElementById("incorrect");
let result = document.getElementById("result");


year = parseInt(year);


if (Number.isNaN(year)) {
   incorrect.style.display = "block";
   incorrect.style.color = "red";
   result.style.display = "none";
   er.play();

} else {
    incorrect.style.display = "none";
    let res = currentyear - year;
    result.innerHTML = "вам: " + res;
    result.style.display = "block";
    result.style.color = "green";
    tr.play();



}
};