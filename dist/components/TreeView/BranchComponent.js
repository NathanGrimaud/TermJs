
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var LeafComponent = require("./LeafComponent").LeafComponent;
var isWindows = require("../../tools.js").isWindows;
/**
 * the representiation of a directory in the tree view
 */

var BranchComponent = exports.BranchComponent = function (_React$Component) {
  _inherits(BranchComponent, _React$Component);

  /**
   * @constructor
   * @param {Object} props  - contains {parent, path, name}
   */

  function BranchComponent(props) {
    _classCallCheck(this, BranchComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BranchComponent).call(this, props));

    _this._children = [];
    _this._path = props.path;
    _this._name = props.name;
    _this._parent = props.parent;
    _this._beenClicked = false;
    _this._process = props.process;
    _this._isLoaded = false;
    return _this;
  }
  /**
   * shows the targeted branch
   */


  _createClass(BranchComponent, [{
    key: "show",
    value: function show() {
      this.refs.icon.innerHTML = "folder_open";
      this.refs.branchWrapper.className = "branch";
      this.refs.children.className = "children shown";
      this.forceUpdate();
    }
    /**
     * hides the tageted branch
     */

  }, {
    key: "hide",
    value: function hide() {
      this.refs.branchWrapper.className = "branch notClicked";
      this.refs.icon.innerHTML = "folder";
      this.refs.children.className = "children hidden";
      this.forceUpdate();
    }
    /**
     * get all the children elements, fill this._children with it
     * @param {string} path - the path of the children
     */

  }, {
    key: "loadChildren",
    value: function loadChildren(path) {
      var _this2 = this;

      var index = 0;
      this._parent.findFolders(path).map(function (value) {
        _this2._children.push(React.createElement(BranchComponent, { path: path, process: _this2._process, parent: _this2._parent, name: value, key: index }));
        index++;
      });

      this._parent.findFiles(path).map(function (value) {
        _this2._children.push(React.createElement(LeafComponent, { name: value, key: index }));
        index++;
      });
    }
  }, {
    key: "move",
    value: function move(path) {
      this._process.exec("cd " + path);
    }
    /**
     * click event on a branch
     */

  }, {
    key: "handleClick",
    value: function handleClick() {
      var path = this._path + "/" + this._name;
      if (this._beenClicked === false && this._isLoaded === false) {

        this.loadChildren(path);
        this._isLoaded = true;
        this.show();
      } else if (this._beenClicked === false) {

        this.show();
      } else if (this._beenClicked === true) {
        this.hide();
      }
      this._beenClicked = !this._beenClicked;
      /**
       * on windows, need to replace / by \
       * needs to build a regex because with a char, replace only do one iteration
       */

      var nextPath = isWindows() ? path.replace(new RegExp("/", "g"), "\\") : path;

      if (process.cwd() !== nextPath) this.move(path);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { ref: "branchWrapper", className: "branch notClicked" },
        React.createElement(
          "div",
          { ref: "nameItem", className: "branchName", onClick: function onClick() {
              return _this3.handleClick();
            } },
          React.createElement(
            "i",
            { ref: "icon", className: "material-icons md-light md-16" },
            "folder"
          ),
          React.createElement(
            "span",
            { className: "nameText" },
            " ",
            this.props.name
          )
        ),
        React.createElement(
          "div",
          { className: "children", ref: "children" },
          this._children
        )
      );
    }
  }]);

  return BranchComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L0JyYW5jaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ04sSUFBTSxnQkFBZ0IsUUFBUSxpQkFBUixFQUEyQixhQUEzQjtBQUN0QixJQUFNLFlBQVksUUFBUSxnQkFBUixFQUEwQixTQUExQjs7Ozs7SUFJTDs7Ozs7Ozs7QUFLWCxXQUxXLGVBS1gsQ0FBWSxLQUFaLEVBQW1COzBCQUxSLGlCQUtROzt1RUFMUiw0QkFNSCxRQURXOztBQUdqQixVQUFLLFNBQUwsR0FBZ0IsRUFBaEIsQ0FIaUI7QUFJakIsVUFBSyxLQUFMLEdBQVcsTUFBTSxJQUFOLENBSk07QUFLakIsVUFBSyxLQUFMLEdBQVksTUFBTSxJQUFOLENBTEs7QUFNakIsVUFBSyxPQUFMLEdBQWUsTUFBTSxNQUFOLENBTkU7QUFPakIsVUFBSyxZQUFMLEdBQW9CLEtBQXBCLENBUGlCO0FBUWpCLFVBQUssUUFBTCxHQUFnQixNQUFNLE9BQU4sQ0FSQztBQVNqQixVQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FUaUI7O0dBQW5COzs7Ozs7ZUFMVzs7MkJBbUJKO0FBQ0wsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsR0FBMkIsYUFBM0IsQ0FESztBQUVMLFdBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsU0FBeEIsR0FBb0MsUUFBcEMsQ0FGSztBQUdMLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsR0FBK0IsZ0JBQS9CLENBSEs7QUFJTCxXQUFLLFdBQUwsR0FKSzs7Ozs7Ozs7MkJBU0E7QUFDTCxXQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLFNBQXhCLEdBQW9DLG1CQUFwQyxDQURLO0FBRUwsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsR0FBMkIsUUFBM0IsQ0FGSztBQUdMLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsR0FBK0IsaUJBQS9CLENBSEs7QUFJTCxXQUFLLFdBQUwsR0FKSzs7Ozs7Ozs7O2lDQVVNLE1BQU07OztBQUNqQixVQUFJLFFBQVEsQ0FBUixDQURhO0FBRWpCLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsSUFBekIsRUFBK0IsR0FBL0IsQ0FBbUMsVUFBQyxLQUFELEVBQVc7QUFDNUMsZUFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixvQkFBQyxlQUFELElBQWlCLE1BQU0sSUFBTixFQUFZLFNBQVMsT0FBSyxRQUFMLEVBQWUsUUFBUSxPQUFLLE9BQUwsRUFBYyxNQUFNLEtBQU4sRUFBYSxLQUFLLEtBQUwsRUFBeEYsQ0FBcEIsRUFENEM7QUFFNUMsZ0JBRjRDO09BQVgsQ0FBbkMsQ0FGaUI7O0FBUWpCLFdBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsQ0FBaUMsVUFBQyxLQUFELEVBQVc7QUFDMUMsZUFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixvQkFBQyxhQUFELElBQWUsTUFBTSxLQUFOLEVBQWEsS0FBSyxLQUFMLEVBQTVCLENBQXBCLEVBRDBDO0FBRTFDLGdCQUYwQztPQUFYLENBQWpDLENBUmlCOzs7O3lCQWNkLE1BQU07QUFDVCxXQUFLLFFBQUwsQ0FBYyxJQUFkLFNBQXlCLElBQXpCLEVBRFM7Ozs7Ozs7O2tDQU1HO0FBQ1osVUFBSSxPQUFPLEtBQUssS0FBTCxHQUFhLEdBQWIsR0FBbUIsS0FBSyxLQUFMLENBRGxCO0FBRVosVUFBSSxLQUFLLFlBQUwsS0FBc0IsS0FBdEIsSUFBK0IsS0FBSyxTQUFMLEtBQW1CLEtBQW5CLEVBQTBCOztBQUUzRCxhQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFGMkQ7QUFHM0QsYUFBSyxTQUFMLEdBQWlCLElBQWpCLENBSDJEO0FBSTNELGFBQUssSUFBTCxHQUoyRDtPQUE3RCxNQU1LLElBQUksS0FBSyxZQUFMLEtBQXNCLEtBQXRCLEVBQTZCOztBQUVwQyxhQUFLLElBQUwsR0FGb0M7T0FBakMsTUFJQSxJQUFJLEtBQUssWUFBTCxLQUFzQixJQUF0QixFQUE0QjtBQUNuQyxhQUFLLElBQUwsR0FEbUM7T0FBaEM7QUFHTCxXQUFLLFlBQUwsR0FBb0IsQ0FBQyxLQUFLLFlBQUw7Ozs7OztBQWZULFVBcUJSLFdBQVcsY0FBYyxLQUFLLE9BQUwsQ0FBYSxJQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWIsRUFBbUMsSUFBbkMsQ0FBZCxHQUF5RCxJQUF6RCxDQXJCSDs7QUF1QlosVUFBSSxRQUFRLEdBQVIsT0FBa0IsUUFBbEIsRUFDRixLQUFLLElBQUwsQ0FBVSxJQUFWLEVBREY7Ozs7NkJBSU87OztBQUVQLGFBQ0U7O1VBQUssS0FBSSxlQUFKLEVBQW9CLFdBQVUsbUJBQVYsRUFBekI7UUFDRTs7WUFBSyxLQUFJLFVBQUosRUFBZSxXQUFVLFlBQVYsRUFBdUIsU0FBUztxQkFBTSxPQUFLLFdBQUw7YUFBTixFQUFwRDtVQUNFOztjQUFHLEtBQUksTUFBSixFQUFXLFdBQVUsK0JBQVYsRUFBZDs7V0FERjtVQUVFOztjQUFNLFdBQVUsVUFBVixFQUFOOztZQUE2QixLQUFLLEtBQUwsQ0FBVyxJQUFYO1dBRi9CO1NBREY7UUFLRTs7WUFBTSxXQUFVLFVBQVYsRUFBcUIsS0FBSSxVQUFKLEVBQTNCO1VBQ0csS0FBSyxTQUFMO1NBTkw7T0FERixDQUZPOzs7O1NBckZFO0VBQXdCLE1BQU0sU0FBTiIsImZpbGUiOiJCcmFuY2hDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgTGVhZkNvbXBvbmVudCA9IHJlcXVpcmUoXCIuL0xlYWZDb21wb25lbnRcIikuTGVhZkNvbXBvbmVudDtcclxuY29uc3QgaXNXaW5kb3dzID0gcmVxdWlyZShcIi4uLy4uL3Rvb2xzLmpzXCIpLmlzV2luZG93cztcclxuLyoqXHJcbiAqIHRoZSByZXByZXNlbnRpYXRpb24gb2YgYSBkaXJlY3RvcnkgaW4gdGhlIHRyZWUgdmlld1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJyYW5jaENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzICAtIGNvbnRhaW5zIHtwYXJlbnQsIHBhdGgsIG5hbWV9XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLl9jaGlsZHJlbj0gW107XHJcbiAgICB0aGlzLl9wYXRoPXByb3BzLnBhdGg7XHJcbiAgICB0aGlzLl9uYW1lPSBwcm9wcy5uYW1lO1xyXG4gICAgdGhpcy5fcGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgdGhpcy5fYmVlbkNsaWNrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX3Byb2Nlc3MgPSBwcm9wcy5wcm9jZXNzO1xyXG4gICAgdGhpcy5faXNMb2FkZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogc2hvd3MgdGhlIHRhcmdldGVkIGJyYW5jaFxyXG4gICAqL1xyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLnJlZnMuaWNvbi5pbm5lckhUTUwgPSBcImZvbGRlcl9vcGVuXCI7XHJcbiAgICB0aGlzLnJlZnMuYnJhbmNoV3JhcHBlci5jbGFzc05hbWUgPSBcImJyYW5jaFwiO1xyXG4gICAgdGhpcy5yZWZzLmNoaWxkcmVuLmNsYXNzTmFtZSA9IFwiY2hpbGRyZW4gc2hvd25cIjtcclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaGlkZXMgdGhlIHRhZ2V0ZWQgYnJhbmNoXHJcbiAgICovXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMucmVmcy5icmFuY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnJhbmNoIG5vdENsaWNrZWRcIjtcclxuICAgIHRoaXMucmVmcy5pY29uLmlubmVySFRNTCA9IFwiZm9sZGVyXCI7XHJcbiAgICB0aGlzLnJlZnMuY2hpbGRyZW4uY2xhc3NOYW1lID0gXCJjaGlsZHJlbiBoaWRkZW5cIjtcclxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogZ2V0IGFsbCB0aGUgY2hpbGRyZW4gZWxlbWVudHMsIGZpbGwgdGhpcy5fY2hpbGRyZW4gd2l0aCBpdFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHBhdGggb2YgdGhlIGNoaWxkcmVuXHJcbiAgICovXHJcbiAgbG9hZENoaWxkcmVuKHBhdGgpIHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB0aGlzLl9wYXJlbnQuZmluZEZvbGRlcnMocGF0aCkubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKDxCcmFuY2hDb21wb25lbnQgcGF0aD17cGF0aH0gcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30gcGFyZW50PXt0aGlzLl9wYXJlbnR9IG5hbWU9e3ZhbHVlfSBrZXk9e2luZGV4fSAvPik7XHJcbiAgICAgIGluZGV4Kys7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy5fcGFyZW50LmZpbmRGaWxlcyhwYXRoKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goPExlYWZDb21wb25lbnQgbmFtZT17dmFsdWV9IGtleT17aW5kZXh9IC8+KTtcclxuICAgICAgaW5kZXgrKztcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgbW92ZShwYXRoKSB7XHJcbiAgICB0aGlzLl9wcm9jZXNzLmV4ZWMoYGNkICR7cGF0aH1gKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogY2xpY2sgZXZlbnQgb24gYSBicmFuY2hcclxuICAgKi9cclxuICBoYW5kbGVDbGljaygpIHtcclxuICAgIGxldCBwYXRoID0gdGhpcy5fcGF0aCArIFwiL1wiICsgdGhpcy5fbmFtZTtcclxuICAgIGlmICh0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gZmFsc2UgJiYgdGhpcy5faXNMb2FkZWQgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihwYXRoKTtcclxuICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuX2JlZW5DbGlja2VkID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2JlZW5DbGlja2VkID0gIXRoaXMuX2JlZW5DbGlja2VkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBvbiB3aW5kb3dzLCBuZWVkIHRvIHJlcGxhY2UgLyBieSBcXFxyXG4gICAgICogbmVlZHMgdG8gYnVpbGQgYSByZWdleCBiZWNhdXNlIHdpdGggYSBjaGFyLCByZXBsYWNlIG9ubHkgZG8gb25lIGl0ZXJhdGlvblxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IG5leHRQYXRoID0gaXNXaW5kb3dzKCkgPyBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChcIi9cIiwgXCJnXCIpLCBcIlxcXFxcIikgOiBwYXRoO1xyXG5cclxuICAgIGlmIChwcm9jZXNzLmN3ZCgpICE9PSBuZXh0UGF0aClcclxuICAgICAgdGhpcy5tb3ZlKHBhdGgpO1xyXG5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcmVmPVwiYnJhbmNoV3JhcHBlclwiIGNsYXNzTmFtZT1cImJyYW5jaCBub3RDbGlja2VkXCIgPlxyXG4gICAgICAgIDxkaXYgcmVmPVwibmFtZUl0ZW1cIiBjbGFzc05hbWU9XCJicmFuY2hOYW1lXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpIH0+XHJcbiAgICAgICAgICA8aSByZWY9XCJpY29uXCIgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtbGlnaHQgbWQtMTZcIiA+Zm9sZGVyPC9pPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVRleHRcIj4ge3RoaXMucHJvcHMubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIiByZWY9XCJjaGlsZHJlblwiPlxyXG4gICAgICAgICAge3RoaXMuX2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==