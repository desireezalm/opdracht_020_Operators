//OPDRACHT 019 - DEEL 1
const age = 18;
console.log("OPDRACHT 19 - DEEL 1")

if (age >= 18) {
    console.log("U bent 18 jaar of ouder, dus u mag naar binnen")
} else {
    console.log("U bent jonger dan 18 jaar, dus U mag helaas niet naar binnen")
}

//na een constant een variable declareren werkt niet. Een constant blijft hetzelfde.


//OPDRACHT 019 - DEEL 2
const isFemale = false;
console.log("OPDRACHT 19 - DEEL 2")

if (isFemale == true) {
    console.log("U bent vrouw, dus u mag naar binnen")
} else {
    console.log("U bent geen vrouw, graag uw ID bewijs laten zien")
}


//OPDRACHT 019 - DEEL 3
const driverStatus = 'Bob';
console.log("OPDRACHT 19 - DEEL 3")

if (driverStatus == 'Bob') {
    console.log("De bestuurder is de Bob, dus hij of zij mag rijden")
} else {
    console.log("De bestuurder is niet de Bob, dus hij of zij mag niet rijden")
}

//OPDRACHT 020 - DEEL 1
console.log("OPDRACHT 20 - DEEL 1")

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting")
} else {
    console.log("Je komt niet in aanmerking voor korting")
}

//OPDRACHT 020 - DEEL 2
console.log("OPDRACHT 20 - DEEL 2")
const naam = "Desiree";

if (naam == "Sarah" || naam == "Bram") {
    console.log("Gefeliciteerd, je hebt recht op een gratis biertje")
} else {
    console.log("Helaas, je hebt pech en krijgt geen gratis biertje")
}

//OPDRACHT 020 - DEEL 3
console.log("OPDRACHT 20 - DEEL 3")
const totalAmount = 101;

if (totalAmount >= 100) {
    console.log("Gefeliciteerd, je krijgt een gratis flesje champagne!")
} else if (totalAmount >= 50) {
    console.log("Gefeliciteerd, je krijgt een gratis portie nacho's!")
} else if (totalAmount >= 25) {
    console.log("Gefeliciteerd, je krijgt een gratis portie (vega) bitterballen!")
} else {
    console.log("Helaas, je komt niet in aanmerking voor een gratis tractatie.")
}