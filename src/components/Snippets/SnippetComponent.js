"use strict";

const React = require("react");
const Modal = require("boron/FadeModal");
const Snippet = require("../../model/Snippet").Snippet;

export class SnippetComponent extends React.Component {
    constructor(props) {
        super(props);
        this._parent = props.parent;
        this.state = {
          key: props.i,
          name: props.name,
          command: props.command
      };
    }

    showModal(){
        this.refs.modal.show();
    }
    hideModal(){
        this.refs.modal.hide();
    }
    updateModal(){

      this.state.name = this.refs.nameInput.value;
      this.state.command = this.refs.commandInput.value;
      let a = new Snippet( this.state.name,this.state.command,this.state.key);
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
            <div onClick={evt=>this.handleClick(evt)} key="{this.state.key}">
                <span ref="name"  className="name">{this.state.name}: </span>
                <span ref="command" className="command">{this.state.command}</span>
            </div>
            <button onClick={()=>this.showModal()}>Edit</button>

            <Modal ref="modal">
                   <h2>New snippet</h2>
                   <input ref="nameInput" type="text"defaultValue={this.state.name} />
                   <input ref="commandInput" type="text" defaultValue={this.state.command}/>
                   <button onClick={()=>this.updateModal()}>Validate</button>
                   <button onClick={()=>this.hideModal()}>Close</button>
           </Modal>

        </div>
        );
    }
}
