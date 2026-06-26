const VERSION = "3.1"
const LAST_UPDATE = "Apr 30"
const UPDATES = 20

const urlParams = new URLSearchParams(window.location.search);
const functionName = urlParams.get('f');
changeTitle(functionName)

const functionProperties = desc[functionName]
let argsLength;
let f;

functionProperties["inputType"].includes(",") == true ? argsLength = 1 : argsLength = 0

if(argsLength == 1) 
    f = methods[argsLength][Object.keys(desc).indexOf(functionName) - methods[0].length]
else
    f = methods[argsLength][Object.keys(desc).indexOf(functionName)]

document.getElementById("title").innerHTML = `<h1>.${functionName}(${functionProperties['inputType']})</h1><p>${functionProperties['content']}</p>`

console.log(argsLength)
console.log(functionProperties)



function display(){
    const result = f(document.getElementById("input").value)
    document.getElementById("result").innerHTML = `<b>Result (${result.length} symbols):</b><br><p class="spaces">${result.toString().replace('\n', '<br>')}</p>`
    return result
}

function displayTwoStrings(){
    const result = f([document.getElementById("input-1").value, document.getElementById("input-2").value])
    document.getElementById("result").innerHTML = `<b>Result (${result.length} symbols):</b><br><p class="spaces">${result.toString().replace('\n', '<br>')}</p>`
    return result
}

if(argsLength == 0){
    document.getElementById("content").innerHTML = `    
    <textarea id="input" placeholder="Input"></textarea><br>
    <div id="result"></div>
    `
    document.getElementById("input").addEventListener("input", (event) => {display()})

} else {
    document.getElementById("content").innerHTML = `    
    <textarea id="input-1" placeholder="First input"></textarea>
    <textarea id="input-2" placeholder="Second input"></textarea><br>
    <div id="result"></div>
    `

    document.getElementById("input-1").addEventListener("input", (event) => {displayTwoStrings()})
    document.getElementById("input-2").addEventListener("input", (event) => {displayTwoStrings()})
}
