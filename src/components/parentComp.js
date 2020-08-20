import React, { Component } from 'react'
import PureComp from './pureComp'
import RegComp from './regComp'
import MemoComp from './memoComp'

class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Jyotsana'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Jyotsana'
            })
        }, 2000)
    }

    render() {
        console.log('**********i am ParentComp************');
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp