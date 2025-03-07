//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bikes = [
    { nome: "a", peso: 250 },
    { nome: "b", peso: 50 },
    { nome: "c", peso: 150 },
    { nome: "d", peso: 45 }
]

let minWeight = 1000;
let lightWeightBike = 0;

for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const bikeWeight = bike.peso;
    if (bikeWeight < minWeight) {
        minWeight = bikeWeight;
        lightWeightBike = i;
    }
}

console.log(`La bicicletta più leggera è ${bikes[lightWeightBike].nome} con ${bikes[lightWeightBike].peso}kg`);