const checkHours = (hours) => {
  let result = [];
  for (let i = 0; i < hours; i++) {
    const oneHour = [];
    if (i === 0) {
      for (let j = 1; j <= hours; j++) {
        oneHour.push(1);
      }
      result.push(oneHour);
    } else if (i === 1) {
      let twoHours = [];
      const findAlotNumber = hours - 2;
      for (let i = 0; i < findAlotNumber + 1; i++) {
        if (i === 1) {
          twoHours.push(2);
        } else {
          twoHours.push(1);
        }
      }
      twoHours.forEach((number, index, array) => {
        result.push(array.map((n, i, a) => (index === i ? 2 : 1)));
      });
    } else if (i === 2) {
      const twoHours = [];
      const deviceNumber = hours / 2;
      if (hours % 2 == 0) {
        for (let i = 0; i < deviceNumber; i++) {
          twoHours.push(2);
        }
        result.push(twoHours);
      } else {
        if (hours !== 3) {
          for (let i = 0; i < Math.floor(deviceNumber) + 1; i++) {
            if (i === 1) {
              twoHours.push(1);
            } else {
              twoHours.push(2);
            }
          }
          twoHours.forEach((number, index, array) => {
            const newArr = [];
            array.forEach((n, i) => {
              if (i == index) {
                newArr.push(1);
              } else {
                newArr.push(2);
              }
            });
            result.push(newArr);
          });
        }
      }
    }
  }
  result = result.reduce((prevValue, currentValue, index) => {
    currentValue.forEach((number, index) => {
      if (index === currentValue.length - 1) {
        prevValue += `${number}`;
      } else {
        prevValue += `${number}-`;
      }
    });
    return `${prevValue} \n`;
  }, "");
  console.log(result);
};
checkHours(51);
