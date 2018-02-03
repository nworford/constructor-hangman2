const Letter = require('./letter.js');

module.exports = class Word{
    constructor(str){
        this.str = str;
        this.letters = [];

        for(let char of str){
            this.letters.push(new Letter(char));
        }
    }
    getstr(){
        var str = "";
        for(let letter of this.letters){
            str += letter.getchar() + " ";
        }
        return str;
    }
    testchar(char){
        var foundchar = false;
        for(let letter of this.letters){
            if(letter.testchar(char)){
                foundchar = true;
            }
        }
        return foundchar;
    }
    isfound(){
        for(let letter of this.letters){
            if(letter.isletter && letter.hidechar){
                return false;  
            }
        }
        return true;
    }
}