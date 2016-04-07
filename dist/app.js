"use strict";

//mutiny on the bounty
//const pageLocation = process.cwd();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var React = require("react");
var ReactDOM = require("react-dom");

var CONSOLE_COMPONENT = require("./dist/components/Console/ConsoleComponent").ConsoleComponent;

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);

        this.appContainer = document.getElementById("app");
        //const BrowserWindow = require('electron').remote.BrowserWindow;
        //BrowserWindow.addDevToolsExtension('./react-devtools/shells/chrome');
    }

    _createClass(Main, [{
        key: "loadConsole",
        value: function loadConsole() {
            ReactDOM.render(React.createElement(CONSOLE_COMPONENT, { path: process.cwd() }), this.appContainer);
        }
    }]);

    return Main;
}();

window.onload = function () {
    var main = new Main();
    main.loadConsole();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQU1BLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBUjtBQUNOLElBQU0sV0FBVyxRQUFRLFdBQVIsQ0FBWDs7QUFFTixJQUFNLG9CQUFvQixzREFBc0QsZ0JBQXREOztJQUVwQjtBQUVGLGFBRkUsSUFFRixHQUFjOzhCQUZaLE1BRVk7O0FBQ1YsYUFBSyxZQUFMLEdBQW9CLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFwQjs7O0FBRFUsS0FBZDs7aUJBRkU7O3NDQVFZO0FBQ1YscUJBQVMsTUFBVCxDQUFnQixvQkFBQyxpQkFBRCxJQUFtQixNQUFNLFFBQVEsR0FBUixFQUFOLEVBQW5CLENBQWhCLEVBQTJELEtBQUssWUFBTCxDQUEzRCxDQURVOzs7O1dBUlo7OztBQWFOLE9BQU8sTUFBUCxHQUFnQixZQUFXO0FBQ3ZCLFFBQUksT0FBTyxJQUFJLElBQUosRUFBUCxDQURtQjtBQUV2QixTQUFLLFdBQUwsR0FGdUI7Q0FBWCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vbXV0aW55IG9uIHRoZSBib3VudHlcclxuLy9jb25zdCBwYWdlTG9jYXRpb24gPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5jb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XHJcblxyXG5jb25zdCBDT05TT0xFX0NPTVBPTkVOVCA9IHJlcXVpcmUoYC4vZGlzdC9jb21wb25lbnRzL0NvbnNvbGUvQ29uc29sZUNvbXBvbmVudGApLkNvbnNvbGVDb21wb25lbnQ7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgICAgIC8vY29uc3QgQnJvd3NlcldpbmRvdyA9IHJlcXVpcmUoJ2VsZWN0cm9uJykucmVtb3RlLkJyb3dzZXJXaW5kb3c7XHJcbiAgICAgICAgLy9Ccm93c2VyV2luZG93LmFkZERldlRvb2xzRXh0ZW5zaW9uKCcuL3JlYWN0LWRldnRvb2xzL3NoZWxscy9jaHJvbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ29uc29sZSgpIHtcclxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoPENPTlNPTEVfQ09NUE9ORU5UIHBhdGg9e3Byb2Nlc3MuY3dkKCl9Lz4sIHRoaXMuYXBwQ29udGFpbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IG1haW4gPSBuZXcgTWFpbigpO1xyXG4gICAgbWFpbi5sb2FkQ29uc29sZSgpO1xyXG59O1xyXG4iXX0=