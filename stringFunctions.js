const methods = [[
    properties, // properties
    sort, reverseSeq, sum, // lists
    fromEngIDs, fromRusIDs, // from

    minMax, average, median, // num
    square, sqrt, powOf2, // powers
    sin, cos, tan, // trigonometry
    divisiors, factorial, seqSum, collatz, // sequences
    digitSum, digitMult, // digits
    nearestPrime, nearestFibonacci, nearestSquare, // nearest
    round, // floats
    unicode, toRoman, timestamp, // convert
    decToBin, decToHex, decTo36, // to number systems

    fromBroken, fromJap, // from
    lowerCase, upperCase, title, invertCase, // case
    rus2eng, eng2rus, rusByEng, toJap, changeLayout, // lang
    lettersCount, wordsCount, // count
    emojis, toBroken, leed, alphabetID, toMorse, // replace
    reverse, reverseWords, upsideDown, // reverse
    sortSymbols, sortWords, sortByLength, // sort
    oddSymbols, squareSymbols, primeSymbols, // remove
    removeDublicates, leaveDublicates, // dublicates
    shuffle, shuffleWords, // shuffle
    shiftBy1, shiftByMinus1, shiftBy22, // shift
    base64, fromBase64, // base64 
    toBin, toDec, toHex, to36, toNumber, hash, // convert 
    fromBin, fromHex, from36, // from number systems
    abbreviation, typo, // idk
    strikethrough, bold, fraktur, // fonts
    replaceWithLength, length, // lengths
    periodicElements, // chemistry
    periodicElement, logos, dancingLetters], [ // images
    pow, proportion, randint, generateFibonacci, // nums
    split, filterWordsLength, // string + num

    filter, symbolFilter, negativeSymbolFilter, // filters
    merge, mergeReplace, // merge
    averageString, // avg
    insert, // insert
]]

function changeTitle(string){
    while(document.title.length < 7 || document.title.length > 14 || String(document.title) == "undefined"){
        document.title = methods[0][Math.floor(Math.random() * methods[0].length)](string)
    }
}

const letters = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
]

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

    "A": "α",
    "B": "ƅ",
    "C": "Ҁ",
    "D": "ⅠↃ",
    "E": "∑",
    "F": "Ϝ",
    "G": "ɠ",
    "H": "λ",
    "I": "ⅰ",
    "K": "⇃≺",
    "L": "Ł",
    "M": "ʍ",
    "N": "η",
    "O": "○",
    "P": "₽",
    "Q": "ʠ",
    "R": "Ř",
    "S": "⫓",
    "T": "⊤",
    "U": "ʊ",
    "V": "Ⅴ",
    "W": "Ŵ",
    "X": "⨉",
    "Y": "ʏ",
    "Z": "ｚ",

    "А": "α",
    "Б": "ƃ",
    "В": "Ⅰ⫖",
    "Г": "Γ",
    "Д": "Δ",
    "Е": "∑",
    "Ё": "∑",
    "Ж": "≻∣≺",
    "З": "∃",
    "И": "υ",
    "Й": "ŭ",
    "К": "⇃≺",
    "Л": "⩘",
    "М": "ʍ",
    "Н": "Ⅰ−Ⅰ",
    "О": "○",
    "П": "π",
    "Р": "₽",
    "С": "Ҁ",
    "Т": "⊤",
    "У": "ү",
    "Ф": "∳",
    "Х": "⨉",
    "Ц": "Ꚏ",
    "Ч": "ӵ",
    "Ш": "ɯ",
    "Щ": "ɰ",
    "Ъ": "Ꙏ",
    "Ы": "Ꙑ",
    "Ь": "ɓ",
    "Э": "Ӭ",
    "Ю": "Ꙕ",
    "Я": "Ԙ",
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

const alphabetIdData = [
    ["А", "A"], ["Б", "B"], ["В", "C"], ["Г", "D"], ["Д", "E"], ["Е", "F"], ["Ё", "G"], ["Ж", "H"], ["З", "I"], ["И", "J"], ["Й", "K"], ["К", "L"],
    ["Л", "M"], ["М", "N"], ["Н", "O"], ["О", "P"], ["П", "Q"], ["Р", "R"], ["С", "S"], ["Т", "T"], ["У", "U"], ["Ф", "V"], ["Х", "W"], ["Ц", "X"],
    ["Ш", "Y"], ["Щ", "Z"], ["Ъ", ""], ["Ы", ""], ["Ь", ""], ["Э", ""], ["Ю", ""], ["Я", ""]
]

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

const typoData = {
    "A": "S",
    "B": "B",
    "C": "C",
    "D": "E",
    "E": "W",
    "F": "F",
    "G": "G",
    "H": "J",
    "I": "J",
    "J": "J",
    "K": "H",
    "L": "'",
    "M": ",",
    "O": "P",
    "P": "[",
    "Q": "Q",
    "R": "E",
    "S": "D",
    "T": "Y",
    "Y": "", 

    "А": "А",
    "Б": "Ь",
    "В": "А",
    "Г": "Н",
    "Д": "Л",
    "Е": "Н",
    "Ё": "Ё",
    "Ж": "Э",
    "З": "Щ",
    "И": "М",
    "Й": "Й",
    "К": "К",
    "Л": "Д",
    "М": "И",
    "Н": "Г",
    "О": "Л",
    "П": "П",
    "Р": "П",
    "С": "Ч",
    "Т": "Ь",
    "У": "Ц",
    "Ф": "Ы",
    "Х": "Ъ",
    "Ц": "Ц",
    "Ч": "Я",
    "Ш": "Г",
    "Щ": "З",
    "Ъ": "Ъ",
    "Ы": "Ф",
    "Ь": "Б",
    "Э": "Ж",
    "Ю": "Б",
    "Я": "Ч",
}

const axiusLinkData = {

}

