import React, { Component } from 'react'

export class CondIf extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogging:true
        }
    }
    

    render() {
        //fourth approach(short circuit operator)
        return( this.state.isLogging && <div>Welcome admin</div> )

        //third approach(ternary operator)
        return(
            this.state.isLogging ? <div>Welcome admin</div> : <div>wecome User</div>
        )

        //second approach(by variable assigning)
        // let msg
        // if(this.state.isLogging){
        //     msg= <div>Welcome Admin</div>
        // }
        // else{
        //     msg= <div>Welcome as User</div>
        // }
        // return(<div>{msg}</div>)

        //first approach
        // if(this.state.isLogging){
        //     return (
        //         <div>
        //             <h1>Welcome as Admin</h1>
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             <h1>Welcome as Guest</h1>
        //         </div>
        //     )
        // }
       
    }
}

export default CondIf
