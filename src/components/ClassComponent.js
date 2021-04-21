import React, {Component} from "react"

class Parent extends Component{
    constructor(props){
        this.state={
        inputValue:''
        }
    }

    handleChange= (value) =>{
        this.setState({
            inputValue: value
        })
    }

    render(){
        return(
            <div>
                <h1>This is Class Component</h1>
                <h3> I am in Class Component {this.props.parentName}</h3>
                <input value={this.state.inputValue} onChange={(e)=>this.handleChange(e.target.value)}/>
                <button onClick={()=>this.props.updateNameWithValue(this.state.inputValue)}>Update name with new value</button>
            </div>
        )
    }
}

export default ClassComponent 