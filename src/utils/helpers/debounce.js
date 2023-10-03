export const debounce = (funcName, delay) => {
  let timer;
  const newFunction = (args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      funcName(args);
    }, delay);
  };
  return newFunction;
};
