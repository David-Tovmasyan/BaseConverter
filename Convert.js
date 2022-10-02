const fs = require('fs')

const fileName = 'answer.txt';

//clear text
fs.writeFileSync(fileName,'',function(e){
    if(e){
        console.log(e);
    }
})

//add one line of text
function writeInFile(data) {
    fs.appendFileSync(fileName, data + "\n", function (e) {
        if (e) {
            console.log(e);
        }
    })
}

//values of exercise
const values = [
    [a = 56, d = 10, p = 2],
    [a = 321, d = 4, p = 8],
    [a = 1011, d = 2, p = 10],
    [a = 79, d = 10, p = 2],
    [ a=12102, d=3, p=7]
]

for (let i in values) {
    convert(values[i],i);
}

function convert([a, d, p],id) {

    //writing header
    writeInFile(`\nExercise ${parseInt(id)+1}`)

    number = 0;
    temp = a;
    base = 1;
    last_digit = 0;
    while (!temp == 0) {
        last_digit = parseInt(temp % p);
        temp = parseInt(temp / p);
        number = number + parseInt(last_digit * base);
        base = parseInt(base * d);

        let data = {
            a: a,
            d: d,
            p: p,
            last_digit: last_digit,
            temp: temp,
            base: base,
            number: number
        }

        //writing one line of operation
        writeInFile(JSON.stringify(data))
    }
}


