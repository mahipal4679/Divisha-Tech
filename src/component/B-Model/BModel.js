import React from 'react'
import './Bmodel.css'

function BModel() {
    return (
        <>
            <div className='business-model'>
            
                <h5>
                    Explore By <span style={{ fontWeight: 'bold' }}>Business Model</span>
                </h5>
                <div class="card">
                    <div class="container">
                        <p>B2B -Bussiness To Bussines</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>B2C -Bussiness To Consumer</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>B2B2C -Bussiness To Bussines  To Customer</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>C2C -Consumer To Consumer</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>C2B -Consumer To Bussines</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>B2A -Bussiness To Adminstration</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>C2B -Customer To Adminstration</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BModel