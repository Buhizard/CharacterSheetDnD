export {Skill};

class Skill {
    #name;
    #value;
    #baseStat;
    #proficiency;
    #hasProficiency;
    #hasExpertice;
    
    constructor(name){
        this.name = name;
        this.#hasProficiency = false;
        this.#hasExpertice = false;
        this.#proficiency = 0;
    };

    //Setters
    setName(name){
        this.#name = name;
    }

    setHasProficiency(hasProficiency){
        this.#hasProficiency = hasProficiency;
    }
    
    setHasExpertice(hasExpertice){
        this.#hasExpertice = hasExpertice;
    }

    setProficiency(proficiency){
        this.#proficiency = proficiency;
    }

    setBaseStat(baseStat){
        this.#baseStat = baseStat;
    }

    #setValue(){
        let value = this.#baseStat;
        if (this.#hasProficiency){
            value += this.#proficiency;
            
            if (this.#hasExpertice){
                value += this.#proficiency;
            }
        }

        this.#value = value;
    }

    //Getters
    getValue(){
        this.#setValue();
        return this.#value;
    }

    getName(){
        return this.#name;
    }
    
    getProficiency(){
        return this.#proficiency;
    }

    getHasProficiency(){
        return this.#hasProficiency;
    }

    getHasExpertice(){
        return this.#hasExpertice;
    }
}