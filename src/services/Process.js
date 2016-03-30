"use strict";


export class Process {
    /**
     * class Process
     * @constructor
     * @param {Console} term - the terminal instance the current term will use
     */
    constructor(term) {
        this._console = term;
    }
    /**
     * @function Process.exec
     * @param {String} command 
     * - the command that will be sent to the terminal instance
     */
    exec(command) {
        this._console.exec(command);
    }
    stopCommand(){
        this._console.stopCommand();
    }


}