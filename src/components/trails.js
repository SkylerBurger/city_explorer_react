import React, { Component } from 'react'

class Trails extends Component {

  render() {
    return (
      <>
        <section className="column-container">
          <h3>Results from the Hiking Project API</h3>
          <ul>
            {this.props.trails.map(trail => (
              <li>
                <p>Hike Name: <a href={trail.trail_url}>{trail.name}</a>, Location: {trail.location}, Distance: {trail.length} miles</p>
                <p>On {trail.condition_date} at {trail.condition_time}, trail conditions were reported as: {trail.conditions}</p>
                <p>This trail has a rating of {trail.stars} stars (out of {trail.star_votes} votes)</p>
                <p>{trail.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default Trails