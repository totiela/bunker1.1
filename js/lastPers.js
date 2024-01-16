
function loadLastData(){
    window.location.href = "saved.html";
    // var name = localStorage.getItem("name");
    // var age = localStorage.getItem("age");
    // var randomPer = localStorage.getItem("randomPer");
    // var randomBodyType = localStorage.getItem("randomBodyType");
    // var randomPhobia = localStorage.getItem("randomPhobia");
    // var randomNum = localStorage.getItem("randomNum");
    // console.log(randomBodyType);
    // console.log(randomPhobia);
    // console.log(name);
    // console.log(age);
    // console.log(randomPer);
    // console.log(randomNum);
    
    // document.getElementById("resultAge2").innerText = " " + age;
    // document.getElementById("resultName2").innerText = " " + name;
 };

 function foo(){
    var name = localStorage.getItem("name");
    var age = localStorage.getItem("age");
    var randomPer = localStorage.getItem("randomPer");
    var randomBodyType = localStorage.getItem("randomBodyType");
    var randomPhobia = localStorage.getItem("randomPhobia");
    var randomNum = localStorage.getItem("randomNum");
    var phrase = localStorage.getItem("phrase")
    document.getElementById("resultAge2").innerText = " " + age;
    document.getElementById("resultName2").innerText = " " + name;
    document.getElementById("bodyType2").innerText = " " + randomBodyType;
    document.getElementById("randomPercent2").innerText = " " + randomPer;
    document.getElementById("phobia2").innerText = " " + randomPhobia;
    if (randomNum == 0){
        document.getElementById("randomNumber2").innerText = " " + "< 1" + " года";
    } else {
        document.getElementById("randomNumber2").innerText = " " + randomNum + " лет";
    };
    document.getElementById("extra").innerText = phrase;
 };

 function goBack(){
    window.location.href = "game.html"
 };





foo();