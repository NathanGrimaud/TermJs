"use strict";

const React = require("react");
const SnippetComponent = require(`./SnippetComponent.js`).SnippetComponent;
const Snippet = require("../../model/Snippet.js").Snippet;
const Modal = require("boron/FadeModal");
/**
 * class that wraps all the snippets
 */
export class SnippetsContainerComponent extends React.Component {

    constructor(props) {

        super(props);
        this._snippetsArray=[];
        this._parent = props.parent;
        this.loadData();
    }
    /**
     * shows the modal window
     */
    showModal(){
        this.refs.modal.show();
    }
    /**
     * hides the modal window
     */
    hideModal(){

      let name = this.refs.nameInput.value;
      let command = this.refs.commandInput.value;

      if(name !== "" && command !== ""){

        let a = new Snippet(name,command);
        a.save();
        this._snippetsArray.push(<SnippetComponent parent={this} key={a._key}  name={a._name} command={a._command}/>);
      }
      this.refs.modal.hide();
      this.forceUpdate();

    }
    /**
     * insert an output to the parent
     * @param {string} input - the text that will be in the output component
     */
    insertInput(input){
       this._parent.insertInput(input);
    }
    /**
     * creates the snippets components , from snippets.json
     * @return {String[]} loadData
     */
    loadData(){
        let data = require("../../../private/snippets.json");

        [].forEach.call(data.snippets,(value)=>{

            this._snippetsArray.push(<SnippetComponent parent={this} key={value.key} i={value.key} name={value.name} command={value.command}/>);
        });

    }

    render() {

        return (
        <div className = "snippetsWrapper">
            <div className = "snippets"> {
                this._snippetsArray
            } </div>
            <div>
                <div className="snippetAdd button" onClick={()=>this.showModal()}>
                <i className="material-icons md-light md-16"> add </i></div>
            </div>

            <Modal ref="modal">
                   <h2>New snippet</h2>
                   <input ref="nameInput" placeholder="name" type="text" />
                   <input ref="commandInput" placeholder="command" type="text"/>
                   <button onClick={()=>this.hideModal()}>Close</button>
           </Modal>
        </div>
        );
    }

}
