import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Employee from './Components/Employee';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';


function App() {
  const [role, setRole] =useState('dev');
  const [employees, setEmployees] =useState([
      {
        id: 1,
        name: 'Sophia',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      },
      {
        id: 2,
        name: 'Sal',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      }, 
      {
        id: 3,
        name: 'John',
        role: 'Director of Eng.',
        img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
      }, 
      {
        id: 4,
        name: 'Caleb',
        role: 'UI/UX',
        img: 'https://images.pexels.com/photos/6945554/pexels-photo-6945554.jpeg'
      }, 
      {
        id: 5,
        name: 'Esther',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/8084235/pexels-photo-8084235.jpeg'
      }, 
      {
        id: 6,
        name: 'Jennifer',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/6945664/pexels-photo-6945664.jpeg'
      }, 
      {
        id: 7,
        name: 'Lynnete',
        role: 'Backend ',
        img: 'https://images.pexels.com/photos/6405673/pexels-photo-6405673.jpeg'
      },
      {
        id: 8,
        name: 'Nicey',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      }
    ]);
  
  const updateEmployee = (id, newName, newRole, newImg) => {
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id) {
        return {...employee, name: newName, role: newRole, img: newImg}
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const addNewEmployee = (name, role, img) => {
     const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
     }
     setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;


  return (
    <div className="App">
      {showEmployees ? (
        <div className="employees">

          <input className='bg-gray-50 border border-p-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block mx-auto p-2.5 dark:bg-gray-700 dark:border-purple-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' type="text" onChange={(e) => {
            console.log(e.target)
            setRole(e.target.value)
          }}/>

          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee 
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />

              )
              return (
                <Employee 
                    key= {employee.id}
                    id={employee.id}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img}
                    editEmployee={editEmployee}
                />
                )
              })}
          </div>
          <AddEmployee addNewEmployee={addNewEmployee}/>
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