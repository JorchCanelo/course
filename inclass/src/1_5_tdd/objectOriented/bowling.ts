export class BowlingGame {
    private rolls: number[];

    constructor() {
        this.rolls = [];
      }

    roll(pins: number){
        this.rolls = [...this.rolls, pins]
    }

    getScore(){
        let score = 0
        let firstInFrame = 0
        for (let frame = 0; 10 > frame; frame++ ){
            if( this.isStrike( this.rolls[firstInFrame] ) ){
                score += 10 + this.rolls[firstInFrame+1] + this.rolls[firstInFrame+2]
                firstInFrame++
            } else if( this.isSpare( this.rolls[firstInFrame], this.rolls[firstInFrame+1] ) ){

                score += 10 + this.rolls[firstInFrame+2]
                firstInFrame+= 2

            } else {

                score += this.rolls[firstInFrame] + this.rolls[firstInFrame+1]
                firstInFrame += 2  

            }
        }
        return score
    }

    isSpare(firstRoll: number, secondRoll: number){
        return (firstRoll + secondRoll === 10)
    }

    isStrike(roll: number){
        return (roll === 10)
    }

}
//npm run test -- ./src/1_5_tdd/objectOriented/