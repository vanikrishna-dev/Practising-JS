//display wish depending on the current hour.
let currentDate = new Date()
console.log("Current time is:", currentDate.getHours());
if(currentDate.getHours() < 12 && currentDate.getHours() > 3){
    console.log("Good Morning!");
}
else if(currentDate.getHours() == 12 && currentDate.getHours() < 20){
    console.log("Good Afternoon!");
}
else{
    console.log("Good Night!")
}

//counting the number of time a button has been clicked.
let count = parseInt(localStorage.getItem('count')) || 0;
let buttonClick = document.querySelector("#buttonClick");
buttonClick.onclick = function(){
    count++;
    console.log(count);
    document.querySelector("#buttonClick").innerHTML = `Clicked me ${count} times!`;
    if(count % 2 == 0){
        buttonClick.style.backgroundColor = 'violet';
    }
    else{
        buttonClick.style.backgroundColor='lightblue';
        buttonClick.style.color='black';
    }
    localStorage.setItem('count',count);
}
