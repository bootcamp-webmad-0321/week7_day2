import { Component } from 'react'

import './Counter.css'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            value: 0,
            danger: false
        }
    }

    handleCounter = () => {
        this.state.value < 10 ? this.setState({ value: ++this.state.value }) : this.setState({ danger: true })
    }


    render() {

        return (
            <h3 className="counter" onClick={this.handleCounter} style={{ background: this.state.danger ? 'red' : null }}>
                <p>El contador se ha disparado {this.state.value} veces</p>
            </h3>
        )

    }
}

export default Counter