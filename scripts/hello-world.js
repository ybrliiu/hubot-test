"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (robot) => {
    robot.hear(/aa/, (msg) => {
        msg.send('A', 'B');
    });
    robot.respond(/say-hw/, (msg) => {
        msg.reply('Hello, World');
        msg.reply('What is this...');
    });
};
