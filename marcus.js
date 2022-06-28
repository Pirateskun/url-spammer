const Discord = require("discord.js")
const marcus = require("./cfg.js")
const marcus1 = new Discord.Client()
const marcus2 = new Discord.Client()
const marcus3 = new Discord.Client()
const marcus4 = new Discord.Client()
const axios = require("axios")

// 1. Bot

marcus1.on("ready", () => {
    marcus1.user.setActivity(marcus.DURUMLAR.Ready_1);
    console.log(marcus1.user.tag)
})


marcus1.on("ready", () => {
    let guild = marcus1.guilds.cache.get(marcus.SUNUCULAR.GuildID_1)
    setInterval(() => {
        if (guild.vanityURLCode == marcus.URLLER.URL_1) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/${marcus.SUNUCULAR.GuildID_1}/vanity-url`,
            data: { code: marcus.URLLER.URL_1 },
            headers: { authorization: `Bot ${marcus1.token}` }
        }).catch(() => {
            console.log("1. Bot Spamlıyor")
        })
    }, 1200)
})

marcus1.login(marcus.TOKENLER.ClientToken1)

// 2. Bot

marcus2.on("ready", () => {
    marcus2.user.setActivity(marcus.DURUMLAR.Ready_2);
    console.log(marcus2.user.tag)
})


marcus2.on("ready", () => {
    let guild = marcus2.guilds.cache.get(marcus.SUNUCULAR.GuildID_2)
    setInterval(() => {
        if (guild.vanityURLCode == marcus.URLLER.URL_2) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/${marcus.SUNUCULAR.GuildID_2}/vanity-url`,
            data: { code: marcus.URLLER.URL_2 },
            headers: { authorization: `Bot ${marcus2.token}` }
        }).catch(() => {
            console.log("2. Bot Spamlıyor")
        })
    }, 1200)
})

marcus2.login(marcus.TOKENLER.ClientToken2)

// 3. Bot

marcus3.on("ready", () => {
    marcus3.user.setActivity(marcus.DURUMLAR.Ready_3);
    console.log(marcus3.user.tag)
})


marcus3.on("ready", () => {
    let guild = marcus3.guilds.cache.get(marcus.SUNUCULAR.GuildID_3)
    setInterval(() => {
        if (guild.vanityURLCode == marcus.URLLER.URL_3) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/${marcus.SUNUCULAR.GuildID_3}/vanity-url`,
            data: { code: marcus.URLLER.URL_3 },
            headers: { authorization: `Bot ${marcus3.token}` }
        }).catch(() => {
            console.log("3. Bot Spamlıyor")
        })
    }, 1200)
})

marcus3.login(marcus.TOKENLER.ClientToken3)

// 4. Bot

marcus4.on("ready", () => {
    marcus4.user.setActivity(marcus.DURUMLAR.Ready_4);
    console.log(marcus4.user.tag)
})


marcus4.on("ready", () => {
    let guild = marcus4.guilds.cache.get(marcus.SUNUCULAR.GuildID_4)
    setInterval(() => {
        if (guild.vanityURLCode == marcus.URLLER.URL_4) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/${marcus.SUNUCULAR.GuildID_4}/vanity-url`,
            data: { code: marcus.URLLER.URL_4 },
            headers: { authorization: `Bot ${marcus4.token}` }
        }).catch(() => {
            console.log("4. Bot Spamlıyor")
        })
    }, 1200)
})

marcus4.login(marcus.TOKENLER.ClientToken4)

// Main dosyası burada bitiyor.
