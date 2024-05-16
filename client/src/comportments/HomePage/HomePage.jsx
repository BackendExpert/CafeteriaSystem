import React from 'react'

const HomePage = () => {
  const styles = {
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/free-photo/top-view-delicious-muffins-with-nuts-copy-space_23-2148833985.jpg?size=626&ext=jpg&ga=GA1.1.1865485918.1713421678&semt=ais_user")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div>
        <div className='py-14 lg:px-16 px-0 h-full lg:h-auto h-auto ' style={styles}>
          <div className="bg-none text-white ml-20">
            <div className="lg:grid grid-cols-2 gap-4">
              <div className="">
                <h1 className="text-4xl rest-title">Welcome to Cafe </h1>
                <p className="text-sm">The best Cafe</p>

                <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis sint odit necessitatibus, harum possimus, accusantium rerum tenetur officiis adipisci exercitationem labore. Quas laborum doloribus unde amet quidem incidunt facilis distinctio.
                Enim unde dolorum culpa, eius hic odio, eligendi, voluptatum possimus accusamus ex quaerat reprehenderit totam cumque distinctio dolor ut saepe. Nobis ut saepe laudantium vero sunt sapiente reiciendis nulla rem?
                Ut obcaecati nihil debitis ea sequi sapiente omnis iusto, maxime aliquam, at porro perferendis a laboriosam dignissimos eligendi, blanditiis laudantium tempora rem recusandae excepturi beatae numquam sed! Officiis, laboriosam enim.</p>
              </div>
              <div className="">

              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default HomePage