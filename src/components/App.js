import React, { Component } from 'react'
import { Navbar } from './Navbar';
import { Leaderboard } from './Leaderboard';
import { getUpdatedScoreboard } from '../utils/calculateData';

class App extends Component {
  state = {
    userRanks: []
  }
  componentDidMount() {
    this.handleCacheData()
  }
  handleCacheData () {
    const ranks = getUpdatedScoreboard()
    this.updateRanks(ranks)
  }
  updateRanks (ranks) {
    this.setState(() => ({
      userRanks: ranks
    }))
  }
  render () {
    const {userRanks} = this.state
    const userId = '1b860e1d-c58e-46a6-b271-35493d3c4227'
    const user = userRanks.find(user => user.userId === userId)
    if (user) {
      return (<div className="App">
          <Navbar username={user.name} />
          <Leaderboard ranks={userRanks} userId={userId} />
        </div>)
    }
    return (<p>Loading...</p>)
  }
}

export default App;
