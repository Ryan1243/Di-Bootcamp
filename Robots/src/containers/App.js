import React, { Component } from 'react';

import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../redux/actions';
// requestRobots
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
  }
}
// robots: state.requestRobots.robots

// dispatch the DOM changes to call an action.
// note mapStateToProps returns object,
// mapDispatchToProps returns function
// the function returns an object then
// uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}
// onRequestRobots: () => dispatch(requestRobots())

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      // searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    const { robots } = this.state;
    const { searchField,onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return(
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
