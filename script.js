function cluck(){

const sounds = [
"Cluck!",
"Bawk bawk!",
"Eggcellent choice!",
"You have pleased the chicken.",
"The hen approves."
];

const random = sounds[Math.floor(Math.random()*sounds.length)];

alert(random);

}