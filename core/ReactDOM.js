import REACT from "./React"
const ReactDOM = {
    CreateRoot(container) {
        return {
            render(APP) {
                REACT.render(APP, container)
            }
        }
    }
}

export default ReactDOM