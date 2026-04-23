import { useState } from 'react'

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      <Content course={props.course} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(
    props.course.parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )
  )
  return (
    <div>
      {props.course.parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}

    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App