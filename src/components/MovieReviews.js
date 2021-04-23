// Code MovieReviews Here
import React, { Component } from 'react'

const MovieReviews = (props) => {
    return (
        <div className='review-list'>
            {props.movies}
        </div>
    )
}

export default MovieReviews