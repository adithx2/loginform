import React from "react"
import { useState } from "react"

const Eventhandle = () => {

//     const [val,updateValue] = useState("")

// const value = () => {

//     console.log("value update")

//     updateValue("value update")

// }


//     return (

//       <div>
//         <button onClick={value}>Click</button>

//         <h1>{val}</h1>
//       </div>
//     )

const [val,updateValue] = useState()

const value = () => {

  updateValue("Value update")
}
return(

  <div>

    <button onClick={value}>Click</button>

    <h1>{val}</h1>
  </div>
)
}


  


export default Eventhandle