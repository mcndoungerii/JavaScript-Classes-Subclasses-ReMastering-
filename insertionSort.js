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
    processData(inputString)

    main();
});

function processData(input){
    var lines = input.split("\n")
    var n = parseInt(lines.shift(),10);
    var data = lines.shift().split(' ').map(s => parseInt(s,10))
    
    process.stdout.write(insertionSort(data))
}

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'insertionSort' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function insertionSort(arr) {
    // Write your code here
    let i,key,j;
    
    for(i; i<arr.length; i++){
        key = arr[i]
        j = i - 1
        
        
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        
        arr[j+1] = key;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = insertionSort(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
