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
