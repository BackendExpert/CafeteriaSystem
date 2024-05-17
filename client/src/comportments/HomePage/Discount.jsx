import React from 'react'
import MyIcons from '@reacticons/ionicons'

const Discount = () => {
  return (
    <div>
        <div className="my-24 mx-12">
          <h1 className="text-center text-4xl rest-title text-gray-500">Discounts</h1>
          <div className="lg:grid grid-cols-4 gap-4 my-16">
            <div className="my-8">
              <div className="bg-[url(https://wallpapercave.com/wp/wp11905779.jpg)] bg-cover bg-center h-full duration-500 hover:text-3xl rounded">
              </div>
              <h1 className="text-3xl rest-title py-4">Black Friday</h1>
              <p className="">Get 10% OFF for Evey Product on Friday</p>
            </div>
            <div className="my-8">
              <div className="bg-[url(https://wallpapercave.com/wp/wp12452172.jpg)] bg-cover bg-center h-full duration-500 hover:text-3xl rounded">
              </div>
            </div>
            <div className="">
              <img src="https://wallpapercave.com/wp/wp11905779.jpg" alt="" className='h-auto rounded'/>
            </div>
            <div className="">
              <img src="https://wallpapercave.com/wp/wp11905779.jpg" alt="" className='h-auto rounded'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Discount