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

// Standalone
// ReactDOMClient.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<PlaygroundApp />} />
//         <Route path="/auto-focus" element={<AutoFocus />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// )

// Microfrontend
class XSearch extends HTMLElement {
  constructor() {
      super();
  }
  connectedCallback() {
    render(createElement(PlaygroundApp), this)
  }
}
window.customElements.define('x-search', XSearch);
