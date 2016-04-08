
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

    _this.state = {
      children: [],
      path: props.path,
      name: props.name
    };
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
      console.log(this.refs.icon.innerHTML);
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
      console.log(this.refs.icon.innerHTML);
      this.refs.branchWrapper.className = "branch notClicked";
      this.refs.icon.innerHTML = "folder";
      this.refs.children.className = "children hidden";
      this.forceUpdate();
    }
    /**
     * get all the children elements, fill this.state.children with it
     * @param {string} path - the path of the children
     */

  }, {
    key: "loadChildren",
    value: function loadChildren(path) {
      var _this2 = this;

      var index = 0;
      this._parent.findFolders(path).map(function (value) {
        _this2.state.children.push(React.createElement(BranchComponent, { path: path, process: _this2._process, parent: _this2._parent, name: value, key: index }));
        index++;
      });

      this._parent.findFiles(path).map(function (value) {
        _this2.state.children.push(React.createElement(LeafComponent, { name: value, key: index }));
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
      var path = this.state.path + "/" + this.state.name;
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

      var nextPath = this._process.isWindows() ? path.replace(new RegExp("/", "g"), "\\") : path;

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
          this.state.children
        )
      );
    }
  }]);

  return BranchComponent;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L0JyYW5jaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ04sSUFBTSxnQkFBZ0IsUUFBUSxpQkFBUixFQUEyQixhQUEzQjs7Ozs7SUFJVDs7Ozs7Ozs7QUFLWCxXQUxXLGVBS1gsQ0FBWSxLQUFaLEVBQW1COzBCQUxSLGlCQUtROzt1RUFMUiw0QkFNSCxRQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGdCQUFVLEVBQVY7QUFDQSxZQUFNLE1BQU0sSUFBTjtBQUNOLFlBQU0sTUFBTSxJQUFOO0tBSFIsQ0FGaUI7QUFPakIsVUFBSyxPQUFMLEdBQWUsTUFBTSxNQUFOLENBUEU7QUFRakIsVUFBSyxZQUFMLEdBQW9CLEtBQXBCLENBUmlCO0FBU2pCLFVBQUssUUFBTCxHQUFnQixNQUFNLE9BQU4sQ0FUQztBQVVqQixVQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FWaUI7O0dBQW5COzs7Ozs7ZUFMVzs7MkJBb0JKO0FBQ0wsY0FBUSxHQUFSLENBQVksS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsQ0FBWixDQURLO0FBRUwsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsR0FBMkIsYUFBM0IsQ0FGSztBQUdMLFdBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsU0FBeEIsR0FBb0MsUUFBcEMsQ0FISztBQUlMLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsR0FBK0IsZ0JBQS9CLENBSks7QUFLTCxXQUFLLFdBQUwsR0FMSzs7Ozs7Ozs7MkJBVUE7QUFDTCxjQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsU0FBZixDQUFaLENBREs7QUFFTCxXQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLFNBQXhCLEdBQW9DLG1CQUFwQyxDQUZLO0FBR0wsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsR0FBMkIsUUFBM0IsQ0FISztBQUlMLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsR0FBK0IsaUJBQS9CLENBSks7QUFLTCxXQUFLLFdBQUwsR0FMSzs7Ozs7Ozs7O2lDQVdNLE1BQU07OztBQUNqQixVQUFJLFFBQVEsQ0FBUixDQURhO0FBRWpCLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsSUFBekIsRUFBK0IsR0FBL0IsQ0FBbUMsVUFBQyxLQUFELEVBQVc7QUFDNUMsZUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixJQUFwQixDQUF5QixvQkFBQyxlQUFELElBQWlCLE1BQU0sSUFBTixFQUFZLFNBQVMsT0FBSyxRQUFMLEVBQWUsUUFBUSxPQUFLLE9BQUwsRUFBYyxNQUFNLEtBQU4sRUFBYSxLQUFLLEtBQUwsRUFBeEYsQ0FBekIsRUFENEM7QUFFNUMsZ0JBRjRDO09BQVgsQ0FBbkMsQ0FGaUI7O0FBUWpCLFdBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsQ0FBaUMsVUFBQyxLQUFELEVBQVc7QUFDMUMsZUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixJQUFwQixDQUF5QixvQkFBQyxhQUFELElBQWUsTUFBTSxLQUFOLEVBQWEsS0FBSyxLQUFMLEVBQTVCLENBQXpCLEVBRDBDO0FBRTFDLGdCQUYwQztPQUFYLENBQWpDLENBUmlCOzs7O3lCQWNkLE1BQU07QUFDVCxXQUFLLFFBQUwsQ0FBYyxJQUFkLFNBQXlCLElBQXpCLEVBRFM7Ozs7Ozs7O2tDQU1HO0FBQ1osVUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsR0FBbEIsR0FBd0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUR2QjtBQUVaLFVBQUksS0FBSyxZQUFMLEtBQXNCLEtBQXRCLElBQStCLEtBQUssU0FBTCxLQUFtQixLQUFuQixFQUEwQjs7QUFFM0QsYUFBSyxZQUFMLENBQWtCLElBQWxCLEVBRjJEO0FBRzNELGFBQUssU0FBTCxHQUFpQixJQUFqQixDQUgyRDtBQUkzRCxhQUFLLElBQUwsR0FKMkQ7T0FBN0QsTUFNSyxJQUFJLEtBQUssWUFBTCxLQUFzQixLQUF0QixFQUE2Qjs7QUFFcEMsYUFBSyxJQUFMLEdBRm9DO09BQWpDLE1BSUEsSUFBSSxLQUFLLFlBQUwsS0FBc0IsSUFBdEIsRUFBNEI7QUFDbkMsYUFBSyxJQUFMLEdBRG1DO09BQWhDO0FBR0wsV0FBSyxZQUFMLEdBQW9CLENBQUMsS0FBSyxZQUFMOzs7Ozs7QUFmVCxVQXFCUixXQUFXLEtBQUssUUFBTCxDQUFjLFNBQWQsS0FBNEIsS0FBSyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFiLEVBQW1DLElBQW5DLENBQTVCLEdBQXVFLElBQXZFLENBckJIOztBQXVCWixVQUFJLFFBQVEsR0FBUixPQUFrQixRQUFsQixFQUNGLEtBQUssSUFBTCxDQUFVLElBQVYsRUFERjs7Ozs2QkFJTzs7O0FBRVAsYUFDRTs7VUFBSyxLQUFJLGVBQUosRUFBb0IsV0FBVSxtQkFBVixFQUF6QjtRQUNFOztZQUFLLEtBQUksVUFBSixFQUFlLFdBQVUsWUFBVixFQUF1QixTQUFTO3FCQUFNLE9BQUssV0FBTDthQUFOLEVBQXBEO1VBQ0U7O2NBQUcsS0FBSSxNQUFKLEVBQVcsV0FBVSwrQkFBVixFQUFkOztXQURGO1VBRUU7O2NBQU0sV0FBVSxVQUFWLEVBQU47O1lBQTZCLEtBQUssS0FBTCxDQUFXLElBQVg7V0FGL0I7U0FERjtRQUtFOztZQUFNLFdBQVUsVUFBVixFQUFxQixLQUFJLFVBQUosRUFBM0I7VUFDRyxLQUFLLEtBQUwsQ0FBVyxRQUFYO1NBTkw7T0FERixDQUZPOzs7O1NBeEZFO0VBQXdCLE1BQU0sU0FBTiIsImZpbGUiOiJCcmFuY2hDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgTGVhZkNvbXBvbmVudCA9IHJlcXVpcmUoXCIuL0xlYWZDb21wb25lbnRcIikuTGVhZkNvbXBvbmVudDtcclxuLyoqXHJcbiAqIHRoZSByZXByZXNlbnRpYXRpb24gb2YgYSBkaXJlY3RvcnkgaW4gdGhlIHRyZWUgdmlld1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJyYW5jaENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzICAtIGNvbnRhaW5zIHtwYXJlbnQsIHBhdGgsIG5hbWV9XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgcGF0aDogcHJvcHMucGF0aCxcclxuICAgICAgbmFtZTogcHJvcHMubmFtZVxyXG4gICAgfTtcclxuICAgIHRoaXMuX3BhcmVudCA9IHByb3BzLnBhcmVudDtcclxuICAgIHRoaXMuX2JlZW5DbGlja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9wcm9jZXNzID0gcHJvcHMucHJvY2VzcztcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHNob3dzIHRoZSB0YXJnZXRlZCBicmFuY2hcclxuICAgKi9cclxuICBzaG93KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5yZWZzLmljb24uaW5uZXJIVE1MKTtcclxuICAgIHRoaXMucmVmcy5pY29uLmlubmVySFRNTCA9IFwiZm9sZGVyX29wZW5cIjtcclxuICAgIHRoaXMucmVmcy5icmFuY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnJhbmNoXCI7XHJcbiAgICB0aGlzLnJlZnMuY2hpbGRyZW4uY2xhc3NOYW1lID0gXCJjaGlsZHJlbiBzaG93blwiO1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoaWRlcyB0aGUgdGFnZXRlZCBicmFuY2hcclxuICAgKi9cclxuICBoaWRlKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5yZWZzLmljb24uaW5uZXJIVE1MKTtcclxuICAgIHRoaXMucmVmcy5icmFuY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnJhbmNoIG5vdENsaWNrZWRcIlxyXG4gICAgdGhpcy5yZWZzLmljb24uaW5uZXJIVE1MID0gXCJmb2xkZXJcIjtcclxuICAgIHRoaXMucmVmcy5jaGlsZHJlbi5jbGFzc05hbWUgPSBcImNoaWxkcmVuIGhpZGRlblwiO1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBnZXQgYWxsIHRoZSBjaGlsZHJlbiBlbGVtZW50cywgZmlsbCB0aGlzLnN0YXRlLmNoaWxkcmVuIHdpdGggaXRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIG9mIHRoZSBjaGlsZHJlblxyXG4gICAqL1xyXG4gIGxvYWRDaGlsZHJlbihwYXRoKSB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgdGhpcy5fcGFyZW50LmZpbmRGb2xkZXJzKHBhdGgpLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5jaGlsZHJlbi5wdXNoKDxCcmFuY2hDb21wb25lbnQgcGF0aD17cGF0aH0gcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30gcGFyZW50PXt0aGlzLl9wYXJlbnR9IG5hbWU9e3ZhbHVlfSBrZXk9e2luZGV4fSAvPik7XHJcbiAgICAgIGluZGV4Kys7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy5fcGFyZW50LmZpbmRGaWxlcyhwYXRoKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4ucHVzaCg8TGVhZkNvbXBvbmVudCBuYW1lPXt2YWx1ZX0ga2V5PXtpbmRleH0gLz4pO1xyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICBtb3ZlKHBhdGgpIHtcclxuICAgIHRoaXMuX3Byb2Nlc3MuZXhlYyhgY2QgJHtwYXRofWApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBjbGljayBldmVudCBvbiBhIGJyYW5jaFxyXG4gICAqL1xyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgbGV0IHBhdGggPSB0aGlzLnN0YXRlLnBhdGggKyBcIi9cIiArIHRoaXMuc3RhdGUubmFtZTtcclxuICAgIGlmICh0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gZmFsc2UgJiYgdGhpcy5faXNMb2FkZWQgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihwYXRoKTtcclxuICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuX2JlZW5DbGlja2VkID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2JlZW5DbGlja2VkID0gIXRoaXMuX2JlZW5DbGlja2VkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBvbiB3aW5kb3dzLCBuZWVkIHRvIHJlcGxhY2UgLyBieSBcXFxyXG4gICAgICogbmVlZHMgdG8gYnVpbGQgYSByZWdleCBiZWNhdXNlIHdpdGggYSBjaGFyLCByZXBsYWNlIG9ubHkgZG8gb25lIGl0ZXJhdGlvblxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IG5leHRQYXRoID0gdGhpcy5fcHJvY2Vzcy5pc1dpbmRvd3MoKSA/IHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKFwiL1wiLCBcImdcIiksIFwiXFxcXFwiKSA6IHBhdGg7XHJcblxyXG4gICAgaWYgKHByb2Nlc3MuY3dkKCkgIT09IG5leHRQYXRoKVxyXG4gICAgICB0aGlzLm1vdmUocGF0aCk7XHJcblxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiByZWY9XCJicmFuY2hXcmFwcGVyXCIgY2xhc3NOYW1lPVwiYnJhbmNoIG5vdENsaWNrZWRcIiA+XHJcbiAgICAgICAgPGRpdiByZWY9XCJuYW1lSXRlbVwiIGNsYXNzTmFtZT1cImJyYW5jaE5hbWVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCkgfT5cclxuICAgICAgICAgIDxpIHJlZj1cImljb25cIiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC1saWdodCBtZC0xNlwiID5mb2xkZXI8L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lVGV4dFwiPiB7dGhpcy5wcm9wcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJjaGlsZHJlblwiIHJlZj1cImNoaWxkcmVuXCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=