const rus2engTranslate = {
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

const eng2rusTranslate = {
    "A": "А",
    "B": "Б",
    "C": "Ц",
    "D": "Д",
    "E": "Е",
    "F": "Ф",
    "G": "Г",
    "H": "Х",
    "I": "И",
    "J": "Ж",
    "K": "К",
    "L": "Л",
    "M": "М",
    "N": "Н",
    "O": "О",
    "P": "П",
    "Q": "К",
    "R": "Р",
    "S": "С",
    "T": "Т",
    "U": "У",
    "V": "В",
    "W": "В",
    "X": "КС",
    "Y": "Ю",
    "Z": "З",
}

const keyboardLayout = {
    " ": " ",
    
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

const leedTranslate = {
    "O": "0",
    "О": "0",
    "I": "1",
    "И": "1",
    "Z": "2",
    "E": "3",
    "Е": "3",
    "A": "4",
    "А": "4",
    "Ч": "4",
    "S": "5",
    "T": "7",
    "Т": "7",
    "B": "8",
    "В": "8",
    "G": "9",
    "Д": "9",
}

const brokenLettersData = {
    " ": " ",

    "А": "α",
    "Б": "6",
    "В": "Ⅰ⫖",
    "Г": "Γ",
    "Д": "Δ",
    "Е": "∑",
    "Ё": "∑",
    "Ж": "≻∣≺",
    "З": "∃",
    "И": "U",
    "Й": "ŭ",
    "К": "⇃≺",
    "Л": "⩘",
    "М": "ʍ",
    "Н": "Ⅰ−Ⅰ",
    "О": "○",
    "П": "∏",
    "Р": "₽",
    "С": "Ҁ",
    "Т": "⊤",
    "У": "ү",
    "Ф": "∳",
    "Х": "⨉",
    "Ц": "Ꚏ",
    "Ч": "ӵ",
    "Ш": "ɯ",
    "Щ": "ɯ.",
    "Ъ": "Ꙏ",
    "Ы": "Ꙑ",
    "Ь": "b",
    "Э": "Ӭ",
    "Ю": "Ꙕ",
    "Я": "Ԙ",
    
    "A": "α",
    "B": "Ⅰ⫖",
    "C": "Ҁ",
    "D": "ⅠↃ",
    "E": "∑",
    "F": "Ⅰ⇉",
    "G": "ɠ",
    "H": "Ⅰ−Ⅰ",
    "I": "Ⅰ",
    "K": "⇃≺",
    "L": "Ł",
    "M": "ʍ",
    "N": "Ñ",
    "O": "○",
    "P": "₽",
    "Q": "ʠ",
    "R": "Ř",
    "S": "⫓",
    "T": "⊤",
    "U": "∐",
    "V": "Ⅴ",
    "W": "Ŵ",
    "X": "⨉",
    "Y": "ʏ",
    "Z": "ｚ",
}

const rusByEngData = {
    " ": " ",

    "А": "A",
    "Б": "6",
    "В": "B",
    "Г": "r",
    "Д": "g",
    "Е": "E",
    "Ё": "E",
    "Ж": "}I{",
    "З": "3",
    "И": "u",
    "Й": "u",
    "К": "K",
    "Л": "JI",
    "М": "M",
    "Н": "H",
    "О": "O",
    "П": "n",
    "Р": "P",
    "С": "C",
    "Т": "T",
    "У": "Y",
    "Ф": "qp",
    "Х": "X",
    "Ц": "U,",
    "Ч": "4",
    "Ш": "w",
    "Щ": "w,",
    "Ъ": "b",
    "Ы": "bl",
    "Ь": "b",
    "Э": "3",
    "Ю": "I0",
    "Я": "9I",
}

const upsideDownData = {
    " ": " ",

    "A": "∀",
    "B": "q",
    "C": "Ɔ",
    "D": "p",
    "E": "Е",
    "F": "Ⅎ",
    "G": "פ",
    "H": "H",
    "I": "I",
    "J": "ſ",
    "K": "ʞ",
    "L": "˥",
    "M": "W",
    "N": "N",
    "O": "O",
    "P": "Ԁ",
    "Q": "Q",
    "R": "ɹ",
    "S": "S",
    "T": "┴",
    "U": "∩",
    "V": "Λ",
    "W": "M",
    "X": "X",
    "Y": "⅄",
    "Z": "Z",

    "a": "ɐ",
    "b": "q",
    "c": "ɔ",
    "d": "p",
    "e": "ǝ",
    "f": "ɟ",
    "g": "ƃ",
    "h": "ɥ",
    "i": "ᴉ",
    "j": "ɾ",
    "k": "ʞ",
    "l": "l",
    "m": "ɯ",
    "n": "u",
    "o": "o",
    "p": "d",
    "q": "b",
    "r": "ɹ",
    "s": "s",
    "t": "ʇ",
    "u": "n",
    "v": "ʌ",
    "w": "м",
    "x": "x",
    "y": "ʎ",
    "z": "z",

    "0": "0",
    "1": "Ɩ",
    "2": "ᄅ",
    "3": "Ɛ",
    "4": "ㄣ",
    "5": "ϛ",
    "6": "9",
    "7": "ㄥ",
    "8": "8",
    "9": "6",
}

const logosData = {
    " ": "https://tedmontgomery.com/tutorial/graphics/white.gif",

    "A": "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
    "B": "https://cdn.worldvectorlogo.com/logos/bitcoin.svg",
    "C": "https://cdn.worldvectorlogo.com/logos/c-1.svg",
    "D": "https://cdn.worldvectorlogo.com/logos/disqus-1.svg",
    "E": "https://cdn.worldvectorlogo.com/logos/internet-explorer-4.svg",
    "F": "https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg",
    "G": "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
    "H": "https://cdn.worldvectorlogo.com/logos/half-life-2-1.svg",
    "I": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1c%2Fc9%2F26%2F1cc92622eef44ae702803ab86800b696.png&f=1&nofb=1&ipt=29d11af185e917cd08182936f58bfceefbed15cf322a4e8febbffb044bb2502b",
    "J": "https://cdn.worldvectorlogo.com/logos/juventus-futebol-clube-da-barra-do-ribeiro-rs.svg",
    "K": "https://cdn.worldvectorlogo.com/logos/kotlin.svg", //https://cdn.worldvectorlogo.com/logos/kotlin-1.svg
    "L": "https://cdn.worldvectorlogo.com/logos/laravel-1.svg",
    "M": "https://cdn.worldvectorlogo.com/logos/mcdonalds-5.svg",
    "N": "https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg",
    "O": "https://cdn.worldvectorlogo.com/logos/opera-2.svg",
    "P": "https://cdn.worldvectorlogo.com/logos/pinterest-3.svg",
    "Q": "https://cdn.worldvectorlogo.com/logos/qfx.svg",
    "R": "https://cdn.worldvectorlogo.com/logos/rockstar-games.svg",
    "S": "https://cdn.worldvectorlogo.com/logos/skype-icon.svg",
    "T": "https://cdn.worldvectorlogo.com/logos/tumblr-icon-1.svg",
    "U": "https://cdn.worldvectorlogo.com/logos/unreal-1.svg",
    "V": "https://cdn.worldvectorlogo.com/logos/vimeo-icon-blue.svg",
    "W": "https://cdn.worldvectorlogo.com/logos/volkswagen-7.svg",
    "X": "https://cdn.worldvectorlogo.com/logos/x-2.svg",
    "Y": "https://cdn.worldvectorlogo.com/logos/yahoo-icon.svg",
    "Z": "https://raw.githubusercontent.com/ziglang/logo/4f97e7a9ebce12fa48511c0b6502b6190005bc0e/zig-mark.svg",

    "0": "https://cdn.worldvectorlogo.com/logos/opera-14.svg",
    "1": "https://tvepg.eu/img/russia/logo/pervyi_kanal.png",
    "2": "https://cdn.worldvectorlogo.com/logos/fox-2-1.svg",
    "3": "https://cdn.worldvectorlogo.com/logos/radio-3.svg",
    "4": "https://cdn.worldvectorlogo.com/logos/rete-4-2.svg",
    "5": "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    "6": "https://cdn.worldvectorlogo.com/logos/sbs-6-1.svg",
    "7": "https://cdn.worldvectorlogo.com/logos/7-eleven-logo-1.svg",
    "8": "https://cdn.worldvectorlogo.com/logos/ios-8-1.svg",
    "9": "https://cdn.worldvectorlogo.com/logos/9-tv.svg",
}
function replaceByObj(string, obj){
    let result = "";

    for(let i = 0; i < string.length; i++){
        if(obj[string[i]] !== undefined){
            result += obj[string[i]]
        } else if(obj[string[i].toUpperCase()] !== undefined){
            result += obj[string.toUpperCase()[i]].toLowerCase()
        } else {
            result += string[i]
        }
    }
    return result
}

function replaceWithRemove(string, obj){
    let result = "";

    for(let i = 0; i < string.length; i++){
        if(obj[string[i]] !== undefined){
            result += obj[string[i]]
        } else if(obj[string[i].toUpperCase()] !== undefined){
            result += obj[string.toUpperCase()[i]].toLowerCase()
        } else {
            result += string[i]
        }
    }
    return result
}

function lowerCase(string){
    return string.toLowerCase()
}

function upperCase(string){
    return string.toUpperCase()
}

function base64(string){
    let formatedString = "";

    for(let i = 0; i < string.length; i++){
        if(/^[\x00-\x7F]*$/.test(string[i])){
            formatedString = `${formatedString}${string[i]}`
        }
    }

    try {
        return btoa(rus2eng(formatedString))
    } catch(exception) {
        return `Error: ${exception}`
    }
}

function convertToNumberSys(string, num){
    let result = "";
    for (var i = 0; i < string.length; i++) {
         result += string[i].charCodeAt(0).toString(num) + " ";
    }
    return result;
}

function changeLayout(string){
    let result = "";
    let reversedData = {};

    for(let i = 0; i < Object.entries(keyboardLayout).length; i++){
        reversedData[Object.entries(keyboardLayout)[i][1]] = Object.entries(keyboardLayout)[i][0]
    }

    for(let i = 0; i < string.length; i++){
        if(keyboardLayout[string[i]] !== undefined){
            result += keyboardLayout[string[i]]
        } else if(keyboardLayout[string[i].toUpperCase()] !== undefined){
            result += keyboardLayout[string[i].toUpperCase()].toLowerCase()
        } else if(reversedData[string[i]] !== undefined){
            result += reversedData[string[i]]
        } else if(reversedData[string[i].toUpperCase()] !== undefined){
            result += reversedData[string[i].toUpperCase()].toLowerCase()
        } else {
            result += string[i]
        }
    }
    return result
}

function logos(string){
    result = "";
    string = rus2eng(string.toUpperCase());

    for(let i = 0; i < string.length; i++){
        if(logosData[string[i]] !== undefined){
            result += `<img src="${logosData[string[i]]}" width="50" height="50" alt="${string[i]}" title="${string[i]}" style="background-color: #ffffff">`
        }
    }
    return result
}

function toBin(string) {
    return convertToNumberSys(string, 2);
}

function toOct(string) {
    return convertToNumberSys(string, 8);
}

function toDec(string) {
    return convertToNumberSys(string, 10);
}

function toHex(string) {
    return convertToNumberSys(string, 16);
}

function to36(string) {
    return convertToNumberSys(string, 36);
}

function eng2rus(string){
    return replaceByObj(string, eng2rusTranslate);
}

function rus2eng(string){
    return replaceByObj(string, rus2engTranslate);
}

function leed(string){
    return replaceByObj(string, leedTranslate);
}

function toBroken(string){
    return replaceByObj(string, brokenLettersData);
}

function rusByEng(string){
    return replaceByObj(string, rusByEngData);
}

function upsideDown(string){
    return replaceByObj(reverse(string), upsideDownData);
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

function reverse(string){
    let result = '';

    for(let i = string.length - 1; i >= 0; i--){
        result += string[i]
    }

    return result;
}

function reverseWords(string){
    let result = '';
    string = string.split(" ")

    for(let i = string.length - 1; i >= 0; i--){
        result += string[i] + " "
    }

    return result;
}

function sortSymbols(string){
    return string.split("").sort().join("")
}

function sortWords(string){
    return string.split(" ").sort().join(" ")
}

function oddSymbols(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        (i + 1) % 2 == 0 ? result += string[i] : false
    }

    return result;
}

function squareSymbols(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        Math.sqrt(i + 1) == Math.floor(Math.sqrt(i + 1)) ? result += string[i] : false
    }

    return result;
}

function primeSymbols(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        if(i % 10 == 1 || 2){}
        for(let j = 0; j < i;){}

    }

    return result;
}

function removeDublicates(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        if(!result.includes(string[i])) {
            result += string[i]
        }
    }

    return result;
}

// 2 strings

function sortStrings(strings){
    return strings.sort((string1, string2) => {return string1.length - string2.length})
}

function merge(strings){
    let result = "";
    strings = sortStrings(strings)

    for(let i = 0; i < strings[1].length; i++){
        // result += `<a style="color: red">${strings[1][i]}</a>`
        result += strings[1][i]
        if(i < strings[0].length){
            // result += `<a style="color: green">${strings[0][i]}</a>`
            result += strings[0][i]
        }
    }

    return result;
}

function average(strings){
    let result = "";
    strings = sortStrings(strings)

    for(let i = 0; i < strings[1].length; i++){
        // result += `<a style="color: red">${strings[1][i]}</a>`
        result += strings[1][i]
        if(i < strings[0].length){
            // result += `<a style="color: green">${strings[0][i]}</a>`
            result += strings[0][i]
        }
    }

    return result;
}