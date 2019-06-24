import React from 'react';

const AlbumList = (props) => {

    const showAlbum = ({albumList}) => {
        if(albumList){
            return albumList.map((item,index) => {
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`} />
                )
            })
        }
    }

    return(
        <div className="album_list">
            {showAlbum(props)}
        </div>
    )
}

export default  AlbumList;