import React, { useEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faDumbbell} from '@fortawesome/free-solid-svg-icons'
import './Alltotal.css'
import Main from '../componts/Main/Main';
import Item from '../componts/Item/Item';
import RightSide from '../componts/RightSide/RightSide';

const Alltotal = () => {
    const [exercise, setExercise] = useState([])
    useEffect(()=>{
        fetch('lodeData.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-9">
                <div className="container-coustom">
                    <div className="logo">
                    <i className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></i><a href="">Miss Bangla Ulra</a>
                    
                    </div>
                    <h2 className='main-title'>Select today’s exercise</h2>
                    <div className='card-style'>
                        {
                            exercise.map(item => <Item card={item} key={item.id}></Item>)
                        }
                    </div>
                </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-3">
                        <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Alltotal;