"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require("fs");
var _ = require("lodash");

var Snippet = exports.Snippet = function () {
  /**
   * The model to create, update and save a snippet
   *
   * @param {string} name
   * @param {string} command
   * @param {number} key
   * @returns Snippet
   */

  function Snippet(name, command, key) {
    _classCallCheck(this, Snippet);

    this._snippetsJson = require("../../private/snippets.json");
    this._name = name;
    this._command = command;
    this._path = process.cwd();
    this._key = key === undefined ? this._snippetsJson.snippets.length + 1 : key;
  }

  _createClass(Snippet, [{
    key: "pushNewSnippet",
    value: function pushNewSnippet() {

      this._snippetsJson.snippets.push({
        key: this._key,
        name: this._name,
        command: this._command
      });
      this.save();
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var snipIndex = _.findIndex(this._snippetsJson.snippets, function (o) {
        return o.key === _this._key;
      });
      var snip = { "command": this._command, "name": this._name, "key": this._key };
      this._snippetsJson.snippets[snipIndex] = snip;
      this.save();
    }
  }, {
    key: "save",
    value: function save() {
      /**
       * writeFile uses node instance path, not file path
       */
      console.log(this._path);
      fs.writeFile(this._path + "/private/snippets.json", JSON.stringify(this._snippetsJson), function (err) {
        if (err) throw err;
      });
    }
  }]);

  return Snippet;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9TbmlwcGV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxLQUFLLFFBQVEsSUFBUixDQUFMO0FBQ04sSUFBTSxJQUFJLFFBQVEsUUFBUixDQUFKOztJQUVPOzs7Ozs7Ozs7O0FBU1gsV0FUVyxPQVNYLENBQVksSUFBWixFQUFrQixPQUFsQixFQUEyQixHQUEzQixFQUFnQzswQkFUckIsU0FTcUI7O0FBRTlCLFNBQUssYUFBTCxHQUFxQixRQUFRLDZCQUFSLENBQXJCLENBRjhCO0FBRzlCLFNBQUssS0FBTCxHQUFhLElBQWIsQ0FIOEI7QUFJOUIsU0FBSyxRQUFMLEdBQWdCLE9BQWhCLENBSjhCO0FBSzlCLFNBQUssS0FBTCxHQUFhLFFBQVEsR0FBUixFQUFiLENBTDhCO0FBTTlCLFNBQUssSUFBTCxHQUFZLFFBQVEsU0FBUixHQUFvQixLQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsTUFBNUIsR0FBcUMsQ0FBckMsR0FBeUMsR0FBN0QsQ0FOa0I7R0FBaEM7O2VBVFc7O3FDQWlCTTs7QUFFZixXQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsSUFBNUIsQ0FBaUM7QUFDL0IsYUFBSyxLQUFLLElBQUw7QUFDTCxjQUFNLEtBQUssS0FBTDtBQUNOLGlCQUFTLEtBQUssUUFBTDtPQUhYLEVBRmU7QUFPZixXQUFLLElBQUwsR0FQZTs7Ozs2QkFVUjs7O0FBRVAsVUFBSSxZQUFZLEVBQUUsU0FBRixDQUFZLEtBQUssYUFBTCxDQUFtQixRQUFuQixFQUE2QixVQUFDLENBQUQsRUFBTztBQUFFLGVBQU8sRUFBRSxHQUFGLEtBQVUsTUFBSyxJQUFMLENBQW5CO09BQVAsQ0FBckQsQ0FGRztBQUdQLFVBQUksT0FBTyxFQUFFLFdBQVcsS0FBSyxRQUFMLEVBQWUsUUFBUSxLQUFLLEtBQUwsRUFBWSxPQUFPLEtBQUssSUFBTCxFQUE5RCxDQUhHO0FBSVAsV0FBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLFNBQTVCLElBQXlDLElBQXpDLENBSk87QUFLUCxXQUFLLElBQUwsR0FMTzs7OzsyQkFRRjs7OztBQUlMLGNBQVEsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFaLENBSks7QUFLTCxTQUFHLFNBQUgsQ0FBYSxLQUFLLEtBQUwsR0FBYSx3QkFBYixFQUF1QyxLQUFLLFNBQUwsQ0FBZSxLQUFLLGFBQUwsQ0FBbkUsRUFBd0YsVUFBVSxHQUFWLEVBQWU7QUFDckcsWUFBSSxHQUFKLEVBQVMsTUFBTSxHQUFOLENBQVQ7T0FEc0YsQ0FBeEYsQ0FMSzs7OztTQW5DSSIsImZpbGUiOiJTbmlwcGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgU25pcHBldCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1vZGVsIHRvIGNyZWF0ZSwgdXBkYXRlIGFuZCBzYXZlIGEgc25pcHBldFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlcclxuICAgKiBAcmV0dXJucyBTbmlwcGV0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobmFtZSwgY29tbWFuZCwga2V5KSB7XHJcblxyXG4gICAgdGhpcy5fc25pcHBldHNKc29uID0gcmVxdWlyZShcIi4uLy4uL3ByaXZhdGUvc25pcHBldHMuanNvblwiKTtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fY29tbWFuZCA9IGNvbW1hbmQ7XHJcbiAgICB0aGlzLl9wYXRoID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgIHRoaXMuX2tleSA9IGtleSA9PT0gdW5kZWZpbmVkID8gdGhpcy5fc25pcHBldHNKc29uLnNuaXBwZXRzLmxlbmd0aCArIDEgOiBrZXk7XHJcbiAgfVxyXG4gIHB1c2hOZXdTbmlwcGV0KCkge1xyXG5cclxuICAgIHRoaXMuX3NuaXBwZXRzSnNvbi5zbmlwcGV0cy5wdXNoKHtcclxuICAgICAga2V5OiB0aGlzLl9rZXksXHJcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUsXHJcbiAgICAgIGNvbW1hbmQ6IHRoaXMuX2NvbW1hbmRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zYXZlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcblxyXG4gICAgbGV0IHNuaXBJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuX3NuaXBwZXRzSnNvbi5zbmlwcGV0cywgKG8pID0+IHsgcmV0dXJuIG8ua2V5ID09PSB0aGlzLl9rZXk7IH0pO1xyXG4gICAgbGV0IHNuaXAgPSB7IFwiY29tbWFuZFwiOiB0aGlzLl9jb21tYW5kLCBcIm5hbWVcIjogdGhpcy5fbmFtZSwgXCJrZXlcIjogdGhpcy5fa2V5IH07XHJcbiAgICB0aGlzLl9zbmlwcGV0c0pzb24uc25pcHBldHNbc25pcEluZGV4XSA9IHNuaXA7XHJcbiAgICB0aGlzLnNhdmUoKTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICAvKipcclxuICAgICAqIHdyaXRlRmlsZSB1c2VzIG5vZGUgaW5zdGFuY2UgcGF0aCwgbm90IGZpbGUgcGF0aFxyXG4gICAgICovXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9wYXRoKVxyXG4gICAgZnMud3JpdGVGaWxlKHRoaXMuX3BhdGggKyBcIi9wcml2YXRlL3NuaXBwZXRzLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fc25pcHBldHNKc29uKSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19