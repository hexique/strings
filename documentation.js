changeTitle("documentation")

const VERSION = "3.0"
const LAST_UPDATE = "Nov 11"
const UPDATES = 19

const data = {
    properties: {'inputType': 'float', 'content':
    'displays the properties of a number. (is prime, is fibonacci, is palindrome, is square, is cubic, is perfect, is power of 2, is odd, is natural, is positive and is integer)'},
    sort: {'inputType': 'seq', 'content':
    'sorts a sequence of numbers in ascending order'},
    reverseSeq: {'inputType': 'seq', 'content':
    'returns a sequence of numbers in reverse order'},
    sum: {'inputType': 'seq', 'content':
    'returns a sum of sequence of numbers'},
    fromEngIDs: {'inputType': 'seq', 'content':
    'replaces numbers with English letters with the corresponding ordinal number (1 = a, 2 = b, 3 = c, etc)'},
    fromRusIDs: {'inputType': 'seq', 'content':
    'the same thing, only with Russian letters'},
    minMax: {'inputType': 'seq', 'content':
    'returns the minimum and maximum numbers in the sequence'},
    average: {'inputType': 'seq', 'content':
    'sum(seq) / length'},
    median: {'inputType': 'seq', 'content':
    '<a href="https://en.wikipedia.org/wiki/Median" target="_blank">en.wikipedia.org/wiki/Median</a>'},
    square: {'inputType': 'float', 'content':
    'returns the square of a number'},
    sqrt: {'inputType': 'float', 'content':
    'returns the square root of a number'},
    powOf2: {'inputType': 'float', 'content':
    '2 to the power of n. (we will refer to the incoming number as n)'},
    sin: {'inputType': 'float', 'content':
    'sine of n'},
    cos: {'inputType': 'float', 'content':
    'cosine of n'},
    tan: {'inputType': 'float', 'content':
    'tangent of n'},
    divisiors: {'inputType': 'int', 'content':
    'outputs all numbers that n is divisible by (except n itself) and their sum'},
    factorial: {'inputType': 'int', 'content':
    '1 * 2 * 3 ... * n'},
    seqSum: {'inputType': 'int', 'content':
    '1 + 2 + 3 ... + n'},
    collatz: {'inputType': 'int', 'content':
    'if the number is even, multiply it by two; otherwise, multiply it by 3 and add 1. Repeat this operation until it loops. (<a href="https://en.wikipedia.org/wiki/Collatz_conjecture", target="_blank">wiki</a>)'},
    digitSum: {'inputType': 'float', 'content':
    'adds up all the digits of a number'},
    digitMult: {'inputType': 'float', 'content':
    'multiplies all digits of a number'},
    nearestPrime: {'inputType': 'float', 'content':
    'the closest number without divisors to n'},
    nearestFibonacci: {'inputType': 'float', 'content':
    'the closest number in the Fibonacci sequence to n'},
    nearestSquare: {'inputType': 'float', 'content':
    'the nearest square number to n'},
    round: {'inputType': 'float', 'content':
    'rounds the number'},
    unicode: {'inputType': 'int', 'content':
    'displays the character at position n'},
    toRoman: {'inputType': 'int', 'content':
    'converts a number into the Roman numeral system'},
    timestamp: {'inputType': 'int', 'content':
    'date for which n seconds have passed since 1970 (unix)'},
    decToBin: {'inputType': 'int', 'content':
    'converts a number from the decimal number system to the binary number system'},
    decToHex: {'inputType': 'int', 'content':
    'converts a number from the decimal system to the hexadecimal system'},
    decTo36: {'inputType': 'int', 'content':
    'converts a number from the decimal system to the base-36 system'},
    fromBroken: {'inputType': 'str', 'content':
    'translates this ł○ř∑ʍ ⅰ₽⫓ʊʍ into normal text'},
    fromJap: {'inputType': 'str', 'content':
    'transcription of Japanese characters'},
    lowerCase: {'inputType': 'str', 'content':
    'converts text to lowercase (Text -> text)'},
    upperCase: {'inputType': 'str', 'content':
    'converts text to uppercase (Text -> TEXT)'},
    title: {'inputType': 'str', 'content':
    'returns text with all words capitalized (lorem ipsum dolor -> Lorem Ipsum Dolor)'},
    invertCase: {'inputType': 'str', 'content':
    'changes the case in the text to the opposite (Text -> tEXT)'},
    rus2eng: {'inputType': 'str', 'content':
    'returns Russian text written in English letters as a transcription (текст -> tekst)'},
    eng2rus: {'inputType': 'str', 'content':
    'returns the English text written in Russian letters as a transcription (text -> текст)'},
    rusByEng: {'inputType': 'str', 'content':
    'returns Russian text written in English letters (текст -> tekct)'},
    toJap: {'inputType': 'str', 'content':
    'returns text written in Japanese characters as a transcription'},
    changeLayout: {'inputType': 'str', 'content':
    'returns text written in a different keyboard layout (ntrcn -> текст)'},
    lettersCount: {'inputType': 'str', 'content':
    'returns the number of each letter in the text'},
    wordsCount: {'inputType': 'str', 'content':
    'returns the number of each word in the text'},
    emojis: {'inputType': 'str', 'content':
    'inserts a random emoji after each word'},
    toBroken: {'inputType': 'str', 'content':
    'replaces Unicode letters with similar-looking characters (lorem ipsum -> ł○ř∑ʍ ⅰ₽⫓ʊʍ)'},
    leed: {'inputType': 'str', 'content':
    'replaces letters with numbers that resemble them (i - 1, e - 3, a - 4, s - 5, etc.)'},
    alphabetID: {'inputType': 'str', 'content':
    'replaces letters with their ordinal number in the alphabet'},
    toMorse: {'inputType': 'str', 'content':
    'converts text into Morse code'},
    reverse: {'inputType': 'str', 'content':
    'returns text written backwards'},
    reverseWords: {'inputType': 'str', 'content':
    'returns text by reversing all words in reverse order'},
    upsideDown: {'inputType': 'str', 'content':
    'returns text written upside down (ɯnsdᴉ ɯǝɹol)'},
    sortSymbols: {'inputType': 'str', 'content':
    'sorts characters in text alphabetically'},
    sortWords: {'inputType': 'str', 'content':
    'sorts words in text alphabetically'},
    sortByLength: {'inputType': 'str', 'content':
    'sorts characters in text by length'},
    oddSymbols: {'inputType': 'str', 'content':
    'removes all characters with an even ordinal number from the text'},
    squareSymbols: {'inputType': 'str', 'content':
    'removes all characters with a square ordinal number from the text'},
    primeSymbols: {'inputType': 'str', 'content':
    'removes all characters with a sequential number without separators from the text'},
    removeDublicates: {'inputType': 'str', 'content':
    'removes all repeated characters from the text'},
    leaveDublicates: {'inputType': 'str', 'content':
    'leaves only repeated characters in the text'},
    shuffle: {'inputType': 'str', 'content':
    'shuffles characters in random order'},
    shuffleWords: {'inputType': 'str', 'content':
    'shuffles words in random order'},
    shiftBy1: {'inputType': 'str', 'content':
    'adds to Unicode characters in text 1'},
    shiftByMinus1: {'inputType': 'str', 'content':
    'removes Unicode characters from text 1'},
    shiftBy22: {'inputType': 'str', 'content':
    'adds to Unicode characters in text 22'},
    base64: {'inputType': 'str', 'content':
    'converts text to base64'},
    fromBase64: {'inputType': 'str', 'content':
    'decodes text from base64'},
    toBin: {'inputType': 'str', 'content':
    'converts text into binary code'},
    toDec: {'inputType': 'str', 'content':
    'converts text into a sequence of Unicode values'},
    toHex: {'inputType': 'str', 'content':
    'converts text into hexadecimal code'},
    to36: {'inputType': 'str', 'content':
    'converts text into base-36 code'},
    toNumber: {'inputType': 'str', 'content':
    'converts text into hexadecimal code, concatenates the sequence into a single number, and converts it to the decimal number system'},
    hash: {'inputType': 'str', 'content':
    '<a href="https://en.wikipedia.org/wiki/Hash_function">https://en.wikipedia.org/wiki/Hash_function</a>'},
    fromBin: {'inputType': 'str', 'content':
    'converts a sequence of numbers from the binary number system into text'},
    fromHex: {'inputType': 'str', 'content':
    'converts a sequence of numbers from the hexadecimal number system into text'},
    from36: {'inputType': 'str', 'content':
    'converts a sequence of numbers from the base-36 number system into text'},
    abbreviation: {'inputType': 'str', 'content':
    'converts text into an abbreviation (too long didn\'t read -> T.L.D.R.)'},
    typo: {'inputType': 'str', 'content':
    'writes text wiht typos (lorem ipsum -> lorwm jpsum)'},
    strikethrough: {'inputType': 'str', 'content':
    'crosses out text'},
    bold: {'inputType': 'str', 'content':
    'writes text in bold Unicode characters (Mathematical Sans-Serif Bold)'},
    fraktur: {'inputType': 'str', 'content':
    'writes text using old medieval Unicode characters (Mathematical Bold Fraktur)'},
    replaceWithLength: {'inputType': 'str', 'content':
    'replaces words in the text with their length; when hovering over a number, the original word is displayed'},
    length: {'inputType': 'str', 'content':
    'returns the number of characters, words, and sentences'},
    periodicElements: {'inputType': 'str', 'content':
    'identifies all chemical elements and calculates their sum (refer to the password game)'},
    periodicElement: {'inputType': 'str/int', 'content':
    'displays the chemical element corresponding to the entered number or symbol'},
    logos: {'inputType': 'str', 'content':
    'returns text with letters replaced by logos'},
    dancingLetters: {'inputType': 'str', 'content':
    'returns letters in text with old GIFs of dancing letters'},

    pow: {'inputType': 'num1, num2', 'content':
    'x to the power of y (x - first number, y - second number)'},
    proportion: {'inputType': 'num1, num2', 'content':
    'ratio of x to y'},
    randint: {'inputType': 'num1, num2', 'content':
    'a random number between x and y'},
    generateFibonacci: {'inputType': 'num1, num2', 'content':
    'returns a Fibonacci sequence of length 50 with initial values x and y'},
    split: {'inputType': 'str, num', 'content':
    'inserts spaces in the text so that the length of all words is equal to n ("lorem ipsum dolor sit amet", 4 -> lore mips umdo lors itam et)'},
    filterWordsLength: {'inputType': 'str, num', 'content':
    'leaves only words with length n'},
    filter: {'inputType': 'str1, str2', 'content':
    'removes all str2 from str1 ("lorem ipsum dolor sit amet", "lo" -> rem ipsum dor sit amet)'},
    symbolFilter: {'inputType': 'str1, str2', 'content':
    'removes all characters from str2 from str1 ("lorem ipsum", "oei" => lrm psum)'},
    negativeSymbolFilter: {'inputType': 'str1, str2', 'content':
    'leaves only characters from str2 in str1 ("lorem ipsum", "mosei" => oemism)'},
    merge: {'inputType': 'str1, str2', 'content':
    'writes characters from str1 and str2 in turn, saving all characters ("lorem", "ipsum" -> ilposruemm)'},
    mergeReplace: {'inputType': 'str1, str2', 'content':
    'writes characters from str1 and str2 in turn ("lorem", "ipsum" -> iosem)'},
    averageString: {'inputType': 'str1, str2', 'content':
    'calculates the average string between str1 and str2 by adding the Unicode character numbers and dividing by 2'},
    insert: {'inputType': 'str1, str2', 'content':
    'inserts str2 after each character in str1 ("lorem", "-" -> l-o-r-e-m)'},
}

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
    document.getElementById(`${Object.keys(data)[methodId]}-result`).innerHTML = result
}

