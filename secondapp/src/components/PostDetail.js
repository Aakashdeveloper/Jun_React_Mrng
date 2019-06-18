import React, {Component} from 'react';

class PostDetails extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <div class="panel panel-info">
                    <div class="panel-heading">Posts Details  page Heading</div>
                    <div class="panel-body">
                         Posts Details  page Content for <h2>{this.props.match.params.subject}</h2>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}


export default PostDetails;