const japaneseData = {
    "kya": "きゃ",
    "kyu": "きゅ",
    "kyo": "きょ",
    "shi": "し",
    "sha": "しゃ",
    "shu": "しゅ",
    "sho": "しょ",
    "sya": "シャ",
    "syu": "シュ",
    "chi": "ち",
    "tsu": "つ",
    "tya": "ちゃ",
    "tyu": "ちゅ",
    "tyo": "ちょ",
    "nya": "にゃ",
    "nyu": "にゅ",
    "nyo": "にょ",
    "hya": "ひゃ",
    "hyu": "ひゅ",
    "hyo": "ひょ",
    "mya": "みゃ",
    "myu": "みゅ",
    "myo": "みょ",
    "rya": "りゃ",
    "ryu": "りゅ",
    "ryo": "りょ",
    "wya": "ヰャ",
    "wyu": "ヰュ",
    "wyo": "ヰョ",
    "iya": "ゐゃ",
    "iyu": "ゐゅ",
    "iyo": "ゐょ",
    "gya": "ぎゃ",
    "gyu": "ぎゅ",
    "gyo": "ぎょ",
    "zya": "ジャ",
    "zyu": "ジュ",
    "dya": "ヂャ",
    "dyu": "ヂュ",
    "dyo": "ヂョ",
    "bya": "びゃ",
    "byu": "びゅ",
    "byo": "びょ",
    "pya": "ぴゃ",
    "pyu": "ぴゅ",
    "pyo": "ぴょ",
    "ka": "か",
    "ki": "き",
    "ku": "く",
    "ke": "け",
    "ko": "こ",
    "sa": "さ",
    "si": "シ",
    "su": "す",
    "se": "せ",
    "so": "そ",
    "ta": "た",
    "ti": "チ",
    "tu": "ツ",
    "te": "て",
    "to": "と",
    "na": "な",
    "ni": "に",
    "nu": "ぬ",
    "ne": "ね",
    "no": "の",
    "ha": "は",
    "hi": "ひ",
    "fu": "ふ",
    "hu": "フ",
    "he": "へ",
    "ho": "ほ",
    "ma": "ま",
    "mi": "み",
    "mu": "む",
    "me": "め",
    "mo": "も",
    "ya": "や",
    "yu": "ゆ",
    "yo": "よ",
    "ra": "ら",
    "ri": "り",
    "ru": "る",
    "re": "れ",
    "ro": "ろ",
    "wa": "わ",
    "wi": "ヰ",
    "we": "ヱ",
    "wo": "ヲ",
    "ga": "が",
    "gi": "ぎ",
    "gu": "ぐ",
    "ge": "げ",
    "go": "ご",
    "za": "ざ",
    "ji": "じ",
    "zi": "ジ",
    "zu": "ず",
    "ze": "ぜ",
    "zo": "ぞ",
    "ja": "じゃ",
    "ju": "じゅ",
    "jo": "じょ",
    "da": "だ",
    "di": "ヂ",
    "du": "ヅ",
    "de": "で",
    "do": "ど",
    "ba": "ば",
    "bi": "び",
    "bu": "ぶ",
    "be": "べ",
    "bo": "ぼ",
    "pa": "ぱ",
    "pi": "ぴ",
    "pu": "ぷ",
    "pe": "ぺ",
    "po": "ぽ",
    "vu": "ゔ",
    "a": "あ",
    "i": "い",
    "u": "う",
    "e": "え",
    "o": "お",

    "k": "く",
    "s": "す",
    "t": "ツ",
    "n": "ぬ",
    "f": "ふ",
    "h": "フ",
    "m": "む",
    "y": "ゆ",
    "r": "る",
    "g": "ぐ",
    "z": "ず",
    "j": "じゅ",
    "d": "ヅ",
    "b": "ぶ",
    "p": "ぷ",
    "v": "ゔ",
}

