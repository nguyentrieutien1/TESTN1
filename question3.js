//  (don't understand)
let f = () => {
  let d = new Date(); // current time
  return d.getMilliseconds() % 2 == 0; // => true or false
};
const retry = async (func, wait, options = {}) => {
  return new Promise((resolve) => {
    if (options.max) {
      for (let i = 0; i < 3; i++) {
        const isTrue = func();
        if (isTrue) {
          setTimeout(() => {
            resolve(true);
          }, wait);
        } else {
          setTimeout(() => {
            resolve(false);
          }, wait);
        }
      }
    } else {
      retry(func, wait, (options = {}));
      console.log(`Please pass option = {number} param`);
    }
  });
};
retry(f, 1000, {}).then((result) => {
  console.log(result);
});
