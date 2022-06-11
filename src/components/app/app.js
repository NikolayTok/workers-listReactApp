import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'Kolya',
          salary: 2000,
          increase: true,
          id: 1,
          rise: false
        },
        {
          name: 'Max',
          salary: 800,
          increase: false,
          id: 2,
          rise: false
        },
        {
          name: 'Ira',
          salary: 100,
          increase: false,
          id: 3,
          rise: true
        }
      ],
      term: '',
      filter: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addElement = (e, name, salary) => {
    e.preventDefault()

    if (!(name === '' || salary === 0)) {
      const item = {
        name: name,
        salary: salary,
        increase: false,
        id: this.state.data.length + 1,
        rise: false
      }
      this.setState(({ data }) => ({
        data: [...data, item]
      }))
    }
  }

  onTogleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    }))
  }

  searchData = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdate = (term) => {
    this.setState({ term: term })
  }

  btnFilter = (items, filter) => {
    switch (filter) {
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000)
      case 'rise':
        return items.filter(item => item.rise)
      default:
        return items
    }
  }

  btnTab = (filter) => {
    this.setState({filter : filter})
  }

  render() {
    const { term, data, filter } = this.state
    const hmData = this.state.data.length
    const increased = this.state.data.filter(item => item.increase).length
    const searchFilter = this.btnFilter(this.searchData(data, term), filter)

    return (
      <div className="app">
        <AppInfo
          hmData={hmData}
          increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdate={this.onUpdate} />
          <AppFilter btnTab={this.btnTab} />
        </div>

        <EmployeesList
          workers={searchFilter}
          onDelete={this.deleteItem}
          onTogleProp={this.onTogleProp}
        />
        <EmployeesAddForm addElement={this.addElement} />
      </div>
    );
  }
}

export default App;
