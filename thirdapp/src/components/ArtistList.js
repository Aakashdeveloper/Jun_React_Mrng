import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    console.log(">>>>props",props)
    const renderArtist = ({artistData}) => {
        if(artistData){
            return artistData.map((item) => {

                const mystyle={
                    background: `url('/images/covers/${item.cover}.jpg')`
                }
                return(
                    <Link key={item.id} to={`/artist/${item.id}`} className="artist_item"
                    style={mystyle}>
                        <div>
                            {item.name}
                        </div>
                    </Link>
                )
            })
        }
        
    }

    return(
        <div className="artist_list">
            <h4>Artist List</h4>
            {renderArtist(props)}
        </div>
    )
}


export default ArtistList;