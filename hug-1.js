const { randomUUID } = require("crypto")
const process = require("process")
const readLine = require("readline")

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const token = process.env.TOKEN
const hfchat = process.env.HFCHAT
const cookie = `token=${token}; hf-chat=${hfchat}`

function hug(msg) {
    return new Promise(async (resolve) => {
        if (!token) return "Huggingface token not provided"
        if (!hfchat) return "hfchat not provided"

        let data = process.env.CONV ? { "conversationId": process.env.CONV } : await newConversationId().then(data => data)

        process.env.CONV = data.conversationId
        fetch(`https://huggingface.co/chat/conversation/${data.conversationId}/__data.json?x-sveltekit-invalidated=1_1`, {
            "headers": {
                "cookie": cookie
            },
            "body": null,
            "method": "GET"
        })
            .then(() => {
                fetch(`https://huggingface.co/chat/conversation/${data.conversationId}`, {
                    "headers": {
                        "content-type": "application/json",
                        "cookie": cookie
                    },
                    "body": JSON.stringify({
                        "inputs": msg,
                        "parameters": {
                            "temperature": 0.2,
                            "truncate": 1000,
                            "max_new_tokens": 1024,
                            "stop": [
                                "</s>"
                            ],
                            "top_p": 0.95,
                            "repetition_penalty": 1.2,
                            "top_k": 50,
                            "return_full_text": false
                        },
                        "stream": true,
                        "options": {
                            "id": randomUUID(),
                            "response_id": randomUUID(),
                            "is_retry": false,
                            "use_cache": false,
                            "web_search_id": ""
                        }
                    }),
                    "method": "POST"
                }).then(dataa => dataa.text())
                    .then(dataa => {
                        dataa = JSON.parse(dataa.slice(dataa.lastIndexOf('data:{"token":{') + 'data:'.length)).generated_text
                        resolve(dataa)
                    })
            })

    })
}
function newConversationId() {
    return new Promise((resolve) => {
        fetch("https://huggingface.co/chat/conversation", {
            "headers": {
                "content-type": "application/json",
                "cookie": cookie
            },
            "body": "{\"model\":\"OpenAssistant/oasst-sft-6-llama-30b-xor\"}",
            "method": "POST"
        }).then(data => data.json())
            .then(data => resolve(data))
    })
}
function ask() {
    rl.question("You: > ", (msg) => {
        hug(msg).then(data => {
            console.log("😊 : " + data)
            ask()
        })
    })
}

ask()