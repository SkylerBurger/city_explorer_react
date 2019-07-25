import React, { Fragment, Component } from 'react'


class SearchForm extends Component {
  
  // State is needed to keep track of query
  // long enough to make a function call
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }


  // Changes this component's state
  // when the input value is changed
  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  
  // Calls the function passed down from App
  // sending the current state
  // when the submit button is pressed
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.query)
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