import React,{Component} from 'react';
import {connect} from 'react-redux';
import { selectedNews, clearSelecetdNews} from '../actions';
import { bindActionCreators } from 'redux';

import LikeCounter from './LikeCounter';

class NewsDetail extends Component{
    componentDidMount(){
        this.props.selectedNews(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.clearSelecetdNews();
    }

    renderNews=({selected})=>{
        if(selected){
            return selected.map((data)=> {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article By:<strong>{data.author}</strong>
                            </span>
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                            <div>
                                <LikeCounter></LikeCounter>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
               {this.renderNews(this.props.details)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("<<<details>>",state)
    return{
        details:state.news
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedNews, clearSelecetdNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);