import React from 'react'

function RootLayout() {
  return (
    <div>RootLayout
        <Home />
        <Header />
        <Footer />
        <User />
        <UsersList />
        <AddUser />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout