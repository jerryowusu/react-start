import React from 'react'

const Employee = (props) => {

  return (

    <div className="min-w-[250px] py-8 px-8 m-2 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto rounded-full h-[100px] w-[100px] sm:mx-0 sm:shrink-0" src={props.img} alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
                {props.name}
            </p>
            <p className="text-slate-500 font-medium">
            {props.role}
            </p>
            </div>
           
            {props.editEmployee}
        </div>
    </div>
  )
}

export default Employee;