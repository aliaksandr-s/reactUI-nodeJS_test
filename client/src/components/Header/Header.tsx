import * as React from 'react'
import { Menu, Breadcrumb, Icon } from 'semantic-ui-react'
import './Header.css'

interface State {
  userName?: string
}

export default class MenuExampleBasic extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      userName: 'Jane Doe',
    }
  }

  render() {
    return (
      <Menu size="large" borderless color="orange" inverted className="main-header">
        <Menu.Item >
          <Breadcrumb className="main-header__item">
            <Breadcrumb.Section >Customer</Breadcrumb.Section>
            <Breadcrumb.Divider className="main-header__divider"/>
            <Breadcrumb.Section >Customer Search</Breadcrumb.Section>
          </Breadcrumb>
        </Menu.Item>

        <Menu.Item 
          position="right"
          className="main-header__item"
          name={this.state.userName} 
        />

        <Menu.Item onClick={() => console.log('menu')}>
          <Icon name="content" /> 
        </Menu.Item>

      </Menu>
    )
  }
}
