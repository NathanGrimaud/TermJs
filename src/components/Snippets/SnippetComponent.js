"use strict";

const React = require("react");
const Modal = require("boron/FadeModal");
const Snippet = require("../../model/Snippet").Snippet;
/**
 * class that represents a snippet
 */
export class SnippetComponent extends React.Component {
    constructor(props) {
        super(props);
        this._parent = props.parent;
        this._key= props.i;
        this._name= props.name;
        this._command= props.command;
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
        this.refs.modal.hide();
    }
    /**
     * trigered when the update button is clicked
     */
    updateModal(){

      this._name = this.refs.nameInput.value;
      this._command = this.refs.commandInput.value;
      let a = new Snippet( this._name,this._command,this._key);
      a.update();
      this.refs.modal.hide();
      this.forceUpdate();
    }
    handleClick() {
        this._parent.insertInput(this.refs.command.innerText);
    }
    render() {
        return (
          <div className="snippet">
            <div onClick={evt=>this.handleClick(evt)} key="{this._key}">
                <span ref="name"  className="name">{this._name}: </span>
                <span ref="command" className="command">{this._command}</span>
            </div>
            <i
            className="material-icons mdl-button mdl-button--icon mdl-button--colored mdl-js-button md-16" //
            onClick={()=>this.showModal()}>edit</i>
            <Modal ref="modal">
                   <h2>New snippet</h2>
                   <input ref="nameInput" type="text"defaultValue={this._name} />
                   <input ref="commandInput" type="text" defaultValue={this._command}/>
                   <button onClick={()=>this.updateModal()}>Validate</button>
                   <button onClick={()=>this.hideModal()}>Close</button>
           </Modal>
        </div>
        );
    }
}
