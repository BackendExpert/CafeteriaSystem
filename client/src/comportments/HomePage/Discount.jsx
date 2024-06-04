import React from 'react'
import MyIcons from '@reacticons/ionicons'

const Discount = () => {
  const styles = {
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("https://img.freepik.com/free-photo/top-view-delicious-muffins-with-nuts-copy-space_23-2148833985.jpg?size=626&ext=jpg&ga=GA1.1.1865485918.1713421678&semt=ais_user")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div>
        <div className="py-24 md:px-12" style={styles}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores doloremque, dolorem consequuntur voluptatibus nisi repellendus laboriosam, libero, eaque quis ea modi voluptatum. Itaque magnam veritatis neque recusandae et ut?
        </div>
    </div>
  )
}

export default Discount