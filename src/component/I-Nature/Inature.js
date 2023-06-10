import React from 'react'
import './Inature.css'

function Inature() {
    return (
        <>
            <div className='explore-investment-nature'>
                <h5>
                    Explore By <span style={{ fontWeight: 'bold' }}>Investment Nature</span>
                </h5>
                <div class="card">
                    <div class="container">
                        <p>Equity Dilution</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Debt Funding</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Convertible Debt</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Crowd-Funding</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>CSR</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>ALL</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inature