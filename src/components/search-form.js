import React, { Fragment, Component } from 'react'


class SearchForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.query)
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }
  
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Location" onChange={this.handleChange} value={this.state.query}/>
          <button>Explore!</ button>
        </form>
      </Fragment>
    );
  }
}

export default SearchForm