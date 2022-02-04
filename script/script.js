/** @format */

let newAmountItem = 0;
let newAmountCard = 0

const amountItem = document.getElementById('amountItem')
const amountCard = document.getElementById('numberProduct-cart')

function addItem() {
	if(newAmountItem < 3) {
		newAmountItem += 1;
		amountItem.innerText = newAmountItem
	}
}

function removeItem() {
	if (newAmountItem > 1) {
		newAmountItem -= 1;
	}
  amountItem.innerText = newAmountItem
}

function addToCard() {
	if(newAmountCard === 1) return;
	newAmountCard += 1
	amountCard.innerText = newAmountCard
}