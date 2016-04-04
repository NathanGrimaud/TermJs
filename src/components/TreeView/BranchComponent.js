
"use strict";

const React = require("react");
const LeafComponent = require("./LeafComponent").LeafComponent;

export class BranchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          children : [],
          path : props.path,
          name : props.name
        };

        this._parent = props.parent;
        this._beenClicked = false;
        this._isLoaded = false;
    }
    show(){
      console.log("show :",this.refs.children);
      console.log("show :",this.state.children);
    }
    hide(){
      console.log("hide :",this.refs.children);
    }
    loadChildren(path){
      let index = 0;
      console.log(path);
      this._parent.makeBranches(path).map((value)=>{
        this.state.children.push(<BranchComponent path={path} parent={this._parent} name={value} key={index} /> );
        index ++ ;
      });
      this._parent.makeLeaves(path).map((value)=>{
        this.state.children.push(<LeafComponent name={value} key={index} />);
        index ++ ;
      });

    }
    handleClick(){

      if(this._beenClicked === false && this._isLoaded === false){
        let path = this.state.path+"\\"+this.state.name;
        this.loadChildren(path);
        this._isLoaded = true;
        this.forceUpdate();
      }
      else if(this._beenClicked === false){
        this.show();
      }
      else{
        this.hide();
      }
      this._beenClicked = !this._beenClicked;
    }
    render() {
        return (
          <div>
            <div className="branch" onClick={()=>this.handleClick()}> {this.props.name} </div>
            <div  className="children" ref="children">
                {this.state.children}
            </div>
          </div>
        );
    }
}
