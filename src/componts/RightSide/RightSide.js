import React, { useEffect, useState }  from 'react';
import './RightSide.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const addSecent = (e) =>{
    const setText = document.getElementById('break-time-id');
    const values = e.target.innerText
    setText.innerText = values + 'seconds';
    localStorage.setItem('time', values)
    
}


const RightSide = ({exerciseTimeCount}) => {

    let total = 0;
    for (const singleCount of exerciseTimeCount) {
        total = total + singleCount
    }

    const notify = () =>{
        toast.success("Activity Completed successful",{
        position:"top-center"
    });
    } 
    const [brackTime, setbrackTime] = useState([])

    useEffect(()=>{
        const getData = localStorage.getItem('time')
        
        setbrackTime(getData)
    },[])
    return (
        <div className='right-side' >
            <div className="profile d-flex ">
                <div className="img-profile ">
                    <img className='w-100 rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtFemEi8mIn9zgp-ED29_sxvxEudSmZQ8qg&usqp=CAU" alt="" />
                </div>
                <div className="pofile-info">
                    <h5>Zahid Hossain</h5>
                    <p>Sydney, Australia</p>
                </div>
            </div>

            <div className="Weights d-flex justify-content-between">
                <div className="Weight">
                    <h3>75kg</h3>
                    <p>Weight</p>
                </div>
                <div className="Height">
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div className="Age">
                    <h3>25yrs</h3>
                    <p>Age</p>
                </div>
            </div>

            <h3 className='break'>Add A Break</h3>
            <div className="break-info d-flex justify-content-around ">
                <button onClick={addSecent} className='rounded-circle '>20</button>
                <button onClick={addSecent} className='rounded-circle'>30</button>
                <button onClick={addSecent} className='rounded-circle'>40</button>
                <button onClick={addSecent} className='rounded-circle '>50</button>
            </div>

            <h3 className='break'>Exercise Details</h3>

            <div className="detalis-bg">
                <div className="detalis d-flex justify-content-between">
                    <h3>Exercise time</h3>
                    <h3 className='count-time' id='exercise-time-id'>{total} seconds</h3>
                </div>
            </div>

            <div className="detalis-bg">
                <div className="detalis d-flex justify-content-between">
                    <h3>Break time</h3>
                    <h3 className='count-time' id='break-time-id'> {brackTime ? brackTime + 'seconds': 0 + 'seconds'}</h3>
                </div>
            </div>
            <button onClick={notify} type="button" className="btn btn-primary w-100 completed">Activity Completed</button>
   
            <ToastContainer />
        </div>

    );
};

export default RightSide;