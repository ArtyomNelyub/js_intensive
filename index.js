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

calculation();

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

  // По нотации big O - O(n)
}