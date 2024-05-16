import React from 'react'

const Footer = () => {
    const styles = {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-photo/amazing-homemade-pizza-black-stone-background_952778-18218.jpg?size=626&ext=jpg&ga=GA1.2.1865485918.1713421678&semt=ais_user")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    // 
  return (
    <div>
        <div className='py-14 lg:px-16 px-0 h-full lg:h-[80vh] h-auto text-white' style={styles}>
            <div className="lg:grid grid-cols-2 gap-4">
                <div className=""></div>
                <div className="">
                    <div className="">
                        <div className="lg:grid grid-cols-2 gap-2">
                            <div className="">
                                <h1 className="">The Cafe</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer