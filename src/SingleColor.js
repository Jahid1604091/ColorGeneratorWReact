import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',') //array to string 
  const hex = rgbToHex(...rgb)


  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)

    return () => clearTimeout(timeOut)
  }, [alert])
  return <article
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hex)
    }}
    className={`color ${index > 5 && 'color-light'}`}
    style={{ backgroundColor: `rgb(${bcg})` }}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
    {alert && <p className="alert">copied to clipboard!</p>}
  </article>
}

export default SingleColor
