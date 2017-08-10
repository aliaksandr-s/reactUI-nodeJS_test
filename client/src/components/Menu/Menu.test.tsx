import * as React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

it('menu has 4 blocks', () => {
  const menu = shallow(<Menu />)
  expect(menu.find('.menu-vertical').children().length).toBe(4)
})