const periodicTable = [
    {"number": 1, "symbol": "H", "name": "Hydrogen", "img": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg"}, {"number": 2, "symbol": "He", "name": "Helium", "img": "https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg"}, {"number": 3, "symbol": "Li", "name": "Lithium", "img": "https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg"}, {"number": 4, "symbol": "Be", "name": "Beryllium", "img": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg"}, {"number": 5, "symbol": "B", "name": "Boron", "img": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Boron.jpg"}, {"number": 6, "symbol": "C", "name": "Carbon", "img": "https://upload.wikimedia.org/wikipedia/commons/6/68/Pure_Carbon.png"}, {"number": 7, "symbol": "N", "name": "Nitrogen", "img": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitrogen-glow.jpg"}, {"number": 8, "symbol": "O", "name": "Oxygen", "img": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Liquid_oxygen_in_a_beaker_%28cropped_and_retouched%29.jpg"}, {"number": 9, "symbol": "F", "name": "Fluorine", "img": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Fluoro_liquido_a_-196%C2%B0C_1.jpg"}, {"number": 10, "symbol": "Ne", "name": "Neon", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Neon-glow.jpg"}, {"number": 11, "symbol": "Na", "name": "Sodium", "img": "https://upload.wikimedia.org/wikipedia/commons/2/27/Na_%28Sodium%29.jpg"}, {"number": 12, "symbol": "Mg", "name": "Magnesium", "img": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Magnesium_crystals.jpg"}, {"number": 13, "symbol": "Al", "name": "Aluminium", "img": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Aluminium.jpg"}, {"number": 14, "symbol": "Si", "name": "Silicon", "img": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg"}, {"number": 15, "symbol": "P", "name": "Phosphorus", "img": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Phosphorus-purple.jpg"}, {"number": 16, "symbol": "S", "name": "Sulfur", "img": "https://upload.wikimedia.org/wikipedia/commons/2/23/Native_sulfur_%28Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia%29_9.jpg"}, {"number": 17, "symbol": "Cl", "name": "Chlorine", "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chlorine-sample-flip.jpg"}, {"number": 18, "symbol": "Ar", "name": "Argon", "img": "https://upload.wikimedia.org/wikipedia/commons/5/53/Argon-glow.jpg"}, {"number": 19, "symbol": "K", "name": "Potassium", "img": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Potassium.JPG"}, {"number": 20, "symbol": "Ca", "name": "Calcium", "img": "https://upload.wikimedia.org/wikipedia/commons/7/72/Calcium.jpg"}, {"number": 21, "symbol": "Sc", "name": "Scandium", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Scandium%2C_Sc.jpg"}, {"number": 22, "symbol": "Ti", "name": "Titanium", "img": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Titanium.jpg"}, {"number": 23, "symbol": "V", "name": "Vanadium", "img": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Vanadium-pieces.jpg"}, {"number": 24, "symbol": "Cr", "name": "Chromium", "img": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Chromium.jpg"}, {"number": 25, "symbol": "Mn", "name": "Manganese", "img": "https://upload.wikimedia.org/wikipedia/commons/6/64/Manganese_element.jpg"}, {"number": 26, "symbol": "Fe", "name": "Iron", "img": "https://images-of-elements.com/iron-2.jpg"}, {"number": 27, "symbol": "Co", "name": "Cobalt", "img": "https://upload.wikimedia.org/wikipedia/commons/6/62/Cobalt_ore_2.jpg"}, {"number": 28, "symbol": "Ni", "name": "Nickel", "img": "https://upload.wikimedia.org/wikipedia/commons/5/57/Nickel_chunk.jpg"}, {"number": 29, "symbol": "Cu", "name": "Copper", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg"}, {"number": 30, "symbol": "Zn", "name": "Zinc", "img": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Zinc_%2830_Zn%29.jpg"}, {"number": 31, "symbol": "Ga", "name": "Gallium", "img": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Solid_gallium_%28Ga%29.jpg"}, {"number": 32, "symbol": "Ge", "name": "Germanium", "img": "https://upload.wikimedia.org/wikipedia/commons/0/08/Polycrystalline-germanium.jpg"}, {"number": 33, "symbol": "As", "name": "Arsenic", "img": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Arsenic_%2833_As%29.jpg"}, {"number": 34, "symbol": "Se", "name": "Selenium", "img": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Selenium.jpg"}, {"number": 35, "symbol": "Br", "name": "Bromine", "img": "https://upload.wikimedia.org/wikipedia/commons/8/87/Bromine-ampoule.jpg"}, {"number": 36, "symbol": "Kr", "name": "Krypton", "img": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Krypton-glow.jpg"}, {"number": 37, "symbol": "Rb", "name": "Rubidium", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Rb5.JPG"}, {"number": 38, "symbol": "Sr", "name": "Strontium", "img": "https://upload.wikimedia.org/wikipedia/commons/8/84/Strontium-1.jpg"}, {"number": 39, "symbol": "Y", "name": "Yttrium", "img": "https://upload.wikimedia.org/wikipedia/commons/9/90/Piece_of_Yttrium.jpg"}, {"number": 40, "symbol": "Zr", "name": "Zirconium", "img": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Zirconium-pieces.jpg"}, {"number": 41, "symbol": "Nb", "name": "Niobium", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Niobium_strips.JPG"}, {"number": 42, "symbol": "Mo", "name": "Molybdenum", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Molybdenum.jpg"}, {"number": 43, "symbol": "Tc", "name": "Technetium", "img": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Technetium-sample-cropped.jpg"}, {"number": 44, "symbol": "Ru", "name": "Ruthenium", "img": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg"}, {"number": 45, "symbol": "Rh", "name": "Rhodium", "img": "https://upload.wikimedia.org/wikipedia/commons/5/54/Rhodium_%28Rh%29.jpg"}, {"number": 46, "symbol": "Pd", "name": "Palladium", "img": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg"}, {"number": 47, "symbol": "Ag", "name": "Silver", "img": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg"}, {"number": 48, "symbol": "Cd", "name": "Cadmium", "img": "https://images-of-elements.com/cadmium-4.jpg"}, {"number": 49, "symbol": "In", "name": "Indium", "img": "https://images-of-elements.com/indium-2.jpg"}, {"number": 50, "symbol": "Sn", "name": "Tin", "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tin-2.jpg"}, {"number": 51, "symbol": "Sb", "name": "Antimony", "img": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg"}, {"number": 52, "symbol": "Te", "name": "Tellurium", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Tellurium2.jpg"}, {"number": 53, "symbol": "I", "name": "Iodine", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Iodine-sample.jpg"}, {"number": 54, "symbol": "Xe", "name": "Xenon", "img": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Xenon-glow.jpg"}, {"number": 55, "symbol": "Cs", "name": "Cesium", "img": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesium.jpg"}, {"number": 56, "symbol": "Ba", "name": "Barium", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Barium_%2856_Ba%29.jpg"}, {"number": 57, "symbol": "La", "name": "Lanthanum", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Lanthanum.jpg"}, {"number": 58, "symbol": "Ce", "name": "Cerium", "img": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg"}, {"number": 59, "symbol": "Pr", "name": "Praseodymium", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg"}, {"number": 60, "symbol": "Nd", "name": "Neodymium", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Neodymium_%2860_Nd%29.jpg"}, {"number": 61, "symbol": "Pm", "name": "Promethium", "img": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Promethium.jpg"}, {"number": 62, "symbol": "Sm", "name": "Samarium", "img": "https://upload.wikimedia.org/wikipedia/commons/8/88/Samarium-2.jpg"}, {"number": 63, "symbol": "Eu", "name": "Europium", "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Europium.jpg"}, {"number": 64, "symbol": "Gd", "name": "Gadolinium", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Gadolinium-2.jpg"}, {"number": 65, "symbol": "Tb", "name": "Terbium", "img": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg"}, {"number": 66, "symbol": "Dy", "name": "Dysprosium", "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Dysprosium-2.jpg"}, {"number": 67, "symbol": "Ho", "name": "Holmium", "img": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Holmium2.jpg"}, {"number": 68, "symbol": "Er", "name": "Erbium", "img": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Erbium-2.jpg"}, {"number": 69, "symbol": "Tm", "name": "Thulium", "img": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Thulium-2.jpg"}, {"number": 70, "symbol": "Yb", "name": "Ytterbium", "img": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg"}, {"number": 71, "symbol": "Lu", "name": "Lutetium", "img": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lutetium.jpg"}, {"number": 72, "symbol": "Hf", "name": "Hafnium", "img": "https://upload.wikimedia.org/wikipedia/commons/1/17/Hafnium_%2872_Hf%29.jpg"}, {"number": 73, "symbol": "Ta", "name": "Tantalum", "img": "https://upload.wikimedia.org/wikipedia/commons/6/61/Tantalum.jpg"}, {"number": 74, "symbol": "W", "name": "Tungsten", "img": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Tungsten_rod_with_oxidised_surface.jpg"}, {"number": 75, "symbol": "Re", "name": "Rhenium", "img": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Pure_rhenium_bead%2C_arc_melted%2C_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg"}, {"number": 76, "symbol": "Os", "name": "Osmium", "img": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Osmium-bead.jpg"}, {"number": 77, "symbol": "Ir", "name": "Iridium", "img": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg"}, {"number": 78, "symbol": "Pt", "name": "Platinum", "img": "https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg"}, {"number": 79, "symbol": "Au", "name": "Gold", "img": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Gold_%2879_Au%29.jpg"}, {"number": 80, "symbol": "Hg", "name": "Mercury", "img": "https://upload.wikimedia.org/wikipedia/commons/b/be/Hydrargyrum_%2880_Hg%29.jpg"}, {"number": 81, "symbol": "Tl", "name": "Thallium", "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Thallium_%2881_Tl%29.jpg"}, {"number": 82, "symbol": "Pb", "name": "Lead", "img": "https://upload.wikimedia.org/wikipedia/commons/6/63/Lead-2.jpg"}, {"number": 83, "symbol": "Bi", "name": "Bismuth", "img": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bismuth-2.jpg"}, {"number": 84, "symbol": "Po", "name": "Polonium", "img": "https://images-of-elements.com/polonium.jpg"}, {"number": 85, "symbol": "At", "name": "Astatine", "img": "https://images-of-elements.com/astatine.jpg"}, {"number": 86, "symbol": "Rn", "name": "Radon", "img": "https://images-of-elements.com/radon.jpg"}, {"number": 87, "symbol": "Fr", "name": "Francium", "img": "https://images-of-elements.com/francium.jpg"}, {"number": 88, "symbol": "Ra", "name": "Radium", "img": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Radium226.jpg"}, {"number": 89, "symbol": "Ac", "name": "Actinium", "img": "https://upload.wikimedia.org/wikipedia/commons/2/27/Actinium_sample_%2831481701837%29.png"}, {"number": 90, "symbol": "Th", "name": "Thorium", "img": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Thorium-1.jpg"}, {"number": 91, "symbol": "Pa", "name": "Protactinium", "img": "https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg"}, {"number": 92, "symbol": "U", "name": "Uranium", "img": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg"}, {"number": 93, "symbol": "Np", "name": "Neptunium", "img": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg"}, {"number": 94, "symbol": "Pu", "name": "Plutonium", "img": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg"}, {"number": 95, "symbol": "Am", "name": "Americium", "img": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Americium_microscope.jpg"}, {"number": 96, "symbol": "Cm", "name": "Curium", "img": "https://images-of-elements.com/s/curium-glow.jpg"}, {"number": 97, "symbol": "Bk", "name": "Berkelium", "img": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkelium.jpg"}, {"number": 98, "symbol": "Cf", "name": "Californium", "img": "https://upload.wikimedia.org/wikipedia/commons/9/93/Californium.jpg"}, {"number": 99, "symbol": "Es", "name": "Einsteinium", "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg"}, {"number": 100, "symbol": "Fm", "name": "Fermium", "img": "https://upload.wikimedia.org/wikipedia/commons/5/58/Ivy_Mike_-_mushroom_cloud.jpg"}, {"number": 101, "symbol": "Md", "name": "Mendelevium", "img": "https://images-of-elements.com/s/mendelevium.jpg"}, {"number": 102, "symbol": "No", "name": "Nobelium", "img": "https://images-of-elements.com/nobelium.jpg"}, {"number": 103, "symbol": "Lr", "name": "Lawrencium", "img": "https://images-of-elements.com/lawrencium.jpg"}, {"number": 104, "symbol": "Rf", "name": "Rutherfordium", "img": "https://images-of-elements.com/s/rutherfordium.jpg"}, {"number": 105, "symbol": "Db", "name": "Dubnium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 106, "symbol": "Sg", "name": "Seaborgium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 107, "symbol": "Bh", "name": "Bohrium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 108, "symbol": "Hs", "name": "Hassium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 109, "symbol": "Mt", "name": "Meitnerium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 110, "symbol": "Ds", "name": "Darmstadtium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 111, "symbol": "Rg", "name": "Roentgenium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 112, "symbol": "Cn", "name": "Copernicium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 113, "symbol": "Nh", "name": "Nihonium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 114, "symbol": "Fl", "name": "Flerovium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 115, "symbol": "Mc", "name": "Moscovium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 116, "symbol": "Lv", "name": "Livermorium", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 117, "symbol": "Ts", "name": "Tennessine", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 118, "symbol": "Og", "name": "Oganesson", "img": "https://images-of-elements.com/s/transactinoid.png"}, {"number": 119, "symbol": "Uue", "name": "Ununennium", "img": "https://images-of-elements.com/s/transactinoid.png"}
]

const morseData = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "m": "-.",
    "O": "---.",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-", 
    "V": "...-", 
    "W": ".--", 
    "X": "-..-", 
    "Y": "-.--", 
    "Z": "--..", 

    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",

    "@": ".--.-.",

}

