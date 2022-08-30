function calculation() {
  function checkNumber(numb) {
    if (!Number.isFinite(numb)) {
      console.log('Некорректный ввод');
      return false;
    }

    return true;
  }

  let firstNumber = +prompt('Введите первое число: ');
  if (!checkNumber(firstNumber)) {
    return;
  }

  let secondNumber = +prompt('Введите второе число: ');
  if (!checkNumber(secondNumber)) {
    return;
  }

  console.log(
    `Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`
  );
}

class StackElement {
  constructor(value, prev){
    this.value = value;
    this.prev = prev
  }
}

class Stack {
  constructor() {
    this.last = null
  }

  push(data) {
    this.last = new StackElement(data, this.last)
  }
  
  pop() {
    let result;
    if (this.last !== null) {
      result = this.last.data;
      this.last =this.last.prev;
    }
    return result
  }

  // По нотации big O - O(1)
}

function selectFromInterval(array, firstInterval, secondInterval) {
  if (!Number.isFinite(firstInterval) || !Number.isFinite(secondInterval)) {
    throw new Error('Интервалы должны быть числами');
  }

  if (!Array.isArray(array)) {
    throw new Error('Первый аргумент должен быть массив');
  }

  array.forEach((item) => {
    if (!Number.isFinite(item)) {
      throw new Error('Входной массив должен быть только из чисел');
    }
  });

  let min = Math.min(firstInterval, secondInterval);
  let max = Math.max(firstInterval, secondInterval);

  return array.filter((item) => item >= min && item <= max);
 }

function makeObjectDeepCopy(entity) {
  let result;

  if (Array.isArray(entity)) {
    result = makeArrayCopy(entity);
  } else {
    result = makeObjectCopy(entity);
  }

  function makeArrayCopy(arr) {
    let gap = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        gap[i] = makeArrayCopy(arr[i]);
      } else if (!Array.isArray(arr[i]) && typeof arr[i] === 'object') {
        gap[i] = makeObjectCopy(arr[i]);
      } else {
        gap[i] = arr[i];
      }
    }

    return gap;
  }

  function makeObjectCopy(obj) {
    let gap = {};

    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        gap[key] = makeArrayCopy(obj[key]);
      } else if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
        gap[key] = makeObjectCopy(obj[key]);
      } else {
        gap[key] = obj[key];
      }
    }

    return gap;
  }

  return result;
}
