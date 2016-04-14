"use strict";

const React = require("react");
let fs = require("fs");

const BranchComponent = require("./BranchComponent.js").BranchComponent;
const LeafComponent = require("./LeafComponent").LeafComponent;
const isWindows = require("../../tools.js").isWindows;
/**
 * component that represent the file system architecture
 */
export class TreeViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this._parent = props.parent;
        this._process = props.process;
        this._fullPath = props.path;
        this._separator = isWindows() ? "\\" : "/";
    }
    getName(){
        let path = this._fullPath.split("\\");
        return path[path.length-1];
    }
    getPath(){
        let path = this._fullPath.split(this._separator);
        return path.filter((value,index)=>index !== path.length-1).join(this._separator);
    }
    /**
     * returns an array of LeafComponent
     * @param {string} path - the fs level to explore
     */
    makeLeaves(path){

        return this.findFiles(path).map((value,index)=>{
            return <LeafComponent  process={this._process} name={value} key={index} /> ;
        });
    }
    /**
     * returns an array of BranchComponent
     * @param {string} path - the fs level to explore
     */
   makeBranches(path){

        return this.findFolders(path).map((value,index)=>{
            return <BranchComponent path={path} process={this._process} parent={this} name={value} key={index} /> ;
        });
    }
    /**
     * returns an array of string that represent directories
     * @param {string} path - the fs level to explore
     */
    findFolders(path) {

        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path+"/"+file).isDirectory();
        });
    }
    /**
     * returns an array of string that represent files
     * @param {string} path - the fs level to explore
     */
    findFiles(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path+"/"+file).isFile();
        });
    }
    render() {
        return (
            <div className="treeView">
                 <BranchComponent
                 path={this.getPath()}
                 process={this._process}
                 parent={this}
                 name={this.getName()}
                 key={-1} />
            </div>
        );
    }
}
