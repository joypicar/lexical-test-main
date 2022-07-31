import React, { createElement } from 'react'
import ReactDOMClient from 'react-dom/client'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@components/PlaygroundApp/setup'
import { PlaygroundApp } from '@components/PlaygroundApp'
import { Navigation } from '@components/Navigation'
import { AutoFocus } from '@components'
import './index.css'
import {render} from 'react-dom'
import { App } from './App'

// Standalone
ReactDOMClient.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaygroundApp />} />
        <Route path="/auto-focus" element={<AutoFocus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// Microfrontend
// class XSearch extends HTMLElement {
//   constructor() {
//       super();
//   }
//   connectedCallback() {
//     render(createElement(PlaygroundApp), this)
//   }
// }
// window.customElements.define('x-search', XSearch);

// class MyTitle extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//       <style>
//         h1 {
//           font-size: 2.5rem;
//           color: hotpink;
//           font-family: monospace;
//           text-align: center; 
//           text-decoration: pink solid underline;
//           text-decoration-skip: ink;
//         }
//       </style>
//       <h1>Hello Alligator!</h1>
//     `;
//   }
// }

// window.customElements.define('x-search', MyTitle);

// class ReactElement extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     ReactDOM.render(<PlaygroundApp />, this);
//   }
//   disconnectedCallback(){
//     ReactDOM.unmountComponentAtNode(this);
//   }
// }

// customElements.define('react-el', ReactElement);

