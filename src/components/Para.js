import React from 'react'

// function Para(props) {
//     return (
//         <div>
//             <h1>Welcome {props.name}</h1>
//             {props.children}
//         </div>
//     )
// }

function Para({name}) {
    return (
                <div>
                    <h1>Welcome {name}</h1>
                </div>
            )
    
}

export default Para
