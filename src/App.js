import React, {Fragment, Component} from 'react';
import { freemem } from 'os';

class Header extends Component {
  render() {
    return (
    <Fragment>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </Fragment>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <input type="text" placeholder="Location"/>
          <button>Explore!</ button>
        </form>
      </Fragment>
    );
  }
}

class Map extends Component {
  render() {
    return (
      <Fragment>
        <iframe />
      </Fragment>
    );
  }
}

class Result extends Component {
  render() {
    return (
      <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus turpis, ultrices nec luctus ut, congue at nisi. Praesent commodo, lectus sed fermentum tempor, sapien nisi pretium odio, quis efficitur dui elit ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consectetur tincidunt neque, ut aliquet libero aliquet sed.</section>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Fragment>
    );
  }
}


function App() {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
}

export default App;
