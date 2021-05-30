// const square = function (x) {
//     return x * x;
// };

// const square = (x) => {
//     return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

const event = {
    name: 'Event 1',
    guestList: ['Thang', 'Nam'],
    printGuestList: function () {
        console.log("Guest list for " + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' - ' + this.name);
        });
    }
}

event.printGuestList();