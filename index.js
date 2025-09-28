const methods = [lowerCase, upperCase, insertSpaces, rus2eng, eng2rus, base64, letterCount]

while(true){
    document.title = methods[Math.floor(Math.random() * methods.length)]("strings")
    if(document.title !== "strings"){
        break;
    }
}
function formatFirstString(){
    const string = document.getElementById("string-input-1").value
    document.querySelector("div").innerHTML = ''

    for(let i = 0; i < methods.length; i++){
        document.querySelector("div").innerHTML += `
        <br><h3>.${methods[i].name}()</h3><p>${methods[i](string)}</p>`
        console.log(methods[i](string))
    }
}