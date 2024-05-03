import React, { useEffect, useState } from 'react'
import { fetchData } from '../../utils/persistenceFunction'

const PersonList = ({ updated, setUpdated }) => {
  const [people, setPeople] = useState([])
  const API_ENDPOINT = "http://localhost:3000/api"

  const handleDelete = (event) => {
    fetch(`${API_ENDPOINT}/${event.target.id}`, { method: 'DELETE' })
      .then(() => setUpdated(!updated))
  }

  useEffect(() => {
    fetchData(API_ENDPOINT, setPeople)
  }, [updated])

  return (
    <section>
      <h1> List of persons</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
              <td>{person.gender}</td>
              <td>
                <button id={person.id} onClick={handleDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default PersonList