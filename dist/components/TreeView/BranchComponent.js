
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
    value: function show() {}
    //console.log("show :",this.refs.children);
    //console.log("show :",this.state.children);

    /**
     * hides the tageted branch
     */

  }, {
    key: "hide",
    value: function hide() {}
    //console.log("hide :",this.refs.children);

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
      /**
       * temporary fix to avoid double event
       */
      //  if(typeof this.state.name !== typeof {} ){

      var path = this.state.path + "/" + this.state.name;
      if (this._beenClicked === false && this._isLoaded === false) {

        this.loadChildren(path);
        this._isLoaded = true;
        this.forceUpdate();
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
      //     }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "branch" },
        React.createElement(
          "div",
          { className: "branchName", onClick: function onClick() {
              return _this3.handleClick();
            } },
          this.props.name
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyZWVWaWV3L0JyYW5jaENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ04sSUFBTSxnQkFBZ0IsUUFBUSxpQkFBUixFQUEyQixhQUEzQjs7Ozs7SUFJVDs7Ozs7Ozs7QUFLVCxXQUxTLGVBS1QsQ0FBWSxLQUFaLEVBQW1COzBCQUxWLGlCQUtVOzt1RUFMViw0QkFNQyxRQURTOztBQUVmLFVBQUssS0FBTCxHQUFhO0FBQ1gsZ0JBQVcsRUFBWDtBQUNBLFlBQU8sTUFBTSxJQUFOO0FBQ1AsWUFBTyxNQUFNLElBQU47S0FIVCxDQUZlO0FBT2YsVUFBSyxPQUFMLEdBQWUsTUFBTSxNQUFOLENBUEE7QUFRZixVQUFLLFlBQUwsR0FBb0IsS0FBcEIsQ0FSZTtBQVNmLFVBQUssUUFBTCxHQUFnQixNQUFNLE9BQU4sQ0FURDtBQVVmLFVBQUssU0FBTCxHQUFpQixLQUFqQixDQVZlOztHQUFuQjs7Ozs7O2VBTFM7OzJCQW9CSDs7Ozs7Ozs7OzsyQkFPQTs7Ozs7Ozs7OztpQ0FPTyxNQUFLOzs7QUFDaEIsVUFBSSxRQUFRLENBQVIsQ0FEWTs7QUFJakIsV0FBSyxPQUFMLENBQWEsV0FBYixDQUF5QixJQUF6QixFQUErQixHQUEvQixDQUFtQyxVQUFDLEtBQUQsRUFBUztBQUN6QyxlQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLElBQXBCLENBQXlCLG9CQUFDLGVBQUQsSUFBaUIsTUFBTSxJQUFOLEVBQVksU0FBUyxPQUFLLFFBQUwsRUFBZSxRQUFRLE9BQUssT0FBTCxFQUFjLE1BQU0sS0FBTixFQUFhLEtBQUssS0FBTCxFQUF4RixDQUF6QixFQUR5QztBQUV6QyxnQkFGeUM7T0FBVCxDQUFuQyxDQUppQjs7QUFVaEIsV0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixJQUF2QixFQUE2QixHQUE3QixDQUFpQyxVQUFDLEtBQUQsRUFBUztBQUN4QyxlQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLElBQXBCLENBQXlCLG9CQUFDLGFBQUQsSUFBZSxNQUFNLEtBQU4sRUFBYSxLQUFLLEtBQUwsRUFBNUIsQ0FBekIsRUFEd0M7QUFFeEMsZ0JBRndDO09BQVQsQ0FBakMsQ0FWZ0I7Ozs7eUJBZ0JiLE1BQUs7QUFDUCxXQUFLLFFBQUwsQ0FBYyxJQUFkLFNBQXlCLElBQXpCLEVBRE87Ozs7Ozs7O2tDQU1HOzs7Ozs7QUFNVCxVQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFnQixHQUFoQixHQUFvQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBTnRCO0FBT1QsVUFBRyxLQUFLLFlBQUwsS0FBc0IsS0FBdEIsSUFBK0IsS0FBSyxTQUFMLEtBQW1CLEtBQW5CLEVBQXlCOztBQUV6RCxhQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFGeUQ7QUFHekQsYUFBSyxTQUFMLEdBQWlCLElBQWpCLENBSHlEO0FBSXpELGFBQUssV0FBTCxHQUp5RDtPQUEzRCxNQU1LLElBQUcsS0FBSyxZQUFMLEtBQXNCLEtBQXRCLEVBQTRCO0FBQ2xDLGFBQUssSUFBTCxHQURrQztPQUEvQixNQUdBLElBQUcsS0FBSyxZQUFMLEtBQXNCLElBQXRCLEVBQTJCO0FBQ2pDLGFBQUssSUFBTCxHQURpQztPQUE5QjtBQUdMLFdBQUssWUFBTCxHQUFvQixDQUFDLEtBQUssWUFBTDs7Ozs7O0FBbkJaLFVBeUJMLFdBQVcsS0FBSyxRQUFMLENBQWMsU0FBZCxLQUE0QixLQUFLLE9BQUwsQ0FBYSxJQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWUsR0FBZixDQUFiLEVBQWlDLElBQWpDLENBQTVCLEdBQXFFLElBQXJFLENBekJOOztBQTJCVCxVQUFJLFFBQVEsR0FBUixPQUFrQixRQUFsQixFQUNGLEtBQUssSUFBTCxDQUFVLElBQVYsRUFERjs7O0FBM0JTOzs2QkFnQ0o7OztBQUVMLGFBQ0U7O1VBQUssV0FBVSxRQUFWLEVBQUw7UUFDRTs7WUFBSyxXQUFVLFlBQVYsRUFBdUIsU0FBUztxQkFBSSxPQUFLLFdBQUw7YUFBSixFQUFyQztVQUNLLEtBQUssS0FBTCxDQUFXLElBQVg7U0FGUDtRQUlFOztZQUFNLFdBQVUsVUFBVixFQUFxQixLQUFJLFVBQUosRUFBM0I7VUFDSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO1NBTFA7T0FERixDQUZLOzs7O1NBeEZBO0VBQXdCLE1BQU0sU0FBTiIsImZpbGUiOiJCcmFuY2hDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgTGVhZkNvbXBvbmVudCA9IHJlcXVpcmUoXCIuL0xlYWZDb21wb25lbnRcIikuTGVhZkNvbXBvbmVudDtcclxuLyoqXHJcbiAqIHRoZSByZXByZXNlbnRpYXRpb24gb2YgYSBkaXJlY3RvcnkgaW4gdGhlIHRyZWUgdmlld1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJyYW5jaENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzICAtIGNvbnRhaW5zIHtwYXJlbnQsIHBhdGgsIG5hbWV9XHJcbiAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgY2hpbGRyZW4gOiBbXSxcclxuICAgICAgICAgIHBhdGggOiBwcm9wcy5wYXRoLFxyXG4gICAgICAgICAgbmFtZSA6IHByb3BzLm5hbWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHByb3BzLnBhcmVudDtcclxuICAgICAgICB0aGlzLl9iZWVuQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3MgPSBwcm9wcy5wcm9jZXNzO1xyXG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNob3dzIHRoZSB0YXJnZXRlZCBicmFuY2hcclxuICAgICAqL1xyXG4gICAgc2hvdygpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwic2hvdyA6XCIsdGhpcy5yZWZzLmNoaWxkcmVuKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInNob3cgOlwiLHRoaXMuc3RhdGUuY2hpbGRyZW4pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB0aGUgdGFnZXRlZCBicmFuY2hcclxuICAgICAqL1xyXG4gICAgaGlkZSgpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiaGlkZSA6XCIsdGhpcy5yZWZzLmNoaWxkcmVuKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGFsbCB0aGUgY2hpbGRyZW4gZWxlbWVudHMsIGZpbGwgdGhpcy5zdGF0ZS5jaGlsZHJlbiB3aXRoIGl0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIG9mIHRoZSBjaGlsZHJlblxyXG4gICAgICovXHJcbiAgICBsb2FkQ2hpbGRyZW4ocGF0aCl7XHJcbiAgICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4gICAgIFxyXG4gICAgIHRoaXMuX3BhcmVudC5maW5kRm9sZGVycyhwYXRoKS5tYXAoKHZhbHVlKT0+e1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4ucHVzaCg8QnJhbmNoQ29tcG9uZW50IHBhdGg9e3BhdGh9IHByb2Nlc3M9e3RoaXMuX3Byb2Nlc3N9IHBhcmVudD17dGhpcy5fcGFyZW50fSBuYW1lPXt2YWx1ZX0ga2V5PXtpbmRleH0gLz4gKTtcclxuICAgICAgICBpbmRleCArKyA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgXHJcbiAgICAgIHRoaXMuX3BhcmVudC5maW5kRmlsZXMocGF0aCkubWFwKCh2YWx1ZSk9PntcclxuICAgICAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLnB1c2goPExlYWZDb21wb25lbnQgbmFtZT17dmFsdWV9IGtleT17aW5kZXh9IC8+KTtcclxuICAgICAgICBpbmRleCArKyA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIG1vdmUocGF0aCl7XHJcbiAgICAgICB0aGlzLl9wcm9jZXNzLmV4ZWMoYGNkICR7cGF0aH1gKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY2xpY2sgZXZlbnQgb24gYSBicmFuY2hcclxuICAgICAqL1xyXG4gICAgaGFuZGxlQ2xpY2soKXtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIHRlbXBvcmFyeSBmaXggdG8gYXZvaWQgZG91YmxlIGV2ZW50XHJcbiAgICAgICAqL1xyXG4gICAgLy8gIGlmKHR5cGVvZiB0aGlzLnN0YXRlLm5hbWUgIT09IHR5cGVvZiB7fSApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5zdGF0ZS5wYXRoK1wiL1wiK3RoaXMuc3RhdGUubmFtZTtcclxuICAgICAgICBpZih0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gZmFsc2UgJiYgdGhpcy5faXNMb2FkZWQgPT09IGZhbHNlKXsgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ocGF0aCk7XHJcbiAgICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7ICAgICAgICBcclxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLl9iZWVuQ2xpY2tlZCA9PT0gZmFsc2UpeyAgICBcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuX2JlZW5DbGlja2VkID09PSB0cnVlKXsgICBcclxuICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9iZWVuQ2xpY2tlZCA9ICF0aGlzLl9iZWVuQ2xpY2tlZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvbiB3aW5kb3dzLCBuZWVkIHRvIHJlcGxhY2UgLyBieSBcXFxyXG4gICAgICAgICAqIG5lZWRzIHRvIGJ1aWxkIGEgcmVnZXggYmVjYXVzZSB3aXRoIGEgY2hhciwgcmVwbGFjZSBvbmx5IGRvIG9uZSBpdGVyYXRpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBcclxuICAgICAgICBsZXQgbmV4dFBhdGggPSB0aGlzLl9wcm9jZXNzLmlzV2luZG93cygpID8gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIvXCIsXCJnXCIpLFwiXFxcXFwiKSA6IHBhdGg7ICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGlmKCBwcm9jZXNzLmN3ZCgpICE9PSBuZXh0UGF0aCAgKVxyXG4gICAgICAgICAgdGhpcy5tb3ZlKHBhdGgpO1xyXG4gLy8gICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5jaFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuY2hOYW1lXCIgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlQ2xpY2soKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIiByZWY9XCJjaGlsZHJlblwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=