// function timeConversion(s) {
//     // Write your code here
//     let arr = s.slice(0,8).split(":");
    
//     let comparator = s.indexOf('PM') > -1
    
//     arr[0] = (comparator?(arr[0] == 12?'12':Number(arr[0]) + 12):(arr[0] ==12?'00':arr[0]))
    
//     return arr.join(":")

// }

// console.log(timeConversion("07:45:34PM"))

// function miniMaxSum(arr) {
//     // Write your code here
//     let s = arr.reduce((a,b) => a + b,0)
    
//     console.log(`${s - Math.max(...arr)} ${s - Math.min(...arr)}`)
    

// }

// function fizzBuzz(n) {
//     // Write your code here
    
//     for(let i = 1;  i <= n; i++) {
        
//         if(i % 3 == 0 && i % 5 == 0) {
//             console.log('FizzBuzz')
//         }
//         else if(i % 3 == 0) {
//             console.log('Fizz')
//         } else if(i % 5 == 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
    
    

// }

// fizzBuzz(15)


/**
 * Find Median
 */

 function findMedian(arr) {
    let d = arr.split("\n")
    let arr1 = d[1].split(" ")
    let sorter =  arr1.sort((a,b) => a-b)
    const reducer = (previousValue, currentValue) => Number(previousValue) + Number(currentValue);

    let sumArr = sorter.reduce(reducer)

    var median = sumArr/Number(d[0])
    console.log("MEdian",median)
    return median
} 


findMedian("7\n0 1 2 4 6 5 3")

// const median = arr => {
//     const mid = Math.floor(arr.length / 2),
//         nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
// };