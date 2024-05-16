import React from 'react'

const HomePage = () => {
  const styles = {
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://wallpapercave.com/wp/wp12420121.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div>
        <div className='py-14 lg:px-16 px-0 h-full lg:h-auto h-auto ' style={styles}>
          <div className="bg-none text-white mt-[-20px]">
           
          </div>
        </div>
    </div>
  )
}

export default HomePage