import {createGame, Game} from "./bowling"

describe('A bowling game', () => {
    let game: Game
    beforeEach(() => {
        game = createGame()
    })

    it('can roll a ball', () =>{
        game = game.roll(0)
    })

    it('can play a gutter game', () =>{
        game = rollMany(game, 20, 0)

        expect(game.score()).toBe(0)
    })

    it('can roll a game with all ones', () =>{
        game = rollMany(game, 20, 1)

        expect(game.score()).toBe(20)
    })

    it('can roll a spare', () =>{
        game = game.roll(5)
        game.roll(5)
        game.roll(3)

        game = rollMany(game, 17, 0)

        expect(game.score()).toBe(16)
    })

    it('can roll a strike', () =>{
        game = game.roll(10)
        game.roll(1)
        game.roll(1)

        game = rollMany(game, 16, 0)

        expect(game.score()).toBe(14)
    })

    it('can roll a PERFECT GAME', () =>{
        game = rollMany(game, 12, 10)

        expect(game.score()).toBe(300)
    })

});

function rollMany(game: Game, rolls: number, pins: number){
    for(let i = 0; rolls > i; i++){
        game = game.roll(pins)
    }
    return game
}
