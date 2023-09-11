import { useState } from 'react';
import './App.css';
import Employee from './Components/Employee';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] =useState('dev');
  const [employees, setEmployees] =useState([
      {
        name: 'Sophia',
        role: 'Developer',
        img: 'https://media.istockphoto.com/id/1281698360/photo/natural-afro-hair-wide-toothy-smile-and-expression-of-gladness-on-the-face-of-young-brown.jpg'
      },
      {
        name: 'Sal',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      }, 
      {
        name: 'John',
        role: 'Director of Eng.',
        img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
      }, 
      {
        name: 'Caleb',
        role: 'UI/UX',
        img: 'https://images.pexels.com/photos/6945554/pexels-photo-6945554.jpeg'
      }, 
      {
        name: 'Esther',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/8084235/pexels-photo-8084235.jpeg'
      }, 
      {
        name: 'Jennifer',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/6945664/pexels-photo-6945664.jpeg'
      }, 
      {
        name: 'Lynnete',
        role: 'Backend ',
        img: 'https://images.pexels.com/photos/6405673/pexels-photo-6405673.jpeg'
      },
      {
        name: 'Nicey',
        role: 'Developer',
        img: 'https://media.istockphoto.com/id/969233490/photo/young-african-woman-smiling-at-sunset.jpg'
      }
    ]);
  
  const showEmployees = true;


  return (
    <div className="App">
      {showEmployees ? (
        <div className="employees bg-slate-600">
          <input className=' bg-blue-400 ' type="text" onChange={(e) => {
            console.log(e.target)
            setRole(e.target.value)
          }}/>
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              console.log(employee);
              return (
                <Employee 
                    key= {uuidv4()}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
                />
              )
            })}
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