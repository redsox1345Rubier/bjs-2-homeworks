function getArrayParams(...arr) {
	let min, max, sum, avg;

	min = Infinity;
	max = -Infinity;
	sum = 0;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] < min)
			min = arr[i];

		if (arr[i] > max)
			max = arr[i];

		sum += arr[i];

	}
	avg = +(sum / arr.length).toFixed(2)


	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (!arr.length) return 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length) return 0;

	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	let res = sumEvenElement - sumOddElement;
	return res;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	let res = sumEvenElement / countEvenElement;
	return res;
}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const res = func(...arrOfArr[i]);
		if (maxWorkerResult < res) {
			maxWorkerResult = res;
		}
	}
	return maxWorkerResult;
}