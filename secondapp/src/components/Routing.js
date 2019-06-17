import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';
import PostDetails from './PostDetail';

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                        <Link to="/">Home</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="/profile">Profile</Link>
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/posts/:id" component={PostDetails}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;