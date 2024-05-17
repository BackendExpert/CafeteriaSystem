import React from 'react'
import MyIcons from '@reacticons/ionicons'

const Discount = () => {
  return (
    <div>
        <div className="my-24 mx-12">
          <h1 className="text-center text-4xl rest-title text-gray-500">Discounts</h1>
          <div className="lg:grid grid-cols-4 gap-6 my-16">
            <div className="">
                <img src="https://wallpapercave.com/wp/wp11905779.jpg" alt="" />
                <div className="text-center">
                    <h1 className="text-3xl rest-title py-4">Black Friday</h1>
                    <p className="">Get 10% OFF for Evey Product on Friday</p>
                </div>
              </div>
              
              <div className="">
                <img src="https://wallpapercave.com/wp/wp11905779.jpg" alt="" />
                <div className="text-center">
                    <h1 className="text-3xl rest-title py-4">Pizza Day</h1>
                    <p className="">Get 50% OFF for Selected Pizza</p>
                </div>
              </div>

              <div className="">
                <img src="https://wallpapercave.com/wp/wp11905779.jpg" alt="" />
                <div className="text-center">
                    <h1 className="text-3xl rest-title py-4">Bugur Wednesday</h1>
                    <p className="">Get up to 25% OFF for Bugurs on Wednesdays</p>
                </div>
              </div>

              <div className="">
                <img src="https://wallpapercave.com/wp/wp11905779.jpg" alt=""/>
                <div className="text-center">
                    <h1 className="text-3xl rest-title py-4">Black Coffie Moday</h1>
                    <p className="">Get up to 40% OFF for Coffies on Every Mondays</p>
                </div>
              </div>


          </div>
        </div>
    </div>
  )
}

export default Discount