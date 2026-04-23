import { useState } from 'react'

const Courses = (props) => {
  return (
    <div>
      <Header text={props.title} />
      <Content courses={props.courses} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      {props.courses.map(course => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          {course.parts.map(part => (
            < Part key={part.id} name={part.name} exercises={part.exercises} />
          ))}
        </div>
      ))}
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
  const title = 'Web development curriculum'
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default App