var yearsInBunker = Math.floor(Math.random() * 10) + 1;

// Отображаем случайное число на странице
document.getElementById("yearsInBunker").innerText = yearsInBunker;


// Генерация случайного числа от 30 до 500 с шагом 10
function generateRandomNumber() {
    var min = 30;
    var max = 500;
    var step = 10;

    // Вычисление возможных значений
    var possibleValues = [];
    for (var i = min; i <= max; i += step) {
        possibleValues.push(i);
    }

    // Выбор случайного значения из возможных
    var randomIndex = Math.floor(Math.random() * possibleValues.length);
    return possibleValues[randomIndex];
}

// Пример использования
var size = generateRandomNumber();
document.getElementById("size").innerText = " " + size;

function goBack(){
    window.location.href = "choose.html"
 };
