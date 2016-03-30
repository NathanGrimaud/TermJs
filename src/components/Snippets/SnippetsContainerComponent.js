"use strict";

const pageLocation = process.cwd();

const React = require("react");
const SNIPPET = require(`./SnippetComponent.js`).SnippetComponent;

export class SnippetsContainerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippetsArray:[]
        }
        this.loadData();
        this._parent = props.parent;
    }

    insertInput(input){
       this._parent.insertInput(input)
    }
    loadData(){
        let data = require("../../private/snippets.json");
        
        [].forEach.call(data.snippets,(value,index,array)=>{
            
            this.state.snippetsArray.push(<SNIPPET parent={this} key={value.key}  name={value.name} command={value.command}/>)
        })     
    }
    render() {
        
        return (
        <div className = "snippetsWrapper">
            <div className = "snippets"> {
                this.state.snippetsArray
            } </div>
            <div>
                <div className="snippetAdd" onClick = {()=>this.onClick()}> </div>
            </div>
        </div>
        );
    }

}
