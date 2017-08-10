import * as React from 'react'
import _ from 'lodash'
import { Table, Input, Label } from 'semantic-ui-react'
import * as mockData from '../../../data.json'

export default class TasksTable extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      originDataArr: JSON.parse(JSON.stringify(mockData)),
      dataArr: JSON.parse(JSON.stringify(mockData))
    }
  }

  filter(searchString: string, filterField: string) {
    this.setState({
      dataArr: this.state.originDataArr.filter((el) => {
        return el[filterField].toLowerCase().startsWith(searchString.toLowerCase())
      })
    })
  }

  sort(field: string) {
    this.setState({
      dataArr: _.sortBy(this.state.originDataArr, [(o: any) => o[field] ])
    })
  }

  render() {
    return (
      <Table singleLine sortable={true} >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={3} onClick={() => this.sort('reference')}>
              Reference
            </Table.HeaderCell>
            <Table.HeaderCell width={3} onClick={() => this.sort('name')}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell width={4} onClick={() => this.sort('task')}>
              Task
            </Table.HeaderCell>
            <Table.HeaderCell width={3} onClick={() => this.sort('salesProgression')}>
              Sales Progression
            </Table.HeaderCell>
            <Table.HeaderCell width={2} onClick={() => this.sort('status')}>
              Status
            </Table.HeaderCell>
            <Table.HeaderCell width={1} onClick={() => this.sort('flag')}>
              Flag
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Input fluid onChange={(event, data) => this.filter(data.value, 'reference')}/>
            </Table.Cell>
            <Table.Cell>
              <Input fluid onChange={(event, data) => this.filter(data.value, 'name')}/>
            </Table.Cell>
            <Table.Cell>
              <Input fluid onChange={(event, data) => this.filter(data.value, 'task')}/>
            </Table.Cell>
            <Table.Cell>
              <Input fluid onChange={(event, data) => this.filter(data.value, 'salesProgression')}/>
            </Table.Cell>
            <Table.Cell>
              <Input fluid onChange={(event, data) => this.filter(data.value, 'status')}/>
            </Table.Cell>
            <Table.Cell disabled>
              <Input fluid/>
            </Table.Cell>
          </Table.Row>

          {this.state.dataArr.map((task) => (
            <Table.Row key={task.reference}>
              <Table.Cell>{task.reference}</Table.Cell>
              <Table.Cell>{task.name}</Table.Cell>
              <Table.Cell>{task.task}</Table.Cell>
              <Table.Cell>{task.salesProgression}</Table.Cell>
              <Table.Cell>{task.status}</Table.Cell>
              <Table.Cell textAlign="center">{task.flag 
                ? <Label circular color={'green'} empty /> 
                : <Label circular color={'red'} empty />}
              </Table.Cell>
            </Table.Row>)
          )} 
        </Table.Body>
      </Table>
    ) 
  }
}
