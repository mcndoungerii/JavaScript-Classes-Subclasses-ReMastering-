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
    processData(inputString);
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function median(arr) {
    if (arr.length % 2 == 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        var idx = arr.length / 2;
        return (arr[idx - 1] + arr[idx]) / 2;
    }
}

function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines.shift(), 10);

    var data = lines.shift().split(' ').map(function (s) { return parseInt(s, 10) });
    data.sort(function(o1, o2) { return o1 - o2; });
    process.stdout.write(median(data) + '\n');
} 


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = findMedian(arr);

    ws.write(result + '\n');

    ws.end();
}

console.log(main())
