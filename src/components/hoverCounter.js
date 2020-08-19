import React, {Component} from 'react'

class HoverCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState( preState => {
            return {
                count: preState.count + 1
            }
        })
    }

    render(){
        const {count} = this.state
        return (
            <div>
                <button onMouseOver={this.incrementCount}> Hovered {count} times </button>
            </div>
        )
    }
}

export default HoverCounter

// share common functionality between the component without repeating code. this is where HOC coms