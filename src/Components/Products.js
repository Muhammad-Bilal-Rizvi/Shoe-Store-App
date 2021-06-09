import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import '../App'


export const Products = () => {
  
    return (
        <div>
            <h1>Welcome To Products</h1>
            <div >
                <Outlet />
            </div>
        </div>
    )
}
