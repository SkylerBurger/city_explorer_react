import React, {Component} from 'react'

class DarkSky extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            latitude: this.props.lat,
            longitude: this.props.long
        }
    }
    // render() {
    //     return (

    //     );
    // }
}

export default DarkSky