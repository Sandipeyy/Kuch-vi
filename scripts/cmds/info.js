const fs = require('fs');
const moment = require('moment-timezone');
const NepaliDate = require('nepali-date');

module.exports = {
  config: {
    name: "info",
    version: "1.3",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "utility",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const botName = "";
    const botPrefix = "/";
    const authorName = "SANDIP GURUNG";
    const authorFB = "https://facebook.com/sandipghotaneygurung";
    const authorInsta = "sandipeyy_";
    const status = "SINGLE🌚";

    const urls = JSON.parse(fs.readFileSync('zoro.json'));//please provide imgur img link on zoro.json file
    const link = urls[Math.floor(Math.random() * urls.length)];

  
