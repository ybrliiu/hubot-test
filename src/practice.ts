import { Robot, Response } from 'hubot';

module.exports = (robot: Robot<any>): void => {
  
  robot.hear(/hey!/, (res: Response<Robot<any>>) => {
    res.send('hello!');
  });

};
