import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header';
import JSON from './db.json';

// JSX
class App extends Component{
    constructor(){
        super()
        
        this.state={
            news:JSON
        }
        
    }
    render(){
        console.log(">>>>",this.state.news)
        return(
            <div>
                <Header/>
                <h1>Welcome to react APP</h1>
                <h2>This iS NareshIt Class</h2>
                <div>
                    This is inner div
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));