const letterTranslate = {
    "А": "A",
    "Б": "B",
    "В": "W",
    "В": "V",
    "Г": "G",
    "Д": "D",
    "Е": "E",
    "Ё": "E",
    "Ж": "J",
    "З": "Z",
    "И": "I",
    "Й": "Y",
    "К": "K",
    "К": "Q",
    "Л": "L",
    "М": "M",
    "Н": "N",
    "О": "O",
    "П": "P",
    "Р": "R",
    "С": "S",
    "Т": "T",
    "У": "U",
    "Ф": "F",
    "Х": "H",
    "Ц": "C",
    "Ч": "CH",
    "Ш": "SH",
    "Щ": "SCH",
    "Ъ": "",
    "Ы": "I",
    "Ь": "",
    "Э": "E",
    "Ю": "Y",
    "Я": "YA",
}

const keyboardLayout = {
    "А": "F",
    "Б": ",",
    "В": "D",
    "Г": "U",
    "Д": "L",
    "Е": "T",
    "Ё": "`",
    "Ж": ";",
    "З": "P",
    "И": "B",
    "Й": "Q",
    "К": "R",
    "Л": "K",
    "М": "V",
    "Н": "Y",
    "О": "J",
    "П": "G",
    "Р": "H",
    "С": "C",
    "Т": "N",
    "У": "E",
    "Ф": "A",
    "Х": "[",
    "Ц": "W",
    "Ч": "X",
    "Ш": "I",
    "Щ": "O",
    "Ъ": "]",
    "Ы": "S",
    "Ь": "M",
    "Э": "'",
    "Ю": ".",
    "Я": "Z",
}

leedData = {
    "O": "0",
    "I": "1",
    "E": "3",
    "S": "5",
    "T": "7",
    "B": "8",
    "G": "9",
}

function replaceByObj(string){
    for(let i = 0; i < string.length; i++){
        if(reversedLetters[string[i]] !== undefined){
            string = string.replaceAll(string[i], reversedLetters[string[i]])
        } else if(reversedLetters[string[i].toUpperCase()] !== undefined){
            string = string.replaceAll(string[i], reversedLetters[string.toUpperCase()[i]].toLowerCase())
        }
    }
}

function lowerCase(string){
    return string.toLowerCase()
}

function upperCase(string){
    return string.toUpperCase()
}

function base64(string){
    try {
        return btoa(rus2eng(string))
    } catch(exception) {
        return `Error: ${exception}`
    }
}

function eng2rus(string){
    var reversedLetters = {} 
    Object.entries(letterTranslate).forEach((element) => {
        reversedLetters[element[1]] = element[0]
    })

    for(let i = 0; i < string.length; i++){
        if(reversedLetters[string[i]] !== undefined){
            string = string.replaceAll(string[i], reversedLetters[string[i]])
        } else if(reversedLetters[string[i].toUpperCase()] !== undefined){
            string = string.replaceAll(string[i], reversedLetters[string.toUpperCase()[i]].toLowerCase())
        }
    }

    return string;
}

function rus2eng(string){
    for(let i = 0; i < string.length; i++){
        if(letterTranslate[string[i]] !== undefined){
            string = string.replaceAll(string[i], letterTranslate[string[i]])
        } else if(letterTranslate[string[i].toUpperCase()] !== undefined){
            string = string.replaceAll(string[i], letterTranslate[string.toUpperCase()[i]].toLowerCase())
        }
    }
    return string;
}

function insertSpaces(string){
    var outputString = '';
    for(let i = 0; i < string.length; i++){
        outputString = `${outputString}${string[i]} `
    }
    return outputString;
}

function letterCount(string){
    var result = {};
    var output = '';

    for(let i = 0; i < string.length; i++){
        if(Object.keys(result).includes(string[i])) {
            result[string[i]] += 1;
        } else {
            result[string[i]] = 1;
        }
    }

    for(let i = 0; i < Object.keys(result).length; i++){
        output = `${output} ${Object.keys(result)[i]}: ${result[Object.keys(result)[i]]},`
    }

    return output;
}