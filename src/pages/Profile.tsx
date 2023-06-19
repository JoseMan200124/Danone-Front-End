import React, { useState, useEffect, Component } from 'react';
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


class Profile extends Component<Props, State> {
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
  render(){
    const { loading, error, products } = this.state;
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-indigo-500 h-full">
      <div className="lg:text-center">
        <h2 className="text-3xl text-white font-semibold tracking-wide uppercase">Perfil del usuario</h2>
        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
          ¡Bienvenido a tu perfil!
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 bg-white rounded-lg p-6 shadow-lg">
        <div className="md:w-1/3 text-center md:pr-8 md:py-8">
          <div className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <FiUser className="mr-1"/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">Nombre de Usuario</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base text-gray-600">Correo@ejemplo.com</p>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8 md:py-8 md:border-l border-gray-200 md:border-t-0 border-t mt-4 pt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-medium title-font mb-2 text-gray-900">Biografía</h2>
          <p className="leading-relaxed text-lg mb-4 text-gray-700">Escribe algo sobre ti aquí...</p>
          <h2 className="text-3xl font-medium title-font mb-2 text-gray-900">Contacto</h2>
          <div className="leading-relaxed text-lg mb-4 text-gray-700">
            <p><FiMail className="inline-block mr-2" />Correo@ejemplo.com</p>
            <p><FiPhone className="inline-block mr-2" />+1 (123) 456-7890</p>
          </div>
        </div>
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
    </div>
  );
  }
}

export default Profile;
