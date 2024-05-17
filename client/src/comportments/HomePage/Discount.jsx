import React from 'react'
import MyIcons from '@reacticons/ionicons'

const Discount = () => {
  return (
    <div>
        <div className="my-24 lg:mx-12">
          <h1 className="text-center text-4xl rest-title text-gray-500">Discounts</h1>
          <div className="mx-16">    
            <div className="lg:grid grid-cols-2 gap-4">
            <div className="lg:flex my-12">
              <img src="https://wallpapercave.com/wp/wp1929360.jpg" alt="" className='h-40 w-auto rounded-xl'/>
              <div className="ml-6 my-4">
                <h1 className="rest-title text-gray-500 text-3xl">Black Friday</h1>
                <p className="my-2">
                  Get up to 30% OFF on Every Friday From 4.00pm to 7.30pm
                </p>
              </div>
            </div>            

            <div className="lg:flex my-12">
              <img src="https://wallpapercave.com/wp/wp12451912.jpg" alt="" className='h-40 w-auto rounded-xl'/>
              <div className="ml-6 my-4">
                <h1 className="rest-title text-gray-500 text-3xl">Pizza Day</h1>
                <p className="my-2">
                  Get up to 50% OFF on Selected Pizza
                </p>
              </div>
            </div>


            <div className="lg:flex my-12">
              <img src="https://wallpapercave.com/wp/wp11905761.jpg" alt="" className='h-40 w-auto rounded-xl'/>
              <div className="ml-6 my-4">
                <h1 className="rest-title text-gray-500 text-3xl">Bugur TuesDay</h1>
                <p className="my-2">
                    Get up to 75% OFF on Bugurs on Tuesdays
                </p>
              </div>
            </div>

            <div className="lg:flex my-12">
              <img src="https://wallpapercave.com/uwp/uwp4331656.jpeg" alt="" className='h-40 w-auto rounded-xl'/>
              <div className="ml-6 my-4">
                <h1 className="rest-title text-gray-500 text-3xl">Coffee Monday</h1>
                <p className="my-2">
                    Get up to 50% OFF on Coffee on Mondays
                </p>
              </div>
            </div>

            </div>        



          </div>

        </div>
    </div>
  )
}

export default Discount