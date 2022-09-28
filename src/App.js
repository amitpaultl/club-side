import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faDumbbell} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Main from './componts/Main/Main';

function App() { 
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-10">
          <div className="container-coustom">
            <div className="logo">
              <i className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></i><a href="">Miss Bangla Ulra</a>
               
            </div>
            <h2 className='main-title'>Select today’s exercise</h2>
            <Main></Main>
          </div>
        </div>
        <div className="col-md-2">
          <h3>Hello</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
