function debounce (func, delay) {
    let timeOut;
    return (...arguments) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(() => {
            func.apply(null, arguments);
            }, delay);
    }
}