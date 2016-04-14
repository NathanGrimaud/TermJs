"use strict";

const fs = require("fs");
const _ = require("lodash");

export class Snippet {
  /**
   * The model to create, update and save a snippet
   *
   * @param {string} name
   * @param {string} command
   * @param {number} key
   * @returns Snippet
   */
  constructor(name, command, key) {

    this._snippetsJson = require("../../private/snippets.json");
    this._name = name;
    this._command = command;
    this._path = process.cwd();
    this._key = key === undefined ? this._snippetsJson.snippets.length + 1 : key;
  }
  pushNewSnippet() {

    this._snippetsJson.snippets.push({
      key: this._key,
      name: this._name,
      command: this._command
    });
    this.save();
  }

  update() {

    let snipIndex = _.findIndex(this._snippetsJson.snippets, (o) => { return o.key === this._key; });
    let snip = { "command": this._command, "name": this._name, "key": this._key };
    this._snippetsJson.snippets[snipIndex] = snip;
    this.save();
  }

  save() {
    /**
     * writeFile uses node instance path, not file path
     */
    console.log(this._path)
    fs.writeFile(this._path + "/private/snippets.json", JSON.stringify(this._snippetsJson), function (err) {
      if (err) throw err;
    });
  }
}
