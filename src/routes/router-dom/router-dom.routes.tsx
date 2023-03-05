import React from 'react'
import { RouterProvider as RouterProviderReactRouterDom } from 'react-router-dom'
import Router from './create-routes.route'

const router = Router

const RouterProvider = () => <RouterProviderReactRouterDom router={router} />

export default RouterProvider
