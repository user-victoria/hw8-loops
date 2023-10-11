// Написати цикли, які зможуть:

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
for (let i = 10; i <= 20; i++) {
    if (i !== 20) {
        document.write(i + ', ');
    }
    else {
        document.write(i);
    }
}
document.write('<br>');
document.write('<br>');

// 2. Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    if (i !== 20) {
        document.write(i ** 2 + ', ');
    }
    else {
        document.write(i ** 2);
    }
}
document.write('<br>');
document.write('<br>');

// 3. Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
    if (i !== 10) {
        document.write(i * 7 + ', ');
    }
    else {
        document.write(i * 7);
    }
}
document.write('<br>');
document.write('<br>');

// 4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.write(sum);
document.write('<br>');
document.write('<br>');

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let mult = 1;
for (let i = 15; i <= 35; i++) {
    mult *= i;
}
document.write(BigInt(mult));
document.write('<br>');
document.write('<br>');

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let suma = 0;
for (let i = 1; i <= 500; i++) {
    suma += i;
}
document.write(suma / 500);
document.write('<br>');
document.write('<br>');

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let summa = 0;
document.write('Парні числа: ');
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        summa += i;
        if (i !== 80) {
            document.write(i + ', ');
        }
        else {
            document.write(i + ' ');
        }
    }
}
document.write('= ', summa);
document.write('<br>');
document.write('<br>');

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        if (i !== 198) {
            document.write(i + ', ');
        }
        else {
            document.write(i);
        }
    }
}
document.write('<br>');
document.write('<br>');

// 9. Дано натуральне число.
document.write('<button class="click">Click to enter the number</button>');
document.write('<br> Відповідь знаходиться в консолі <br>');
document.write('<br>');

document.querySelector(".click").addEventListener('click', function () {
    let givenNumber = +prompt('Введіть натуральне число');
    console.log('Дано натуральне число =', givenNumber);

    // 9.1 Знайти та вивести на сторінку всі його дільники.
    let divisorNumbers = 0;
    console.log('Дільники числа:');
    for (let i = 1; i <= givenNumber; i++) {
        if (givenNumber % i === 0) {
            divisorNumbers += i;
            console.log(i);
        }
    }

    // 9.2 Визначити кількість його парних дільників.
    let evenNumbers = 0;
    for (let i = 1; i <= givenNumber; i++) {
        if (i % 2 === 0 && givenNumber % i === 0) {
            evenNumbers++;
        }
    }
    console.log('Кількість парних дільників =', evenNumbers);

    // 9.3 Знайти суму його парних дільників.
    let sumEvenNumbers = 0;
    for (let i = 1; i <= givenNumber; i++) {
        if (i % 2 === 0 && givenNumber % i === 0) {
            sumEvenNumbers += i;
        }
    }
    console.log('Сума парних дільників =', sumEvenNumbers);
});

// 10. Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i + ' ∙ ' + j + ' = ' + (i * j) + '<br>');
    }
    document.write('<br>');
}