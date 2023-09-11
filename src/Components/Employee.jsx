import React from 'react'

const Employee = (props) => {

  return (
    <div className="employees">
        <h3>Employee: {props.name}</h3>
        <span>{props.role ? props.role : 'No role yet'}</span>
    </div>
  )
}

export default Employee;