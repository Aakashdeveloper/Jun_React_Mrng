import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
    render(){
        return(
            <div>
                <div class="panel panel-primary">
                    <div class="panel-heading">Posts page Heading</div>
                    <div class="panel-body">
                        Posts page Content
                        <br/>
                        <Link to="/posts/javascript" class="btn btn-success">Javascript</Link>
                        <br/><br/>
                        <Link to="/posts/redux" class="btn btn-danger">Redux</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Posts;