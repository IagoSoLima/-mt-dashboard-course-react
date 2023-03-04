import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '~/pages/home'
import Register from '~/pages/register'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'registro',
    element: <Register />
  }
])

export default Router
