
"use strict";

const React = require("react");
const LeafComponent = require("./LeafComponent").LeafComponent;
const isWindows = require("../../tools.js").isWindows;
/**
 * the representiation of a directory in the tree view
 */
export class BranchComponent extends React.Component {
  /**
   * @constructor
   * @param {Object} props  - contains {parent, path, name}
   */
  constructor(props) {
    super(props);

    this._children= [];
    this._path=props.path;
    this._name= props.name;
    this._parent = props.parent;
    this._beenClicked = false;
    this._process = props.process;
    this._isLoaded = false;
  }
  /**
   * shows the targeted branch
   */
  show() {
    this.refs.icon.innerHTML = "folder_open";
    this.refs.branchWrapper.className = "branch";
    this.refs.children.className = "children shown";
    this.forceUpdate();
  }
  /**
   * hides the tageted branch
   */
  hide() {
    this.refs.branchWrapper.className = "branch notClicked";
    this.refs.icon.innerHTML = "folder";
    this.refs.children.className = "children hidden";
    this.forceUpdate();
  }
  /**
   * get all the children elements, fill this._children with it
   * @param {string} path - the path of the children
   */
  loadChildren(path) {
    let index = 0;
    this._parent.findFolders(path).map((value) => {
      this._children.push(<BranchComponent path={path} process={this._process} parent={this._parent} name={value} key={index} />);
      index++;
    });


    this._parent.findFiles(path).map((value) => {
      this._children.push(<LeafComponent name={value} key={index} />);
      index++;
    });

  }
  move(path) {
    this._process.exec(`cd ${path}`);
  }
  /**
   * click event on a branch
   */
  handleClick() {
    let path = this._path + "/" + this._name;
    if (this._beenClicked === false && this._isLoaded === false) {

      this.loadChildren(path);
      this._isLoaded = true;
      this.show();
    }
    else if (this._beenClicked === false) {

      this.show();
    }
    else if (this._beenClicked === true) {
      this.hide();
    }
    this._beenClicked = !this._beenClicked;
    /**
     * on windows, need to replace / by \
     * needs to build a regex because with a char, replace only do one iteration
     */

    let nextPath = isWindows() ? path.replace(new RegExp("/", "g"), "\\") : path;

    if (process.cwd() !== nextPath)
      this.move(path);

  }
  render() {

    return (
      <div ref="branchWrapper" className="branch notClicked" >
        <div ref="nameItem" className="branchName" onClick={() => this.handleClick() }>
          <i ref="icon" className="material-icons md-light md-16" >folder</i>
          <span className="nameText"> {this.props.name}</span>
        </div>
        <div  className="children" ref="children">
          {this._children}
        </div>
      </div>
    );
  }
}
