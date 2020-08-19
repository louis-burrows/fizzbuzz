
let s = document.getElementById("section");
let b = document.getElementById("buzz")

let fizzbuzzArray = [];
let bees = [];

for (let number = 1; number < 100; number++) {
  //if you divide by three, what is left over. (number % 3)
  if (number % 15 == 0) {
    fizzbuzzArray.push("FIZZBUZZ");
  }  else if (number % 3 == 0) {
    fizzbuzzArray.push("Fizz");
  } else if (number % 5 == 0) {
    fizzbuzzArray.push("Buzz");
  } else {
    fizzbuzzArray.push(number);
  }
};


for (let number = 1; number < 100; number++) {
  //if you divide by three, what is left over. (number % 3)
  if (number % 15 == 0) {
    bees.push(`<img src="./images/bee.png" alt="bee"></img>`);
  }  else if (number % 3 == 0) {
    bees.push("nowt to see here");
  } else if (number % 5 == 0) {
    bees.push(`<img src="./images/bee.png" alt="bee"></img>`);
  } else {
    bees.push("nor here");
  }
};

{/* <img src="./images/bee.png" alt="bee"></img> */}


const beeOnThePage = () => {
  return bees.map(element => `<div>${element}</div>`);
};


b.innerHTML = beeOnThePage().join("");

beeOnThePage()






const onThePage = () => {
  return fizzbuzzArray.map(element => `<p>${element}</p>`);
};


s.innerHTML = onThePage().join("");

onThePage()

console.log(fizzbuzzArray)





// const splitArray = () => fizzbuzzArray.split(",");
// console.log(splitArray)








