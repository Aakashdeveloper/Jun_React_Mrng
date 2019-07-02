import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


//Component
import Header from '../component/Header';
import Footer from '../component/Footer';

//Container
import Home from '../container/Home';

class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                            <Route exact path="/" component={Home}/>
                        <br/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;