export const throttle = function (funcName, delay) {
  let timer;
  let flag = true;
  const newFunction = (...args) => {
    if (flag) {
      clearTimeout(timer);
      flag = false;
      funcName(...args);
      timer = setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
  return newFunction;
};
