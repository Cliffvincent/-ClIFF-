module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  credits: "libyzxy0",
  description: "Generate random tiktok girl videos",
  hasPermssion: 0,
  commandCategory: "other",
  usage: "[shoti]",
  cooldowns: 5,
  dependencies: [],
  usePrefix: true
};

module.exports.run = async function({ api, event }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs")
  let response = await axios.post('https://shoti-api.libyzxy0.repl.co/api/get-shoti', { apikey: "YOUR-API-KEY" });
  var file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");
  var rqs = request(encodeURI(response.data.data.url));
  rqs.pipe(file);
  file.on('finish', () => {
    return api.sendMessage({
      body: `@${response.data.user.username}`, 
      attachment: fs.createReadStream(__dirname + '/cache/shoti.mp4')
    }, event.threadID, event.messageID)
  })
  file.on('error', (err) => {
      api.sendMessage(`Shoti Error: ${err}`, event.threadID, event.messageID);
  })
};