'use strict';
const bill = document.querySelector('.love');
const people = document.querySelector('.people');
const calculate = document.querySelector('.cal');
const firsttip = document.getElementById('plus1');
const secondtip = document.getElementById('plus2');
const thirdtip = document.getElementById('plus3');
const fourthtip = document.getElementById('plus4');
const fifthtip = document.getElementById('plus5');
const reset = document.getElementById('reset');
const zero = document.querySelector('.can');

let total = (5 / 100) * bill.value;
firsttip.addEventListener('click', function () {
  total = (5 / 100) * bill.value;
  console.log(total);
});
total = (10 / 100) * bill.value;
secondtip.addEventListener('click', function () {
  total = (10 / 100) * bill.value;
  console.log(total);
});
total = (15 / 100) * bill.value;
thirdtip.addEventListener('click', function () {
  total = (15 / 100) * bill.value;
  console.log(total);
});
total = (25 / 100) * bill.value;
fourthtip.addEventListener('click', function () {
  total = (25 / 100) * bill.value;
  console.log(total);
});
total = (50 / 100) * bill.value;
fifthtip.addEventListener('click', function () {
  total = (50 / 100) * bill.value;
  console.log(total);
});
let everything = total / people.value;
let totalAmount = bill.value / people.value + everything;
const num = 0;
calculate.addEventListener('click', function () {
  everything = total / people.value;
  totalAmount = bill.value / people.value + everything;
  if (everything && totalAmount)
    document.getElementById('sign1').textContent = `${everything.toFixed(2)}`;
  document.getElementById('sign2').textContent = `${totalAmount.toFixed(2)}`;

  if (people.value === ``) {
    zero.classList.remove('hide');
    document.getElementById('sign1').textContent = `0.00`;
    document.getElementById('sign2').textContent = `0.00`;
  }
  if (people.value <= 0) {
    zero.classList.remove('hide');
    document.getElementById('sign1').textContent = `0.00`;
    document.getElementById('sign2').textContent = `0.00`;
  }
});

reset.addEventListener('click', function () {
  bill.value = ``;
  people.value = ``;
  document.getElementById('sign1').textContent = `0.00`;
  document.getElementById('sign2').textContent = `0.00`;
  zero.classList.add('hide');
});
