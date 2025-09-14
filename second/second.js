
// switch
let day=3
switch(day){
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("Terrific Tuesday!");
        break;
    case 3:
        console.log("Wonderful Wednesday!");
        break;
    case 4:
        console.log("Thriving Thursday!");
        break;
    case 5:
        console.log("Fun Friday!");
        break;
    case 6:
        console.log("Super Saturday!");
        break;
    case 7:
        console.log("Serene Sunday!");
        break;
}


// income test
let ag=50;
console.log(ag<13||ag>65)

let income=20000;
if (income>=50000){
    console.log("High Income");
}else{
    console.log("Low Income");
}


//practise
let userInput='hello';
let output='No Input provided';
let outputValue=userInput||output;
console.log(outputValue);
