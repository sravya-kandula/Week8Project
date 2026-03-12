import React from 'react'
import { createBrowserRouter } from 'react-router'
import UsersList from './components/UsersList'

function App() {
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"header",
          element:<Header/>,
          children:[
            {
          path:"userlist",
          element:<UsersList/>
        },
        {
          path:"user",
          element:<User/>
        },
        {
          path:"adduser",
          element:<AddUser/>
        }

          ]
        },
        
      ]
    }
  ])
  return (
    <div>App</div>
  )
}

export default App