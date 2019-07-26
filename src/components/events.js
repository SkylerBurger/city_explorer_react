import React, { Component } from 'react'

class Events extends Component {

  render() {
    return (
      <>
        <h2>Results from the Eventbrite API</h2>
        <ul>
          {this.props.events.map(event => (
            <li>
              <a href={event.link}>{event.name}</a>
              <p>Event Date: {event.event_date}</p>
              <p>{event.summary}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Events