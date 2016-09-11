function fizzbuzz(max) {
    for (var i = 1; i <= max; i++) {
        var output = ''
        if ((i % 3) === 0) {
            output +='Fizz';
        }
        if ((i % 5) === 0) {
            output += 'Buzz';
        }
        if (output === '') {
            output +=i;
        }
        console.log(output);
    }
}

fizzbuzz(5);
fizzbuzz(13);
fizzbuzz(89);
fizzbuzz(233);