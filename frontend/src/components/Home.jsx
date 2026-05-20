import React from 'react'

function Home() {

  const cards = [
    "Add New Users",
    "Manage User Details",
    "View Users List",
    "Modern User Dashboard"
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #ede9fe)",
        paddingTop: "120px",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          color: "#4f46e5",
          fontSize: "55px",
          fontWeight: "bold",
          marginBottom: "50px"
        }}
      >
        Welcome to the Home Page
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "260px",
              height: "160px",
              background: "white",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#7c3aed",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-10px)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0px)"
            }}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
