/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const RA_RESUME  = require("../public/resumes/ra.js");
const RA_QUICK_REPLIES = require("../public/resumes/ra_quick.js");

// const DATA = {
//      name: "!Howard",
//      email: "!howard@gmail.com",
//      skills: ["Ruby", "Javascript", "React"]
//  }

// const quickReplies = [

//     {
//         title: 'Name',
//         payload: 'name'
//     },
//     {
//         title: 'Email',
//         payload: 'email'
//     },
//     {
//         title: 'Skills',
//         payload: 'skills'
//     },

// ]


module.exports = function(controller) {


    controller.on('message', async (bot, message) => {
        await bot.reply(message, 'I heard a message!');
    });

    controller.hears('sample','message, direct_message', async (bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });
    controller.hears(['Hi', 'Hello', 'Hey', "Aloha", "Nihao"], 'message', async (bot, message) => {

        await bot.reply(message, {
            text: 'My name is ' + RA_RESUME.firstName + " " + RA_RESUME.lastName + '. What do you want to know from me?',
            quick_replies: RA_QUICK_REPLIES.topLevel
        });
    });

    controller.hears('name', ['message'], async (bot, message) => {

        await bot.reply(message, {
                text: 'My name is ' + RA_RESUME.firstName + " " + RA_RESUME.lastName, 
                quick_replies: RA_QUICK_REPLIES.topLevel
        })
    })

    controller.hears('email', ['message'], async (bot, message) => {
        await bot.reply(message, {
            text: 'My email is ' + RA_RESUME.email,
            quick_replies: RA_QUICK_REPLIES.topLevel
        })
    })

    controller.hears('skills', ["message"], async (bot, message) => {
        await bot.reply(message, {
           text: "I know " + RA_RESUME.skills,
            quick_replies: RA_QUICK_REPLIES.skills
        })
    })

    controller.hears('personal', ["message"], async (bot, message) => {
        await bot.reply(message, {
            text: "Ok what is something personal you want to know?",
            quick_replies: RA_QUICK_REPLIES.personal
        })
    })

    controller.hears('hobbies', ["message"], async(bot, message) => {
        await bot.reply(message, {
            text: "My favorite things to do are " + RA_RESUME.hobbies,
            quick_replies: RA_QUICK_REPLIES.topLevel
        })
    })

    controller.hears(['ruby', 'javascript', 'react', 'css', 'html', 'postgresql'], ["message"], async (bot, message) => {
        await bot.reply(message, {
            text: "I have 1 year of experience in " + message.text,
            quick_replies: [...RA_QUICK_REPLIES.skills, ...RA_QUICK_REPLIES.topLevel]
        })
    })

    controller.hears(['education'], ["message"], async (bot, message) => {
        await bot.reply(message, {
            text: "I studied full stack development at " + RA_RESUME.education,
            quick_replies: [...RA_QUICK_REPLIES.skills, ...RA_QUICK_REPLIES.topLevel]
        })
    })

    // controller.hears(['Hello', 'Hi', 'Hey', 'Yo', 'Aloha'], ['message'], async(bot, message) => {
    //     await bot.reply(message, message.text[0].toUpperCase() + message.text.slice(1) + ' Human! My name is ' + DATA.name)
    // })

    controller.hears('.*', 'message', async (bot, message) => {
        await bot.reply(message, 'Sorry I have not learned what ' + message.text + " means.");
    });

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
