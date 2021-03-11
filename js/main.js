const num = 3;
if (num % 2 > 0) {
    console.log('this number is odd')
} else {
    console.log('this number is even')
}

const age = 33;
if (age > 0 && age < 19) {
    console.log('0 - 18 years')
} else if (age > 18 && age < 31) {
    console.log('19 - 30 years')
} else if (age > 30 && age < 41) {
    console.log('31 - 40 years')
} else if (age > 40 && age < 51) {
    console.log('41 - 50 years')
} else if (age > 50) {
    console.log('50+ years')
}

const num1 = 7;
if (num1 % 2 == 0) {
    console.log ("Fizz")
}
else if (num1 % 3 == 0) {
    console.log ("Bazz")
}
else if (num1 % 2 == 0 && num1 % 3 == 0) {
    console.log ("Fizz Bazz")
}
else {
    console.log (num1)
}
