import React from 'react';

const Item = (props) => {
    console.log(props.card);
    const {age,about,name,picture,time} = props.card
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Item;