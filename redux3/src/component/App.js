import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ListView from '../container/ListView';

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={ListView}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;