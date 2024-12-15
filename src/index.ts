import * as ex from 'excalibur';

const game = new ex.Engine({
    width: 1000,
    height: 800,
});

const player = new ex.Actor({
    x: 200,
    y: 200,
    width: 50,
    height: 50,
    color: ex.Color.Red,
});

const dog = new ex.Actor({
    x: 400,
    y: 100,
    width: 50,
    height: 50,
    color: ex.Color.Black,
});

game.add(player);
game.add(dog);

game.start();
