import React, {Component} from 'react';

class PostDetails extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">Posts Details  page Heading</div>
                    <div className="panel-body">
                         Posts Details  page Content for <h2>{this.props.match.params.subject}</h2>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}


export default PostDetails;