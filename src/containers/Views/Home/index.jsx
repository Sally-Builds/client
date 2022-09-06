import React from "react";
import "./index.css";

const Home = ({ projects }) => {
  return (
    <>
      {/* navbar  */}
      <nav className="container mx-auto p-2">
        <div className="flex items-center justify-between">
          <div className="logo">Obirute</div>
          <ul>
            <li>
              <button className="text-white rounded-md bg-slate-500 px-4 py-2">
                write tribute
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* hero section */}
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row space-y-0 md:space-y-0 mt-10 mx-auto">
          {/* biography goes here */}
          <div className="flex flex-col mb-32 space-y12 md:w-1/2">
            <h1 className="max-w-md text-2xl font-bold text-center md:5xl md:text-left text-gray-600">
              Tribute to Our Mom, sister, wife, grandmother and friend.
            </h1>

            <p className="py-4 max-w-sm text-left md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              reiciendis. Eum laboriosam nostrum deserunt alias. Velit
              blanditiis veritatis nobis eveniet quod voluptatum in sequi,
              debitis necessitatibus alias? Non, maiores ratione?
            </p>

            <p className="max-w-sm text-left md:text-left py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              reiciendis. Eum laboriosam nostrum deserunt alias. Velit
              blanditiis veritatis nobis eveniet quod voluptatum in sequi,
              debitis necessitatibus alias? Non, maiores ratione?
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                className="rounded-full p-3 px-6 baseline hover:bg-brightRedLight text-white bg-brightRed"
                href="http://xyz.com"
              >
                Read more
              </a>
            </div>
          </div>
          {/* images */}
          <div className="md:w-1/2">
            <img
              src="images.jpeg"
              alt="Rest well mama"
              className=" h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* tributes */}
      <section id="tributes">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* heading */}
          <h2 className="text-4xl font-bold text-center">Tributes to Mama </h2>
          {/* tribute container */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* tribute 1 */}
            <div className="flex flex-col items center p-6 space-y-6 rounded-lg md:w-1/3 bg-veryLightGray">
              <h5 className="text-lg font-bold">Agu Ejindu</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                voluptates laborum, assumenda ullam, similique fugit officia
                ducimus exercitationem maxime dolor quos voluptas cupiditate sit
                repellendus vero dicta aliquid consectetur nostrum!
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  className="rounded-full p-3 px-6 baseline hover:bg-brightRedLight text-white bg-brightRed"
                  href="http://xyz.com"
                >
                  Read more
                </a>
              </div>
            </div>
            {/* tribute 2 */}
            <div className="flex flex-col items center p-6 space-y-6 rounded-lg md:w-1/3 bg-veryLightGray">
              <h5 className="text-lg font-bold">Agu Ejindu</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                voluptates laborum, assumenda ullam, similique fugit officia
                ducimus exercitationem maxime dolor quos voluptas cupiditate sit
                repellendus vero dicta aliquid consectetur nostrum!
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  className="rounded-full p-3 px-6 baseline hover:bg-brightRedLight text-white bg-brightRed"
                  href="http://xyz.com"
                >
                  Read more
                </a>
              </div>
            </div>
            {/* tribute 3 */}
            <div className="flex flex-col items center p-6 space-y-6 rounded-lg md:w-1/3 bg-veryLightGray">
              <h5 className="text-lg font-bold">Agu Ejindu</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                voluptates laborum, assumenda ullam, similique fugit officia
                ducimus exercitationem maxime dolor quos voluptas cupiditate sit
                repellendus vero dicta aliquid consectetur nostrum!
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  className="rounded-full p-3 px-6 baseline hover:bg-brightRedLight text-white bg-brightRed"
                  href="http://xyz.com"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container mx-auto">copyright Devstrike</div>
      </footer>
    </>
  );
};

export default Home;
