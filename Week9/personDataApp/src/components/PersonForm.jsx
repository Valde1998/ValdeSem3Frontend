import React, { useState } from 'react'

const PersonForm = ({ updated, setUpdated }) => {
  const [person, setPerson] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    gender: "Select gender"
  })

  const addPerson = (event) => {
    event.preventDefault()
  
    fetch('http://localhost:3000/persons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      setUpdated(!updated)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  }

  const handleChange = (event) => {
    setPerson({
      ...person,
      [event.target.id]: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <label htmlFor="id">Id</label>
        <input id="id" type="number" readOnly placeholder="id" value={person.id} onChange={handleChange}/>

        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="name" value={person.name} onChange={handleChange}/>

        <label htmlFor="age">Age</label>
        <input id="age" type="number" min="1" max="120" placeholder="age" value={person.age} onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="email" value={person.email} onChange={handleChange}/>

        <label htmlFor="gender">Gender</label>
        <select id="gender" value={person.gender} onChange={handleChange}>
          <option defaultChecked>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default PersonForm