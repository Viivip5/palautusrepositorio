import { useState } from 'react'
/*10h*/
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)
const StatisticLine = (props) => {
  return (
    <div>{props.text}{props.value}{props.mark}</div>
  )
}
const Statistics = ({ good, neutral, bad, averageCount, all }) => {
  return (
    <div>
      <StatisticLine text="good " value={good} />
      <StatisticLine text="neutral " value={neutral} />
      <StatisticLine text="bad " value={bad} />
      <StatisticLine text="all " value={all} />
      <StatisticLine text="average " value={averageCount / all} />
      <StatisticLine text="positive " value={(good / all) * 100} mark=" %" />
    </div>
  )
}

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


  if (all == 0)
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => { setToValueGood(good + 1); allValuesNow(all + 1); setAverageCount(averageCount + 1) }} text="good" />
        <Button onClick={() => { setToValueNeutral(neutral + 1); allValuesNow(all + 1) }} text="neutral" />
        <Button onClick={() => { setToValueBad(bad + 1); allValuesNow(all + 1); setAverageCount(averageCount - 1) }} text="bad" />
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  if (all > 0)
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => { setToValueGood(good + 1); allValuesNow(all + 1); setAverageCount(averageCount + 1) }} text="good" />
        <Button onClick={() => { setToValueNeutral(neutral + 1); allValuesNow(all + 1) }} text="neutral" />
        <Button onClick={() => { setToValueBad(bad + 1); allValuesNow(all + 1); setAverageCount(averageCount - 1) }} text="bad" />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} averageCount={averageCount} />

      </div>
    )
}

export default App