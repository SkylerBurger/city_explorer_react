import React, { Component } from 'react'

class Yelp extends Component {

  render() {
    return (
      <>
        <h2>Results from the Yelp API</h2>
        <ul>
          {this.props.yelp.map(result => (
            <li>
              <a href={result.url}>{result.name}</a>
              <p>The average rating is {result.rating} out of 5 and the average cost is {result.price} out of 4</p>
              <img src={result.image_url} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Yelp