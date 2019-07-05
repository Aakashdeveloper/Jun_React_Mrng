import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1  
}

const showGallery = ({latestGallery}) => {
    if(latestGallery){
        return(
            <Slider {...settings}>
                {latestGallery.map((data) => {
                    return(
                        <Link to={`/gallery/${data.id}`} key={data.id} className="slider-item">
                            <div className="image"
                            style={{background:`url(/images/galleries/${data.images[0].img})`}}>
                            <h3>{data.artist}</h3>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
}

const Gallery = (props) => {
    return(
        <div className="home-gallery">
            <h2>Gallery</h2>
            <br/>
            {showGallery(props)}
        </div>
    )
}

export default Gallery;