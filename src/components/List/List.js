import React from 'react';
import Card from './Card';
import Search from './Search';

const List = ({data, type, searchChange}) =>{
    return(
        <>
            <Search type={type} searchChange={searchChange}/>
            <div className="list">
                {
                data.map((data, i) => {
                return (
                    <Card
                    key={i}
                    id={data.id}
                    name={data.name}
                    url={data.url}
                    type={type}
                    />
                );
                })
                }
            </div> 
       </>
    );
}

export default List;