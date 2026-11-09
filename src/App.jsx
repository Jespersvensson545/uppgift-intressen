import { useState } from 'react'
import './App.css'

function App() {
    const [text, setText] = useState('')

    const [interests, setInterests] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        if (text.trim() === '') return
        setInterests([...interests, text.trim()])
        setText('')
    }

    return (
        <>
            <h1>Vad gillar du att göra?</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="t.ex. spela fotboll"
                />
                <button type="submit">Lägg till</button>
            </form>

            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </>
    )
}

export default App
