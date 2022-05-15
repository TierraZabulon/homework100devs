//Write your pseduo code first!
//find the calculation for celcius and then conver it into feh
// celcius to ferenheit is ( 9/5 X Celcius) + 32
//make click event so it only runs on click
// let celcius = 36;
// let feh = (9 / 5) * celcius + 32;
// console.log(feh);

let temp = Number(document.querySelector("input").value);
temp = (9 / 5) * temp + 32;
document.querySelector("h2").innerText = temp;
