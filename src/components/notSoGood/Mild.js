import React, { Component } from "react";

class Mild extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         MildLevel: "",
    //     }
    // }

    componentDidMount(){
        document.title = "Mild";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    level = () => {
        if (parseInt(this.state.MildLevel) < 4){
            this.props.history.push("/mild");
        }
        else if (parseInt(this.state.MildLevel) >= 4 && parseInt(this.state.MildLevel) < 7){
            this.props.history.push("/noticeable");
        }
        else{
            this.props.history.push("/severe");
        }
    }

    render(){
        return(
            <div>
                <p>Sorry to hear that. Can you specify how bad it is?</p>
            </div>
        )
    }
}

export default Mild;