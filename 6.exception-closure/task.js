function parseCount(value) {
	let result = Number.parseFloat(value);
	if (!result) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (sign) {
		return sign;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		Object.assign(this, { a, b, c });
        
	}
	get perimeter () {
	 return (this.a + this.b + this.c);
	}
	
	get area () {
		 let PartPerimeter = this.perimeter / 2;
		return Number(((PartPerimeter * (PartPerimeter - this.a) * (PartPerimeter - this.b) * (PartPerimeter - this.c)) ** 0.5).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			get area () {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter () {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}