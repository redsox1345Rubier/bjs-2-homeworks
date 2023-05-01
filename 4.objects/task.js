function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks === undefined) {
		return;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || !this.marks.length) {
		return 0;
	}

	let average = this.marks.reduce((avg, val, _, arr) => avg + val / arr.length, 0)
	return average;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}