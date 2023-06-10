import React from 'react'
import './Bnature.css'

function Bnature() {
    return (
        <>
            <div className='explore-business-nature'>
                <h5>
                    Explore By <span style={{ fontWeight: 'bold' }}>Business Nature</span>
                </h5>
                <div class="card">
                    <div class="container">
                        <p>Service</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Product</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Both</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bnature