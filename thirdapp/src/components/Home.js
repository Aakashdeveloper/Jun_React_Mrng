import React, {Component} from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const Url_Artist = "http://localhost:8900/artists"

class Home extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            artists:''
        }
    }
    render(){
        return(
            <div>
               <Banner></Banner>
               <ArtistList artistData={this.state.artists}></ArtistList>
            </div>
        )
    }

    componentDidMount(){
        fetch(Url_Artist,{
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({artists: data})
        })
    }
}

export default Home;