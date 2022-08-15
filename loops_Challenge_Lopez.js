// Print odds 1-20 Using a loop write code that will console.log all of the odd values from 1 up to 20.//

function printOdds(){
    for (var i = 1; i <= 19; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}
console.log(printOdds());

// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.//

function multiplesOfThree(){
    for (var i = 100; i > -1; i--){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}
console.log(multiplesOfThree());