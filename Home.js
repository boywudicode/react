import React from 'react'

const HomePage = () => {
    const name = "Emmanuel"
    const age = 23
    const presido = "Buhari"
   
    let counter = 1;

    return (
        <main>
            <h2>
                HomePage
            </h2>
            <Hello name = "wealth" age="22" />
            <Hello name = {name} age = {age} />
            <Greeting name = "ike" status = "Evening"/>
            <Greeting name = "OniseIyanu" status="afternoon"/>
            <Greeting cute = {presido}/>
            <countdown count = {counter}/>
            <countdown count = {counter += 1}/>
        </main>
    )
}

export default HomePage

const Hello = (props) => {
return (
    <div>
        <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
)
}

//Destruction 
const Greeting = ({name, status}) => {
    return (
        <h3>
            Hello {name}, Good </h3>
    )
}

const Countdown = () => {
    return (
        <h1></h1>
    )
}

