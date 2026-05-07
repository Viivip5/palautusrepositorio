import { useState } from 'react'

const Person = (props) => {
  return (
    <li>{props.person} {props.number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([

    { name: 'Arto Hellas', id: 1, number: '040-123456' },
    { name: 'Ada Lovelace', id: 2, number: '39-44-5323523' },
    { name: 'Dan Abramov', id: 3, number: '12-43-234345' },
    { name: 'Mary Poppendieck', id: 4, number: '39-23-6423122' }

  ])
  const [newName, setNewName] = useState('')
  const [nameList, setNameList] = useState(['Arto Hellas', 'Ada Lovelace', 'Dan Abramov', 'Mary Poppendieck'])
  const [newPersons, setNewPersons] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] = useState('')
  const [indexOfFilterName, setIndexOfFilterName] = useState([])

  const addPersons = (event) => {
    event.preventDefault()
    console.log('painoit nappia', event.target)
    console.log(String(persons.length + 1))
    const personsInformation = {
      name: newPersons,
      id: String(persons.length + 1),
      number: newNumber
    }
    if (nameList.includes(newPersons)) {
      window.alert(newPersons + ' is already added to phonebook')
    } else {
      setPersons(persons.concat(personsInformation))
      setNameList(nameList.concat(newPersons))
      setNewPersons('')
      setNewNumber('')
      console.log(nameList)
      console.log(persons)
    }
  }

  function filterItems(arr, query) {
    return arr.filter((el) =>
      String(el).toLowerCase().includes(query.toLowerCase())
    );
  }
  const addFilter = (event) => {
    event.preventDefault()
    console.log("mui")
    console.log('painoit nappia', event.target)
    const list = filterItems(nameList, newFilter)
    console.log("mui", list)
    setIndexOfFilterName(list.map(list => nameList.indexOf(list)))
    const filterResult = indexOfFilterName.map(index => persons[index])
    console.log("oikea", filterResult)
    console.log("numero", indexOfFilterName)
    console.log("numero2", list.map(list => nameList.indexOf(list)))
    const number = list.map(list => nameList.indexOf(list))
    const result = number.map(number => persons[number])
  }

  const handlePersonsChange = (event) => {
    console.log(event.target.value)
    setNewPersons(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  const personsToShow = showAll
    ? persons
    : filterItems(nameList, newFilter)

  const handleSubmit = (e) => {
    addFilter(e)
    setShowAll(!showAll)
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
        {personsToShow.map(person =>
          <Person person={person.name} number={person.number} key={person.id} />
        )}
      </ul>
    </div>
  )

}

export default App