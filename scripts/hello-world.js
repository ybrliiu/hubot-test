"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (robot) => {
    robot.respond(/say-hw/, (msg) => {
        msg.reply('Hello, World');
        msg.reply('What is this...');
    });
};
//# sourceMappingURL=hello-world.js.map