import React from 'react';
import logo from '../assets/images/logo1.png'; // Asegúrate de reemplazar este path con el correcto
import {colors} from '../constants/colors';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function HomePage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const images = [
    '../assets/images/logo1.png', 
    '../assets/images/product1.png',
    '../assets/images/product2.png',
    '../assets/images/product3.png',
    // Añade las rutas a tus imágenes de producto aquí
  ]
  return (
    <div className="leading-normal tracking-normal text-white" style={{background: `linear-gradient(90deg, ${colors.color300} 50%, ${colors.color500} 50%)`, height: '100vh'}}>
    <div className="container flex flex-row justify-between items-center py-16">
        <div className="w-[32%] flex flex-col space-y-12">
            {/* Aquí el código restante... */}
        </div>
        <div className="w-[30%] flex flex-col items-center">
            <div className="text-center flex flex-col space-y-6">
                <h1 className="text-[106px] uppercase">Productos</h1>
            </div>
            <div className="w-full h-[435px] mt-4 hover:scale-105 transition-all" style={{filter: 'drop-shadow(0 50px 50px rgb(0 0 0 / 0.03)) drop-shadow(0 58px 15px rgb(0 0 0 / 0.1))'}}>
            <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} className="w-full h-full object-cover shadow-one" style={{boxShadow: `rgba(${colors.color400}, 0.09) 0px 20px 15px, 
                                rgba(${colors.color400}, 0.09) 0px 4px 2px, 
                                rgba(${colors.color400}, 0.09) 0px 8px 4px, 
                                rgba(${colors.color400}, 0.09) 0px 26px 18px, 
                                rgba(${colors.color400}, 0.09) 0px 60px 25px`}} alt="" />
                </div>
            ))}
        </Slider>
            </div>
        </div>
        <div className="w-[30%] flex flex-col items-end space-y-32">
         
        </div>
    </div>
</div>
  );}

export default HomePage;
