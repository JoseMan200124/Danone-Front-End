import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful'; 
import {colors} from '../constants/colors';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import YouTube from 'react-youtube';
import Typewriter from 'typewriter-effect';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const opts = {
    height: '390',
    width: '640',
    playerVars: { autoplay: 1 },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  /*useEffect(() => {
    const client = createClient({
      space: "5zroeaevvcng",
      accessToken: "W_XKBmAWLOb_qJJDgdpfw0VRgFgKjmM_1rdp0SAVcG0",
    });

    client.getEntries({ content_type: 'product' })
      .then(response => {
        setProducts(response.items.map(item => item.fields));
      })
      .catch(console.error);
  }, []);
*/
  return (
    <>
      <div className="leading-normal tracking-normal text-white flex justify-center items-center" style={{background: `linear-gradient(90deg, ${colors.color300} 50%, ${colors.color500} 50%)`, height: '100vh',fontSize: '2.5rem', fontWeight: 'bold'}}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('¡Bienvenido! Explora nuestros productos de calidad.')
              .pauseFor(3000)
              .deleteAll()
              .typeString('Descubre sabores irresistibles. Explora y disfruta.')
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      
      <div className="bg-blue-900 text-center py-12">
        <h1 className="text-4xl text-white font-bold">Productos de calidad de Danone</h1>
        <p className="text-xl text-white mt-4">En Danone, nos esforzamos por proporcionar productos de la más alta calidad a nuestros consumidores.</p>
      </div>

      <div className="container mx-auto p-6">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="" className="w-full" alt="" />
                <div className="p-4">
                  <h2 className="font-bold text-2xl mb-2">""</h2>
                  <p className="text-gray-700 text-base">Detalles del producto...</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto py-12 bg-blue-500 transform skew-y-3">
        <div className="flex flex-col md:flex-row items-center justify-around transform -skew-y-3">
          <div className="px-4 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-white border-b-4 border-white inline-block">
              Conoce nuestros productos de la mejor calidad alrededor del mundo
            </h2>
          </div>
          <div className="px-4">
            <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-none lg:h-auto">
              <YouTube videoId="eHRqnIW73HA" opts={opts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
