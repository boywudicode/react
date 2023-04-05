import React from 'react'
import {useState} from 'react'

const AboutPage = () => {
    return (
        <main>
        <h2>
            this is the About Page
        </h2>
        </main>
    )
}

export default AboutPage
//Stateful Components
//Hooks

const PreviewComp = () => {
    const [initialState, setState] = useState(0);
    const [name, setname] = useState("emma")

    // setTimeout(function(){
    //     setState(initialState + 2)
    // }, 5000)

const addCount = () => {
    setState(initialState + 1)
}
const subtractCount = () => {
    setState(initialState - 1)
}
const resetCount = () => {
    setState(0)
}

    return(
        <>
        <h1>{name}</h1>
         <Display initialState={initialState} />
         <Button text="PLUS" handleClick={addCount} />
         <Button text="MINUS" handleClick={subtractCount} />
         <Button text="RESET" handleClick={resetCount} />
         {/* <button onClick={handleClick}>PLUS</button> */}
         {/* <button onclick ={() => setCount(count - 1)}>MINUS</button> */}
         {/* <button onclick ={setCount(count - 1)}>MINUS</button> */}
         </>
    )
}

const Display = (props) => {
    return (
        <div>
       <h1> {props.initialState}</h1>
        </div>
    )
}

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>{props.text}
        </button>
    )
}