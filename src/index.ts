import * as ex from 'excalibur';

const game = new ex.Engine({
    width: 800,
    height: 600,
});

const player = new ex.Actor({
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    color: ex.Color.Red,
});

game.add(player);

game.start();
