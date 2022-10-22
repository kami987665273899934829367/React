import React, {Component} from "react";

class Counter extends Component {
    
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    Increment(){
       this.setState({
        counter: this.state.counter+1
       })
    }


    Decrement(){
        if(this.state.counter > 0)
        {                          
        this.setState({
            counter: this.state.counter-1
           })
        }

        else
        {
            alert("Sorry")
        }
    }


    render(){
        return (
            <div>
                <h1>Counter App</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={() => this.Increment()}>Increment</button>
                <button onClick={() => this.Decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter;