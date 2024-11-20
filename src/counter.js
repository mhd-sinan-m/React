import React, { Component } from "react"

class counter extends Component {
    state = {
        count: 0
    }
    increament = () => {
        let count = this.state.count + 1
        this.setState({ count })
    }
    decreament = () => {
        let count = this.state.count - 1
        this.setState({ count })
    }

    render() {
        return (
            <div className="counter">
                <h1> Counter </h1>
                <p>{this.state.count < 10 ? `0${this.state.count}` : this.state.count} </p>
                <button onClick={this.decreament}>-</button>
                <button onClick={this.increament}>+</button>
            </div>
        )
    }
}
//!
export default counter;