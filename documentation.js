changeTitle("documentation")

const VERSION = "3.14"
const LAST_UPDATE = "Jul 6"
const UPDATES = 21

function format(firstInputId, secondInputId, methodId){
    firstInputId = document.getElementById(firstInputId).value
    let result

    if(secondInputId){
        secondInputId = document.getElementById(secondInputId).value
        result = methods[1][methodId - methods[0].length]([firstInputId, secondInputId])
        
    } else {
        result = methods[0][methodId](firstInputId)
        

    }
    if(!result) {
        result = undefined
    } if(firstInputId === "" || secondInputId === ""){
        result = ""
    }
    document.getElementById(`${Object.keys(desc)[methodId]}-result`).innerHTML = result
}

let input;

for(let i = 0; i < Object.entries(desc).length; i++){
    document.getElementById("content").innerHTML +=
    `
        <p class="spaces"><a href="single.html?f=${Object.keys(desc)[i]}" target="_blank"><b>.${Object.keys(desc)[i]}(${Object.values(desc)[i]["inputType"]}):</b></a> ${Object.values(desc)[i]["content"]}.</p><br>
    `
    if(Object.values(desc)[i]["inputType"].includes(",")){
        document.getElementById("content").innerHTML +=
        `
            <input id="${Object.keys(desc)[i]}-input-1" placeholder="First string input"></input>
            <input id="${Object.keys(desc)[i]}-input-2" placeholder="Second string input"></input> <p class="spaces" id="${Object.keys(desc)[i]}-result"></p><br>
        `
        document.getElementById(`${Object.keys(desc)[i]}-input-1`)
        .addEventListener("input", (event) => {format(`${Object.keys(desc)[i]}-input-1`, `${Object.keys(desc)[i]}-input-2`, i)})
        document.getElementById(`${Object.keys(desc)[i]}-input-2`)
        .addEventListener("input", (event) => {format(`${Object.keys(desc)[i]}-input-1`, `${Object.keys(desc)[i]}-input-2`, i)})
    } else {
        document.getElementById("content").innerHTML +=
        `
            <input id="${Object.keys(desc)[i]}-input" placeholder="Input string"></input> <p id="${Object.keys(desc)[i]}-result"></p><br>
        `
    }
}

document.getElementById("info").innerHTML =
`<p>there were ${UPDATES} updates between Sep 29 and ${LAST_UPDATE}. Current version is ${VERSION}.<br><br>

<a style="color: #5555FF">⏹</a> - methods quantity<br>
<a style="color: #C7419A">⏹</a> - templates quantity<br></p><br>
<img src="img/updates_graph.png" alt="fix your internet connection bruh">`

for(let i = 0; i < Object.entries(desc).length; i++){
    try{
        document.getElementById(`${Object.keys(desc)[i]}-input`).addEventListener("input", (event) => {format(`${Object.keys(desc)[i]}-input`, undefined, i)})
    } catch {
        document.getElementById(`${Object.keys(desc)[i]}-input-1`).addEventListener("input", (event) => {format(`${Object.keys(desc)[i]}-input-1`, `${Object.keys(desc)[i]}-input-2`, i)})
        document.getElementById(`${Object.keys(desc)[i]}-input-2`).addEventListener("input", (event) => {format(`${Object.keys(desc)[i]}-input-1`, `${Object.keys(desc)[i]}-input-2`, i)})
    }   
}