const doWorkPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 3])
        reject('Things went wrong!')
    }, 2000)
})

doWorkPromises.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})