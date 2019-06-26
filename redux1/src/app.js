import React, {Component} from 'react';
import { connect }  from 'react-redux';
import * as actions from './action';

class App extends Component {

    componentDidMount(){
        this.props.moviesList();
    }
    render(){
        return(
            <div> App Component</div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }
}

export default connect(mapStateToProps,actions)(App);