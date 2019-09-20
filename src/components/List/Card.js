import React from 'react';


const Card = ({name, url, type}) =>{
    return(
        <div className={`card card-${type} ${name}`}>
        </div>
    );
}

export default Card;