// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// const appElement = document.getElementById('app');

// ReactDOM.render(<App />, appElement);

class XSearch extends HTMLElement {
    constructor() {
        super();
    }

    renderElement() {   
        let shadowRoot =  this.attachShadow({mode: 'open'});
        ReactDOM.render(<App />, shadowRoot);
    }

    connectedCallback() {
        this.renderElement();
    }
}

window.customElements.define('x-search', XSearch);