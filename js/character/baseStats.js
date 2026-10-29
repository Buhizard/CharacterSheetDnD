export {BaseStats};

class BaseStats {
    //Strength
    #strength;
    #strengthModifier;
 
    //Dexterity
    #dexterity;
    #dexterityModifier;
    
    //Constitution
    #constitution;
    #constitutionModifier;
    
    //Inteligence
    #inteligence;
    #inteligenceModifier;
    
    //Wisdom
    #wisdom;
    #wisdomModifier;
    
    //Charisma
    #charisma;
    #charismaModifier;
    
    constructor(){};

    //getters
    getStrength(){
        return this.#strength;
    }

    getStrengthModifier(){
        return this.#strengthModifier;
    }
    //setters
    setStrength(strength){
        this.#strength = strength;
        this.#strengthModifier = Math.floor((strength - 10) / 2);
    }
}