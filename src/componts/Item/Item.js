import React from 'react';
import './Item.css'

const Item = (props) => {
    const {age,about,name,picture,time} = props.card
  
    return (
        <div>
            <div className='card' >
                <div className="image">
                    <img src={picture} className='card-img-top' alt=""/>
                </div>
                
                
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{about}</p>
                    <p>For Age: {age} </p>
                    <p>Time required :{time}</p>
                    <a href="#" className='btn btn-primary w-100'>Add to List</a>
                </div>
            </div>
        </div>
    );
};

export default Item;