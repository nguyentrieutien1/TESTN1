Question 1

-- Create table for roles 
create table roles (
	id int primary key not null auto_increment,
    role_name varchar(15) not null
);


-- Create table for companies	 
create table companies   (
	id int primary key not null auto_increment,
    company_name varchar(100) not null
);
-- Create table for products	 
create table products   (
	id int primary key not null auto_increment,
    product_name varchar(100) not null
);
-- Create table for departments 
create table departments  (
	id int primary key not null auto_increment,
    name varchar(50) not null,
    company_id int,
    FOREIGN KEY (company_id) REFERENCES companies(id)
);
 -- Create table for payments 
create table payments (
	id int primary key not null auto_increment,
    department_id int,
    discount int, 
    employee_id int,
    product_id int,
    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- Create table for employees
create table employees (
	id int primary key not null auto_increment,
    fullname varchar(50) not null,
    department_id int,
    role_id int,
    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
)
DELIMITER //
 CREATE TRIGGER allowManagePayment BEFORE INSERT, UPDATE, DELETE ON Insert_Prevent
   FOR EACH ROW
    BEGIN
    IF(new.Id < 1 or new.Id > 5) THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'You can not insert record';
    END IF;
    END //
 DELIMITER ;

-- Giải thích 
-- Trong một công ty sẽ có nhiều bộ phận, 1 bộ phận sẽ có nhiều nhân viên, và bộ phận này thuộc loại công ty thương mại hoặc kiểm toán
-- Một bộ phận sẽ xuất nhiều thông tin thanh toán và thông tin thanh toán này do nhân viên nào ghi, và ghi cho những sản phẩm nào, có giảm giá sản phẩm đó hay không
-- Một nhân viên thì thuộc 1 phòng ban nào đó, và nhân viên đó có chức vụ gì



Question 2
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




Question 3 (don't understand)
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
  