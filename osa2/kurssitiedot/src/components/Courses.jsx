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

const Content = ({ courses }) => {
    return (
        <div>
            {courses.map(course => {
                const total = course.parts.reduce(
                    (sum, part) => sum + part.exercises,
                    0
                )

                return (
                    <div key={course.id}>
                        <h1>{course.name}</h1>

                        {course.parts.map(part => (
                            <Part key={part.id} {...part} />
                        ))}

                        <b>total of {total} exercises</b>
                    </div>
                )
            })}
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




export default Courses