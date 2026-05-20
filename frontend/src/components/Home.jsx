import React from 'react'

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4f46e5, #9333ea)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "50px",
          fontWeight: "bold"
        }}
      >
        Welcome to the Home Page
      </h1>
    </div>
  )
}

export default Home
