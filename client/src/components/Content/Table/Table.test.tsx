import * as React from 'react'
import { shallow } from 'enzyme'
import Table from './Table'

it('it renders', () => {
  const table = shallow(<Table />)
  expect(table.find('Table').exists()).toBe(true)
})
