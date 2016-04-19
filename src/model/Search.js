"use strict";
export class Search{
    constructor(engine){
        this._engine = engine;
        console.log(this._engine);
    }
    search(keyWords,callBack){
        callBack("Sorry, this feature isn\'t availiable yet :/");
    }
}
