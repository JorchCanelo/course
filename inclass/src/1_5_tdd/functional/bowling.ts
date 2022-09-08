//the code
type State = {rolls: number}

const initialState = {rolls:[]}

export const createGame = (State: State = initialState) => Object.freeze({
    roll: (pins: number) => roll(state,pins),
    score:() => score(state)
})

const roll = (State: State, pins: number) => {
    const rolls = [...state.rolls, pins]
    return createGame({rolls})
}

const score = ({rolls}: State) => {
    let score = 0
    let firstInFrame = 0
    for (let frame = 0; 10>frame; frmae++ ){
        if(rolls[firstInFrame] === 10){f
            score += 10 + rolls[firstInFrame+1] + rolls[firstInFrame+2]
            firstInFrame++
        }else if(rolls[firstInFrame] + rolls[firstInFrame+1] === 10){
            score += 10 + rolls[firstInFrame+2]
            firstInFrame+= 2
        } else {
            score += rolls[firstInFrame] + rolls[firstInFrame+1]
            firstInFrame+= 2
        }
    }
    return score
}

export type Game = ReturnType<typeof createGame>