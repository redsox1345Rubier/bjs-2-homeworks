class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.find(clock => clock.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		});
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
	}
	getCurrentFormattedTime() {
		let currentDate = new Date();
		let minute = currentDate.getMinutes();
		let hours = currentDate.getHours();
		if (minute < 10) {
			minute = '0' + minute;
		}
		if (hours < 10) {
			hours = '0' + hours;
		}
		return `${hours}:${minute}`;
	}
	start() {
		if (this.intervalId) {
			return;
		}

		this.alarmCollection.forEach(clock => {
			if (clock.time === this.getCurrentFormattedTime() && clock.canCall) {
				clock.canCall = false;
				this.intervalId = clock.callback();
			}
		});
	}
	stop() {
		this.intervalId = null;
	}
	resetAllCalls() {
		this.alarmCollection.forEach(clock => clock.canCall = true);
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}