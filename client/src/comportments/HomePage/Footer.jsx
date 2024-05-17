import React from 'react'
import MyIcons from '@reacticons/ionicons'

const Footer = () => {
    const styles = {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-photo/amazing-homemade-pizza-black-stone-background_952778-18218.jpg?size=626&ext=jpg&ga=GA1.2.1865485918.1713421678&semt=ais_user")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    // 
  return (
    <div>
        <div className='py-14 lg:px-16 px-0 h-full lg:h-auto h-auto text-white food-font' style={styles}>
            <div className="lg:grid grid-cols-2 gap-4 lg:mx-0 mx-8 my-16">
                <div className=""></div>
                <div className="">
                    <div className="">
                        <div className="lg:grid grid-cols-2 gap-2">
                            <div className="text-center">
                                <h1 className="uppercase tracking-[0.6em]">The best Cafe</h1>
                                <p className="my-4 text-center">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt cum, beatae facere assumenda praesentium id distinctio, dolorem inventore vel quasi earum ducimus voluptatem esse! Eligendi neque facere blanditiis quis quia.
                                </p>
                            </div>
                            <div className="text-center my-8">
                                <p className="text-5xl">
                                    <MyIcons name='beer' size='large'></MyIcons>
                                </p>
                                <p className="uppercase tracking-[0.6em] my-2">Drinks</p>
                            </div>
                            <div className="text-center my-8">
                                <p className="text-5xl">
                                    <MyIcons name='fast-food' size='large'></MyIcons>
                                </p>
                                <p className="uppercase tracking-[0.6em] my-2">Fast-Foods, pastry</p>
                            </div>
                            <div className="text-center my-8">
                                <p className="text-5xl">
                                    <MyIcons name='pizza' size='large'></MyIcons>
                                </p>
                                <p className="uppercase tracking-[0.6em] my-2">Pizza</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uppercase lg:tracking-[0.3em] text-center">
                &copy; The Best Cafe - 2024 || Designed and Developed by JehanKandy
            </div>
        </div>
    </div>
  )
}

export default Footer