console.log(methods[0].length + methods[1].length)

changeTitle("strings")

function formatString(){
    const string = [document.getElementById("string-input-1").value, document.getElementById("string-input-2")]
    document.getElementById("string-output-1").innerHTML = ''

    for(let i = 0; i < methods[0].length; i++){
        if(String(methods[0][i](string[0])).replaceAll(" ", "") !== String(string[0]).replaceAll(" ", "") 
            && string[0].length !== 0 
            && String(methods[0][i](string[0])).replaceAll(" ", "").length !== 0
            && methods[0][i](string[0]) != undefined){
            document.getElementById("string-output-1").innerHTML += `
            <br><h3>.${methods[0][i].name}()</h3><p>${methods[0][i](string[0])}</p>`
        }

        // console.log(methods[0][i](string))
    }
    if(string[0] !== "" && !isNaN(string[1])){

        document.getElementById("string-input-container-2").innerHTML = `
        <input id="string-input-2" placeholder="Second string input"></input><br>`

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
                if(methods[1][i]([strings[0], strings[1].value]) !== undefined
                   && methods[1][i]([strings[0], strings[1].value]) !== null)
                document.getElementById("string-output-2").innerHTML += 
`<br><h3>.${methods[1][i].name}()</h3><p>${methods[1][i]([strings[0], strings[1].value])}</p>`
            }

            // console.log(document.getElementById("string-input-2").value, string[1].value)
            document.getElementById("string-input-2").value = strings[1].value
        } // dodelat
    }
}

document.getElementById("string-input-1").addEventListener("input", (event) => {formatString()})
