
let s = document.getElementById("section");

let fizzbuzzArray = [];

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

const onThePage = () => {
  return fizzbuzzArray.map(element => `<p>${element}</p>`);
};

s.innerHTML = onThePage().join("");

onThePage()

console.log(fizzbuzzArray)





// const splitArray = () => fizzbuzzArray.split(",");
// console.log(splitArray)








