import React from 'react';

const FeedMedia = (prop) => {
    return(
        <div className="feed media">
            <img src={prop.image}
            className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0">Media heading</h5>
                <p>Cras sit amet nibh libero, 
                    in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. 
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
                    Fusce condimentum nunc ac nisi vulputate fringilla. 
                    Donec lacinia congue felis in faucibus.</p>
                <button className= "btn btn-primary"> Follow </button>
            </div>
        </div>
    )
}

export default FeedMedia; 