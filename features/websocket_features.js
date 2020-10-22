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

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        // controller.hears(['Hi', 'Hello', 'Hey'], 'message', async (bot, message) => {

        //     await bot.reply(message, {
        //         text: 'My name is !Howard.  What do you want to know from me?',
        //         quick_replies: [
        //             {
        //                 title: 'Name',
        //                 payload: 'name',
        //             },
        //             {
        //                 title: 'Email',
        //                 payload: 'email',
        //             },

        //             { title: "Skills",
        //               payload: 'skills'
        //             }
        //         ]
        //     });

        //     await bot.reply(message, {
        //         text: 'Do you want to know my skills',
        //         quick_replies: [

        //         ]
        //     })
        // });

        // controller.hears(new RegExp('quick'), 'message', async (bot, message) => {

        //     await bot.reply(message,{
        //         text: 'Here are some quick replies',
        //         quick_replies: [
        //             {
        //                 title: 'Foo',
        //                 payload: 'foo',
        //             },
        //             {
        //                 title: 'Bar',
        //                 payload: 'bar',
        //             }
        //         ]
        //     });
        // });


    }

}