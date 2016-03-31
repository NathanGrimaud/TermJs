"use strict";

const React = require("react");
const Modal = require("boron/FadeModal");

export class SnippetComponent extends React.Component {
    constructor(props) {
        super(props);

       this._parent = props.parent;
    }

    showModal(){
        this.refs.modal.show();
    }
    hideModal(){
      this.refs.modal.hide();
    }

    handleClick() {
        this._parent.insertInput(this.refs.command.innerText);
    }
    render() {
        return (
          <div className="snippet">
            <div onClick={evt=>this.handleClick(evt)} key="{this.props.key}">
                <span ref="name"  className="name">{this.props.name}: </span>
                <span ref="command" className="command">{this.props.command}</span>
            </div>
            <button onClick={()=>this.showModal()}>Close</button>

            <Modal ref="modal">
                   <h2>New snippet</h2>
                   <input ref="nameInput" placeholder="name" type="text" value={this.refs.name}/>
                   <input ref="commandInput" placeholder="command" type="text" value={this.refs.command}/>
                   <button onClick={()=>this.hideModal()}>Close</button>
           </Modal>

        </div>
        );
    }
}
