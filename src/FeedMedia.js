import React from 'react';

const FeedMedia = (prop) => {
    return(
        <div className="feed media">
            <img src={prop.image}
            className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0">{prop.title}</h5>
                <p>{prop.text}</p>
                <button className= "btn btn-primary"> Follow </button>
            </div>
        </div>
    )
}

export default FeedMedia; 