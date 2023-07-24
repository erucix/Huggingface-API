const hug = require("./hug")
const { env } = require("process")

env.TOKEN = "MY_TOKEN_HERE"    // From cookies
env.HFCHAT = "MY_HFCHAT_HERE" // From cookies

hug("Hello there")
    .then(data => console.log(data))