module.exports = class Letter{
    constructor(char){
        this.char = char;
        this.hidechar = true;
        this.isletter = char.length === 1 && char.match(/[a-z]/i);
    }
    getchar(){
        if(!this.isletter){
            return this.char;
        }
        else if(this.hidechar){
            return "_";
        }
        else{
            return this.char;
        }
    }
    ischar(char){
        if(char === this.char){
            this.hidechar = false;
            return true;
        }
        else{
            return false;
        }
    }
}

