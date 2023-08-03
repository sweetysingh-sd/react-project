// import './App.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Greeting from './component/Greeting/Greeting.js'
import Signup from './component/Auth/Signup.js'
import Login from './component/Auth/Login.js'
import UntilBirthday from './component/Greeting/UntilBirthday.js'
import {useState} from 'react'

function App() {
  const [userName, onUpdateName] = useState('')
  const [dateOfBirth, onUpdateDateOfBirth] = useState('')
  const [remainingDays, onUpdateRemainingDays] = useState('')

  const updateName = (name)=>{
    onUpdateName(name)
  }
  const updateDateOfBirth = (dob)=>{
    onUpdateDateOfBirth(dob)
  }
  const updateRemainingDays = (days) =>{
    onUpdateRemainingDays(days);
  }
  
  return (
    <Router>
      <Routes>
        <Route path = "/signup" element={<Signup />}>
          
        </Route>

        l<Route path = "/login" 
              element={<Login onUpdateName={updateName} onUpdateDateOfBirth={updateDateOfBirth} onUpdateRemainingDays={updateRemainingDays}/>}>
         
        </Route>

        <Route path ="/greeting" element={<Greeting userName={userName} dateOfBirth={dateOfBirth}/>}>
          
        </Route>
        <Route path ="/untilbirthday" element={<UntilBirthday userName={userName} remainingDays={remainingDays}/>}>
          
        </Route>
        <Route path ="/" element={<Login onUpdateName={updateName} onUpdateDateOfBirth={updateDateOfBirth} onUpdateRemainingDays={updateRemainingDays}/>}>
        </Route>
        
      </Routes>
    </Router>
    
  );
}

export default App;
