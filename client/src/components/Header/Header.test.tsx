import * as React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

it('it renders', () => {
  const menu = shallow(<Header />)
  expect(menu.find('.main-header').exists()).toBe(true)
})
