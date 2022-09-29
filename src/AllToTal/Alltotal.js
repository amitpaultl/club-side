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

    const [exerciseTime, setexerciseTime] = useState([])
    
    const addSecend = (time)=>{
        const old = [...exerciseTime, time]
        setexerciseTime(old)
        
    }
  
    

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-8 col-xl-9">
                <div className="container-coustom">
                    <div className="logo">
                    <i className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></i><a href="/home">Miss Bangla Ulra</a>
                    
                    </div>
                    <h2 className='main-title'>Select today’s exercise</h2>
                    <div className='card-style'>
                        {
                            exercise.map(item => <Item secend={addSecend} card={item} key={item.id} ></Item>)
                        }
                        
                    </div>
                    <div className="question-add">
                        <h2>1. How Does React Work?</h2>
                        <p>
                            
                            One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.

                            Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:

                            You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.

                            JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.

                            In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.

                            The following is a breakdown of the HTML tags above:

                            MyCounter> represents a variable called count whose value is a numeric expression.
                            GameScores is an object literal that has two prop-value pairs.
                            DashboardUnit> is the XML block that is rendered on the page.
                            scores={"GameScores"} is the scores attribute. It gets its value from the GameScores object literal defined earlier.
                            A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.

                            For instance, the following code displays “Hello World” on the page by rendering the element into a DOM node called root.
                            
                        
                        </p>
                        <h2>2. What are the differences between props and state?</h2>
                        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                        <h2>3. What does useEffect do?</h2>
                        <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-4 col-xl-3">
                        <RightSide  exerciseTimeCount={exerciseTime}></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Alltotal;