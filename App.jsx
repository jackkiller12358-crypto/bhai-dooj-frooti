import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  const [slide, setSlide] = useState(0)
  const slides = [
    { title: 'Happy Bhai Dooj', body: 'Wishing you joy and love' },
    { title: 'Celebrate Together', body: 'Sisters and brothers forever' },
    { title: 'Dear Dhriti', body: 'You are cherished today and always' },
    { title: 'From', body: 'Mehul' }
  ]

  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSlide(s => (s + 1) % slides.length)
    }, 4200)
    return () => clearInterval(intervalRef.current)
  }, [])

  const next = () => setSlide(s => (s + 1) % slides.length)
  const prev = () => setSlide(s => (s - 1 + slides.length) % slides.length)

  return (
    <div style={styles.app}>
      <div style={styles.card} onClick={next}>
        {slides.map((s, i) => (
          <div key={i} style={{...styles.slide, transform: `translateX(${(i - slide) * 100}%)`}}>
            <h1 style={styles.title}>{s.title}</h1>
            <p style={styles.body}>{s.body}</p>
            {i === 2 && (
              <div style={styles.highlight}></div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.controls}>
        <button onClick={prev} style={styles.btn}>◀</button>
        <button onClick={next} style={styles.btn}>▶</button>
      </div>

      <div style={styles.footer}>From — <strong>Mehul</strong></div>
    </div>
  )
}

const styles = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg,#ffe7f0,#fff0d9)',
    fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
    padding: 20
  },
  card: {
    width: 360,
    height: 640,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: 24,
    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
    background: 'rgba(255,255,255,0.6)'
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: 30,
    boxSizing: 'border-box',
    transition: 'transform 600ms cubic-bezier(.2,.9,.3,1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    margin: 0,
    color: '#3b2b5b'
  },
  body: {
    marginTop: 14,
    fontSize: 18,
    textAlign: 'center',
    color: '#5b3b6b'
  },
  highlight: {
    marginTop: 20,
    padding: '10px 18px',
    borderRadius: 14,
    background: 'rgba(255,255,255,0.9)'
  },
  controls: {
    marginTop: 18,
    display: 'flex',
    gap: 8
  },
  btn: {
    padding: '8px 14px',
    borderRadius: 8,
    border: 'none',
    background: '#6b4aa3',
    color: 'white',
    fontSize: 16
  },
  footer: {
    position: 'fixed',
    bottom: 30,
    textAlign: 'center',
    width: '100%'
  }
}
