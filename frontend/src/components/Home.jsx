import React from 'react'

function Home() {

  const users = [
    "User Management System",
    "Add Users Easily",
    "View Users List",
    "Modern React Application"
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4f46e5, #9333ea)",
        padding: "40px",
        textAlign: "center",
        color: "white"
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "15px",
          fontWeight: "bold"
        }}
      >
        Welcome to the Home Page
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "40px"
        }}
      >
        You can add users here in a beautiful way.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap"
        }}
      >
        {users.map((item, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              height: "140px",
              background: "white",
              color: "#4f46e5",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "bold",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              animation: "float 3s ease-in-out infinite"
            }}
          >
            {item}
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
        `}
      </style>
    </div>
  )
}

export default Home
