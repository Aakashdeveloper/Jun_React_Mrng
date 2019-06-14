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
            news:JSON,
            filtered:JSON
        }
        
    }

    filterNews(keyword){
        let output  = this.state.news.filter((item) =>{
            return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })

        this.setState({filtered: output})
    }

    /*var ages = [32, 33, 16, 40];
ages.filter((age) => {  return age >= 18; });
*/

    render(){
        return(
            <div>
                <Header userInput={(datafromheader)=> this.filterNews(datafromheader)}/>
                <NewsList newsdata={this.state.filtered}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));