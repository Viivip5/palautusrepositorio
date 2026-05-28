import { useState, useEffect } from 'react'
import axios from 'axios'

const Person = (props) => {
  return (
    <li>{props.person} {props.number}</li>
  )
}
const Persons = (props) => {
  return (
    <ul>
      {props.persons.filter((entry) => String(entry.name).toLowerCase().includes(props.newFilter.toLowerCase())).map(person =>
        <Person person={person.name} number={person.number} key={person.id} />
      )}
    </ul>
  )
}
const Filter = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div> filter shown with <input value={props.newFilter} onChange={props.handleFilterChange} /></div>
    </form>)
}
const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPersons}>
      <div> name: <input value={props.newPersons} onChange={props.handlePersonsChange} /></div>
      <div> number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>
      <div> <button type="submit">add</button> </div>
    </form>
  )
}
const App = () => {
  const [personsData, setPersonsData] = useState([])
  const [newName, setNewName] = useState('')
  const [newPersons, setNewPersons] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersonsData(response.data)
      })
  }, [])
  console.log('render notes')


  const addPersons = (event) => {
    event.preventDefault()
    const personsInformation = {
      name: newPersons,
      id: String(personsData.length + 1),
      number: newNumber
    }
    if (personsData.map((entry) => entry.name).includes(newPersons)) {
      window.alert(newPersons + ' is already added to phonebook')
    } else {
      setPersons(persons.concat(personsInformation))
      setNewPersons('')
      setNewNumber('')
    }
  }
  const handlePersonsChange = (event) => {
    setNewPersons(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSubmit={handleSubmit} newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPersons={addPersons} newPersons={newPersons}
        newNumber={newNumber} handlePersonsChange={handlePersonsChange}
        handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={personsData} newFilter={newFilter} />
    </div>
  )

}

export default App