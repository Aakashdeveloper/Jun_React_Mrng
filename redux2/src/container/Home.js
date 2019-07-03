import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestNews } from '../actions';

import LatestNews from '../component/Home/LatestNews';

class Home extends Component {
    componentDidMount(){
        this.props.latestNews()
    }
    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.articles.latest}/>
            </div>
        )
    }
}

// Recive the data
function mapStateToProps(state){
    console.log(">>>>>",state)
    return{
        articles: state.articles
    }
}

//Bind the actions
function mapDisptachToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}

export default connect(mapStateToProps,mapDisptachToProps)(Home);