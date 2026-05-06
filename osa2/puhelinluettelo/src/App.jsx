import { useState } from 'react'

const Person = (props) => {

  return (
    <li>{props.person}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: '1'
    }
  ])
  const [newName, setNewName] = useState('')
  const [nameList, setNameList] = useState(['Arto Hellas'])
  const [newPersons, setNewPersons] = useState('')

  const addPersons = (event) => {
    event.preventDefault()

    console.log('painoit nappia', event.target)
    console.log(String(persons.length + 1))
    const personsInformation = {
      name: newPersons,
      id: String(persons.length + 1)
    }

    if (nameList.includes(newPersons)) {
      window.alert(newPersons + ' is already added to phonebook')
    } else {
      setPersons(persons.concat(personsInformation))
      setNameList(nameList.concat(newPersons))
      setNewPersons('')
      console.log(nameList)
      console.log(persons)
    }
  }

  const handlePersonsChange = (event) => {
    console.log(event.target.value)
    setNewPersons(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newPersons} onChange={handlePersonsChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person person={person.name} key={person.id} />
        )}
      </ul>
    </div>
  )

}

export default App