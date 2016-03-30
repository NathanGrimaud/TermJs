"use strict";

const React = require("react");
let fs = require('fs');

const BranchComponent = require("./BranchComponent.js").BranchComponent;
const LeafComponent = require("./LeafComponent").LeafComponent;

export class TreeViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this._parent = props.parent;
        this.state = {
            folders: this.findFolders(process.cwd()),
            files: this.findFiles(process.cwd())
        }        
    }
    makeLeaves(){        
        return this.state.files.map((value,index,array)=>{            
            return <LeafComponent name={value} key={index} /> ;
        })
    }
   makeBranches(){        
        return this.state.folders.map((value,index,array)=>{            
            return <BranchComponent name={value} key={index} /> ;
        })
    }
    findFolders(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path+'/'+file).isDirectory();
        });
    }
    findFiles(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path+'/'+file).isFile();
        });
    }
    render() {
        return (
            <div className="treeView">
                {this.makeBranches()}
                {this.makeLeaves()}
            </div>
        );
    }
}

