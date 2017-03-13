# PH Stock Bot

## What is this?

PH Stock Bot is a Slack bot that I created just for fun. Basically it just gives information about a particular stock in the Philippine Stock Exchange.

## Installation and Running
1. Clone this project.
2. **cd phstockbot**
3. **npm install**
4. Create a auth.js file and put the line below:

   **exports.SLACK_TOKEN = 'xoxb-YOUR_SLACK_ACCESS_TOKEN_HERE';**
5. Run the bot using 

   **node index.js**

## Final Notes
The stock information is being retrieved from Simple PSEi (https://github.com/edgedalmacio/phisix)
