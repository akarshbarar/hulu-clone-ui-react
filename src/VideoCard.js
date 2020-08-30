import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from "react-text-truncate";
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
const base_url="https://images.tmdb.org/t/p/original/";



const  VideoCard=forwardRef(({ movie },ref)=> {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/>
            <TextTruncate 
            line={2} 
            element="p" 
            truncateText="..." 
            text={movie.overview}
            textTruncateChild={<a href="#">Read on</a>}/>
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} *`}
                {movie.release_date || movie.first_air_date}
                <ThumbUpAltSharpIcon/>
                {movie.vote_count}
            </p>
        </div>
    )
});

export default VideoCard
