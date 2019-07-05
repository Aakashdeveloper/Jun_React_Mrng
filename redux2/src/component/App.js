import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


//Component
import Header from '../component/Header';
import Footer from '../component/Footer';

//Container
import Home from '../container/Home';
import GalleryDetail from '../container/GalleryDetail';
import NewsDetail from '../container/NewsDetail';

class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/news/:id" component={NewsDetail}/>
                            <Route exact path="/gallery/:id" component={GalleryDetail}/>
                        <br/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;