const logosData = {
    " ": "img/blank.png",

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
    "1": "https://www.svgrepo.com/show/381003/google-logo-one-new.svg",
    "2": "https://cdn.worldvectorlogo.com/logos/fox-2-1.svg",
    "3": "https://cdn.worldvectorlogo.com/logos/radio-3.svg",
    "4": "https://cdn.worldvectorlogo.com/logos/rete-4-2.svg",
    "5": "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    "6": "https://cdn.worldvectorlogo.com/logos/sbs-6-1.svg",
    "7": "https://cdn.worldvectorlogo.com/logos/7-eleven-logo-1.svg",
    "8": "https://cdn.worldvectorlogo.com/logos/ios-8-1.svg",
    "9": "https://cdn.worldvectorlogo.com/logos/9-tv.svg",
}

const gifsData = {
    " ": "img/blank.png",

    "A": "https://media.tenor.com/TEnSmPnJnoYAAAAj/capital-letter-dancing-letter.gif",
    "B": "https://media.tenor.com/9O04NZhF6xgAAAAm/dancing-letter-letter-b.webp",
    "C": "https://media.tenor.com/mWynSjEjY-kAAAAm/dancing-letter-letter-c.webp",
    "D": "https://media.tenor.com/EXVZaqMH6HIAAAAm/dancing-letter-letter-d.webp",
    "E": "https://media.tenor.com/A5a-G4IqGOQAAAAm/dancing-letter-letter-e.webp",
    "F": "https://media.tenor.com/-ULybTB8w90AAAAm/dancing-letter-letter-f.webp",
    "G": "https://media.tenor.com/WuG5qhJkNU8AAAAm/dancing-letter-letter-g.webp",
    "H": "https://media.tenor.com/z2mfuzgIZoMAAAAm/dancing-letter-letter-h.webp",
    "I": "https://media.tenor.com/bKYqRGJaA3QAAAAm/dancing-letter-letter-i.webp",
    "J": "https://media.tenor.com/xUZ8mgiaB1sAAAAm/dancing-letter-letter-j.webp",
    "K": "https://media.tenor.com/LmhxtfZD95IAAAAj/dancing-letter-letter.gif",
    "L": "https://media.tenor.com/KCCTDua2SkoAAAAj/dancing-letter-letter.gif",
    "M": "https://media.tenor.com/9xKDH0AzlxMAAAAj/dancing-letter-letter.gif",
    "N": "https://media.tenor.com/x6G5QCNemMkAAAAj/dancing-letter-letter.gif",
    "O": "https://media.tenor.com/dkCwZF-ltCQAAAAj/dancing-letter-letter.gif",
    "P": "https://media.tenor.com/i9amW8b9cLgAAAAj/dancing-letter-letter.gif",
    "Q": "https://media.tenor.com/pAJnrmJuUHIAAAAj/dancing-letter-letter.gif",
    "R": "https://media.tenor.com/C24-QePdofIAAAAm/dancing-letter-letter.webp",
    "S": "https://media.tenor.com/IQQVfdxyOIQAAAAj/dancing-letter-letter.gif",
    "T": "https://media.tenor.com/4A0Nel-xOFYAAAAj/dancing-letter-letter.gif",
    "U": "https://media.tenor.com/aZgRQ_r4lTsAAAAj/capital-letter-letter.gif",
    "V": "https://media.tenor.com/Qn63ZuRwp5EAAAAi/capital-letter-letter.gif",
    "W": "https://media.tenor.com/ANut9Jv7_fwAAAAj/capital-letter-letter.gif",
    "X": "https://media.tenor.com/TolydnT8A5QAAAAi/capital-letter-dancing-letter.gif",
    "Y": "https://media.tenor.com/9zMHtfQLsjUAAAAj/capital-letter-letter.gif",
    "Z": "https://media.tenor.com/dzk8rnKO_AUAAAAj/capital-letter-letter.gif",

    "0": "https://media.tenor.com/DtNdi4Bzj_UAAAAm/dancing-number-dancing-letter.webp",
    "1": "https://media.tenor.com/GvP7L0FwFyMAAAAm/dancing-number-dancing-letter.webp",
    "2": "https://media.tenor.com/J-MYuLM6fXUAAAAm/dancing-number-dancing-letter.webp",
    "3": "https://media.tenor.com/o96-hgLmCQ0AAAAm/dancing-number-dancing-letter.webp",
    "4": "https://media.tenor.com/G4W1KBzAoQsAAAAm/dancing-number-dancing-letter.webp",
    "5": "https://media.tenor.com/JD-y9a5fHBsAAAAm/dancing-number-dancing-letter.webp",
    "6": "https://media.tenor.com/Vj1qjksWYvcAAAAm/dancing-number-dancing-letter.webp",
    "7": "https://media.tenor.com/6-3dxjy6qSMAAAAm/dancing-number-dancing-letter.webp",
    "8": "https://media.tenor.com/d3HlvsnflX0AAAAm/dancing-number-dancing-letter.webp",
    "9": "https://media.tenor.com/i0x1-y8QubAAAAAm/dancing-number-dancing-letter.webp", // thx tenor user wjirc
}

const boldData = {
    "A": "𝗔",
    "B": "𝗕",
    "C": "𝗖",
    "D": "𝗗",
    "E": "𝗘",
    "F": "𝗙",
    "G": "𝗚",
    "H": "𝗛",
    "I": "𝗜",
    "J": "𝗝",
    "K": "𝗞",
    "L": "𝗟",
    "M": "𝗠",
    "N": "𝗡",
    "O": "𝗢",
    "P": "𝗣",
    "Q": "𝗤",
    "R": "𝗥",
    "S": "𝗦",
    "T": "𝗧",
    "U": "𝗨",
    "V": "𝗩",
    "W": "𝗪",
    "X": "𝗫",
    "Y": "𝗬",
    "Z": "𝗭",

    "a": "𝗮",
    "b": "𝗯",
    "c": "𝗰",
    "d": "𝗱",
    "e": "𝗲",
    "f": "𝗳",
    "g": "𝗴",
    "h": "𝗵",
    "i": "𝗶",
    "j": "𝗷",
    "k": "𝗸",
    "l": "𝗹",
    "m": "𝗺",
    "n": "𝗻",
    "o": "𝗼",
    "p": "𝗽",
    "q": "𝗾",
    "r": "𝗿",
    "s": "𝘀",
    "t": "𝘁",
    "u": "𝘂",
    "v": "𝘃",
    "w": "𝘄",
    "x": "𝘅",
    "y": "𝘆",
    "z": "𝘇",
}

