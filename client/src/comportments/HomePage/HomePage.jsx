import React from 'react'
import Footer from './Footer'
import MyIcons from '@reacticons/ionicons'
import Discount from './Discount'
import bekaryImg from '../../assets/bekary1.jpg'
import bgCafe from '../../assets/bgcafe.jpg'

const HomePage = () => {
  const styles = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("${bekaryImg}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const styles2 = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("${bgCafe}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div>
        <div className='py-14 md:px-16 px-0 h-[80vh]' style={styles}>
          <div className="bg-none text-white md:ml-20 ml-0">
            <div className="md:grid grid-cols-2 gap-4">
              <div className="md:mx-0 mx-4 my-8">
                <p className="">Welcome to</p>
                <h1 className="text-5xl tracking-[0.3em] rest-title">The Best Cafe</h1>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, optio consequatur accusantium modi molestiae recusandae qui harum animi maxime hic! Facilis repudiandae deleniti nobis modi illum ducimus sit corrupti at.
                </p>

                <div className="md:flex">
                  <button className="bg-yellow-500 py-4 px-8 rounded duration-500">Be A Member</button>
                  <button className="mx-4 border border-yellow-500 rounded py-4 px-8 rounded duration-500 hover:bg-yellow-500">SignIn</button>                  
                </div>
              </div>
              <div className="">
 
              </div>
            </div>

          </div>
        </div>
        <hr />
        <div className="" style={styles2}>
          <Discount />
        </div>
        <hr />




        <div className="">
        <Footer />
        </div>

    </div>
  )
}

export default HomePage