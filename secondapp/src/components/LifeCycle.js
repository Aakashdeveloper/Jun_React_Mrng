// Get Default State
// Set Initial State
// Before Get created
// Render JSX
// After Component is mounted

import React, {Component} from 'react';

class LifeCycle extends Component {
    // 1 Get Default State
    constructor(props){
        super(props)
        console.log('inside constructor')
        //2 Set Initial State
        this.state ={
            title:'LifeCycle'
        }
    }
    

    // 3 Before Get created
    componentWillMount(){
        console.log('inside componentWillMount');
        //document.querySelector('h3').style.color="red";
    }

    componentWillUpdate(){
        console.log('inside componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('inside componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.title=== "Something Else"){
            return false
        }
        return true
    }

    // 4 Render JSX  
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>Hii</h1>
                <h3>{this.state.title}</h3>
                <div onClick={()=>this.setState({title:'Something Else React'})}>
                Click to Change</div>
                <div onClick={()=>this.setState({title:'Something Else'})}>
                Click me Change</div>
            </div>
        )
    }

    // 5 After Component is mounted
    componentDidMount(){
        console.log('inside componentDidMount');
        document.querySelector('h3').style.color="red";
    }

    

}

export default LifeCycle