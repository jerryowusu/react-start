import { useState } from 'react';
import './App.css';
import Employee from './Components/Employee';

function App() {
  const [role, setRole] =useState('dev');
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <div className="employees">
          <input type="text" onChange={(e) => {
            console.log(e.target)
            setRole(e.target.value)
          }}/>
           <Employee name='Jerry' role= 'Intern'/>
           <Employee name= 'Wesley'/>
           <Employee name='Jayceon' role={role} />
           <Employee name= 'Jarryd' role='Developer'/>
           <Employee name='Esther' role='Manager'/>
        </div>
        )
        :
        (
        <div className="no-employees">
          Sorry you cannot see the employees
        </div>
        )
      }
     
     
     
     
     
    </div>
  );
}

export default App;