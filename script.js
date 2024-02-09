'use strict';
let f;

const g = function () {
  const a = 45;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 23;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

// re-assigning the value
h();
f();
console.dir(f);

// example#2

const boardingPassengers = function (n, wait) {
  //const perGroup = n / 4;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`there are 4 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

//boardingPassengers(160, 4);

// scope chain have the priority over closure
const perGroup = 1000;
boardingPassengers(160, 4);
