import React, {Fragment, Component} from 'react'

import Map from './map.js'
import Search from './search.js'
import Result from './result.js'


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

export default Main