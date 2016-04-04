"use strict";

const React = require("react");
let fs = require("fs");

const BranchComponent = require("./BranchComponent.js").BranchComponent;
const LeafComponent = require("./LeafComponent").LeafComponent;

export class TreeViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this._parent = props.parent;
    }
    makeLeaves(path){
        return this.findFiles(path).map((value,index)=>{
            return <LeafComponent name={value} key={index} /> ;
        });
    }
   makeBranches(path){
        return this.findFolders(path).map((value,index)=>{
            return <BranchComponent path={path} parent={this} name={value} key={index} /> ;
        });
    }
    findFolders(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path+"/"+file).isDirectory();
        });
    }
    findFiles(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path+"/"+file).isFile();
        });
    }
    render() {
        return (
            <div className="treeView">
                {this.makeBranches(process.cwd())}
                {this.makeLeaves(process.cwd())}
            </div>
        );
    }
}
