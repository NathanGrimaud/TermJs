"use strict";
const pageLocation = process.cwd();
const React = require("react");
const SNIPPET = require(`${pageLocation}/dist/components/SnippetComponent.js`);
const JSONfile = require(`${pageLocation}/dist/private/snippets.json`);

export class SnippetsContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick() {

    }
    render() {
        return (<div className = "snippetsWrapper">
            <div className = "snippets"> {
                this.props.children
            } </div>
            <div>
                <div className="snippetAdd" onClick = {this.onClick}> </div>
            </div>
        </div>
        );
    }

}
