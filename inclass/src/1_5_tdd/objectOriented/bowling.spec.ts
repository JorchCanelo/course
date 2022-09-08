import { BowlingGame } from "./bowling";


describe('A bowling game', () => {
    
  let game:BowlingGame
  beforeEach(() => {
    game = new BowlingGame()
  });

  it('can roll a ball', () =>{
    game.roll(0)
  })

  it('can play a gutter game', () =>{
    rollMany(game, 20, 0)

    expect(game.getScore()).toBe(0)
  })

  it('can play a game with all rolls being 1s', () =>{
    rollMany(game, 20, 1)

    expect(game.getScore()).toBe(20)
  })

  it('can play a game with a spare and 0s aftwerwards', () =>{
    rollMany(game, 2, 5)
    rollMany(game, 18, 0)

    expect(game.getScore()).toBe(10)
  })

  it('can play a game with a spare', () =>{
    rollMany(game, 2, 5)
    game.roll(3)
    rollMany(game, 17, 0)

    expect(game.getScore()).toBe(16)
  })

  it('can play a game with a strike and 0s aftwerwards', () =>{
    game.roll(10)
    rollMany(game, 18, 0)

    expect(game.getScore()).toBe(10)
  })

  it('can play a game with a strike', () =>{
    game.roll(10)
    game.roll(1)
    game.roll(1)
    rollMany(game, 16, 0)

    expect(game.getScore()).toBe(14)
  })

  it('can play a perfect game', () =>{
    rollMany(game, 12, 10)

    expect(game.getScore()).toBe(300)
  })

});

function rollMany(game: BowlingGame, rolls: number, pins: number){
  for(let i = 0; rolls > i; i++){
      game.roll(pins)
  }
}
//npm run test -- ./src/1_5_tdd/objectOriented/