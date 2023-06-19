import React, { useState, useEffect, Component } from 'react';
import { createClient } from 'contentful'; 
import {colors} from '../constants/colors';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import YouTube from 'react-youtube';
import Typewriter from 'typewriter-effect';
import { FiUser, FiHeart, FiMail, FiPhone } from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const query = `
{
  productCardCollection {
    items {
      productName1
      productoImg1{
        url
        description
      }
      productName4
      productoImg4 {
        url
        description
      }
      productName5
      productoImg5 {
        url
        description
      }
     
    }
  }
}
`;

interface Props {}

interface State {
  products: Array<any>;
  loading: boolean;
  error: string | null;
}

class HomePage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      products: [],
      loading: true,
      error: null
    };
  }
  componentDidMount() {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          query
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        const { data } = response;
        if (data) {
          const productItems = data.productCardCollection.items[0]; 
          const products = [];
          for (let i = 0; i < 6; i++) {
            products.push({
              name: productItems[`productName${i+1}`],
              image: productItems[`productoImg${i+1}`],
            });
          }
          this.setState({
            loading: false,
            products,
          });
        }
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message
        });
      });
     
  }
  render() {
    const { loading, error, products } = this.state;
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    const opts = {
      height: '390',
      width: '640',
      playerVars: { autoplay: 0 },
    };
    
    const opts2 = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        mute: 1,
        playlist: 'aDMzq10yUWA', // Agrega el ID del video a la lista de reproducción
      },
    };
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      swipeToSlide: true,
      cssEase: 'ease-in-out',
  };
  
    return (
      <>
       <div className="relative h-screen">
        <YouTube videoId="aDMzq10yUWA" opts={opts2} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full md:w-1/2">
              <div className="flex justify-center items-center h-full">
              <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white">D</span>
              <span style={{ color: colors.color300 }}>a</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white">n</span>
              <span style={{ color: colors.color300 }}>o</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white">n</span>
              <span style={{ color: colors.color300 }}>e</span>
          </h1>
              </div>
          </div>
         
        </div>
      </div>

        <div className="bg-blue-900 text-center py-12">
          <h1 className="text-4xl text-white font-bold">Productos de calidad de Danone</h1>
          <p className="text-xl text-white mt-4">En Danone, nos esforzamos por proporcionar productos de la más alta calidad a nuestros consumidores.</p>
        </div>
        <div className="mt-10">
        <h2 className="text-3xl font-medium title-font mb-2 text-white text-center">Productos favoritos</h2>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
         
        {products.map((product, index) => (
           product.image && 
           <div key={index}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-48 object-cover object-center rounded-lg" src={product.image.url} alt={product.image.description} />
            <h2 className="title-font text-lg font-medium text-gray-900 mt-4 mb-2">{product.name}</h2>
            <p className="leading-relaxed mb-3 text-gray-700">Descripción del producto...</p>
            <Link to={`/product/${index}`}>
                <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md self-center">
                  Ver detalles
                  <FiHeart className="w-4 h-4 ml-2" />

                </button>
              </Link>
           
          </div>
          </div>
        
        ))}
        </div>
      
      </div>
    
        <div className="container mx-auto py-12 bg-blue-500 transform skew-y-3">
          <div className="flex flex-col md:flex-row items-center justify-around transform -skew-y-3">
            <div className="px-4 text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-white border-b-4 border-white inline-block">
                Conoce nuestros productos de la mejor calidad alrededor del mundo
              </h2>
            </div>
            <div className="px-4">
            <div className="w-full sm:w-auto aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-w-4 xl:aspect-h-3">
    <YouTube videoId="eHRqnIW73HA" opts={opts} />
</div>

            </div>
          </div>
        </div>
      </>
    );
  }
}
 
export default HomePage;
