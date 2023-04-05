import React, {useState} from 'react'

const ContactPage = () => {
    // const [left, setLeft] = useState(0);
    // const [right, setRight]= useState(0);

    const [clicks, setClicks] = useState({
        left: 0,
        right: 0,
    })

    const [votes, setVotes] = useState([0, 0, 0])
    const apc = () => {
        setVotes({...votes, votes: votes[0] + 1})
    }

    const pdp = () => {
        setVotes({...votes, votes: votes[1] + 1})
    }

    const lp = () => {
        setVotes({...votes, votes: votes[2] + 1})
    }


    const handleRightClick = () => {
        setClicks({...clicks, right: clicks.right + 1})
   
    }
        

    const handleLeftClick = () => {
            const newClick = {
                ...clicks, // {left: 0, right:0}
                left: clicks.left + 1,
                //left = clicks.left + 1
                }
            setClicks(newClick)
        }
        
    
    return (
        <main>
            {/* <h2>This is the contact Page</h2>
            {left}
            <button onClick={()=> setLeft(left + 1)}>
                left
            </button>
            {right}
            <button onClick={()=> setLeft(right + 1)}>right</button> */}

            {clicks.left}
            {clicks.right}
            <button onclick = {handleLeftClick}>Left Click</button>
            <button onclick = {handleRightClick}>Right Click</button>
            
            {votes[0]}
            {votes[1]}
            {votes[2]}
            <button onclick = {apc}>APC</button>
            <button onclick = {pdp}>PDP</button>
            <button onclick = {lp}>LP</button>
        </main>
    )
        }


export default ContactPage