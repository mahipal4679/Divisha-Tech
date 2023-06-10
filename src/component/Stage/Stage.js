import React from 'react'
import './Stage.css'
function Stage() {
    return (
        <>
            <div className='explore-stage'>
                <h5>
                    Explore By <span style={{ fontWeight: 'bold' }}>Stage</span>
                </h5>
                <div class="card">
                    <div class="container">
                        <p>Ideation</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Validation</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Early Traction</p>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <p>Scaling</p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Stage