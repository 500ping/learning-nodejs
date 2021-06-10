require('../src/db/mongoose')
const User = require('../src/models/user')

// 60c1920f61e38f69a456533e

// User.findByIdAndUpdate('60c1920f61e38f69a456533e', {
//     age: 23
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({})

    return count
}

updateAgeAndCount('60c1920f61e38f69a456533e', 24).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})