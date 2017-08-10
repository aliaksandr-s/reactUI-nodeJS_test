import * as React from 'react'
import { Menu, Icon, Input } from 'semantic-ui-react'
import './Menu.css'
import '../../index.css'

export default class MenuVertical extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      activeItem: '',
      isDashboardVisible: true,
      isCustomerVisible: true
    }
  }

  handleItemClick(name: string): void {
    this.setState({ activeItem: name })
  }

  changeVisibility(property: string): void {
    this.setState({ [property]: !this.state[property] })
  }

  render() {
    return (
      <Menu vertical className="menu-vertical" size="huge" borderless fixed="left">
        <Menu.Item>
          <Menu.Header 
            className="color-blue menu__header" 
            onClick={() => this.changeVisibility('isDashboardVisible')}
          >
            <Icon name="dashboard" color="blue" className="menu__icon"/> 
            Dashboard
            <Icon name="caret down" color="blue" className="menu__icon_right"/>
          </Menu.Header>

          {this.state.isDashboardVisible &&
            <Menu.Menu className="menu__block">
              <Menu.Item 
                className="menu__item" 
                name="My tasks" 
                active={this.state.activeItem === 'My tasks'} 
                onClick={() => this.handleItemClick('My tasks')}
              />
              <Menu.Item 
                className="menu__item" 
                name="Team tasks" 
                active={this.state.activeItem === 'Team tasks'} 
                onClick={() => this.handleItemClick('Team tasks')}
              />
              <Menu.Item 
                className="menu__item" 
                name="Incomplete tasks" 
                active={this.state.activeItem === 'Incomplete tasks'} 
                onClick={() => this.handleItemClick('Incomplete tasks')}
              />
              <Menu.Item 
                className="menu__item" 
                name="Reports" 
                active={this.state.activeItem === 'Reports'} 
                onClick={() => this.handleItemClick('Reports')}
              />
              <Menu.Item 
                className="menu__item" 
                name="History" 
                active={this.state.activeItem === 'History'} 
                onClick={() => this.handleItemClick('History')}
              />
            </Menu.Menu>
          }
        </Menu.Item>

        <Menu.Item>
          <Menu.Header 
            className="menu__header color-orange" 
            onClick={() => this.changeVisibility('isCustomerVisible')}
          >
            <Icon name="cart" color="orange" className="menu__icon"/>
            Customer
            <Icon name="caret down" color="orange" className="menu__icon_right"/>
          </Menu.Header>

          {this.state.isCustomerVisible &&
            <Menu.Menu className="menu__block">
              <Menu.Item 
                className="menu__item" 
                name="Search" 
                active={this.state.activeItem === 'Search'} 
                onClick={() => this.handleItemClick('Search')}
              />
              <Menu.Item 
                className="menu__item" 
                name="Profile" 
                active={this.state.activeItem === 'Profile'} 
                onClick={() => this.handleItemClick('Profile')}
              />
              <Menu.Item 
                className="menu__item" 
                name="IDV" 
                active={this.state.activeItem === 'IDV'} 
                onClick={() => this.handleItemClick('IDV')}
              />
              <Menu.Item 
                className="menu__item" 
                name="Credit" 
                active={this.state.activeItem === 'Credit'} 
                onClick={() => this.handleItemClick('Credit')}
              />
              <Menu.Item 
                className="menu__item" 
                name="Resources" 
                active={this.state.activeItem === 'Resources'} 
                onClick={() => this.handleItemClick('Resources')}
              />
              <Menu.Item 
                className="menu__item" 
                name="Customer history" 
                active={this.state.activeItem === 'Customer history'} 
                onClick={() => this.handleItemClick('Customer history')}
              >
                History
              </Menu.Item>
              <Menu.Item 
                className="menu__item" 
                name="Communication" 
                active={this.state.activeItem === 'Communication'} 
                onClick={() => this.handleItemClick('Communication')}
              />
            </Menu.Menu>
          }
        </Menu.Item>
        
        <Menu.Item className="menu__block_bottom">
          <Menu.Menu>
            <Menu.Item 
              className="menu__item" 
              name="My profile" 
              active={this.state.activeItem === 'My profile'} 
              onClick={() => this.handleItemClick('My profile')}
            >
              <Icon name="user" className="menu__icon"/> My profile
            </Menu.Item>
            <Menu.Item 
              className="menu__item" 
              name="Teams" 
              active={this.state.activeItem === 'Teams'} 
              onClick={() => this.handleItemClick('Teams')}
            >
              <Icon name="users" className="menu__icon"/> Teams
            </Menu.Item>
            <Menu.Item 
              className="menu__item" 
              name="Tour" 
              active={this.state.activeItem === 'Tour'} 
              onClick={() => this.handleItemClick('Tour')}
            >
              <Icon name="map signs" className="menu__icon"/> Tour
            </Menu.Item>
            <Menu.Item 
              className="menu__item" 
              name="Help" 
              active={this.state.activeItem === 'Help'} 
              onClick={() => this.handleItemClick('Help')}
            >
              <Icon name="life ring" className="menu__icon"/> Help
            </Menu.Item>
            <Menu.Item 
              className="menu__item" 
              name="FAQs" 
              active={this.state.activeItem === 'FAQs'} 
              onClick={() => this.handleItemClick('FAQs')}
            >
              <Icon name="help circle" className="menu__icon"/> FAQs
            </Menu.Item>
            <Menu.Item 
              className="menu__item" 
              name="Settings" 
              active={this.state.activeItem === 'Settings'} 
              onClick={() => this.handleItemClick('Settings')}
            >
              <Icon name="settings" className="menu__icon"/> Settings
            </Menu.Item>
            <Menu.Item 
              className="menu__item" 
              name="Sign Out" 
              active={this.state.activeItem === 'Sign Out'} 
              onClick={() => this.handleItemClick('Sign Out')}
            >
              <Icon name="reply" className="menu__icon"/> Sign Out
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>
            <Input 
              iconPosition="left" 
              icon="search" 
              placeholder="Search..."
              className="menu__search"
            />
          </Menu.Header>
        </Menu.Item>     
      </Menu>
    )
  }
}
