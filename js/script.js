

function validateInput() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    // Очищаем предыдущие ошибки
    document.getElementById("nameError").innerText = "";
    document.getElementById("ageError").innerText = "";

    // Проверяем, что введено имя
    if (!name) {
        document.getElementById("nameError").innerText = "Введите имя.";
    }

    // Проверяем, что введен возраст в виде числа и в допустимом диапазоне
    if (!isNaN(age)) {
        if (age <= 18 || age >= 120) {
            document.getElementById("ageError").innerText = "Возраст должен быть больше 18 и меньше 120.";
        }
    } else {
        document.getElementById("ageError").innerText = "Введите корректный возраст.";
    }

    // Если ошибок нет, сохраняем данные и переходим на страницу результата
    if (name && !isNaN(age) && age >= 18 && age < 120) {
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        window.location.href = "result.html";
    }
}



function goBack() {
    localStorage.setItem("lastPage", "result.html");
    window.history.back();
}



// Получаем данные из localStorage
var name = localStorage.getItem("name");
var age = localStorage.getItem("age");


// Отображаем данные на странице
document.getElementById("resultName").innerText = " " + name;
document.getElementById("resultAge").innerText = " " + age;

var randomNum = Math.floor(Math.random() * (age - 17));
if (randomNum == 0){
    document.getElementById("randomNumber").innerText = " " + "< 1" + " года";
} else {
    document.getElementById("randomNumber").innerText = " " + randomNum + " лет";
}

localStorage.setItem("randomNum", randomNum);

var randomPer = Math.floor(Math.random() * 10) * 10 + 10;
document.getElementById("randomPercent").innerText = " " + randomPer + "%";

localStorage.setItem("randomPer", randomPer);

var phobias = [
    "Арахнофобия (боязнь пауков)",
    "Агорафобия (боязнь открытых пространств)",
    "Клаустрофобия (боязнь закрытых пространств)",
    "Акрофобия (боязнь высоты)",
    "Герпетофобия (боязнь рептилий)",
    "Гемофобия (боязнь крови)",
    "Некрофобия (боязнь смерти)",
    "Трипанофобия (боязнь игл)",
    "Авиафобия (боязнь полетов)",
    "Гидрофобия (боязнь воды)",
    "Нет фобий",
    "Гомофобия (боязнь гомосексуальности)",
    "Фотофобия (боязнь света)",
    "Дентофобия (боязнь стоматологов и зубоврачебных процедур)",
    "Кинофобия (боязнь собак)",
    "Электрофобия (боязнь электричества)",
    "Тетрафобия (боязнь числа 4)",
    "Киберфобия (боязнь компьютеров и технологий)",
    "Генефобия (боязнь старых людей)",
    "Орнитофобия (боязнь птиц)",
    "Десмофобия (боязнь узоров)",
    "Мизофобия (боязнь грязи и бактерий)",
    "Теофобия (боязнь бога)",
    "Офидиофобия (боязнь змей)",
    "Лепидофобия (боязнь бабочек)",
    "Трипофобия (боязнь кластеров маленьких отверстий)",
    "Судофобия (боязнь вождения автомобиля)",
    "Гамофобия (боязнь брака)",
    "Киномеханофобия (боязнь киномеханизмов и роботов)",
    "Иньекциофобия (боязнь инъекций)",
    "Орфидеофобия (боязнь поэзии)",
    "Китаифобия (боязнь китайцев)",
    "Олеофобия (боязнь масла)",
    "Фотолехнофобия (боязнь фото- и видеотехники)",
    "Кайлетофобия (боязнь уродства)",
    "Аутофобия (боязнь одиночества)",
    "Нет Фобии",
    "Театрофобия (боязнь театра)",
    "Шакофобия (боязнь упакованных подарков)",
    "Гигантофобия (боязнь гигантских предметов)",
    "Демонофобия (боязнь демонов)",
    "Зоосадофобия (боязнь секса с животными)",
    "Криптофобия (боязнь скрытых вещей)",
    "Левофобия (боязнь левой стороны)",
    "Миллофобия (боязнь оружия)",
    "Митридатофобия (боязнь ядов)",
    "Нудофобия (боязнь нюдистов)",
    "Овофобия (боязнь яиц)",
    "Орофобия (боязнь открытых пространств)",
    "Педофобия (боязнь детей)",
    "Тафофобия (боязнь могил)",
    "Трентофобия (боязнь троллейбусов)",
    "Фрактофобия (боязнь мусора)",
    "Фунтофобия (боязнь смеха)",
  
];


// Выбираем случайную фобию
var randomPhobia = phobias[Math.floor(Math.random() * phobias.length)];
document.getElementById("phobia").innerText = " " + randomPhobia;

localStorage.setItem("randomPhobia", randomPhobia);


var bodyTypes = [
    "Худой",
    "Толстый",
    "Полный",
    "Атлет",
    "Среднее"
];

var randomBodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
document.getElementById("bodyType").innerText = " " + randomBodyType;

localStorage.setItem("randomBodyType", randomBodyType);


var special = Math.floor(Math.random() * 80) + 1;
localStorage.setItem("special", special);

if (special == 2){
    console.log("Справа от вас враг")
    var phrase = "Особые условия: справа от вас враг, ваша задача избавиться от него";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};
if (special == 3){
    console.log("Слева от вас враг")
    var phrase = "Особые условия: слева от вас враг, ваша задача избавиться от него";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};
if (special == 4){
    console.log("Справа от вас друг")
    var phrase = "Особые условия: справа от вас друг, вам нужно протащить его в бункер";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};
if (special == 5){
    console.log("Слева от вас друг")
    var phrase = "Особые условия: слева от вас друг, вам нужно протащить его в бункер";
    localStorage.setItem("phrase", phrase);
    document.getElementById("extra").innerText = phrase
};



// var name2 = name;
// var age2 = age;
// var randomNum2 = randomNum;
// var randomPer2 = randomPer;
// var randomPhobia2 = randomPhobia;
// var randomBodyType2 = randomBodyType;



// document.getElementById("resultName2").innerText = " " + name2;
// document.getElementById("resultAge2").innerText = " " + age2;
// if (randomNum2 == 0){
//     document.getElementById("randomNumber2").innerText = " " + "< 1" + " года";
// } else {
//     document.getElementById("randomNumber2").innerText = " " + randomNum2 + " лет";
// }
// document.getElementById("randomPercent2").innerText = " " + randomPer2 + "%";
// document.getElementById("phobia2").innerText = " " + randomPhobia2;
// document.getElementById("bodyType2").innerText = " " + randomBodyType2;


// console.log(randomBodyType)
// console.log(name)
// console.log(age)
// console.log(randomPer)
// console.log(randomPhobia)




// function loadLastData(bodyType, name, age, randomPer, randomPhobia, globalFob){
//     window.location.href = "saved.html";
//     console.log(bodyType);
//     console.log(name);
//     console.log(age);
//     console.log(randomPer);
//     console.log(randomPhobia);
//     console.log(globalFob);
// }
// loadLastData(randomBodyType, name, age, randomPer, randomPhobia);