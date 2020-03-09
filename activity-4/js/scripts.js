var user = 'Aaron';
var salutation = 'Hello';
var greeting = salutation + " " + user;
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Prices
var price = 3.39;
var studentDiscount = .15;
var studentPrice = price - (price * studentDiscount);
var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);