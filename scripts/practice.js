module.exports = function (robot) {
  
  robot.hear('hey!', (res) => {
    res.send('hello!');
  });

};
