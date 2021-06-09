// setTimeout(() => {
//     console.log('2 Seconds Are Up.')
// }, 2000);

// const names = ['Thang', 'Hung', 'Nam'];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });

// // console.log(shortNames);

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             lon: 0
//         };

//         callback(data); 
//     }, 2000)
// };

// geocode('Ha Noi', (data) => {
//     console.log(data);
// });

// Challenge

// const add = (x, y, callback) => {
//     setTimeout(() => {
//         const sum = x + y;
//         callback(sum);
//     }, 2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum);
// });

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callback(undefined, 'result')
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})