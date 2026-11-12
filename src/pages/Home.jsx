import { useState, useEffect } from 'react'

function Home() {
    const [text, setText] = useState('')

    const [interests, setInterests] = useState(() => {
        const saved = localStorage.getItem('interests')
        return saved ? JSON.parse(saved) : []
    })
    useEffect(() => {
        localStorage.setItem('interests', JSON.stringify(interests))
    }, [interests])

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

export default Home
