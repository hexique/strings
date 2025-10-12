const data = {
    "lorem_ipsum": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lectus consectetur elit auctor molestie. Integer dapibus nec mauris eget egestas. Cras ac ultrices mauris. Morbi posuere, nisl et pretium tempus, justo nisi aliquam metus, ac molestie arcu lectus ac magna. Etiam porttitor scelerisque sem et tristique. Etiam eget leo non quam tincidunt condimentum lacinia non nunc. Nam non nibh ac nulla interdum suscipit. Nulla facilisi. Integer efficitur vestibulum urna lobortis lobortis. Sed a rhoncus augue. Integer vel dictum mauris, ac cursus neque. Nam scelerisque, purus hendrerit finibus facilisis, urna odio cursus sem, non efficitur sem ex et arcu.",
    "pi": "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679",
}

for(let i = 0; i < Object.keys(data).length; i++){
    console.log(i)
    document.getElementById("result").innerHTML += `<h2>${Object.keys(data)[i]}</h2><p>${Object.values(data)[i]}</p>`;
}