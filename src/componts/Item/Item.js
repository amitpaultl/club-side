import React from 'react';
import './Item.css'

const Item = (props) => {
    const {age,about,name,picture,time} = props.card
    const clickAdd = props.secend
  
    return (
        <div>
            <div className='card' >
                <div className="image">
                    <img src={picture} className='card-img-top' alt=""/>
                </div>
                
                
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{about}</p>
                    <p className='age-time'>For Age: <span>{age}</span>  </p>
                    <p className='age-time'>Time required : <span>{time} seconds</span></p>
                    <button onClick={()=> clickAdd(props.card.time)} href="#" className='btn btn-primary w-100'>Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Item;