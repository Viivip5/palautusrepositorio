import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.name}{props.value}</div>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValueGood = newValue => {
    console.log("value now", newValue)
    setGood(newValue)
  }
  const setToValueNeutral = newValue => {
    console.log("value now", newValue)
    setNeutral(newValue)
  }
  const setToValueBad = newValue => {
    console.log("value now", newValue)
    setBad(newValue)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setToValueGood(good + 1)} text="good" />
      <Button onClick={() => setToValueNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setToValueBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display value={good} name="good " />
      <Display value={neutral} name="neutral " />
      <Display value={bad} name="bad " />
    </div>
  )
}

export default App