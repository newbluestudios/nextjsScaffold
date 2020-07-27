import React, {useState, useCallback, useEffect } from 'react'
import Router from 'next/router'
import _ from 'lodash'

export default () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('/api/opt-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
      }),
    }).then((res) => {
      // 💫 Do a fast client-side transition to the prefetched page
      if (res.ok) Router.push('/')
    })
  }

  useEffect(() => {
    // Prefetch the next page
    Router.prefetch('/')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(event)=>setName(event.target.value)}
          placeholder='Name'
        />
      </label>
      
      <label>
        Phone Number:
        <input
          type='text'
          value={phone}
          onChange={(event)=>setPhone(event.target.value)}
          placeholder='Phone Number'
        />
      </label>

      <button type="submit">Opt In</button>
    </form>
  )
}