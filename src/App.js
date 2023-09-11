import { useState } from 'react';
import './App.css';
import Employee from './Components/Employee';

function App() {
  const [role, setRole] =useState('dev');
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <div className="employees bg-slate-600">
          <input className=' bg-blue-400 ' type="text" onChange={(e) => {
            console.log(e.target)
            setRole(e.target.value)
          }}/>
          <div className='flex flex-wrap justify-center' >
            <Employee name='Jerry' role= 'Intern' img= 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/>
            <Employee name= 'Wesley' img= 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/>
            <Employee name='Jayceon' role={role} img= 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/>
            <Employee name= 'Jarryd' role='Developer' img= 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/>
            <Employee name='Esther' role='Manager' img= 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'/>
          </div>
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