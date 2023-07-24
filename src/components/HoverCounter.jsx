import react from "react";

export default class HoverCounter extends react.Component{
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
                <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>
            </div>
        );
    }

}