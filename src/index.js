import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {Link,Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Classes from './Classes';

const Routing = (
    <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path = "/students" component={Students}/>
          <Route path = "/classes" component={Classes}/>
        
            
            <ul>
                <div className="Navbar">

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/students">Students</Link>
                    </li>
                    <li>
                        <Link to="/classes">Classes</Link>
                    </li>

                </div>
            </ul>
        </div>

    </Router>

)

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
