import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestNews, articleNews, GalleryData } from '../actions';

import LatestNews from '../component/Home/LatestNews';
import ArticleNews from '../component/Home/ArticlesNews';
import Gallery from '../component/Home/Gallery';

class Home extends Component {
    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
        this.props.GalleryData()
    }

    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.news.latest}></LatestNews>
                <ArticleNews articledata={this.props.news.articles}/>
                <Gallery latestGallery={this.props.galdata.galleryimg}/>
            </div>
        )
    }
}

// Recive the data
function mapStateToProps(state){
    console.log(">>>>>",state)
    return{
        news: state.news,
        galdata: state.gallery
    }
}

//Bind the actions
function mapDisptachToProps(dispatch){
    return bindActionCreators({latestNews, articleNews, GalleryData}, dispatch)
}

export default connect(mapStateToProps,mapDisptachToProps)(Home);

/*
mul(2)(3)(4)()
*/