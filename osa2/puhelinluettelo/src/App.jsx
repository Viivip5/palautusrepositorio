import { useState } from 'react'

const Person = (props) => {
  return (
    <li>{props.person} {props.number}</li>
  )
}

const App = () => {
  const initialPersons = [

    { name: 'Arto Hellas', id: 1, number: '040-123456' },
    { name: 'Ada Lovelace', id: 2, number: '39-44-5323523' },
    { name: 'Dan Abramov', id: 3, number: '12-43-234345' },
    { name: 'Mary Poppendieck', id: 4, number: '39-23-6423122' }

  ]
  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')
  const [newPersons, setNewPersons] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPersons = (event) => {
    event.preventDefault()
    const personsInformation = {
      name: newPersons,
      id: String(persons.length + 1),
      number: newNumber
    }
    if (persons.map((entry) => entry.name).includes(newPersons)) {
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
      <form onSubmit={handleSubmit}>
        <div> filter shown with <input value={newFilter} onChange={handleFilterChange} /></div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPersons}>
        <div> name: <input value={newPersons} onChange={handlePersonsChange} /></div>
        <div> number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter((entry) => String(entry.name).toLowerCase().includes(newFilter.toLowerCase())).map(person =>
          <Person person={person.name} number={person.number} key={person.id} />
        )}
      </ul>
    </div>
  )

}

export default App