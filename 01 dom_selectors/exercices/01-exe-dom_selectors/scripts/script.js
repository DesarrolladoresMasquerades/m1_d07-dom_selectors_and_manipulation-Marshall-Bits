// 1: Get the node with the  main title

// ... your code here
const selectH1 = document.querySelector("h1")
console.log(selectH1);
// => <h1>Fruits and veggies</h1>

// ----------------------------------------------
// 2: Get the main title text

// ... your code here
console.log(selectH1.innerText);
// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

// ... your code here
const collectionFruit = Array.from(document.querySelectorAll(".fruit-item"))
console.log(collectionFruit);
// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

// ... your code here
const veggies = document.querySelectorAll(".veggie-item").forEach(el => console.log(el.innerText))
// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

// ... your code here
const subtitleVeggies = document.querySelector(".list-veggies h2")

console.log(subtitleVeggies.innerText);
// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

// ... your code here

const subtitleFruit = document.querySelector(".list-fruits h2").id = "fruit-title"
console.log(subtitleFruit);

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// ... your code here

collectionFruit[0].classList.add("best-fruit");
collectionFruit[2].classList.add("best-fruit");
// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

// ... your code here
const veggiesRemove = document.querySelector(".list-veggies ul").classList.remove("veggies")

console.log(veggiesRemove);

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

const veggiesLove = document.querySelectorAll(".veggie-item").forEach(el => el.classList.add("veggie-love"))

// ... your code here

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

const collectionVeggie = Array.from(document.querySelectorAll(".veggie-item"))

collectionVeggie[3].classList.remove("veggie-item")

// ... your code here

// => ... <li class="veggie-love">Spinach</li>