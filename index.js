const methods = [[lowerCase, upperCase, title, // case
    rus2eng, eng2rus, rusByEng, toJap, changeLayout, // lang
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
    document.getElementById("string-output-1").innerHTML = ''

    for(let i = 0; i < methods[0].length; i++){
        if(methods[0][i](string[0]) !== string[0] && string[0].length !== 0 && String(methods[0][i](string[0])).replaceAll(" ", "").length !== 0){
            document.getElementById("string-output-1").innerHTML += `
            <br><h3>.${methods[0][i].name}()</h3><p>${methods[0][i](string[0])}</p>`
        }

        // console.log(methods[0][i](string))
    }
    if(string[0] !== ""){
        document.getElementById("string-input-container-2").innerHTML = `
        <input id="string-input-2" placeholder="Second string input"></input><br>
        <button onclick="formatSecondString()">Submit</button>`

        document.getElementById("string-input-2").addEventListener("input", (event) => {formatSecondString()})
    }
}

function formatSecondString(){
    console.log("formated")

    const strings = [document.getElementById("string-input-1").value, document.getElementById("string-input-2")]
    document.getElementById("string-output-2").innerHTML = "";

    if(strings[1] !== null){
        if(strings[1].value !== ""){
            for(let i = 0; i < methods[1].length; i++){
                document.getElementById("string-output-2").innerHTML += 
`<br><h3>.${methods[1][i].name}()</h3><p>${methods[1][i]([strings[0], strings[1].value])}</p>`
            }

            // console.log(document.getElementById("string-input-2").value, string[1].value)
            document.getElementById("string-input-2").value = strings[1].value
        } // dodelat
    }
}

document.getElementById("string-input-1").addEventListener("input", (event) => {formatString()})