const frakturData = {
    "A": "𝕬",
    "B": "𝕭",
    "C": "𝕮",
    "D": "𝕯",
    "E": "𝕰",
    "F": "𝕱",
    "G": "𝕲",
    "H": "𝕳",
    "I": "𝕴",
    "J": "𝕵",
    "K": "𝕶",
    "L": "𝕷",
    "M": "𝕸",
    "N": "𝕹",
    "O": "𝕺",
    "P": "𝕻",
    "Q": "𝕼",
    "R": "𝕽",
    "S": "𝕾",
    "T": "𝕿",
    "U": "𝖀",
    "V": "𝖁",
    "W": "𝖂",
    "X": "𝖃",
    "Y": "𝖄",
    "Z": "𝖅",

    "a": "𝖆",
    "b": "𝖇",
    "c": "𝖈",
    "d": "𝖉",
    "e": "𝖊",
    "f": "𝖋",
    "g": "𝖌",
    "h": "𝖍",
    "i": "𝖎",
    "j": "𝖏",
    "k": "𝖐",
    "l": "𝖑",
    "m": "𝖒",
    "n": "𝖓",
    "o": "𝖔",
    "p": "𝖕",
    "q": "𝖖",
    "r": "𝖗",
    "s": "𝖘",
    "t": "𝖙",
    "u": "𝖚",
    "v": "𝖛",
    "w": "𝖜",
    "x": "𝖝",
    "y": "𝖞",
    "z": "𝖟",
}

// const emojisData = ['&#55357;', '&#56832;', '&#55357;', '&#56833;', '&#55357;', '&#56834;', '&#55358;', '&#56611;', '&#55357;', '&#56835;', '&#55357;', '&#56836;', '&#55357;', '&#56837;', '&#55357;', '&#56838;', '&#55357;', '&#56841;', '&#55357;', '&#56842;', '&#55357;', '&#56843;', '&#55357;', '&#56846;', '&#55357;', '&#56845;', '&#55357;', '&#56856;', '&#55357;', '&#56846;', '&#55357;', '&#56845;', '&#55357;', '&#56856;', '&#55358;', '&#56688;', '&#55357;', '&#56855;', '&#55358;', '&#56593;', '&#55358;', '&#56693;', '&#55357;', '&#56881;', '&#55358;', '&#56623;', '&#55358;', '&#56622;', '&#55358;', '&#56610;', '&#55358;', '&#56609;', '&#55357;', '&#56489;', '&#55358;', '&#56595;', '&#55358;', '&#56784;', '&#55358;', '&#56596;', '&#55357;', '&#56613;', '&#55357;', '&#56831;', '&#55357;', '&#56448;']
const emojisData = [
    "&#128512;", "&#128077;", "&#10024;", "&#128516;", "&#128512;", "&#129315;", "&#128515;", "&#128523;", "&#128526;", "&#128525;", "&#129300;", "&#128527;", "&#129299;", "&#129297;", "&#128557;", "&#128561;", "&#128563;", "&#128545;", "&#129313;", "&#128128;", "&#128169;", "&#128165;", "&#127817;", "&#127820;", "&#127821;", "&#127825;", "&#127828;", "&#127752;", "&#128226;", "&#128276;", "&#128176;", "&#128184;", "&#128274;", "&#128296;", "&#128138;", "&#128137;", "&#128511;", "&#128302;", "&#9989;", "&#10060;", "&#129397;", "&#129398;", "&#129327;", "&#129488;", "&#129393;", "&#128166;", "&#128168;", "&#129504;"
]

