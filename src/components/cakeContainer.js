import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    console.log('props: ', props);
    return(
        <div>
            <h2>Number of cake {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
/**
 * when you want to access the redux store in your component you define the mapStateToProps function
 * it take redux state as a parameter which can be use to which can be use to retrive appropreate state properties
 * this property can be taken as aprops along with other property for this component
 */
const mapStateToProps = state => {
    console.log('state.numOfCakes --', state);
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

/**
 * For dispatching action from redux store we have mapDispatchToProps function, this function take dispatch as a parameter
 * and allow us to map action creators to props in our component
 */
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

/**
 *  connect function is use to connect our component to redux store (via these 2 functions) 
 *  for that we use the connect function or the connect higher order component from the react-redux liburary.
 *  The return of connect() is a wrapper function that takes your component 
 *  and returns a wrapper component with the additional props it injects.
 *  so we can write it as ->
 *  Eg:- const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)
 *  export default wrapperFunction(CakeContainer)
 * */ 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
