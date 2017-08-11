import * as React from 'react'
import Table from './Table/Table'
import './Content.css'
import {socket} from '../../index'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'

class Content extends React.Component<any, any> {
  componentDidMount() {
    socket.addEventListener('message', event => {
      const message = event.data
      NotificationManager.success(message, '', 3000);
    });
  }

  render() {
    return (
      <div className="content">
        <Table />
        <NotificationContainer/>
      </div>
    )
  }
}

export default Content