function saveHTML(string){
    return String(string).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
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

function replaceByReversedObj(string, obj){

    for(let i = 0; i < Object.keys(obj).length; i++){
        string = string.replaceAll(Object.values(obj)[i].toLowerCase(), Object.keys(obj)[i])
        string = string.replaceAll(Object.values(obj)[i].toUpperCase(), Object.keys(obj)[i])
    }

    return string
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

function splitByWords(string){
    return string.split(" ").join(".")
    .split(".").join(",")
    .split(",").join(";")
    .split(";").join("?")
    .split("?").join("!")
    .split("!")
}

function lowerCase(string){
    return string.toLowerCase()
}

function upperCase(string){
    return string.toUpperCase()
}

function title(string){
    string = string.split(" ")
    let result = "";

    for(let i = 0; i < string.length; i++){
        for(let letter = 0; letter < string[i].length; letter++){
            if(letter == 0){
                result += string[i][letter].toUpperCase()
            } else {
                result += string[i][letter].toLowerCase()
            }
        }
        result += " "
    }

    return result;
}

function invertCase(string){
    let result = "";

    for(let i = 0; i < string.length; i++){
        if(string[i] == string[i].toLowerCase()){
            result += string[i].toUpperCase()
        } else {
            result += string[i].toLowerCase()
        }
    }
    if(result == result.toUpperCase() || result == result.toLowerCase() || result == title(result).trim()) 
        return

    return result
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
    } catch {
        return
    }
}

function fromBase64(string){
    let formatedString = "";

    for(let i = 0; i < string.length; i++){
        if(/^[\x00-\x7F]*$/.test(string[i])){
            formatedString = `${formatedString}${string[i]}`
        }
    }

    try {
        return atob(formatedString)
    } catch {
        return
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

function dancingLetters(string){
    result = "";
    string = rus2eng(string.toUpperCase());

    for(let i = 0; i < string.length; i++){
        if(logosData[string[i]] !== undefined){
            result += `<img src="${gifsData[string[i]]}" width="50" height="50" alt="${string[i]}" title="${string[i]}">`
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

function toNumber(string){
    let result = "";
    for (var i = 0; i < string.length; i++) {
        result += string[i].charCodeAt(0).toString(16) + "";
    }
    return String(Number(`0x${result}`));
}

function eng2rus(string){
    return replaceByObj(string, eng2rusTranslate);
}

function rus2eng(string){
    return replaceByObj(string, rus2engTranslate);
}

function fromJap(string){
    return replaceByReversedObj(string, japaneseData)
}

function fromBroken(string){
    1
    return replaceByReversedObj(string, brokenLettersData)
}

function toJap(string){
    string = rus2eng(string).toLowerCase()

    for(let i = 0; i < Object.keys(japaneseData).length; i++){
        string = string.replaceAll(Object.keys(japaneseData)[i], Object.values(japaneseData)[i])
    }

    for(let i = 0; i < letters.length; i++){
        string = string.toUpperCase().replaceAll(letters[i], "")
    }

    return string
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

function lettersCount(string){
    var result = {};
    var output = '';

    for(let i = 0; i < string.length; i++){
        if(Object.keys(result).includes(string[i])) {
            result[string[i]] += 1;
        } else {
            result[string[i]] = 1;
        }
    }

    result = Object.fromEntries(Object.entries(result).sort(([, valueA], [, valueB]) => valueA - valueB).reverse());

    for(let i = 0; i < Object.keys(result).length; i++){
        output = `${output} ${Object.keys(result)[i]}: ${result[Object.keys(result)[i]]},`
    }

    return output;
}

function wordsCount(string){
    string = splitByWords(string)
    var result = {};
    var output = '';

    for(let i = 0; i < string.length; i++){
        if(Object.keys(result).includes(string[i])) {
            result[string[i]] += 1;
        } else {
            result[string[i]] = 1;
        }
    }

    result = Object.fromEntries(Object.entries(result).sort(([, valueA], [, valueB]) => valueA - valueB).reverse());

    for(let i = 0; i < Object.keys(result).length; i++){
        output = `${output} ${Object.keys(result)[i]}: ${result[Object.keys(result)[i]]},`
    }

    if(Object.values(result)[0] <= 2) return

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
    string = splitByWords(string)

    for(let i = string.length - 1; i >= 0; i--){
        result += string[i] + " "
    }

    return result;
}

function sortSymbols(string){
    return splitByWords(string).sort().join("")
}

function stalinSort(string){
    let result = "�"
    
    for(let i = 0; i < string.length; i++){
        if(convertToNumberSys(string[i], 10) > convertToNumberSys(result[result.length - 1], 10)){
            result += string[i]
        }
    }

    return result;
}

function sortByLength(string){
    return splitByWords(string).sort((string1, string2) => {return string1.length - string2.length}).join(" ")
}

function sortWords(string){
    return splitByWords(string).sort().join(" ")
}

function oddSymbols(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        (i + 1) % 2 == 0 ? result += `<a class="gray" title="${i+1}th symbol">${string[i]}</a>` : false
    }

    return result;
}

function squareSymbols(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        Math.sqrt(i + 1) == Math.floor(Math.sqrt(i + 1)) ? result += `<a class="gray" title="${i+1}th symbol">${string[i]}</a>` : false
    }

    return result;
}

function primeSymbols(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        isPrime(i+1) ? result += `<a class="gray" title="${i+1}th symbol">${string[i]}</a>` : false

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

function leaveDublicates(string){
    let result = "";
    
    for(let i = 0; i < string.length; i++){
        if(string.replace(string[i], "").includes(string[i])) {
            result += string[i]
        }
    }

    return result;
}

function shuffle(string){
    let result = ""
    const len = string.length

    for(let i = 0; i < len; i++){
        let index = Math.floor(Math.random() * string.length)
        result += string[index]
        string = string.slice(0, index) + string.slice(index + 1)
    }
    return result
}

function shuffleWords(string){
    string = splitByWords(string)

    let result = []
    const LENGTH = string.length
    for(let i = 0; i < LENGTH; i++){
        let index = Math.floor(Math.random() * string.length)
        result.push(string[index])
        string.splice(index, 1)
    }
    return result.join(" ")
}

function abbreviation(string){
    let result = "";
    string = string.split(" ")

    for(let i = 0; i < string.length; i++){
        if(string[i].length > 0){
            result += string[i][0].toUpperCase() + "."
        }
    }

    return result;
}

function replaceWithLength(string) {
    string = splitByWords(string)
    let result = "";

    for (let i = 0; i < string.length; i++) {
        result += `<a class="gray" title="${string[i]}">${string[i].length}</a> `
    }

    return result;
}

function length(string){
    let result = `Symbols: ${string.length}`

    if(splitByWords(string).length > 1){
        result += `<br>Words: ${splitByWords(string).length}`
    } if(string.split(".").length > 1){
        result += `<br>Sentences: ${string.split(".").length}`
    }

    return result
}

function wordsLength(string){
    return splitByWords(string).length
}

function getDivisiors(n){
    let result = [];

    for(let i = 1; i < n; i++){
        if(n % i == 0){
            result.push(i)};
        }
    
    return result
}


function typo(string){
    let result = "";
    const seed = String(Math.abs(hash(string))).repeat(Math.floor(string.length / 8))

    for(let i = 0; i < string.length; i++){
        if(parseInt(seed[i]) > 4){
            if(typoData[string[i]] !== undefined){
                result += typoData[string[i]]
                // result += `<a class="red">${typoData[string[i]]}</a>`
            } else if(typoData[string[i].toUpperCase()] !== undefined){
                result += typoData[string.toUpperCase()[i]].toLowerCase()
                // result += `<a class="red">${typoData[string.toUpperCase()[i]].toLowerCase()}</a>`
            } else {
                result += string[i]
                // result += `<a class="red">${string[i]}</a>`
            }
        } else {
            result += string[i]
            // result += `<a class="green">${string[i]}</a>`
        }
    }
    return result
}

function shiftByValue(string, shift){
    let result = "";

    for (var i = 0; i < string.length; i++) {
        result += "&#" + (parseInt(string.charCodeAt(i)) + shift);
    }

    return result;
}

function shiftBy1(string){
    return shiftByValue(string, 1)
}

function shiftByMinus1(string){
    return shiftByValue(string, -1)
}

function shiftBy22(string){
    return shiftByValue(string, 22)
}

function hash(string) {

    let result = 0;

    if (string.length == 0) return 0;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        result = ((result << 5) - result) + char;
        result = result & result;
    }

    return result
}

function strikethrough(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        result += `${string[i]}̶`
    }

    return result;
}

function axiusLink(string){
    return replaceByObj(string, axiusLinkData)
}

function bold(string){
    return replaceByObj(string, boldData)
}

function fraktur(string){
    return replaceByObj(string, frakturData)
}

function alphabetID(string){
    let result = "";

    for (let i = 0; i < string.length; i++) {
        for (let letter = 0; letter < alphabetIdData.length; letter++){
            if(alphabetIdData[letter].includes(string[i].toUpperCase())){
                result += String(letter + 1) + " "
            }
        }
    }

    return result;
}

function toMorse(string){
    let result = "";

    for(let i = 0; i < string.length; i++){
        if(morseData[string[i].toUpperCase()] !== undefined){
            result += morseData[string[i].toUpperCase()] + " / "
        }
    }
    return result
}

function emojis(string){
    string = splitByWords(string)
    let result = ""

    for(let i = 0; i < string.length; i++){
        emojiID = Math.floor(Math.random() * emojisData.length)
        result += `${string[i]}${emojisData[emojiID]}`
        // console.log(`ID = ${emojiID}; Emoji = ${emojisData[emojiID]}; i = ${i}; result = ${result}`)
    }

    return result;
}

// nums

function properties(n){
    if(isNaN(n)) 
        return
    n = parseFloat(n)

    let result = [];

    if(n <= 12000000){
        result.push(`.isPrime(): ${isPrime(n)}`)
    } 
    if(n < 100000000000000000000000000000000000) {

        let sequence = [1, 1]
        while(sequence[sequence.length - 1] < n){
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
        }
        result.push(`.isFibonacci(): ${sequence[sequence.length - 1] === n}`)
    }
    result.push(`.isPalindrome(): ${String(n) == reverse(String(n))}`)
    result.push(`.isSquare(): ${Math.sqrt(n) == Math.floor(Math.sqrt(n))}`)
    result.push(`.isCubic(): ${Math.cbrt(n) == Math.floor(Math.cbrt(n))}`)
    result.push(`.isPerfect(): ${[0, 6, 28, 496, 8128, 8589869056, 137438691328, 2305843008139952128].includes(Math.abs(n))}`)
    let powersOf2 = [1] // alternative method:  parseInt(n - 1).toString(2).replaceAll("1", "") === ""
    while(Math.abs(n) < powersOf2[powersOf2.length - 1 && n !== 0]){
        powersOf2.push(powersOf2[powersOf2.length - 1] * 2)
    }
    result.push(`.isPower2(): ${Math.abs(n) === powersOf2[powersOf2.length - 1]}`) 

    // useless props
    result.push(`.isOdd(): ${n % 2 === 0}`)
    result.push(`.isNatural(): ${Math.abs(n) == n && n !== 0 && Math.floor(n) == n}`)
    result.push(`.isPositive(): ${Math.abs(n) === n}`)
    result.push(`.isInteger(): ${Math.floor(n) === n}`)

    return result.join("<br>")
}

function seqToNum(seq){
    let result = []
    for(let i = 0; i < seq.split("; ").join(" ").split(" ").length; i++){
        if(isNaN(seq.split("; ").join(" ").split(" ")[i])) 
            return
        result.push(parseFloat(seq.split("; ").join(" ").split(" ")[i]))
    }
    if(result.length <= 1) return
    return result
}

function sort(seq){
    seq = seqToNum(seq)
    if(!seq) return

    return seq.sort((a, b) => {return a - b}).join(" ")
}

function reverseSeq(seq){
    seq = seqToNum(seq)
    if(!seq) return
    return seq.reverse().join(" ")
}

function sum(seq){
    seq = seqToNum(seq)
    if(!seq) return

    let result = 0
    seq.forEach((n) => {result += n})
    return result
}

function fromIDs(seq, shift) {
    seq = seqToNum(seq)
    if(!seq) return
    let result = ""

    for(let i = 0; i < seq.length; i++){
        if(seq[i] < alphabetIdData.length){
            result += alphabetIdData[seq[i]][shift].toLowerCase() // shift
        } else {
            return
        }
    }

    return result
}

function fromEngIDs(seq){
    return fromIDs(seq, 1)
}

function fromRusIDs(seq){
    return fromIDs(seq, 0)
}

function minMax(seq){
    let sortedSeq = seqToNum(seq)
    if(!sortedSeq) return
    sortedSeq = sortedSeq.sort((a, b) => {return a - b})

    return `<a class="gray" title="min">${sortedSeq[0]}</a>; <a class="gray" title="max">${sortedSeq[sortedSeq.length - 1]}</a>; `
}

function average(seq){
    seq = seqToNum(seq)
    if(!seq) return

    return seq.reduce((partialSum, a) => partialSum + a, 0) / seq.length
}

function median(seq){
    seq = sort(seq)
    if(!seq) return
    seq = seq.split(" ").join("; ").split("; ")

    if(seq.length % 2 == 0){
        return (parseFloat(seq[seq.length / 2 - 1]) + parseFloat(seq[seq.length / 2])) / 2
    } else {
        return seq[(seq.length - 1) / 2]
    }
}

function listLength(seq){
    seq = seqToNum(seq)
    if(!seq) return

    return seq.length
}


function square(n){
    if(Math.abs(n) > 1000000000000000 || isNaN(n)) return
    n = parseFloat(n)

    return n * n
}

function cube(n){
    if(Math.abs(n) > 1000000000000000 || isNaN(n)) return
    n = parseFloat(n)

    return n * n * n
}

function sqrt(n){
    if(isNaN(n) || n < 0) return
    n = parseFloat(n)

    return Math.sqrt(n)
}

function cbrt(n){
    if(isNaN(n)) return
    n = parseFloat(n)

    return Math.cbrt(n)
}

function powOf2(n){
    if(isNaN(n) || n > 1024) return
    n = parseFloat(n)

    return Math.pow(2, n)
}

function factorial(n){
    n = parseInt(n)
    if(n > 171 || isNaN(n)) return

    let result = 1;

    if(n == 0) return 1
    for(let i = 1; i < n; i++){
        result *= i
        // console.log(`${result} (${i}/${string})`)
    }

    return result
}

function seqSum(n){
    if(n > 1500 || isNaN(n)) return
    n = parseInt(n)

    let result = 0;

    if(n == 0) return 1
    for(let i = 1; i <= n; i++){
        result += i
    }

    return result
}

function collatz(n){
    if(n > 1000000000000000 || isNaN(n)) return
    n = parseInt(n)
    let result = []
    let max = n
    
    while (!result.includes(n)){
        result.push(n)
        if(n % 2 === 0)
            n /= 2
        else{
            n = n * 3 + 1
        }
        if(Math.abs(n) > max) max = Math.abs(n)
    }

    return result.join(" -&#62 ") + `<br>Total iterations: ${result.length - 1}<br>Max: ${max}`
}

function digitSum(n){
    if(isNaN(parseFloat(n)) || n > 100000000000000000000) return
    n = Math.abs(parseFloat(n))

    let result = [n];
    let sum;

    while(String(result[result.length - 1]).length !== 1) {
        sum = 0
        for(let i = 0; i < String(n).length; i++){
            if(String(n)[i] !== "."){
                sum += parseInt(String(n)[i])
            }
        }
        result.push(sum)
        n = sum
    }

    return result.join(" -> ")
}

function digitMult(n){
    if(isNaN(parseFloat(n)) || n > 100000000000000000000) return
    n = Math.abs(parseFloat(n))

    let result = [n];
    let sum;

    while(String(result[result.length - 1]).length !== 1) {
        sum = 1
        for(let i = 0; i < String(n).length; i++){
            sum *= parseInt(String(n)[i])
        }
        result.push(sum)
        n = sum
    }

    return result.join(" -> ")
}

function sin(n){
    if(isNaN(n)) return
    n = parseFloat(n)

    return Math.sin(n)
}

function cos(n){
    if(isNaN(n)) return
    n = parseFloat(n)

    return Math.cos(n)
}

function tan(n){
    if(isNaN(n)) return
    n = parseFloat(n)

    return Math.tan(n)
}

function periodicElement(n){
    let ELEMENT
    if(!isNaN(n)){
        if(n > periodicTable.length) return
        n = parseInt(n)
        ELEMENT = periodicTable[n - 1]
    } else {
        for(let i = 0; i < periodicTable.length; i++){
            if(periodicTable[i]["symbol"].toLowerCase() === n.toLowerCase()){
                ELEMENT = periodicTable[i]
                break
            }
        }
    }
    if(!ELEMENT) return
    return `${ELEMENT["symbol"]} (${ELEMENT["name"]})<br><img src="${ELEMENT["img"]}" width=\"200\" alt="${ELEMENT["name"]}" title="${ELEMENT["number"]}th element">`
}

function periodicElements(string){
    string = string.toLowerCase()
    let sum = 0

    for(let i = 0; i < periodicTable.length; i++){
        sum += (i + 1) * (string.split(periodicTable[i]["symbol"].toLowerCase()).length - 1) // title="${periodicTable[i]["symbol"]} (${periodicTable[i]["number"]}th еlеmеnt, sum is ${sum})"
        string = string.replaceAll(periodicTable[i]["symbol"].toLowerCase(), `<a>${periodicTable[i]["symbol"]}</a>`) // unfinished
    }
    if(sum == 0) return
    string += `<br>Sum: ${sum}`

    return string
}

function isPrime(n){
    if(n == 1) return true

    if((n > 10 && [1, 3, 7, 9].includes(n % 10)) && digitSum(String(n)) % 3 != 0){
        for(let i = 2; i < n; i++){
            if(n % i == 0){
                return false
            }
        }
        return true
    } else {
        return false
    }
}

function nearestPrime(string){
    string = Math.abs(parseInt(string))
    if(string > 12000000 || isNaN(string)) return ""

    for(let i = 0; true; i++){
        // console.log(`Trying ${string + i}; ${i}`)
        if(isPrime(string + i)){
            return String(string + i) + "<a></a>"
        }
        // console.log(`Trying ${string - i}; ${i}`)
        if(isPrime(string - i)){
            return String(string - i) + "<a></a>"
        }
    }
}

function nearestFibonacci(n){
    n = Math.abs(parseInt(n))
    if(n > 100000000000000000000000000000000000 || isNaN(n)) return

    let sequence = [0, 1]
    while(sequence[sequence.length - 1] < n){
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    }

    return sequence[sequence.length - 1]
}

function nearestSquare(n){
    if(n > 100000000000000000 || isNaN(n) ) return
    n = parseInt(n)
    if(n > 0){
        return Math.pow(Math.round(Math.sqrt(n)), 2)
    } else {
        return 0
    }
}

function divisiors(n){
    n = Math.abs(parseInt(n))
    if(n > 30000000 || isNaN(n)) return
    let result = [];
    let total = 0;

    for(let i = 1; i < n; i++){
        if(n % i == 0){
            total++
            result.push(i);
        }
    }

    if(result.length <= 1) return `No divisiors.`
        
    return `${result.join(" ")}<br>Sum: ${result.reduce((a, b) => a + b, 0)}<br>Total divisiors: ${result.length}`
}

function convertFromNumberSys(n, target){
    let symbols = []

    for(let i = 0; i < n.split(" ").length; i++) {
        if(n >= 100000000000000000000) return
        if(isNaN(parseInt(n.split(" ")[i], target))) return;
        symbols.push(parseInt(n.split(" ")[i], target))
    }

    return symbols;
}

function decToNumberSys(n, target){
    let symbols = []

    n = n.split(" ").forEach((element) => {
        if(isNaN(parseInt(element))) return;
        symbols.push(parseInt(element).toString(target))
    })

    return symbols;
}

function fromBin(n){
    return convertFromNumberSys(n, 2)
}

function fromHex(n){
    return convertFromNumberSys(n, 16)
}

function from36(n){
    return convertFromNumberSys(n, 36)
}

function decToBin(n){
    return decToNumberSys(n, 2)
}

function decToHex(n){
    return decToNumberSys(n, 16)
}

function decTo36(n){
    return decToNumberSys(n, 36)
}

function round(n){
    if(isNaN(Math.round(n)) || isNaN(n)) return

    return Math.round(n)
}

function unicode(string){
    let result = "";
    let symbols = [];
    string = string.split(" ").forEach((element) => {
        if(isNaN(parseInt(element))) return;
        symbols.push(parseInt(element))
    })
    symbols.forEach((id) => {
        result += `<a class="gray" title="U+${String(id).padStart(4, "0")}">&#${id}</a>`
    })

    return result;
}

function toRoman(n){
    let result = ""
    n = parseInt(n)
    if(isNaN(n) || n >= 4999) return

    if(n > 1000) {
        result += ["", "M", "MM", "MMM", "MMMM"][Math.floor(n % 10000 / 1000)]
    } if(n > 100) {
        result += ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"][Math.floor(n % 1000 / 100)]
    } if(n > 10) {
        result += ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"][Math.floor(n % 100 / 10)]
    } if(n >= 1) {
        result += ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][Math.floor(n % 10)]
    }

    return result
}

function timestamp(n){
    if(isNaN(n) || 10000 > n >= 10000000000000000) return
    n = parseFloat(n)
    date = new Date(n * 1000)

    const result = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getHours()).padStart(2, '0')}`;
    return result
}

// 2 strings

function sortStrings(strings){
    return strings.sort((string1, string2) => {return string1.length - string2.length})
}

function merge(strings){
    let result = "";
    strings = sortStrings(strings)

    for(let i = 0; i < strings[1].length; i++){
        result += `<a class="red">${strings[1][i]}</a>`
        // result += strings[1][i]
        if(i < strings[0].length){
            result += `<a class="green">${strings[0][i]}</a>`
            // result += strings[0][i]
        }
    }

    return result;
}

function averageString(strings){
    let result = "";
    strings = sortStrings(strings)

    for (var i = 0; i < strings[1].length; i++) {
        if(i < strings[0].length){
            result += "&#" + Math.round((parseInt(strings[0].charCodeAt(i)) + parseInt(strings[1].charCodeAt(i))) / 2);
        } else {
            result += "&#" + parseInt(strings[1].charCodeAt(i));

        }
    }

    return result;
}

function filter(strings){
    let result = "";
    result = strings[0].replaceAll(strings[1], "")

    if (result === strings[0] || result === "") return

    return `<a class="green">${result}</a>`;
}

function symbolFilter(strings){
    let result = "";

    for (var i = 0; i < strings[0].length; i++) {
        if(!strings[1].includes(strings[0][i])){
            result += strings[0][i]
        }
    }

    if(result != strings[0] || result !== "") return `<a class="green">${result}</a>`;
}

function negativeSymbolFilter(strings){
    let result = "";

    for (var i = 0; i < strings[0].length; i++) {
        if(strings[1].includes(strings[0][i])){
            result += strings[0][i]
        }
    }

    if(result != strings[0] || result !== "") return `<a class="red">${result}</a>`;
}

function insert(strings){
    let result = "";

    for (var i = 0; i < strings[0].length - 1; i++) {
        result += `<a class="red">${strings[0][i]}</a><a class="green">${strings[1]}</a>`
    }
    result += `<a class="red">${strings[0][strings[0].length - 1]}</a>`

    return result;
}

function insertBetweenWords(strings){
    let string = splitByWords(strings[0])
    let result = "";

    for (var i = 0; i < string.length - 1; i++) {
        result += `<a class="red">${string[i]}</a><a class="green">${strings[1]}</a>`
    }
    result += `<a class="red">${string[string.length - 1]}</a>`

    return result;
}

function mergeReplace(strings){
    let result = "";
    strings = sortStrings(strings)

    for(let i = 0; i < strings[1].length; i++){
        if(i % 2 == 0){
            result += `<a class="red">${strings[1][i]}</a>`
        } else {
            if(i < strings[0].length){
                result += `<a class="green">${strings[0][i]}</a>`
            }
        }
    }

    return result;
}

// str + num

function split(inputs){
    let len = inputs[1]
    if(isNaN(len) || isNaN(parseInt(len))) return
    len = parseInt(len)
    let result = ""
    inputs[0] = inputs[0].replaceAll(" ", "")

    for(let i = 0; i < inputs[0].length; i++){
        result += inputs[0][i]
        if((i + 1) % len === 0)
            result += " "
    }

    if(result !== inputs[0]) return result
}

function filterWordsLength(inputs){
    let len = inputs[1]
    if(isNaN(len) || isNaN(parseInt(len))) return
    len = parseInt(len)

    return inputs[0]
    .split(" ").join(".")
    .split(".").join(",")
    .split(",").join(";")
    .split(";").join("?")
    .split("?").join("!")
    .split("!")
    .filter((word) => word.length === len)
    .join(" ")
}

// nums

function stringsToFloat(nums, maxvalue){
    let result = [];
    nums.forEach((n) => {if(!isNaN(parseFloat(n))) {
        if(parseFloat(n) > maxvalue) {
            result = null
            return
        } if(result !== null) {
            result.push(parseFloat(n))
        }
    } else { 
        result = null
        return
    }
    })

    return result
}

function pow(nums){
    nums = stringsToFloat(nums, 10000000000000000000000000)
    if(nums === null){
        return
    }

    return Math.pow(nums[0], nums[1])
}

function proportion(nums){
    nums = stringsToFloat(nums, 1000000)
    if(nums === null){
        return
    }

    for(let i = nums[1]; i > 1; i--){
        if(nums[0] % i == 0 && nums[1] % i == 0){
            return `<a class="green">${nums[0]/i}</a>:<a class="red">${nums[1]/i}</a>`
        }
    }

    return `<a class="green">${nums[0]}</a>:<a class="red">${nums[1]}</a>`
}

function generateFibonacci(nums){
    nums = stringsToFloat(nums, 100000000)
    if(nums === null) return
    
    const LENGTH_LIMIT = 50

    for(let i = 0; i < LENGTH_LIMIT; i++){
        nums.push(nums[nums.length - 1] + nums[nums.length - 2])
    }

    return nums.join(" ")
}

function randint(nums){
    nums = stringsToFloat(nums, 100000000)
    if(nums === null) return

    return Math.floor(Math.random() * (nums[1] + 1 - nums[0])) + nums[0]
}