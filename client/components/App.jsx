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
    api.getTracks(null, this.renderSounds.bind(this))
  }

  renderSounds (err, sounds) {
    this.setState({
      sounds: sounds || []
    })
  }

  searchSounds (item) {
    api.getTracks(item.query, this.renderSounds.bind(this))
  }

  render () {
    return (
      <div>
          <SearchForm searchSounds={this.searchSounds.bind(this)} />
          <List sounds={this.state.sounds} />
      </div>
    )
  }

}
