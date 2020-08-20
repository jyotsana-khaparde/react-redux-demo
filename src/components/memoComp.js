import React from 'react'

function MemoComp({name}) {
    console.log('Memo Component');
    return(
        <div>
            {name}
        </div>
    )
}

/**
 * React.memo accept a component add something to that component and return a new enchanced component(just like HOC).
 * It is capable of avoiding re-render when there is no changes in props
 * React.memo is similar to pure component but it works with functional component instead
 */
export default React.memo(MemoComp)