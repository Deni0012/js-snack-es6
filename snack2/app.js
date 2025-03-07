//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti fatti”  e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Squadre
const squads = [
    { name: "Inter", score: 0, fouls: 0 },
    { name: "Milan", score: 0, fouls: 0 },
    { name: "Atalanta", score: 0, fouls: 0 },
    { name: "Lazio", score: 0, fouls: 0 },
    { name: "Fiorentina", score: 0, fouls: 0 }
]

const squadsFouls = []

// Generazione randomica dei numeri
const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

for (let i = 0; i < squads.length; i++) {
    team = squads[i];
    team.score = randomNumber(5, 100);
    team.fouls = randomNumber(1, 50);
    squadsFouls.push({ nome: team.name, fouls: team.fouls })
    console.log(`${team.name} ha fatto ${team.score} punti ed ha subito ${team.fouls} falli`)
}

console.log(squadsFouls);