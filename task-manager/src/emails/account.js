const nodemailer = require("nodemailer");

const username = 'a4ddbd835df777'
const password = '4394060d0f799d'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: username,
        pass: password
    }
})

// transport.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', 
//     to: "bar@example.com, baz@example.com", 
//     subject: "Hello ✔", 
//     text: "Hello world?", 
//     html: "<b>Hello world?</b>", 
// })

const sendWelcomeEmail = (email, name) => {
    transport.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', 
        to: email, 
        subject: "Thanks For Joining In!", 
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`, 
        html: `<b>Welcome to the app, ${name}. Let me know how you get along with the app.</b>`, 
    })
}

const sendCancelationEmail = (email, name) => {
    transport.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', 
        to: email, 
        subject: "Good Bye!", 
        text: `Goodbye, ${name}.`, 
        html: `<b>Goodbye, ${name}.</b>`, 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}