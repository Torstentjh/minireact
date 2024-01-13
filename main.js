// const vnode = document.createElement(el.type)
// vnode.id = 'app'
// document.querySelector('#root').append(vnode)

// const textn = document.createTextNode('')
// textn.nodeValue = el.props.nodeValue

// vnode.append(textn)

// const textel = {
//     type: 'EL_TEXTNODE',
//     props: {
//         nodeValue: 'qqwe',
//         children: []
//     }
// }

// const el = {
//     type: 'div',
//     props: {
//         id: 'appwe',
//         children: [textel]
//     }
// }

// const textel = createTextNode('asdasdas')
// const APP = createElement('div', { id: 'rrrroot' }, textel)

// const vnode = document.createElement(APP.type)
// vnode.id = APP.props
// document.querySelector('#root').append(vnode)

// const textn = document.createTextNode('')
// textn.nodeValue = textel.props.nodeValue

// vnode.append(textn)
import APP from './app.jsx'
import ReactDOM from './core/ReactDOM.js'
import REACT from './core/React.js'

ReactDOM.CreateRoot(document.querySelector('#root')).render(APP)