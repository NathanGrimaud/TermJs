
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
var Windows = require("../../tools.js").isWindows;
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

      var nextPath = Windows() ? path.replace(new RegExp("/", "g"), "\\") : path;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L0JyYW5jaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ04sSUFBTSxnQkFBZ0IsUUFBUSxpQkFBUixFQUEyQixhQUEzQjtBQUN0QixJQUFNLFVBQVUsUUFBUSxnQkFBUixFQUEwQixTQUExQjs7Ozs7SUFJSDs7Ozs7Ozs7QUFLWCxXQUxXLGVBS1gsQ0FBWSxLQUFaLEVBQW1COzBCQUxSLGlCQUtROzt1RUFMUiw0QkFNSCxRQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGdCQUFVLEVBQVY7QUFDQSxZQUFNLE1BQU0sSUFBTjtBQUNOLFlBQU0sTUFBTSxJQUFOO0tBSFIsQ0FGaUI7QUFPakIsVUFBSyxPQUFMLEdBQWUsTUFBTSxNQUFOLENBUEU7QUFRakIsVUFBSyxZQUFMLEdBQW9CLEtBQXBCLENBUmlCO0FBU2pCLFVBQUssUUFBTCxHQUFnQixNQUFNLE9BQU4sQ0FUQztBQVVqQixVQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FWaUI7O0dBQW5COzs7Ozs7ZUFMVzs7MkJBb0JKO0FBQ0wsY0FBUSxHQUFSLENBQVksS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsQ0FBWixDQURLO0FBRUwsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsR0FBMkIsYUFBM0IsQ0FGSztBQUdMLFdBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsU0FBeEIsR0FBb0MsUUFBcEMsQ0FISztBQUlMLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsR0FBK0IsZ0JBQS9CLENBSks7QUFLTCxXQUFLLFdBQUwsR0FMSzs7Ozs7Ozs7MkJBVUE7QUFDTCxjQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsU0FBZixDQUFaLENBREs7QUFFTCxXQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLFNBQXhCLEdBQW9DLG1CQUFwQyxDQUZLO0FBR0wsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFNBQWYsR0FBMkIsUUFBM0IsQ0FISztBQUlMLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsR0FBK0IsaUJBQS9CLENBSks7QUFLTCxXQUFLLFdBQUwsR0FMSzs7Ozs7Ozs7O2lDQVdNLE1BQU07OztBQUNqQixVQUFJLFFBQVEsQ0FBUixDQURhO0FBRWpCLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsSUFBekIsRUFBK0IsR0FBL0IsQ0FBbUMsVUFBQyxLQUFELEVBQVc7QUFDNUMsZUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixJQUFwQixDQUF5QixvQkFBQyxlQUFELElBQWlCLE1BQU0sSUFBTixFQUFZLFNBQVMsT0FBSyxRQUFMLEVBQWUsUUFBUSxPQUFLLE9BQUwsRUFBYyxNQUFNLEtBQU4sRUFBYSxLQUFLLEtBQUwsRUFBeEYsQ0FBekIsRUFENEM7QUFFNUMsZ0JBRjRDO09BQVgsQ0FBbkMsQ0FGaUI7O0FBUWpCLFdBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsQ0FBaUMsVUFBQyxLQUFELEVBQVc7QUFDMUMsZUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixJQUFwQixDQUF5QixvQkFBQyxhQUFELElBQWUsTUFBTSxLQUFOLEVBQWEsS0FBSyxLQUFMLEVBQTVCLENBQXpCLEVBRDBDO0FBRTFDLGdCQUYwQztPQUFYLENBQWpDLENBUmlCOzs7O3lCQWNkLE1BQU07QUFDVCxXQUFLLFFBQUwsQ0FBYyxJQUFkLFNBQXlCLElBQXpCLEVBRFM7Ozs7Ozs7O2tDQU1HO0FBQ1osVUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsR0FBbEIsR0FBd0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUR2QjtBQUVaLFVBQUksS0FBSyxZQUFMLEtBQXNCLEtBQXRCLElBQStCLEtBQUssU0FBTCxLQUFtQixLQUFuQixFQUEwQjs7QUFFM0QsYUFBSyxZQUFMLENBQWtCLElBQWxCLEVBRjJEO0FBRzNELGFBQUssU0FBTCxHQUFpQixJQUFqQixDQUgyRDtBQUkzRCxhQUFLLElBQUwsR0FKMkQ7T0FBN0QsTUFNSyxJQUFJLEtBQUssWUFBTCxLQUFzQixLQUF0QixFQUE2Qjs7QUFFcEMsYUFBSyxJQUFMLEdBRm9DO09BQWpDLE1BSUEsSUFBSSxLQUFLLFlBQUwsS0FBc0IsSUFBdEIsRUFBNEI7QUFDbkMsYUFBSyxJQUFMLEdBRG1DO09BQWhDO0FBR0wsV0FBSyxZQUFMLEdBQW9CLENBQUMsS0FBSyxZQUFMOzs7Ozs7QUFmVCxVQXFCUixXQUFXLFlBQVksS0FBSyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFiLEVBQW1DLElBQW5DLENBQVosR0FBdUQsSUFBdkQsQ0FyQkg7O0FBdUJaLFVBQUksUUFBUSxHQUFSLE9BQWtCLFFBQWxCLEVBQ0YsS0FBSyxJQUFMLENBQVUsSUFBVixFQURGOzs7OzZCQUlPOzs7QUFFUCxhQUNFOztVQUFLLEtBQUksZUFBSixFQUFvQixXQUFVLG1CQUFWLEVBQXpCO1FBQ0U7O1lBQUssS0FBSSxVQUFKLEVBQWUsV0FBVSxZQUFWLEVBQXVCLFNBQVM7cUJBQU0sT0FBSyxXQUFMO2FBQU4sRUFBcEQ7VUFDRTs7Y0FBRyxLQUFJLE1BQUosRUFBVyxXQUFVLCtCQUFWLEVBQWQ7O1dBREY7VUFFRTs7Y0FBTSxXQUFVLFVBQVYsRUFBTjs7WUFBNkIsS0FBSyxLQUFMLENBQVcsSUFBWDtXQUYvQjtTQURGO1FBS0U7O1lBQU0sV0FBVSxVQUFWLEVBQXFCLEtBQUksVUFBSixFQUEzQjtVQUNHLEtBQUssS0FBTCxDQUFXLFFBQVg7U0FOTDtPQURGLENBRk87Ozs7U0F4RkU7RUFBd0IsTUFBTSxTQUFOIiwiZmlsZSI6IkJyYW5jaENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBMZWFmQ29tcG9uZW50ID0gcmVxdWlyZShcIi4vTGVhZkNvbXBvbmVudFwiKS5MZWFmQ29tcG9uZW50O1xyXG5jb25zdCBXaW5kb3dzID0gcmVxdWlyZShcIi4uLy4uL3Rvb2xzLmpzXCIpLmlzV2luZG93cztcclxuLyoqXHJcbiAqIHRoZSByZXByZXNlbnRpYXRpb24gb2YgYSBkaXJlY3RvcnkgaW4gdGhlIHRyZWUgdmlld1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJyYW5jaENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzICAtIGNvbnRhaW5zIHtwYXJlbnQsIHBhdGgsIG5hbWV9XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgcGF0aDogcHJvcHMucGF0aCxcclxuICAgICAgbmFtZTogcHJvcHMubmFtZVxyXG4gICAgfTtcclxuICAgIHRoaXMuX3BhcmVudCA9IHByb3BzLnBhcmVudDtcclxuICAgIHRoaXMuX2JlZW5DbGlja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9wcm9jZXNzID0gcHJvcHMucHJvY2VzcztcclxuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHNob3dzIHRoZSB0YXJnZXRlZCBicmFuY2hcclxuICAgKi9cclxuICBzaG93KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5yZWZzLmljb24uaW5uZXJIVE1MKTtcclxuICAgIHRoaXMucmVmcy5pY29uLmlubmVySFRNTCA9IFwiZm9sZGVyX29wZW5cIjtcclxuICAgIHRoaXMucmVmcy5icmFuY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnJhbmNoXCI7XHJcbiAgICB0aGlzLnJlZnMuY2hpbGRyZW4uY2xhc3NOYW1lID0gXCJjaGlsZHJlbiBzaG93blwiO1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoaWRlcyB0aGUgdGFnZXRlZCBicmFuY2hcclxuICAgKi9cclxuICBoaWRlKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5yZWZzLmljb24uaW5uZXJIVE1MKTtcclxuICAgIHRoaXMucmVmcy5icmFuY2hXcmFwcGVyLmNsYXNzTmFtZSA9IFwiYnJhbmNoIG5vdENsaWNrZWRcIlxyXG4gICAgdGhpcy5yZWZzLmljb24uaW5uZXJIVE1MID0gXCJmb2xkZXJcIjtcclxuICAgIHRoaXMucmVmcy5jaGlsZHJlbi5jbGFzc05hbWUgPSBcImNoaWxkcmVuIGhpZGRlblwiO1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBnZXQgYWxsIHRoZSBjaGlsZHJlbiBlbGVtZW50cywgZmlsbCB0aGlzLnN0YXRlLmNoaWxkcmVuIHdpdGggaXRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIG9mIHRoZSBjaGlsZHJlblxyXG4gICAqL1xyXG4gIGxvYWRDaGlsZHJlbihwYXRoKSB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgdGhpcy5fcGFyZW50LmZpbmRGb2xkZXJzKHBhdGgpLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5jaGlsZHJlbi5wdXNoKDxCcmFuY2hDb21wb25lbnQgcGF0aD17cGF0aH0gcHJvY2Vzcz17dGhpcy5fcHJvY2Vzc30gcGFyZW50PXt0aGlzLl9wYXJlbnR9IG5hbWU9e3ZhbHVlfSBrZXk9e2luZGV4fSAvPik7XHJcbiAgICAgIGluZGV4Kys7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy5fcGFyZW50LmZpbmRGaWxlcyhwYXRoKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4ucHVzaCg8TGVhZkNvbXBvbmVudCBuYW1lPXt2YWx1ZX0ga2V5PXtpbmRleH0gLz4pO1xyXG4gICAgICBpbmRleCsrO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICBtb3ZlKHBhdGgpIHtcclxuICAgIHRoaXMuX3Byb2Nlc3MuZXhlYyhgY2QgJHtwYXRofWApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBjbGljayBldmVudCBvbiBhIGJyYW5jaFxyXG4gICAqL1xyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgbGV0IHBhdGggPSB0aGlzLnN0YXRlLnBhdGggKyBcIi9cIiArIHRoaXMuc3RhdGUubmFtZTtcclxuICAgIGlmICh0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gZmFsc2UgJiYgdGhpcy5faXNMb2FkZWQgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihwYXRoKTtcclxuICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuX2JlZW5DbGlja2VkID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2JlZW5DbGlja2VkID0gIXRoaXMuX2JlZW5DbGlja2VkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBvbiB3aW5kb3dzLCBuZWVkIHRvIHJlcGxhY2UgLyBieSBcXFxyXG4gICAgICogbmVlZHMgdG8gYnVpbGQgYSByZWdleCBiZWNhdXNlIHdpdGggYSBjaGFyLCByZXBsYWNlIG9ubHkgZG8gb25lIGl0ZXJhdGlvblxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IG5leHRQYXRoID0gV2luZG93cygpID8gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIvXCIsIFwiZ1wiKSwgXCJcXFxcXCIpIDogcGF0aDtcclxuXHJcbiAgICBpZiAocHJvY2Vzcy5jd2QoKSAhPT0gbmV4dFBhdGgpXHJcbiAgICAgIHRoaXMubW92ZShwYXRoKTtcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHJlZj1cImJyYW5jaFdyYXBwZXJcIiBjbGFzc05hbWU9XCJicmFuY2ggbm90Q2xpY2tlZFwiID5cclxuICAgICAgICA8ZGl2IHJlZj1cIm5hbWVJdGVtXCIgY2xhc3NOYW1lPVwiYnJhbmNoTmFtZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9PlxyXG4gICAgICAgICAgPGkgcmVmPVwiaWNvblwiIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLWxpZ2h0IG1kLTE2XCIgPmZvbGRlcjwvaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVUZXh0XCI+IHt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNoaWxkcmVuXCIgcmVmPVwiY2hpbGRyZW5cIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==