let input;

for(let i = 0; i < Object.entries(data).length; i++){
    document.getElementById("content").innerHTML +=
    `
        <p><b>.${Object.keys(data)[i]}(${Object.values(data)[i]["inputType"]}):</b> ${Object.values(data)[i]["content"]}.</p><br>
    `
    if(Object.values(data)[i]["inputType"].includes(",")){
        document.getElementById("content").innerHTML +=
        `
            <input id="${Object.keys(data)[i]}-input-1" placeholder="First string input"></input>
            <input id="${Object.keys(data)[i]}-input-2" placeholder="First string input"></input> <p id="${Object.keys(data)[i]}-result"></p><br>
        `
        document.getElementById(`${Object.keys(data)[i]}-input-1`)
        .addEventListener("input", (event) => {format(`${Object.keys(data)[i]}-input-1`, `${Object.keys(data)[i]}-input-2`, i)})
        document.getElementById(`${Object.keys(data)[i]}-input-2`)
        .addEventListener("input", (event) => {format(`${Object.keys(data)[i]}-input-1`, `${Object.keys(data)[i]}-input-2`, i)})
    } else {
        document.getElementById("content").innerHTML +=
        `
            <input id="${Object.keys(data)[i]}-input" placeholder="Input string"></input> <p id="${Object.keys(data)[i]}-result"></p><br>
        `
    }
}

document.getElementById("info").innerHTML =
`<p>there were ${UPDATES} updates between Sep 29 and ${LAST_UPDATE}. Current version is ${VERSION}.<br><br>

<a style="color: #5555FF">⏹</a> - methods quantity<br>
<a style="color: #C7419A">⏹</a> - templates quantity<br></p><br>
<img src="img/updates_graph.png" alt="fix your internet connection bruh">`

for(let i = 0; i < Object.entries(data).length; i++){
    try{
        document.getElementById(`${Object.keys(data)[i]}-input`).addEventListener("input", (event) => {format(`${Object.keys(data)[i]}-input`, undefined, i)})
    } catch {
        document.getElementById(`${Object.keys(data)[i]}-input-1`).addEventListener("input", (event) => {format(`${Object.keys(data)[i]}-input-1`, `${Object.keys(data)[i]}-input-2`, i)})
        document.getElementById(`${Object.keys(data)[i]}-input-2`).addEventListener("input", (event) => {format(`${Object.keys(data)[i]}-input-1`, `${Object.keys(data)[i]}-input-2`, i)})
    }   
}