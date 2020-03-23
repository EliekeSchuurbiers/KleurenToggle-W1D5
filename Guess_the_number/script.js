let name = prompt("Welkom! Wat is je naam?");
let nogEenKeer = 1;

while (nogEenKeer) {
    let minWaarde = prompt("Hallo, " + name + ". Wat is de minimale waarde waar je mee wilt spelen?");
    let maxWaarde = prompt("En wat is de maximale waarde waar je mee wilt spelen?")
    let number = prompt("Voer een nummer tussen de " + minWaarde + " en " + maxWaarde + ".");
    let tries = 1;



    function getRandomNumber() {
        let t = Math.random() * (maxWaarde - minWaarde) + minWaarde;
        return Math.round(t);
    };

    let randomNumber = getRandomNumber();
    alert('Pssst, de waarde is ' + randomNumber);
    while (number != randomNumber && tries < 5) {
        if (number < randomNumber) {
            number = prompt("Helaas, dit was poging " + tries + " je zat te laag, raad nog een keer");
        }
        else if (number > randomNumber) {
            number = prompt("Helaas, dit was poging " + tries + " je zat te hoog, raad nog een keer.");
        }
        tries = tries + 1;

    }

    if (number === randomNumber) { alert('Gefeliciteerd, ' + name + ' de waarde is ' + randomNumber + ". Tot de volgende keer"); }
    else { alert("Helaas, je hebt verloren. De waarde was " + randomNumber + "."); }

    nogEenKeer = confirm("Wil je nog een keer spelen?");
}

