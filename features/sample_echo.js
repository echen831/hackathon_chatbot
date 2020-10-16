/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

 const DATA = {
     name: "!Howard",
     email: "!howard@gmail.com",
     skills: ["Ruby", "Javascript", "React"]
 }


module.exports = function(controller) {

    controller.hears('sample','message, direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.hears('name', ['message'], async(bot, message) => {
        await bot.reply(message, 'My name is ' + DATA.name)
    })

    controller.hears('email', ['message'], async (bot, message) => {
        await bot.reply(message, 'My email is ' + DATA.email)
    })

    // controller.hears(['Hello', 'Hi', 'Hey', 'Yo', 'Aloha'], ['message'], async(bot, message) => {
    //     await bot.reply(message, message.text[0].toUpperCase() + message.text.slice(1) + ' Human! My name is ' + DATA.name)
    // })

    // controller.hears('.*', 'message', async (bot, message) => {
    //     await bot.reply(message, 'Sorry ' + DATA.name + ' has not learned what ' + message.text + " means.");
    // });

    // controller.on('event', async (bot, message) => {
    //     await bot.reply(message, 'I received an event of type ' + message.type);
    // });

    // controller.on('message,direct_message', async(bot, message) => {
    //     await bot.reply(message, `Echo: ${ message.text }`);
    // });
    // controller.interrupts('help', 'message', async (bot, message) => {
    //     // start a help dialog, then eventually resume any ongoing dialog
    //     await bot.beginDialog(HELP_DIALOG);
    // });

}
