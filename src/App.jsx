import React from 'react';
import ReactDOM from 'react-dom/client'
import './components/PlaygroundApp/setup'
import { PlaygroundApp } from './components/PlaygroundApp'
import './index.css'

export function App() {
    return (
      ReactDOM.createRoot(
        document.getElementById("root"),
      )
      .render(
        <React.StrictMode>
          <PlaygroundApp />
        </React.StrictMode>,
      )
    )
}