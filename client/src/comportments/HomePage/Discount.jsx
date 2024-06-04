import React from 'react'
import MyIcons from '@reacticons/ionicons'
import bgCafe from '../../assets/bgcafe.jpg'

const Discount = () => {
  const styles = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("${bgCafe}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div>
        <div className="py-24 md:px-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores doloremque, dolorem consequuntur voluptatibus nisi repellendus laboriosam, libero, eaque quis ea modi voluptatum. Itaque magnam veritatis neque recusandae et ut?
        </div>
    </div>
  )
}

export default Discount