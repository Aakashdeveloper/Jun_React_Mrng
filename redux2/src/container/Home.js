import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestNews, articleNews } from '../actions';

import LatestNews from '../component/Home/LatestNews';
import ArticleNews from '../component/Home/ArticlesNews';
import Gallery from '../component/Home/Gallery';

class Home extends Component {
    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()

    }
    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.news.latest}/>
                <ArticleNews articledata={this.props.news.articles}/>
                <Gallery/>
            </div>
        )
    }
}

// Recive the data
function mapStateToProps(state){
    console.log(">>>>>",state)
    return{
        news: state.news
    }
}

//Bind the actions
function mapDisptachToProps(dispatch){
    return bindActionCreators({latestNews, articleNews}, dispatch)
}

export default connect(mapStateToProps,mapDisptachToProps)(Home);

/*
mul(2)(3)(4)()
*/