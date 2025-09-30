const methods = [[lowerCase, upperCase, insertSpaces, rus2eng, eng2rus, rusByEng, 
    base64, letterCount, changeLayout, toBroken,
    reverse, reverseWords, upsideDown,
    sortSymbols, sortWords,
    oddSymbols, squareSymbols, removeDublicates,
    leed, toBin, toDec, toHex, to36,
    logos], [
    merge
    ]]

while(true){
    document.title = methods[0][Math.floor(Math.random() * methods[0].length)]("strings")
    if(document.title !== "strings"){
        break;
    }
}
function formatString(){
    const string = [document.getElementById("string-input-1").value, document.getElementById("string-input-2")]
    document.querySelector("div").innerHTML = ''

    for(let i = 0; i < methods[0].length; i++){
        document.querySelector("div").innerHTML += `
        <br><h3>.${methods[0][i].name}()</h3><p>${methods[0][i](string[0])}</p>`
        // console.log(methods[0][i](string))
    }
    document.querySelector("div").innerHTML += `
    <input id="string-input-2" placeholder="Second string input"></input><br>
    <button onclick="formatString()">Submit</button>`

    if(string[1] !== null){
        for(let i = 0; i < methods[1].length; i++){
            console.log(string[1].value)
            document.querySelector("div").innerHTML += `
            <br><h3>.${methods[1][i].name}()</h3><p>${methods[1][i]([string[0], string[1].value])}</p>`
        }

        // console.log(document.getElementById("string-input-2").value, string[1].value)
        document.getElementById("string-input-2").value = string[1].value
        
    }
}