import React, { Fragment, Component } from 'react'


class Search extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <input type="text" placeholder="Location" />
          <button>Explore!</ button>
        </form>
      </Fragment>
    );
  }
}

export default Search