let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rainy coat");
} else {
  console.log("Its gonna be cold");
}

let num = 6;
if (num == 6) {
  console.log("This is my lucky number");
}

// if else if else
let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

let isSunny = true;
isSunny
  ? console.log("You dont need eavy clothes")
  : console.lo("You need heavy clothes");

let sign = window.prompt("Please enter your sign according to you birth month");
if (sign == "Libra") {
  console.log("You are a Libra and born in October!!!");
}

let youAge = Window.prompt("Please enter you age:");
if ((youAge) => 18) {
  alert("You are of age to drive a vehicle");
} else {
  alert(" 18-${youAge} You are not of age to drive,please wait until you are of age");
}

let yourAge=Window.prompt("Please enter our age");
if (youAge==yourAge){
  console.log("You are age mates")
}

let ageInput=window.prompt("Enter your age here:")
let ages=[38,55,33,11,33,44,2,34,33,12]
for (let l=0;l<ages.length;l++){
  if (ageInput==ages[l]){
    console.log("You found an ages match")
  }else{
    console.log("No age match")
  }
}
