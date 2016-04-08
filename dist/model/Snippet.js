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

      fs.writeFile("./private/snippets.json", JSON.stringify(this._snippetsJson), function (err) {
        if (err) throw err;
      });
    }
  }]);

  return Snippet;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9TbmlwcGV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxLQUFLLFFBQVEsSUFBUixDQUFMO0FBQ04sSUFBTSxJQUFJLFFBQVEsUUFBUixDQUFKOztJQUVPOzs7Ozs7Ozs7O0FBU1gsV0FUVyxPQVNYLENBQVksSUFBWixFQUFrQixPQUFsQixFQUE0QixHQUE1QixFQUFpQzswQkFUdEIsU0FTc0I7O0FBRTdCLFNBQUssYUFBTCxHQUFxQixRQUFRLDZCQUFSLENBQXJCLENBRjZCO0FBRzdCLFNBQUssS0FBTCxHQUFhLElBQWIsQ0FINkI7QUFJN0IsU0FBSyxRQUFMLEdBQWdCLE9BQWhCLENBSjZCOztBQU03QixTQUFLLElBQUwsR0FBWSxRQUFRLFNBQVIsR0FBb0IsS0FBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLE1BQTVCLEdBQXFDLENBQXJDLEdBQXlDLEdBQTdELENBTmlCO0dBQWpDOztlQVRXOztxQ0FpQks7O0FBRWQsV0FBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLElBQTVCLENBQWlDO0FBQy9CLGFBQUssS0FBSyxJQUFMO0FBQ0wsY0FBTSxLQUFLLEtBQUw7QUFDTixpQkFBUyxLQUFLLFFBQUw7T0FIWCxFQUZjO0FBT2QsV0FBSyxJQUFMLEdBUGM7Ozs7NkJBVVI7OztBQUVOLFVBQUksWUFBWSxFQUFFLFNBQUYsQ0FBWSxLQUFLLGFBQUwsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBQyxDQUFELEVBQU87QUFBRSxlQUFPLEVBQUUsR0FBRixLQUFVLE1BQUssSUFBTCxDQUFuQjtPQUFQLENBQXJELENBRkU7QUFHTixVQUFJLE9BQU8sRUFBQyxXQUFVLEtBQUssUUFBTCxFQUFjLFFBQU8sS0FBSyxLQUFMLEVBQVcsT0FBTSxLQUFLLElBQUwsRUFBeEQsQ0FIRTtBQUlOLFdBQUssYUFBTCxDQUFtQixRQUFuQixDQUE0QixTQUE1QixJQUF5QyxJQUF6QyxDQUpNO0FBS04sV0FBSyxJQUFMLEdBTE07Ozs7MkJBUUQ7O0FBRUwsU0FBRyxTQUFILENBQWEseUJBQWIsRUFBdUMsS0FBSyxTQUFMLENBQWUsS0FBSyxhQUFMLENBQXRELEVBQTJFLFVBQVUsR0FBVixFQUFlO0FBQ2xGLFlBQUksR0FBSixFQUFTLE1BQU0sR0FBTixDQUFUO09BRG1FLENBQTNFLENBRks7Ozs7U0FuQ0kiLCJmaWxlIjoiU25pcHBldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbmNvbnN0IF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuaXBwZXQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtb2RlbCB0byBjcmVhdGUsIHVwZGF0ZSBhbmQgc2F2ZSBhIHNuaXBwZXRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1hbmRcclxuICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XHJcbiAgICogQHJldHVybnMgU25pcHBldFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNvbW1hbmQgLCBrZXkpIHtcclxuXHJcbiAgICAgIHRoaXMuX3NuaXBwZXRzSnNvbiA9IHJlcXVpcmUoXCIuLi8uLi9wcml2YXRlL3NuaXBwZXRzLmpzb25cIik7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl9jb21tYW5kID0gY29tbWFuZDtcclxuXHJcbiAgICAgIHRoaXMuX2tleSA9IGtleSA9PT0gdW5kZWZpbmVkID8gdGhpcy5fc25pcHBldHNKc29uLnNuaXBwZXRzLmxlbmd0aCArIDEgOiBrZXk7XHJcbiAgICB9XHJcbiAgcHVzaE5ld1NuaXBwZXQoKXtcclxuXHJcbiAgICB0aGlzLl9zbmlwcGV0c0pzb24uc25pcHBldHMucHVzaCh7XHJcbiAgICAgIGtleTogdGhpcy5fa2V5LFxyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLFxyXG4gICAgICBjb21tYW5kOiB0aGlzLl9jb21tYW5kXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2F2ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCl7XHJcblxyXG4gICAgbGV0IHNuaXBJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuX3NuaXBwZXRzSnNvbi5zbmlwcGV0cywgKG8pID0+IHsgcmV0dXJuIG8ua2V5ID09PSB0aGlzLl9rZXk7fSk7XHJcbiAgICBsZXQgc25pcCA9IHtcImNvbW1hbmRcIjp0aGlzLl9jb21tYW5kLFwibmFtZVwiOnRoaXMuX25hbWUsXCJrZXlcIjp0aGlzLl9rZXl9O1xyXG4gICAgdGhpcy5fc25pcHBldHNKc29uLnNuaXBwZXRzW3NuaXBJbmRleF0gPSBzbmlwO1xyXG4gICAgdGhpcy5zYXZlKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG5cclxuICAgIGZzLndyaXRlRmlsZShcIi4vcHJpdmF0ZS9zbmlwcGV0cy5qc29uXCIsSlNPTi5zdHJpbmdpZnkodGhpcy5fc25pcHBldHNKc29uKSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==