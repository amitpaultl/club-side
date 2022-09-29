import React from 'react';
import './RightSide.css'

const addSecent = (e) =>{
    const values = e.terget.inner.text
    console.log(values);
}

const RightSide = () => {
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
                <button className='rounded-circle '><span onClick={addSecent}>20</span>s</button>
                <button className='rounded-circle'><span>30</span>s</button>
                <button className='rounded-circle'><span>40</span>s</button>
                <button className='rounded-circle '><span>50</span>s</button>
            </div>
            <h3 className='break'>Exercise Details</h3>
            <div className="detalis-bg">
                <div className="detalis d-flex justify-content-between">
                    <h3>Exercise time</h3>
                    <h3>200 seconds</h3>
                </div>
            </div>
            <div className="detalis-bg">
                <div className="detalis d-flex justify-content-between">
                    <h3>Break time</h3>
                    <h3>20 seconds</h3>
                </div>
            </div>
            <button type="button" class="btn btn-primary w-100 completed">Activity Completed</button>

        </div>
    );
};

export default RightSide;