import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class NewsDetail extends Component{
    render(){
        return(
            <div>
                News Detail
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        details:state.news
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);