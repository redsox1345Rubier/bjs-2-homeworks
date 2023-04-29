"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let disc = b ** 2 - 4 * a * c;
	if (disc == 0) {
		let kor = -b / (2 * a);
		arr.push(kor);
	} else if (disc > 0) {
		let kor1 = (-b + Math.sqrt(disc)) / (2 * a);
		let kor2 = (-b - Math.sqrt(disc)) / (2 * a);
		arr.push(kor1, kor2);
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent) / 100 / 12;
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  
  if (![percent, contribution, amount, countMonths].every((item) => {
    return typeof item == 'number' && !isNaN(item);
  })) return false;

  let creditSum = (amount - contribution) * (percent + (percent / (((1 + percent) ** countMonths) - 1)));

  return Math.round(creditSum * countMonths * 100) / 100;
}