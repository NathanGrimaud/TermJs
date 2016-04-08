
"use strict";

const React = require("react");
const LeafComponent = require("./LeafComponent").LeafComponent;
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
    this.state = {
      children: [],
      path: props.path,
      name: props.name
    };
    this._parent = props.parent;
    this._beenClicked = false;
    this._process = props.process;
    this._isLoaded = false;
  }
  /**
   * shows the targeted branch
   */
  show() {
    console.log(this.refs.icon.innerHTML);
    this.refs.icon.innerHTML = "folder_open";
    this.refs.branchWrapper.className = "branch";
    this.refs.children.className = "children shown";
    this.forceUpdate();
  }
  /**
   * hides the tageted branch
   */
  hide() {
    console.log(this.refs.icon.innerHTML);
    this.refs.branchWrapper.className = "branch notClicked"
    this.refs.icon.innerHTML = "folder";
    this.refs.children.className = "children hidden";
    this.forceUpdate();
  }
  /**
   * get all the children elements, fill this.state.children with it
   * @param {string} path - the path of the children
   */
  loadChildren(path) {
    let index = 0;
    this._parent.findFolders(path).map((value) => {
      this.state.children.push(<BranchComponent path={path} process={this._process} parent={this._parent} name={value} key={index} />);
      index++;
    });


    this._parent.findFiles(path).map((value) => {
      this.state.children.push(<LeafComponent name={value} key={index} />);
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
    let path = this.state.path + "/" + this.state.name;
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

    let nextPath = this._process.isWindows() ? path.replace(new RegExp("/", "g"), "\\") : path;

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
          {this.state.children}
        </div>
      </div>
    );
  }
}
