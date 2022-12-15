import React, { Component } from "react";

class Counter extends Component{
    state={
        count:1
    }
    render(){
        return(
            <React.Fragment>
                <h1>Witam</h1>
                <span>{this.formatCount()}</span>
                <button>increment</button>
            </React.Fragment>
        )
    }
    formatCount(){
        const { count } = this.state
        return count === 0 ? 'Zero' : count
    }
}

export default Counter