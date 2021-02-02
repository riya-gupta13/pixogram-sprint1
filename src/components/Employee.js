import React from 'react'

function Employee({employee}) {
    return (
        <div>
            <h2>
                My name is {employee.name}. My Id is {employee.id}. My salary is {employee.salary}.
            </h2>
        </div>
    )
}

export default Employee
