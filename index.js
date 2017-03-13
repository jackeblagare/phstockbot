var Botkit = require('botkit');
var auth = require('./auth');
var request = require('request');

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: auth.SLACK_TOKEN,
}).startRTM()

// give the bot something to listen for.
controller.hears('STOCK_INFO',['direct_message','direct_mention','mention'],function(bot,message) {
    
    var tokens = message.text.split(" ");

    request('http://phisix-api.appspot.com/stocks/'+tokens[1]+'.json', function (error, response, body) {
        
        if (!error && response.statusCode == 200) {
            var response = JSON.parse(body);

            var stockSymbol = response.stock[0].symbol;
            var stockName = response.stock[0].name;
            var stockPrice = response.stock[0].price.amount;
            var stockPercentChange = response.stock[0].percent_change;
            var stockVolume = response.stock[0].volume;
            var lastUpdated = response.as_of;

            var stockMessage = 'Here is the information you requested: \n\n' 
                + stockName+' ('+stockSymbol+') \n'+'Price: ' + stockPrice
                + '\n' + 'Volume: ' + stockVolume + '\n%Change: ' + stockPercentChange
                + '\nLast Updated: ' + lastUpdated;

            bot.reply(message,stockMessage);
        }
    })
    
});