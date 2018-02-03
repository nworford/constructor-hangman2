module.exports = class Word{
    constructor(str){
        this.str = str;
        this.letters = [];

        for(char of str){
            this.letters.push(new Letter(char));
        }
    }
    getstr(){
        var str = "";
        for(letter of this.letters){
            str += letter.getchar() + " ";
        }
        return str;
    }
    testchar(char){
        var foundchar = false;
        for(letter of this.letters){
            if(letter.testchar(char)){
                foundchar = true;
            }
        }
        return foundchar;
    }
}