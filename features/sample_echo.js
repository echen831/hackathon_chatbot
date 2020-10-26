/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const { Botkit, BotkitConversation } = require("botkit");
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

    const GREETING = 'greeting';
    const greet = new BotkitConversation(GREETING, controller);
    greet.say({text: "Hello, My name is Rasheeq Ahmed.  What do you want to know from me?", quick_replies: RA_QUICK_REPLIES.topLevel});
    controller.addDialog(greet);

    controller.on(['hello', 'welcome_back'], async (bot, message) => {
        await bot.beginDialog(GREETING);
    });


    // controller.on('message', async (bot, message) => {
    //     await bot.reply(message, 'I heard a message!');
    //     await bot.beginDialog(GREETING);
    // });

    controller.hears('sample','message, direct_message', async (bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });
    controller.hears(['Hi','Hey', "Hello", "Aloha", "Nihao"], 'message', async (bot, message) => {
        await bot.beginDialog('typing');
        await bot.reply(message, {
            text: message.text[0].toUpperCase() + message.text.slice(1) + '!  My name is ' + RA_RESUME.firstName + " " + RA_RESUME.lastName + '. What do you want to know from me?',
            quick_replies: RA_QUICK_REPLIES.topLevel
        });
    });

    controller.hears('name', ['message'], async (bot, message) => {
        await bot.reply(message, {
                text: 'My name is ' + RA_RESUME.firstName + " " + RA_RESUME.lastName, 
                quick_replies: RA_QUICK_REPLIES.topLevel
        })
    })

    controller.hears('google', ['message'], async (bot, message) => {
        await bot.reply(message, {
            text: "www.google.com"
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

    controller.hears(['hobbies', 'hobby', 'like to do'], ["message"], async(bot, message) => {
        await bot.reply(message, {
            text: "My favorite things to do are " + RA_RESUME.hobbies,
            quick_replies: [...RA_QUICK_REPLIES.hobbies, ...RA_QUICK_REPLIES.topLevel]
        })
    })

    controller.hears(['ruby', 'javascript', 'react', 'css', 'html', 'postgresql'], ["message"], async (bot, message) => {
        await bot.reply(message, {
            text: "I have 1 year of experience in " + message.text,
            quick_replies: [...RA_QUICK_REPLIES.skills, ...RA_QUICK_REPLIES.topLevel]
        })
    })

    controller.hears(['programming', 'traveling', 'cooking'], ["message"], async (bot, message) => {
        await bot.reply(message, {
            text: "I love " + message.text + "!",
            quick_replies: [...RA_QUICK_REPLIES.hobbies, ...RA_QUICK_REPLIES.topLevel]
        })
    })

    controller.hears(['education', 'school'], ["message"], async (bot, message) => {
        await bot.reply(message, {
            text: "I studied full stack development at " + RA_RESUME.education,
            quick_replies: [...RA_QUICK_REPLIES.topLevel]
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
