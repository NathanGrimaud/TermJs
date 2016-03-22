"use strict";
const React = require("react");
const pageLocation = process.cwd();
const ConsoleOutputComponent = require(`${pageLocation}/dist/components/ConsoleOutputComponent.js`).ConsoleOutputComponent;
const ConsoleInputComponent = require(`${pageLocation}/dist/components/ConsoleInputComponent.js`).ConsoleInputComponent

export class ConsoleComponent extends React.Component {
    
    constructor(props) {
        
        super(props);      
    }   
    render() {
        
        return (
            <div id="Console" className="Console">
                <ConsoleOutputComponent text={"# Bienvenue dans le terminal"} />
                <ConsoleInputComponent/>
            </div>
        );
    }
}
