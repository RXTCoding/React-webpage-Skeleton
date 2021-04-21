import React, {Component} from 'react'
import FuncComponent from './FuncComponent'
import ClassComponent from './ClassComponent'

class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            name: 'RXTCoding'
        }
        this.updateName=this.updateName.bind(this)
        this.updateNameWithValue=this.updateNameWithValue.bind(this)
    }

    updateName(){
        this.setState({name:'Shida'})
    }

    updateNameWithValue(newName){
        this.setState({
            name: newName
        })
    }

    render(){
        return(
            <div>
                <h1>Parent</h1>
                <h2>My Name is : {this.state.name}</h2>
                <FuncComponent name={this.state.name} updateName={this.updateName}/>
                
                <ClassComponent name={this.state.name} updateNameWithValue={this.updateNameWithValue}/>  
            </div>
        )
    }
}

export default Parent