const nodemailer = require('nodemailer');

async function enviaEmail(usuario) {
    const contaTeste = await nodemailer.createTestAccount();

    const transportador = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: contaTeste.user,
            pass: contaTeste.pass,
        },
    });
    const info = await transportador.sendMail({
        from: '"Blog do Código" <noreply@blogdocodico.com.br>',
        to: usuario.email,
        subject: 'Teste de e-mail',
        text: 'Olá! Este é um e-mail de teste!',
        html: '<h1>Olá!</h1> <p>Este é um e-mail de teste!</p>'
    });

    console.log('URL: ' + nodemailer.getTestMessageUrl(info));
}

module.exports = { enviaEmail }