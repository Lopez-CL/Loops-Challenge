// Print odds 1-20 Using a loop write code that will console.log all of the odd values from 1 up to 20.//

function printOdds() {
    for (var i = 1; i <= 19; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
console.log(printOdds());

// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.//

function multiplesOfThree() {
    for (var i = 100; i > -1; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
console.log(multiplesOfThree());

// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.//

var val = 5.5;
function valueSequence() {
    while (val > -3.5) {
        val = val - 1.5;
        console.log(val);
    }
}

console.log(valueSequence());

// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.//

var sum = 0;
function addUp(){
    for (i = 1; i < 101; i++){
        sum = sum + i;
    }
    console.log(sum);
}
console.log(addUp());

// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.//

var prodcut = 1;
function multiply(){
    for (i = 1; i < 13; i++){
        prodcut = prodcut * i;
    }
    console.log(prodcut);
}
console.log(multiply());
