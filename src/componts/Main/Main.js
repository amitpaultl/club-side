import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Main = () => {
    const [exercise, setExercise] = useState([])
    useEffect(()=>{
        fetch('lodeData.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    return (
        <div>
            {
                exercise.map(item => <Item card={item} key={item.id}></Item>)
            }
        </div>
    );
};

export default Main;