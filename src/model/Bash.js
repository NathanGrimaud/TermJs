"use strict";
const spawn = require("cross-spawn").spawn;
const exec = require("child_process").exec;

/**
 * @class Bash
 */
export class Bash {
    /**
     * @constructor
     * @param {ConsoleComponent} console - the ref to the console.
     */
    constructor(console) {
        this._console = console;
    }
  /**
   * inserts an output to the console
   *
   * @param {string} data - the text to fill the output
   * @param {string} className - the class added to the output
   * @returns {void}
   */
     insertOutput(data,className) {
        this._console.insertOutput(data,className);
    }
    move(destination){
        process.chdir(destination);
    }
    /**
    * terminal.isWindows :
    * return true if app is running on window
    */
    isWindows() {

        return /^win/.test(process.platform);
    }
    /**
     * stops the instance running command
     *
     * @returns
     */
    stopCommand() {

        if (this._runningCmd !== null && this._runningCmd !== undefined) {

            this._runningCmd.stdin.pause();
            let pid = this._runningCmd.pid;

            if (!this.isWindows())
                this._runningCmd.kill(pid);
            else{
               exec("taskkill /PID " + this._runningCmd.pid + " /T /F", (err, stdout, stderr) => {
                    console.log(err);
                    console.log(stdout);
                    console.log(stderr);
                });
            }
        }
    }
    /**
     * get command called by component
     * and executes it
     * @param {string} command - the input inner string
     */
    exec(command){

        let comm = command.split(" ")[0];
        let args = command.split(" ").filter((val,index)=>index!== 0);
        let path = process.cwd();
        let backlog = `${path}> ${command}`;

        this.insertOutput(backlog,"backlog");

        if(comm === "cd")
            this.move(args[0]);

        else
            this.execCommand(comm,args).then(()=>console.log("done"));
    }

    /**
    * Terminal.execCommand :
    * @param {String} comm - main command
    * @param {String[]} args - command arguments
    * execs a command , needs 2 params, cmd and arguments array
    */
    execCommand(comm, args) {

        return new Promise((resolve, reject) => {


            let command = spawn(comm, args, "utf8", { detached: true });

            this._runningCmd = command;

            command.stdout.on("data", (data) => {

                if (data !== undefined);
                    this.insertOutput(data, "output");

            });

            command.stderr.on("data", (data) => {

                if (data !== undefined)
                    this.insertOutput(data, "output");

            });

            command.on("error", (error) => {
                reject(error);
            });

            command.on("close", () => {
                this._runningCmd = null;
                resolve();
            });

        });
    }
}
