"use strict";

const React = require("react");
const SnippetComponent = require(`./SnippetComponent.js`).SnippetComponent;
const Snippet = require("../../model/Snippet.js").Snippet;
const Modal = require("boron/FadeModal");
export class SnippetsContainerComponent extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            snippetsArray:[]
        };
        this.loadData();
        this._parent = props.parent;
    }

    showModal(){
        this.refs.modal.show();
    }
    hideModal(){      

      let name = this.refs.nameInput.value;
      let command = this.refs.commandInput.value;
      if(name!=="" && command!==""){
        let a = new Snippet(name,command);
        a.save();
      }
      this.refs.modal.hide();
    }
    insertInput(input){
       this._parent.insertInput(input);
    }

    loadData(){
        let data = require("../../private/snippets.json");

        [].forEach.call(data.snippets,(value)=>{

            this.state.snippetsArray.push(<SnippetComponent parent={this} key={value.key}  name={value.name} command={value.command}/>);
        });
    }

    render() {

        return (
        <div className = "snippetsWrapper">
            <div className = "snippets"> {
                this.state.snippetsArray
            } </div>
            <div>
                <div className="snippetAdd button" onClick={()=>this.showModal()}> + </div>
            </div>

            <Modal ref="modal">
                   <h2>New snippet</h2>
                   <input ref="nameInput" placeholder="name" type="text"/>
                   <input ref="commandInput" placeholder="command" type="text"/>
                   <button onClick={()=>this.hideModal()}>Close</button>
           </Modal>
        </div>
        );
    }

}
