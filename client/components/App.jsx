import React from 'react'
import * as api from '../api'
import List from './List'
import SearchForm from './SearchForm'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sounds: []
    }
  }

  componentDidMount () {
    api.getTracks(this.renderSounds.bind(this))
  }

  renderSounds (err, sounds) {
    this.setState({
      sounds: sounds || []
    })
  }

  searchSounds (item) {
    console.log(item)
  }

  render () {
    return (
      <div>
          <SearchForm searchSounds={this.searchSounds} />
          <List sounds={this.state.sounds} />
      </div>
    )
  }

}
