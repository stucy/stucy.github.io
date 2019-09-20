import React from 'react';

const MenuItem = ({src, alt, type, index, setActive, active, changeType}) => {

    let ac;

    active ? ac="active" : ac = "";

    return(
        <div 
        className={`menu-item ${type} ${ac}`}
        onClick={ () => {
            setActive(index);
            changeType(type);
        }}
        >
            <img src={src} alt={alt}/>
        </div>
    )
}

export default MenuItem;