const methods = [[
    chemicalSymbol,
    factorial, divisiors, pow2, seqSum, digitSum, nearestPrime,  // nums
    lowerCase, upperCase, title, // case
    rus2eng, eng2rus, rusByEng, toJap, changeLayout, // lang
    lettersCount, toBroken, leed, alphabetID, // replace
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

const letters = ["А","Б","В","В","Г","Д","Е","Ё","Ж","З","И","Й","К","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я",
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

const alphabetIdData = [
    ["А", "A"], ["Б", "B"], ["В", "C"], ["Г", "D"], ["Д", "E"], ["Е", "F"], ["Ё", "G"], ["Ж", "H"], ["З", "I"], ["И", "J"], ["Й", "K"], ["К", "L"],
    ["Л", "M"], ["М", "N"], ["Н", "O"], ["О", "P"], ["П", "Q"], ["Р", "R"], ["С", "S"], ["Т", "T"], ["У", "U"], ["Ф", "V"], ["Х", "W"], ["Ц", "X"],
    ["Ш", "Y"], ["Щ", "Z"], ["Ъ", ""], ["Ы", ""], ["Ь", ""], ["Э", ""], ["Ю", ""], ["Я", ""]
]

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

const periodicElements = [
    "H (Hydrogen)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg\" width=\"200\" alt=\"Hydrogen\">", "He (Helium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg\" width=\"200\" alt=\"Helium\">", "Li (Lithium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg\" width=\"200\" alt=\"Lithium\">", "Be (Beryllium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/e/e2/Beryllium_%28Be%29.jpg\" width=\"200\" alt=\"Beryllium\">", "B (Boron)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a2/Boron.jpg\" width=\"200\" alt=\"Boron\">", "C (Carbon)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/68/Pure_Carbon.png\" width=\"200\" alt=\"Carbon\">", "N (Nitrogen)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/2d/Nitrogen-glow.jpg\" width=\"200\" alt=\"Nitrogen\">", "O (Oxygen)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a0/Liquid_oxygen_in_a_beaker_%28cropped_and_retouched%29.jpg\" width=\"200\" alt=\"Oxygen\">", "F (Fluorine)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/2c/Fluoro_liquido_a_-196%C2%B0C_1.jpg\" width=\"200\" alt=\"Fluorine\">", "Ne (Neon)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f8/Neon-glow.jpg\" width=\"200\" alt=\"Neon\">", "Na (Sodium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/27/Na_%28Sodium%29.jpg\" width=\"200\" alt=\"Sodium\">", "Mg (Magnesium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3f/Magnesium_crystals.jpg\" width=\"200\" alt=\"Magnesium\">", "Al (Aluminium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3e/Aluminium.jpg\" width=\"200\" alt=\"Aluminium\">", "Si (Silicon)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg\" width=\"200\" alt=\"Silicon\">", "P (Phosphorus)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6d/Phosphorus-purple.jpg\" width=\"200\" alt=\"Phosphorus\">", "S (Sulfur)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/23/Native_sulfur_%28Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia%29_9.jpg\" width=\"200\" alt=\"Sulfur\">", "Cl (Chlorine)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/9/9a/Chlorine-sample-flip.jpg\" width=\"200\" alt=\"Chlorine\">", "Ar (Argon)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/53/Argon-glow.jpg\" width=\"200\" alt=\"Argon\">", "K (Potassium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b3/Potassium.JPG\" width=\"200\" alt=\"Potassium\">", "Ca (Calcium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/7/72/Calcium.jpg\" width=\"200\" alt=\"Calcium\">", "Sc (Scandium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f5/Scandium%2C_Sc.jpg\" width=\"200\" alt=\"Scandium\">", "Ti (Titanium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ec/Titanium.jpg\" width=\"200\" alt=\"Titanium\">", "V (Vanadium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/0a/Vanadium-pieces.jpg\" width=\"200\" alt=\"Vanadium\">", "Cr (Chromium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a1/Chromium.jpg\" width=\"200\" alt=\"Chromium\">", "Mn (Manganese)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/64/Manganese_element.jpg\" width=\"200\" alt=\"Manganese\">", "Fe (Iron)<br><img src=\"https://images-of-elements.com/iron-2.jpg\" width=\"200\" alt=\"Iron\">", "Co (Cobalt)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/62/Cobalt_ore_2.jpg\" width=\"200\" alt=\"Cobalt\">", "Ni (Nickel)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/57/Nickel_chunk.jpg\" width=\"200\" alt=\"Nickel\">", "Cu (Copper)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f0/NatCopper.jpg\" width=\"200\" alt=\"Copper\">", "Zn (Zinc)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/ba/Zinc_%2830_Zn%29.jpg\" width=\"200\" alt=\"Zinc\">", "Ga (Gallium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Solid_gallium_%28Ga%29.jpg\" width=\"200\" alt=\"Gallium\">", "Ge (Germanium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/08/Polycrystalline-germanium.jpg\" width=\"200\" alt=\"Germanium\">", "As (Arsenic)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3b/Arsenic_%2833_As%29.jpg\" width=\"200\" alt=\"Arsenic\">", "Se (Selenium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/7/7f/Selenium.jpg\" width=\"200\" alt=\"Selenium\">", "Br (Bromine)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/8/87/Bromine-ampoule.jpg\" width=\"200\" alt=\"Bromine\">", "Kr (Krypton)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/9/9c/Krypton-glow.jpg\" width=\"200\" alt=\"Krypton\">", "Rb (Rubidium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c9/Rb5.JPG\" width=\"200\" alt=\"Rubidium\">", "Sr (Strontium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/8/84/Strontium-1.jpg\" width=\"200\" alt=\"Strontium\">", "Y (Yttrium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/9/90/Piece_of_Yttrium.jpg\" width=\"200\" alt=\"Yttrium\">", "Zr (Zirconium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/1/1d/Zirconium-pieces.jpg\" width=\"200\" alt=\"Zirconium\">", "Nb (Niobium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c2/Niobium_strips.JPG\" width=\"200\" alt=\"Niobium\">", "Mo (Molybdenum)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f0/Molybdenum.jpg\" width=\"200\" alt=\"Molybdenum\">", "Tc (Technetium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/ab/Technetium-sample-cropped.jpg\" width=\"200\" alt=\"Technetium\">", "Ru (Ruthenium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg\" width=\"200\" alt=\"Ruthenium\">", "Rh (Rhodium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/54/Rhodium_%28Rh%29.jpg\" width=\"200\" alt=\"Rhodium\">", "Pd (Palladium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg\" width=\"200\" alt=\"Palladium\">", "Ag (Silver)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg\" width=\"200\" alt=\"Silver\">", "Cd (Cadmium)<br><img src=\"https://images-of-elements.com/cadmium-4.jpg\" width=\"200\" alt=\"Cadmium\">", "In (Indium)<br><img src=\"https://images-of-elements.com/indium-2.jpg\" width=\"200\" alt=\"Indium\">", "Sn (Tin)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6a/Tin-2.jpg\" width=\"200\" alt=\"Tin\">", "Sb (Antimony)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg\" width=\"200\" alt=\"Antimony\">", "Te (Tellurium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c1/Tellurium2.jpg\" width=\"200\" alt=\"Tellurium\">", "I (Iodine)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c2/Iodine-sample.jpg\" width=\"200\" alt=\"Iodine\">", "Xe (Xenon)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/5d/Xenon-glow.jpg\" width=\"200\" alt=\"Xenon\">", "Cs (Cesium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3d/Cesium.jpg\" width=\"200\" alt=\"Cesium\">", "Ba (Barium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f5/Barium_%2856_Ba%29.jpg\" width=\"200\" alt=\"Barium\">", "La (Lanthanum)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f7/Lanthanum.jpg\" width=\"200\" alt=\"Lanthanum\">", "Ce (Cerium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg\" width=\"200\" alt=\"Cerium\">", "Pr (Praseodymium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg\" width=\"200\" alt=\"Praseodymium\">", "Nd (Neodymium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c9/Neodymium_%2860_Nd%29.jpg\" width=\"200\" alt=\"Neodymium\">", "Pm (Promethium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/5b/Promethium.jpg\" width=\"200\" alt=\"Promethium\">", "Sm (Samarium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/8/88/Samarium-2.jpg\" width=\"200\" alt=\"Samarium\">", "Eu (Europium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6a/Europium.jpg\" width=\"200\" alt=\"Europium\">", "Gd (Gadolinium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c2/Gadolinium-2.jpg\" width=\"200\" alt=\"Gadolinium\">", "Tb (Terbium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg\" width=\"200\" alt=\"Terbium\">", "Dy (Dysprosium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/55/Dysprosium-2.jpg\" width=\"200\" alt=\"Dysprosium\">", "Ho (Holmium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/0a/Holmium2.jpg\" width=\"200\" alt=\"Holmium\">", "Er (Erbium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/2a/Erbium-2.jpg\" width=\"200\" alt=\"Erbium\">", "Tm (Thulium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Thulium-2.jpg\" width=\"200\" alt=\"Thulium\">", "Yb (Ytterbium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg\" width=\"200\" alt=\"Ytterbium\">", "Lu (Lutetium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/e/e8/Lutetium.jpg\" width=\"200\" alt=\"Lutetium\">", "Hf (Hafnium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/1/17/Hafnium_%2872_Hf%29.jpg\" width=\"200\" alt=\"Hafnium\">", "Ta (Tantalum)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/61/Tantalum.jpg\" width=\"200\" alt=\"Tantalum\">", "W (Tungsten)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c8/Tungsten_rod_with_oxidised_surface.jpg\" width=\"200\" alt=\"Tungsten\">", "Re (Rhenium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d9/Pure_rhenium_bead%2C_arc_melted%2C_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg\" width=\"200\" alt=\"Rhenium\">", "Os (Osmium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3c/Osmium-bead.jpg\" width=\"200\" alt=\"Osmium\">", "Ir (Iridium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a8/Iridium-2.jpg\" width=\"200\" alt=\"Iridium\">", "Pt (Platinum)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/68/Platinum_crystals.jpg\" width=\"200\" alt=\"Platinum\">", "Au (Gold)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/8/8a/Gold_%2879_Au%29.jpg\" width=\"200\" alt=\"Gold\">", "Hg (Mercury)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/be/Hydrargyrum_%2880_Hg%29.jpg\" width=\"200\" alt=\"Mercury\">", "Tl (Thallium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/55/Thallium_%2881_Tl%29.jpg\" width=\"200\" alt=\"Thallium\">", "Pb (Lead)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/6/63/Lead-2.jpg\" width=\"200\" alt=\"Lead\">", "Bi (Bismuth)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/a5/Bismuth-2.jpg\" width=\"200\" alt=\"Bismuth\">", "Po (Polonium)<br><img src=\"https://images-of-elements.com/polonium.jpg\" width=\"200\" alt=\"Polonium\">", "At (Astatine)<br><img src=\"https://images-of-elements.com/astatine.jpg\" width=\"200\" alt=\"Astatine\">", "Rn (Radon)<br><img src=\"https://images-of-elements.com/radon.jpg\" width=\"200\" alt=\"Radon\">", "Fr (Francium)<br><img src=\"https://images-of-elements.com/francium.jpg\" width=\"200\" alt=\"Francium\">", "Ra (Radium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bb/Radium226.jpg\" width=\"200\" alt=\"Radium\">", "Ac (Actinium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/2/27/Actinium_sample_%2831481701837%29.png\" width=\"200\" alt=\"Actinium\">", "Th (Thorium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/f7/Thorium-1.jpg\" width=\"200\" alt=\"Thorium\">", "Pa (Protactinium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg\" width=\"200\" alt=\"Protactinium\">", "U (Uranium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg\" width=\"200\" alt=\"Uranium\">", "Np (Neptunium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg\" width=\"200\" alt=\"Neptunium\">", "Pu (Plutonium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg\" width=\"200\" alt=\"Plutonium\">", "Am (Americium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/e/ee/Americium_microscope.jpg\" width=\"200\" alt=\"Americium\">", "Cm (Curium)<br><img src=\"https://images-of-elements.com/s/curium-glow.jpg\" width=\"200\" alt=\"Curium\">", "Bk (Berkelium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkelium.jpg\" width=\"200\" alt=\"Berkelium\">", "Cf (Californium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/9/93/Californium.jpg\" width=\"200\" alt=\"Californium\">", "Es (Einsteinium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg\" width=\"200\" alt=\"Einsteinium\">", "Fm (Fermium)<br><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/58/Ivy_Mike_-_mushroom_cloud.jpg\" width=\"200\" alt=\"Fermium\">", "Md (Mendelevium)<br><img src=\"https://images-of-elements.com/s/mendelevium.jpg\" width=\"200\" alt=\"Mendelevium\">", "No (Nobelium)<br><img src=\"https://images-of-elements.com/nobelium.jpg\" width=\"200\" alt=\"Nobelium\">", "Lr (Lawrencium)<br><img src=\"https://images-of-elements.com/lawrencium.jpg\" width=\"200\" alt=\"Lawrencium\">", "Rf (Rutherfordium)<br><img src=\"https://images-of-elements.com/s/rutherfordium.jpg\" width=\"200\" alt=\"Rutherfordium\">", "Db (Dubnium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Dubnium\">", "Sg (Seaborgium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Seaborgium\">", "Bh (Bohrium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Bohrium\">", "Hs (Hassium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Hassium\">", "Mt (Meitnerium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Meitnerium\">", "Ds (Darmstadtium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Darmstadtium\">", "Rg (Roentgenium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Roentgenium\">", "Cn (Copernicium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Copernicium\">", "Nh (Nihonium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Nihonium\">", "Fl (Flerovium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Flerovium\">", "Mc (Moscovium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Moscovium\">", "Lv (Livermorium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Livermorium\">", "Ts (Tennessine)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Tennessine\">", "Og (Oganesson)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Oganesson\">", "Uue (Ununennium)<br><img src=\"https://images-of-elements.com/s/transactinoid.png\" width=\"200\" alt=\"Ununennium\">"
]


function changeTitle(string){
    while(document.title.length < 7 || document.title.length > 14){
        document.title = methods[0][Math.floor(Math.random() * methods[0].length)](string)
    }
}

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

function sortByLength(string){
    return string.split(" ").sort((string1, string2) => {return string1.length - string2.length}).join(" ")
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

function length(string){
    let result = `Symbols: ${string.length}`

    if(string.split(" ").length > 1){
        result += `<br>Words: ${string.split(" ").length}`
    } else if(string.split(".").length > 1){
        result += `<br>Sentences: ${string.split(".").length}`
    } else if(string.split("").length > 1){
        result += `<br>Sentences: ${string.split(".").length}`
    }

    return result
}

function wordsLength(string){
    return string.split(" ").length
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

    for(let i = 0; i < string.length; i++){
        if(getDivisiors(i).length == 2){
            if(typoData[string[i]] !== undefined){
                result += typoData[string[i]]
            } else if(typoData[string[i].toUpperCase()] !== undefined){
                result += typoData[string.toUpperCase()[i]].toLowerCase()
            } else {
                result += string[i]
            }
        } else {
            result += string[i]
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

// nums

function pow2(string){
    string = parseInt(string)
    if(string > 100 || isNaN(string)) return ""

    return Math.pow(2, string)
}

function factorial(string){
    string = parseInt(string)
    if(string > 171 || isNaN(string)) return ""

    let result = 1;

    if(string == 0) return 1
    for(let i = 1; i < string; i++){
        result *= i
        // console.log(`${result} (${i}/${string})`)
    }

    return result
}

function seqSum(string){
    string = parseInt(string)
    if(string > 1500 || isNaN(string)) return ""

    let result = 0;

    if(string == 0) return 1
    for(let i = 1; i <= string; i++){
        result += i
    }

    return result
}

function digitSum(string){
    let result = 0;

    string = string.split("").forEach((element) => {
        if(isNaN(parseInt(element))) return ""
        result += parseInt(element)})

    return result
}

function chemicalSymbol(n){
    n = Math.abs(parseInt(n))
    if(n > periodicElements.length || isNaN(n)) return ""

    return periodicElements[n - 1]
}

function isPrime(n){
    if([1, 3, 7, 9].includes(n % 10) && digitSum(String(n)) % 3 != 0 & digitSum(String(n)) % 9 != 0){
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


function divisiors(string){
    string = Math.abs(parseInt(string))
    if(string > 30000000 || isNaN(string)) return ""

    let result = "";
    let total = 0;

    for(let i = 2; i < string; i++){
        if(string % i == 0){
            total++
            result += `${i}; `;
        }
    }

    if(total !== 0) result += '<br>'
        
    result += `Total divisiors: ${total}`;

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

function average(strings){
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

    for (var i = 0; i < strings[0].length; i++) {
        if(!strings[1].includes(strings[0][i])){
            result += `<a class="green">${strings[0][i]}</a>`
        }
    }

    return result;
}

function negativeFilter(strings){
    let result = "";

    for (var i = 0; i < strings[0].length; i++) {
        if(strings[1].includes(strings[0][i])){
            result += `<a class="red">${strings[0][i]}</a>`
        }
    }

    return result;
}

function insert(strings){
    let result = "";

    for (var i = 0; i < strings[0].length - 1; i++) {
        result += `<a class="red">${strings[0][i]}</a><a class="green">${strings[1]}</a>`
    }
    result += `<a class="red">${strings[0][strings[0].length - 1]}</a>`

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