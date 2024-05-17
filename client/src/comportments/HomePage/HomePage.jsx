import React from 'react'
import Footer from './Footer'
import MyIcons from '@reacticons/ionicons'

const HomePage = () => {
  const styles = {
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("https://img.freepik.com/free-photo/top-view-delicious-muffins-with-nuts-copy-space_23-2148833985.jpg?size=626&ext=jpg&ga=GA1.1.1865485918.1713421678&semt=ais_user")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div>
        <div className='py-14 lg:px-16 px-0 h-full lg:h-auto h-auto ' style={styles}>
          <div className="bg-none text-white lg:ml-20 ml-0">
            <div className="lg:grid grid-cols-2 gap-4">
              <div className="lg:mx-0 mx-4 my-8">
                <p className="">Welcome to</p>
                <h1 className="text-5xl tracking-[0.3em] rest-title">The Best Cafe</h1>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, optio consequatur accusantium modi molestiae recusandae qui harum animi maxime hic! Facilis repudiandae deleniti nobis modi illum ducimus sit corrupti at.
                </p>

                <div className="lg:flex">
                  <button className="bg-yellow-500 py-4 px-8 rounded duration-500">Be A Member</button>
                  <button className="mx-4 border border-yellow-500 rounded py-4 px-8 rounded duration-500 hover:bg-yellow-500">SignIn</button>                  
                </div>
              </div>
              <div className="">
 
              </div>
            </div>

          </div>
        </div>


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

        <div className="my-16">
        <Footer />
        </div>

    </div>
  )
}

export default HomePage