import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from './Home'
import { Products } from './Products'
import { ProductDetails } from './ProductDetails'




export const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/" element={<Home />}>Home</Link> {' | '}
                <Link to="products" element={<Products />}>Products</Link> 
                {/* <Link to=":productId" element={<ProductDetails />}>ProductDetails</Link> */}
            
            </nav>
        </div>
    )
}
