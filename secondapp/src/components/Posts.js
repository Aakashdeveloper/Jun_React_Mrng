import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">Posts page Heading</div>
                    <div className="panel-body">
                        Posts page Content
                        <br/>
                        <Link to="/posts/javascript" className="btn btn-success">Javascript</Link>
                        <br/><br/>
                        <Link to="/posts/redux" className="btn btn-danger">Redux</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Posts;