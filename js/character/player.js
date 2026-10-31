export {Player};
class Player {
    #playerName;
    constructor(playerName){
        this.#playerName = playerName;
    }

    setPlayerName(playerName){
        this.#playerName = playerName;
    }

    getPlayerName(){
        return this.#playerName;
    }
}