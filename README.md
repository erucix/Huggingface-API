# Huggingface-API
Extremely lightweight and flexible ;)

# 😊 How To Use?
```javascript
const hug = require("./hug")
const { env } = require("process")

env.TOKEN = "MY_TOKEN_HERE"    // From cookies
env.HFCHAT = "MY_HFCHAT_HERE" // From cookies

hug("Hello there")
    .then(data => console.log(data))
```

```md
> Hello! How can I assist you today?
```

Get your `hf-chat` and `token` value from cookies and your'e good to go.

Note: Unofficial and reverse engineered Huggingface API. This software cannot be used for any unlawful activities and commercial purpose.