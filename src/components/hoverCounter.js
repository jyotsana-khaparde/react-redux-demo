import React, {Component} from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {

    render(){
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onMouseOver={incrementCount}> Hovered {count} times </button>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter, 10)
