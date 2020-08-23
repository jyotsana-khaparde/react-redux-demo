/**
 * React portal provide a way to render children into a Dom node that exist outside the dom hierarchy of the parent component.
 * with the createPortal you can reder a component onto a DOM node that is not under this root element.
 * createPortal this method takes 2 parmeter:-
 * 1. first parameter is the JSX you want to render.
 * 2. second parameter is the DOM node to mount the element on to.
 */

import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
    return ReactDom.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo