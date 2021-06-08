// // Object Property Shorthand

// const name = 'Thang';
// const age = 23;

// const user = {
//     name,
//     age: age,
//     location: 'Ha Noi'
// }

// // console.log(user);

// // Object Destructuring

const product = {
    label: 'Notebook',
    price: 3,
    stock: 200,
    salePrice: undefined,
    rating: 4.6
}

// const {label: productLabel, stock, rating = 5} = product;

// console.log(productLabel, stock, rating);

const transaction = (type, {label, rating = 0} = {}) => {
     console.log(type, label, rating);
};

transaction('order', product);
// transaction('order');