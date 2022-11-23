const divElem = document.getElementById('test');
var br = document.createElement("br");

for(let i=1; i <= 100; i++) {
    let output = '';

    if ( (i % 3 === 0) && (i % 5 === 0) ) {
        output = 'FizzBuzz';
    } else if (i % 3 === 0) {
        output = 'Fizz';
    } else if (i % 5 === 0) {
        output = 'Buzz';
    }  else {
        output = i;
    }

    divElem.append(output);
    divElem.innerHTML += '<br>'
    console.log(output);
}