// Products.js

import React, { Component } from 'react';
import {colors, colorsLogos} from '../constants/colors';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const accessToken = "W_XKBmAWLOb_qJJDgdpfw0VRgFgKjmM_1rdp0SAVcG0";
const spaceId = "5zroeaevvcng";
const query = `
{
  productCardCollection {
    items {
      productName
      productoImg {
        url
        description
      }
      productName2
      productoImg2 {
        url
        description
      }
      productName3
      productoImg3 {
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
      productName6
      productoImg6 {
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

class Products extends Component<Props, State> {
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

    return (
      <div className="container mx-auto py-12 flex flex-col md:flex-row h-full">
        <aside className="w-full md:w-1/4 px-4 md:px-0 mb-12 md:mb-0 md:mr-12 bg-blue-100 rounded-lg shadow-lg p-8 h-full">
          <h3 className="text-2xl font-bold mb-6 text-white text-center bg-blue-500 rounded-lg p-2">Filtros de búsqueda</h3>
          <div className="border p-4 rounded-lg shadow-inner mb-6">
            <h4 className="font-bold mb-2 text-blue-600">Categorías</h4>
            <ul className="space-y-2">
              <li><input type="checkbox" id="cat1" /><label htmlFor="cat1" className="ml-2">Categoría 1</label></li>
              <li><input type="checkbox" id="cat2" /><label htmlFor="cat2" className="ml-2">Categoría 2</label></li>
              <li><input type="checkbox" id="cat3" /><label htmlFor="cat3" className="ml-2">Categoría 3</label></li>
              <li><input type="checkbox" id="cat4" /><label htmlFor="cat4" className="ml-2">Categoría 4</label></li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg shadow-inner">
            <h4 className="font-bold mb-2 text-blue-600">Precio</h4>
            {/* Agrega los filtros de precio aquí */}
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col bg-blue-100 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">{product.name}</h2>
                {product.image && 
                  <div className="flex-grow mb-6">
                    <img className="w-full h-64 object-cover object-center rounded-lg" src={product.image.url} alt={product.image.description} />
                  </div>
                }
               <Link to={`/product/${index}`}>
                <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md self-center">
                  Ver detalles
                </button>
              </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default Products;
