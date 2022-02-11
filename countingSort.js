'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    processData(inputString)
    //main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const processData = lines => {
    const arr  = lines[1].split(' ').map(i => parseInt(i));
    
    countingSort(arr)
};

function countingSort(arr) {
    // Write your code here
    const counts = []
    for(let i = 0; i < 100; i++) {
        counts[i] = 0;
    }
    for(let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    
    console.log(counts.join(' '));
 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
