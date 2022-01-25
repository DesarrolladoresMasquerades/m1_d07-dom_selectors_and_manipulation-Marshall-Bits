console.log("Js loaded");

console.log(
    document.querySelector("div.first-div").innerText,
    "\n",
    document.querySelector("div.first-div + div").innerText
);

const firstDiv = Array.from(document.getElementsByClassName("first-div"))

console.log("this is the first div",firstDiv.length)

firstDiv.forEach(console.log);

const divs = document.querySelectorAll("div");

divs.forEach(console.log)

const secondDiv = document.getElementById("second-div")

console.log("secondDiv", secondDiv);

// -------- Test for Equality -------

const cards = Array.from(document.getElementsByClassName("card"))

console.log(
    divs[0] === cards[0]
)



// --------- selecting on a branch (element inside document) ---------
console.log(
cards[0]
);