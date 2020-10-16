/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.hears(['Hello', 'Hi', 'Hey', 'Yo'], ['message'], async(bot, message) => {
        await bot.reply(message, message.text + ' Human! My name is !Howard')
    })
    controller.hears('.*', 'message', async (bot, message) => {

        await bot.reply(message, 'I heard: ' + message.text);

    });

    // controller.on('message,direct_message', async(bot, message) => {
    //     await bot.reply(message, `Echo: ${ message.text }`);
    // });

}
