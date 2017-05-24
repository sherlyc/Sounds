import React from 'react'

export default class SearchForm extends React.Component {
  constructor (props){
    super(props)
    this.itemModel = {  query: ''}
    this.state = {
      item : {...this.itemModel}
    }
  }

  handleSubmit (evt) {
    evt.preventDefault()

    this.props.searchSounds(this.state.item)
    this.setState({
      item: { ...this.itemModel }
    })
  }

  handleChange (evt) {
    const field = evt.target.name
    this.setState({
      item: {
        ...this.state.item,
        [field]: evt.target.value
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="query">Query</label>
          <input type="text" name="query" value={this.state.item.query} onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Search" />
      </form>
    )
  }
}
