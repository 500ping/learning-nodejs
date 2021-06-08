console.log('Client side js file is loaded!!!');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

// fetch('http://localhost:3000/weather?address=HaNoi').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             console.log(data.address);
//             console.log(data.forecast);
//         }
//     });
// });

const weatherForm = document.querySelector('form');
const messageOne = document.querySelector('.messageOne');
const messageTwo = document.querySelector('.messageTwo');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const search = document.querySelector('input').value;
    
    fetch('http://localhost:3000/weather?address=' + search).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error;
            messageTwo.textContent = '';
        } else {
            messageOne.textContent = data.address;
            messageTwo.textContent = data.forecast;
        }
    });
});
});