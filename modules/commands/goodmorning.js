const fs = require("fs");
module.exports.config = {
	name: "Goodmorning",
    version: "1.0",
	hasPermssion: 0,
	credits: "Siegfried Sama", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "No Prefix",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL, Users }) {
	var { threadID, messageID } = event;
	var sticker = ["526214684778630",
      "526220108111421",
      "526220308111401",
      "526220484778050",
      "526220691444696",
      "526220814778017",
      "526220978111334",
      "526221104777988",
      "526221318111300",
      "526221564777942",
      "526221711444594",
      "526221971444568",
     "2041011389459668", "2041011569459650", "2041011726126301", "2041011836126290", "2041011952792945", "2041012109459596", "2041012262792914", "2041012406126233", "2041012539459553", "2041012692792871", "2041014432792697", "2041014739459333", "2041015016125972", "2041015182792622", "2041015329459274", "2041015422792598", "2041015576125916", "2041017422792398", "2041020049458802", "2041020599458747", "2041021119458695", "2041021609458646", "2041022029458604", "2041022286125245"
    ];
    var sticker1 = data[Math.floor(Math.random() * data.length)];
	if (event.body.indexOf("Goodmorning")==0 || (event.body.indexOf("goodmorning")==0 || (event.body.indexOf("morning")==0 || (event.body.indexOf("Morning")==0)))) {
			api.sendMessage("Goodmorning, tara kape", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker1}, event.threadID);
      }, 100)
    }, event.messageID);
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }