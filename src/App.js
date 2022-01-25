import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setError(false)
      setList(colors)
      
    } catch (error) {
      setError(true)
        console.log(error);
    }
  }
  return <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          className={`${error ? 'error' : null}`}
          value={color}
          onChange={(e) => setColor(e.target.value)} />
        <button className="btn" type='submit'>submit</button>
      </form>
    </section>
      <section className="colors">
        {
          list.map((clr,idx)=>{
            return <SingleColor key={idx} {...clr} index={idx}/>
          })
        }
      </section>
  </>
}

export default App
