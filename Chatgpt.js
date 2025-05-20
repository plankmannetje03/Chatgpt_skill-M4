const button = document.getElementById("button")
const textInput = document.getElementById("TextInput")

function klik(){
    sendMessage(textInput.value)
   
}
function MakeLi(text){
    let Li = document.createElement("li")
    Li.innerText = text;
    document.querySelector("#text").appendChild(Li);
}



async function sendMessage(prompt){
    MakeLi(prompt);
    const url = "http://localhost:11434/api/generate";
    const options = {
        method: 'POST',
        header: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "phi3",
            prompt: prompt,
            stream: false
        })
    }
    const response = await fetch(url, options);
    const data = await response.json();
    MakeLi(data.response)
    console.log(data.response);
}

sendMessage("Mijn naam is daan")
