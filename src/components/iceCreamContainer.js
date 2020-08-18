import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    console.log('props: ', props);
    return(
        <div>
            <h2>Number of ice-cream {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy ice-cream</button>
        </div>
    )
}
/**
 * when you want to access the redux store in your component you define the mapStateToProps function
 * it take redux state as a parameter which can be use to which can be use to retrive appropreate state properties
 * this property can be taken as aprops along with other property for this component
 */
const mapStateToProps = state => {
    console.log('state.numOfIceCreams --', state);
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

/**
 * For dispatching action from redux store we have mapDispatchToProps function, this function take dispatch as a parameter
 * and allow us to map action creators to props in our component
 */
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

/**
 *  connect function is use to connect our component to redux store (via these 2 functions) 
 *  for that we use the connect function or the connect higher order component from the react-redux liburary
 * */ 
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
