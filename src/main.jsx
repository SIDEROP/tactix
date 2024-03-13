import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// pages
import Layout from "./Layout.jsx"
import { Provider } from 'react-redux'
import store from "./app/store.jsx"

let router = createBrowserRouter([
    {
        path:"tactix/",
        element:<Layout/>,
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
         <RouterProvider router={router}/>
    </Provider>
)
