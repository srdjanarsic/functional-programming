// write cleaner code
// how to use composition pith promises

// functions
const multiplyTwo = n => n * 2;
const addFive = n => n + 5;
const delayPromiseInThen = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(value + 100), 
      1000
    );
  });
}

let myNumber = 100; // initial value

Promise.resolve(myNumber)
  .then(multiplyTwo)           // <-- first function
  .then(addFive)               // <-- second function
  .then(delayPromiseInThen)    // <-- third function (we can chain any number)
  .then(value => console.log(value));
