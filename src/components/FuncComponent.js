import React from 'react'

function FuncComponent (props){
    console.log(props)
return(
    <div>
        <h1>This is Func Component</h1>
        <h3> I am inside the FuncComponent and my name is {props.name}</h3>
        <button onClick= {props.updateName}/>
    </div>
)
}

export default FuncComponent
