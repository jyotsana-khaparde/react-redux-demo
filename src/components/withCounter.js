import React from 'react'

/**
 * When you want to share common functionality between the component without repeating code. this is where HOC comes.
 * UpdatedComponent is a exapmle of higher order component, it is a function which has a original component as param
 * and return a new component, so HOC is a function that accept the component and returns a enchanced component.
 * @param {*} WrappedComponent it is a original component
 */
const UpdatedComponent = (WrappedComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        }

    incrementCount = () => {
        this.setState( preState => {
            return {
                count: preState.count + incrementNumber
            }
        })
    }
        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    /**
                     * when you create HOC make sure to pass down rest of the props eg: {...this.props}.
                     * because only these props which you will be pass here, will be available for the original component
                     * eg: for UpdatedComponent(ClickCounter), only these props which you will be pass here will be available for ClickCounter component.
                     * when we call origin component and pass props to it eg:  <ClickCounter name='jyotsana'/>, then
                     * that name props will be come in HOC as a props not in original component(ClickCounter)
                     * that's why we need to pass every props from here so that we can access it in original component(ClickCounter)
                     * flow of props when HOC is used is -> 
                     * 1. pass the props in origin component eg: <ClickCounter name='jyotsana'/>
                     * 2. It will come as a props in HOC eg: in UpdatedComponent not in ClickCounter
                     * 3. need to pass from HOC eg: <WrappedComponent {...this.props} />
                     * 4. now it will be taken as a props in origin component eg: in ClickCounter
                     */
                    {...this.props}
                />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent