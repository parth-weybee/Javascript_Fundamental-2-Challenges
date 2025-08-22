'use strict;'

const dolphine1Game = 85;
const dolphine2Game = 54;
const dolphine3Game = 41;

const koalas1Game = 24;
const koalas2Game = 34;
const koalas3Game = 27;

const calcAvg = (game1, game2, game3) => {
    return (game1 + game2 + game3) / 3;
}

const dolphineAvg = calcAvg(dolphine1Game, dolphine2Game, dolphine3Game);
const koalasAvg = calcAvg(koalas1Game, koalas2Game, koalas3Game);

const checkWinner = (dolphineAvg, koalasAvg) => {
    if (dolphineAvg > koalasAvg * 2) {
        console.log(`Team Dolphine Wins Score- (${dolphineAvg} , ${koalasAvg})`);
    }
    else if (koalasAvg > dolphineAvg * 2) {
        console.log(`Team Koalas Wins Score- (${koalasAvg} , ${dolphineAvg})`);
    }
    else {
        console.log("No one Wins");
    }
}

checkWinner(dolphineAvg, koalasAvg);