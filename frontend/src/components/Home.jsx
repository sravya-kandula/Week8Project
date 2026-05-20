import React from 'react'

function Home() {

  const texts = [
    "Welcome to Home Page",
    "React + Vite Project",
    "Beautiful Animated Cards",
    "Frontend Development",
    "Modern UI Design",
    "Creative Web Experience"
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4f46e5, #9333ea)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "45px",
          marginBottom: "40px",
          fontWeight: "bold"
        }}
      >
        Home
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              height: "140px",
              background: "white",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#4f46e5",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "0.4s",
              animation: "float 3s ease-in-out infinite"
            }}
          >
            {text}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          div:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  )
}

export default Home
