// Checking whether No. is positive, negative or zero 

let a=0;
if(a===0){
    console.log("The Number is Zero");
} else if(a>0){
    console.log("It is a Positive Number");
} else{
    console.log("It is a Negative Number");
}

// finding cost of ticket on the basis of age
let age=60;
let weekend='yes'
if(age<13){
    console.log("The ticket is free of cost");
} else if(age>=13 && age<=60){
    if (weekend=='yes'){
        console.log("The ticket price is Rs 500");
    } else{
        console.log("The ticket price is Rs 300");
    }
} else{
    console.log("The ticket price is Rs 250");
}

// grading on the basis of marks
let marks=80;
if(marks>=90){
    console.log("Your Grade is A");
}else if(marks>=80 && marks<=89){
    console.log("Your Grade is B");
}else if(marks>=70 && marks<=79){
    console.log("Your Grade is C");
}else if(marks>=60 && marks<=69){
    console.log("Your Grade is D");
}else {
    console.log("Your Grade is F")
}

// adult or minor
let value=2;
let status=(value>=18)? 'Adult':'Minor';
console.log(status);