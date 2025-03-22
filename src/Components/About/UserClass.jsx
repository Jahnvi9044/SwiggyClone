import React from "react"

//  Class Based Component : 

class UserClass extends React.Component {
    render(){
      return (
        <div className = "user-card">
          <h2>Name: Soni </h2>
          <h3>Location : Dehradoon </h3>
          <h4>Contact : @sonimarch7</h4>
        </div>
      )
    }
  }


export default UserClass;