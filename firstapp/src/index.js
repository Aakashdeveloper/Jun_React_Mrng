import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header';
import JSON from './db.json';
import NewsList from './component/news_list';

// JSX
class App extends Component{
    constructor(props){
        super(props)
        
        this.state={
            news:JSON
        }
        
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList newsdata={this.state.news}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));