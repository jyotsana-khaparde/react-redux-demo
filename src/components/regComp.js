import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log(' i am RegComp');
        return (
            <div>
                Reguler Component {this.props.name}
            </div>
        )
    }
}

export default RegComp