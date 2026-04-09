import { useState } from 'react'
/*9h*/
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = props => <div>{props.name}{props.value}{props.mark}</div>


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averageCount, setAverageCount] = useState(0)

  const allValuesNow = allValues => {
    console.log("total is ", allValues)
    setAll(allValues)
  }
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
  if (total == 0) /*toisinp*/
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => { setToValueGood(good + 1); allValuesNow(all + 1); setAverageCount(averageCount + 1) }} text="good" />
        <Button onClick={() => { setToValueNeutral(neutral + 1); allValuesNow(all + 1) }} text="neutral" />
        <Button onClick={() => { setToValueBad(bad + 1); allValuesNow(all + 1); setAverageCount(averageCount - 1) }} text="bad" />
        <h1>statistics</h1>
        <Statistics value={good} name="good " />
        <Statistics value={neutral} name="neutral " />
        <Statistics value={bad} name="bad " />
        <Statistics value={all} name="all " />
        <Statistics value={averageCount / all} name="average " />
        <Statistics value={(good / all) * 100} name="positive " mark=" %" />
      </div>
    )
}

export default App