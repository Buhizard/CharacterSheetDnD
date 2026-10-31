export {CharacterInfo};

class CharacterInfo{
    #name;
    #characterClass;
    #level;
    #characterSubClass;
    #subClassLevel;
    #background;
    #race;
    #alignment;
    #experiencePoints;
    #proficiency;

    constructor(){
        this.#level = 1;
        this.#subClassLevel = 0;
    }

    //Setters
    setName(name){
        this.#name = name;
    };

    setCharacterClass(characterClass){
        this.#characterClass = characterClass;
    };

    setLevel(level){
        this.#level = level;
    };

    setCharacterSubClass(characterSubClass){
        this.#characterClass = characterSubClass;
    };

    setSubClassLevel(subClassLevel){
        this.#subClassLevel = subClassLevel;
    };

    setBackground(background){
        this.#background = background;
    };

    setRace(race){
        this.#race = race;
    };

    setAlignment(alignment){
        this.#alignment = alignment;
    };

    setExperiencePoints(experience){
        this.#experiencePoints = experience
    };

    #setProficiency(){
        this.#proficiency = Math.floor(2 + ((this.#level + this.#subClassLevel) - 1) / 4);
    };

    //Getters
    getName(){
        return this.#name;
    };
    getCharacterClass(){
        return this.#characterClass;
    };
    getLevel(){
        return this.#level;
    };
    getCharacterSubClass(){
        return this.#characterSubClass;
    };
    getSubClassLevel(){
        return this.#subClassLevel;
    };
    getBackground(){
        return this.#background;
    };
    getRace(){
        return this.#race;
    };
    getAlignment(){
        return this.#alignment;
    };
    getExperiencePoints(){
        return this.#experiencePoints;
    };
    getProficiency(){
        this.#setProficiency();
        return this.#proficiency;
    };
}