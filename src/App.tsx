import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  type Quote = { sentence: string, character: { name: string } }
  const [quote, setQuote] = useState<Quote>({
    sentence: "",
    character: {
      name: ""
    }
  })

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote = async () => {
    axios.get('https://api.gameofthronesquotes.xyz/v1/random')
      .then((res) => {
        setQuote(res.data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <div className='quote-box'>
        <img src="/favicon.jpeg" alt="Game of Thrones" />
        <p className='quote-text'>{quote?.sentence}</p>
        <p className="quote-author"> — {quote?.character?.name}</p>
        <button className='refresh-button' onClick={getQuote}>New Quote</button>
      </div>

    </>
  )
}

export default App
