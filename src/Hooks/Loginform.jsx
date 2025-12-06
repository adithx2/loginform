import React from "react"

const Loginform = () => {

    const handleChange = (e) => {

        console.log(e.target.value)
    }

    const handleSubmit = (e) => {

      e.preventDefault()

      alert("Form Submitted")


    }

     return (
      <div>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter username" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
}
  

export default Loginform