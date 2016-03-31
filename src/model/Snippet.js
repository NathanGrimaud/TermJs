"use strict";

let fs = require("fs");

export class Snippet {
  /**
   * The model to create, update and save a snippet
   *
   * @param {string} name
   * @param {string} command
   * @returns Snippet
   */
  constructor(name, command) {
    this._snippetsJson = require("../private/snippets.json");

    this._name = name;
    this._command = command;
    this._key = this._snippetsJson.snippets.length + 1;
    this._snippetsJson.snippets.push({
      key: this._key,
      name: this._name,
      command: this._command
    });

  }
  save() {

    console.log(require("../private/snippets.json"));

    fs.writeFile("./dist/private/snippets.json",JSON.stringify(this._snippetsJson), function (err) {
            if (err) throw err;
            console.log(require("../private/snippets.json"));
        });
  }
  update(name, command) {

    if (this._name !== name)
      this._name = name;
    if (this._command !== command)
      this._command = command;
  }
}
