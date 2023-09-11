import './App.css';
import Employee from './Components/Employee';

function App() {
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <div className="employees">
           <Employee name='Jerry' role= 'Intern'/>
           <Employee name= 'Wesley'/>
           <Employee name='Jayceon'/>
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