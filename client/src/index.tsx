import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import Menu from './components/Menu/Menu'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
export const socket = new WebSocket("ws://localhost:3002")

ReactDOM.render(
  <div>
    <Menu />
    <Header />
    <Content />
  </div>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
