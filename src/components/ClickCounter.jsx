import react from "react";

export default class ClickCounter extends react.Component{
    state = {
        count: 0,
    };

    incrementCount = () =>{
        this.setState((preState) => ({count: preState.count+1}));
    }
    
    render(){
        const {count} = this.state;
        return(
            <div>
                <button type="button" onClick={this.incrementCount}>Clicked {count} times</button> 
            </div>
        );
    }

}