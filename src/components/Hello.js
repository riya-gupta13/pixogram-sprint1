import React from 'react'

// export default function Hello() {
//     return (
//         <div className="myClass">
//             <h1>Hello Riya</h1>
//          </div>
//      )
    const Hello =() =>{
        return React.createElement(
            'div', 
            {id: "creating", className:"myClass"},
            React.createElement('h1', null, 'Hello Riya'))
    }
//}

export default Hello;
