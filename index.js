function changeNumberSystem() {
  let number = +prompt('Введите число: ');
  let numberSystem = +prompt('Введите систему счисления: ');

  if (
    !(
      Number.isFinite(number) &&
      Number.isFinite(numberSystem) &&
      numberSystem >= 2 &&
      numberSystem <= 36
    )
  ) {
    console.log('Некорректный ввод');
    return;
  }

  console.log(
    `${number} в системе счисления ${numberSystem}: ${number.toString(
      numberSystem
    )}`
  );
}

changeNumberSystem();
