import React from 'react'
import './App.css'


const Card = () => {
  return (
    <>
      <div class="container-fluid mt-2 ">
        <h1 className='text-center pb-4 text-white'>OUR PLANS</h1>
        <div class="row ">
          <div class="col-md-5 mb-4">
            <div class="card">
              <div class="card-body bg-primary text-white">
                <h3 class="card-title">BASIC PLANS</h3>
                <h4><s>₹5,000</s></h4>
                <h3>₹ 2,999 Only</h3>
                <ul class="list-group">
                  <b>
                    <li class="list-group-item">FULLY DYNAMIC</li>
                    <li class="list-group-item">MOBILE RESPONSIVE</li>
                    <li class="list-group-item">SOCIAL ICON</li>
                    <li class="list-group-item">IMAGE SLIDER</li>
                    <li class="list-group-item">WHATSAPP ICON</li>
                    <li class="list-group-item">CALL ICON</li>
                    <li class="list-group-item">LIFE TIME SUPORT</li>
                    <li class="list-group-item">24/7 CALL SUPPORT</li>
                  </b>




                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">

          </div>


          <div class="col-md-5 mb-4">
            <div class="card">

              <div class="card-body bg-success text-white">
                <h3 class="card-title ">PREMIUM PLANS</h3>
                <h4><s>₹10,000</s></h4>
                <h4>₹ 4,999 Only</h4>

                <ul class="list-group">
                  <b>
                    <li class="list-group-item">FULLY DYNAMIC</li>
                    <li class="list-group-item">MULTIPLE PAGES</li>

                    <li class="list-group-item">MOBILE RESPONSIVE</li>
                    <li class="list-group-item">SOCIAL ICON</li>
                    <li class="list-group-item">IMAGE SLIDER</li>
                    <li class="list-group-item">WHATSAPP ICON</li>
                    <li class="list-group-item">CALL ICON</li>
                    <li class="list-group-item">LIFE TIME SUPORT</li>
                    <li class="list-group-item">24/7 CALL SUPPORT</li>
                    <li class="list-group-item">HOSTINGE FREE</li>
                    <li class="list-group-item">DOMAIN FREE</li>






                  </b>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
