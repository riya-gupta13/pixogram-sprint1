import React from 'react'
import Employee from './Employee'

function List() {
    const employees=[
        {  id:1,
            name:"Riya",
            salary:"45678"
        },
        {  id:2,
            name:"Rifka",
            salary:55678
        }
    ]
    const employeeList = employees.map(employee => <Employee key={employee.id} employee={employee} /> )
       return(
           <div>
               {employeeList}
           </div>
       )
    
    // const fruits=['Apple','Orange','Mango']
    // const fruitList=fruits.map(fruit => <h2>{fruit}</h2>)
    // return (
    //     <div>
    //         {fruitList}
    //     </div>
    // )
}

export default List
