/**
 * Commands Plugin for Unibot
 * @param  {Object} options [description]
 *   db: {mongoose} the mongodb connection
 *   bot: {irc} the irc bot
 *   web: {connect} a connect + connect-rest webserver
 *   config: {object}
 * @return {Function}         init function to access shared resources
 */
module.exports = function init(options){

  var mongoose = options.db;
  var bot = options.bot;
  var webserver = options.web;
  var config = options.config;

  webserver.get('/example', function(req, res, next){
    res.sendFile('./index.html');
  });

  webserver.get('/example/:channel', function(req, res, next) {
    // mongoose.model(...).findOne({ channel: req.params.channel }, function(err, example){
      res.send({ example: 'Hello World!'});
    // });
  });

  return function plugin(channel){
    // Executed once per channel
    
    // channel.join(function(who){ /* do something */ });
    // channel.leave(function(who, reason){ /* do something */ });
    // regexpattern, callback
    channel.message('^hi unibot', function(from, matches){
      channel.say('Hello ' + from); // in-channel reply
      channel.say('Hello', from); // private reply
    });
  };
 
};
