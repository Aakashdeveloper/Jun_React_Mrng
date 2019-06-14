import React, {Component} from 'react';
import './header.css';


class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            title:'React App',
            userInput: 'User Search'
        }                     
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({userInput:event.target.value? event.target.value: 'User Search'})
        this.props.userInput(event.target.value)
    }



    render(){
        return(
            <div>
                <header>
                    <div className="logo"
                    onClick={()=>{console.log('clicked')}}>
                    {this.state.title}
                    </div>
                    <center>
                        <input onChange={this.inputChange.bind(this)} />
                        <p>{this.state.userInput}</p>
                    </center>
                    <hr/>
                </header>
            </div>
        )
    }
}

export default Header;