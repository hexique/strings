changeTitle("templates")

function getUnicodeSymbols(start, end){
        let result = ""
        for(let i = start; i<end; i++){
            result += `<a class="gray" title="U+${String(i).padStart(4, "0")}">&#${i}</a>`
        }
        return result
}

const data = {
    "lorem_ipsum": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lectus consectetur elit auctor molestie. Integer dapibus nec mauris eget egestas. Cras ac ultrices mauris. Morbi posuere, nisl et pretium tempus, justo nisi aliquam metus, ac molestie arcu lectus ac magna. Etiam porttitor scelerisque sem et tristique. Etiam eget leo non quam tincidunt condimentum lacinia non nunc. Nam non nibh ac nulla interdum suscipit. Nulla facilisi. Integer efficitur vestibulum urna lobortis lobortis. Sed a rhoncus augue. Integer vel dictum mauris, ac cursus neque. Nam scelerisque, purus hendrerit finibus facilisis, urna odio cursus sem, non efficitur sem ex et arcu.",
    "pi": "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912",
    "alphabet_en": "abcdefghijklmnopqrstuvwxyz",
    "ahlpabet_ru": "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    "ascii": getUnicodeSymbols(32, 127),
    "z": "Слава Богу Z🙏❤️СЛАВА Z🙏❤️АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤️БОЖЕ ХРАНИ Z🙏❤️СПАСИБО ВАМ НАШИ СВО🙏🏼❤️🇷🇺 ХРАНИ ZOV✊🇷🇺💯Слава Богу Z🙏❤️СЛАВА Z🙏❤️АНГЕЛА ХРАНИТЕЛЯ Z",
    "rickroll": "We're no strangers to love<br>You know the rules and so do I (Do I)<br>A full commitment's what I'm thinking of<br>You wouldn't get this from any other guy<br>I just wanna tell you how I'm feeling<br>Gotta make you understand<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>We've known each other for so long<br>Your heart's been aching, but you're too shy to say it (To say it)<br>Inside, we both know what's been going on (Going on)<br>We know the game, and we're gonna play it<br>And if you ask me how I'm feeling<br>Don't tell me you're too blind to see<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>Ooh (Give you up)<br>Ooh-ooh (Give you up)<br>Ooh-ooh<br>Never gonna give, never gonna give (Give you up)<br>Ooh-ooh<br>Never gonna give, never gonna give (Give you up)<br>We've known each other for so long<br>Your heart's been aching, but you're too shy to say it (To say it)<br>Inside, we both know what's been going on (Going on)<br>We know the game, and we're gonna play it<br>I just wanna tell you how I'm feeling<br>Gotta make you understand<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you",
}

for(let i = 0; i < Object.keys(data).length; i++){
    console.log(i)
    document.getElementById("result").innerHTML += `<h2>${Object.keys(data)[i]}</h2><p>${Object.values(data)[i]}</p>`;
}