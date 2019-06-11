import React, {Component} from 'react';
import './header.css';


class Header extends Component {

    inputChange(event){
        console.log(event.target.target)
    }
    render(){
        return(
            <div>
                <header>
                    <div className="logo"
                    onClick={()=>{console.log('clicked')}}>
                    Logo
                    </div>
                    <center>
                        <input onChange={this.inputChange} />
                    </center>
                    <hr/>
                </header>
            </div>
        )
    }
}

export default Header;