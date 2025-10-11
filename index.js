const methods = [[lowerCase, upperCase, title, // case
    rus2eng, eng2rus, rusByEng, changeLayout, // lang
    letterCount, toBroken, leed, alphabetID, // replace
    reverse, reverseWords, upsideDown, // reverse
    sortSymbols, sortWords, sortByLength, // sort
    oddSymbols, squareSymbols, removeDublicates, // remove
    shiftBy1, shiftByMinus1, shiftBy22, // shift
    base64, toBin, toDec, toHex, to36, toNumber, hash, // convert 
    abbreviation, typo, strikethrough, // idk
    length, // lengths
    logos], [ // images
    filter, negativeFilter, // filter
    merge, mergeReplace, // merge
    average, insert // other
    ]]

console.log(methods[0].length + methods[1].length)

while(document.title.length < 7 || document.title.length > 14){
    document.title = methods[0][Math.floor(Math.random() * methods[0].length)]("strings")
}

function formatString(){
    const string = [document.getElementById("string-input-1").value, document.getElementById("string-input-2")]
    document.querySelector("div").innerHTML = ''

    for(let i = 0; i < methods[0].length; i++){
        if(methods[0][i](string[0]) !== string[0] && string[0].length !== 0 && String(methods[0][i](string[0])).replaceAll(" ", "").length !== 0){
            document.querySelector("div").innerHTML += `
            <br><h3>.${methods[0][i].name}()</h3><p>${methods[0][i](string[0])}</p>`
        }

        // console.log(methods[0][i](string))
    }
    if(string[0] !== ""){
        document.querySelector("div").innerHTML += `
        <input id="string-input-2" placeholder="Second string input"></input><br>
        <button onclick="formatString()">Submit</button>`
    }
    if(string[1] !== null){
        if(string[1].value !== ""){
            for(let i = 0; i < methods[1].length; i++){
                console.log(string[1].value)
                document.querySelector("div").innerHTML += `
                <br><h3>.${methods[1][i].name}()</h3><p>${methods[1][i]([string[0], string[1].value])}</p>`
            }

            // console.log(document.getElementById("string-input-2").value, string[1].value)
            document.getElementById("string-input-2").value = string[1].value
        }
    }
}

function formatSecondString(){
    const strings = [document.getElementById("string-input-1").value, document.getElementById("string-input-2")]
}

addEventListener("input", (event) => {formatString()})