const methods = [lowerCase, upperCase, insertSpaces, rus2eng, eng2rus, rusByEng, 
    base64, letterCount, changeLayout, toBroken,
    reverse, reverseWords, upsideDown,
    sortSymbols, sortWords,
    oddSymbols, squareSymbols, removeDublicates,
    leed, toBin, toDec, toHex, to36,
    logos
    ]

while(true){
    document.title = methods[Math.floor(Math.random() * methods.length)]("strings")
    if(document.title !== "strings"){
        break;
    }
}
function formatString(){
    const string = [document.getElementById("string-input-1").value, document.getElementById("string-input-2").value]
    document.querySelector("div").innerHTML = ''

    for(let i = 0; i < methods.length; i++){
        document.querySelector("div").innerHTML += `
        <br><h3>.${methods[i].name}()</h3><p>${methods[i](string[0])}</p>`
        // console.log(methods[i](string))
    }
    document.querySelector("div").innerHTML += `
    <input id="string-input-2" placeholder="Second string input"></input><br>
    <button onclick="formatString()">Submit</button>`




}