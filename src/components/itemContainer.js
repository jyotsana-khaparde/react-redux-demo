import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    console.log('props: ', props);
    return(
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItems}>Buy Items</button>
        </div>
    )
}

// send parameter of mapStateToProps is a props that is passed to component
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchAction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItems: dispatchAction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
