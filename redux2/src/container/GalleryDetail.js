import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class GalleryDetail extends Component{
    render(){
        return(
            <div>
                Gallery Detail
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        details:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryDetail);