# Huggingface-API
Extremely lightweight and flexible ;)

<p align="center">
  <br/>
  <picture> 
    <source media="(prefers-color-scheme: dark)" srcset="https://huggingface.co/datasets/huggingface/documentation-images/raw/main/huggingfacejs-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://huggingface.co/datasets/huggingface/documentation-images/raw/main/huggingfacejs-light.svg">
    <img alt="huggingface javascript library logo" src="https://huggingface.co/datasets/huggingface/documentation-images/raw/main/huggingfacejs-light.svg" width="376" height="59" style="max-width: 100%;">
  </picture>
  <br/>
  <br/>
</p>

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

# 🤔 How to use executables?

<img src="https://github.com/erucix/Huggingface-API/blob/main/img/Screenshot%20from%202023-07-24%2022-12-39.png?raw=true" height="240px">

First of all set the environment variables as below:

### Windows:
- Downlaod `hug_win.exe` file from the release page.
- Get the `token` and `hf-chat` from cookies panel and use them as follows.

```bat
set TOKEN=YOUR_TOKEN_HERE
set HFCHAT=YOUR_HFCHAT_HERE
```
### Linux and MacOS:
- Downlaod `hug_linux` or `hug_mac` file from the release page.
- Get the `token` and `hf-chat` from cookies panel and use them as follows.

```sh
export TOKEN="YOUR_TOKEN_HERE"
export HFCHAT="YOUR_HFCHAT_HERE"
```
<br>
Note: Unofficial and reverse engineered Huggingface API. This software cannot be used for any unlawful activities and commercial purpose.
