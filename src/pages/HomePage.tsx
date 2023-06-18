import React, { useState, useEffect } from 'react';
import {createClient, EntryCollection} from 'contentful'; 
import logo from '../assets/images/logo1.png'; // Asegúrate de reemplazar este path con el correcto
import {colors} from '../constants/colors';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';
const featuredProducts = [
  { id: 1, name: 'Producto 1', color: colors.color300 },
  { id: 2, name: 'Producto 2', color: colors.color500 },
  { id: 3, name: 'Producto 3', color: colors.color700 },
  // Agrega más productos según sea necesario
];
function HomePage() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  

 
  return (
    <>
      <div className="leading-normal tracking-normal text-white" style={{background: `linear-gradient(90deg, ${colors.color300} 50%, ${colors.color500} 50%)`, height: '100vh'}}>
        <div className="container flex flex-row justify-between items-center py-16">
          <div className="w-[32%] flex flex-col space-y-12">
            {/* Aquí el código restante... */}
          </div>
          <div className="w-[30%] flex flex-col items-center">
            <div className="text-center flex flex-col space-y-6">
            </div>
            <div className="w-full h-[435px] mt-4 hover:scale-105 transition-all" style={{filter: 'drop-shadow(0 50px 50px rgb(0 0 0 / 0.03)) drop-shadow(0 58px 15px rgb(0 0 0 / 0.1))'}}>
            </div>
          </div>
          <div className="w-[30%] flex flex-col items-end space-y-32">
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-center py-12">
        <h1 className="text-4xl text-white font-bold">Productos de calidad de Danone</h1>
        <p className="text-xl text-white mt-4">En Danone, nos esforzamos por proporcionar productos de la más alta calidad a nuestros consumidores.</p>
      </div>

      <div className="container mx-auto p-6 flex flex-wrap">
        {featuredProducts.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: product.color }}>
              <div className="p-4">
                <h2 className="font-bold text-2xl mb-2">{product.name}</h2>
                <p className="text-gray-700 text-base">Detalles del producto...</p>
              </div>
            </div>
          </div>
        ))}
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
  );}

export default HomePage;
