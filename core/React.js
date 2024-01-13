function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) => {
                return typeof child == 'string' ? createTextNode(child) : child
            })
        }
    }
}
function createTextNode(text) {

    return {
        type: 'EL_TEXTNODE',
        props: {
            nodeValue: text,
            children: []
        }
    }
}



function render(el, container) {

    const dom = el.type === 'EL_TEXTNODE'
        ? document.createTextNode('')
        : document.createElement(el.type)

    Object.keys(el.props).forEach((key) => {
        if (key != 'children') {
            dom[key] = el.props[key]
            // console.log('123======', el.props[key]);
        }
    })

    const children = el.props.children;
    children.forEach((child) => {
        render(child, dom)
    })
    console.log(container, '======');
    container.append(dom)
}


const REACT = {
    render,
    createElement,
    // createTextNode,
}
export default REACT