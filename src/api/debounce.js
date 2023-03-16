/**
 *
 * @param {function} fn function to call after timeout
 * @param {number} timeout set to the number of seconds
 * @returns debouncing function
 */
export default function debounce(fn) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, 500);
  };
}
