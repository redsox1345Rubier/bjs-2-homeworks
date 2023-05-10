//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args);
		let objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			return "Из кэша: " + objectInCache.value;
		}
		let result = func(...args);
		cache.push({
			hash,
			value: result
		});
		if (cache.length > 5) {
			cache.shift();
		}
		return "Вычисляем: " + result;
	}
	return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		} else {
			func(...args);
			wrapper.count++;
		}
		wrapper.allCount++;
		timeoutId = setTimeout(() => {
			timeoutId = null;
			func(...args);
		}, delay);
	}
	wrapper.allCount = 0;
	wrapper.count = 0;
	return wrapper;
}