import React, { Component } from 'react';
import { FiSave, FiActivity, FiUser } from 'react-icons/fi';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useParams } from 'react-router-dom';
import {colors, colorsLogos} from '../constants/colors';
import { profile } from 'console';

const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;


console.log(accessToken); 
console.log(spaceId); 
const query = `
{
  productCardCollection {
    items {
      productName
      productName2
      productName3
      productName4
      productName5
      productName6
      productoImg1 {
        url
        description
      }
      productoImg2 {
        url
        description
      }
      productoImg3 {
        url
        description
      }
      productoImg4 {
        url
        description
      }
      productoImg5 {
        url
        description
      }
      productoImg6 {
        url
        description
      }
      perfil1
      comentario1
      perfiImg1{
        url
        description
      }  
      perfil2
      comentario2
      perfiImg2{
        url
        description
      }
      perfil3
      comentario3
      perfiImg3{
        url
        description
      }
    }
  }
}
`;


interface Props {}

interface State {
  perfil: Array<any>;
  product: Array<any>;
  loading: boolean;
  error: string | null;
}
class DetalleProducto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      perfil: [],
      product:[],
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
          const perfil = [];
          const product = [];
          for (let i = 0; i < 3; i++) {  
            perfil.push({
              profile: productItems[`perfil${i+1}`],
              comment: productItems[`comentario${i+1}`],
              profileImage: productItems[`perfiImg${i+1}`],

            });
          }
            product.push({
              productoImage: productItems[`productoImg${1}`]
            })
          this.setState({
            loading: false,
            perfil,
            product
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
    const { loading, error, perfil, product } = this.state;
 
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }


    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 0,
        controls: 1,
        loop: 1,
      },
    };
  
    const comments = [
      {
        name: "John Doe",
        comment: "Me encanta este producto!"
      },
      {
        name: "Jane Doe",
        comment: "El producto llegó en excelentes condiciones."
      }
    ];
  
    return (
      <div className="container mx-auto py-12" style={{ backgroundColor: colors.color50 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col bg-white rounded-lg shadow-lg p-8 youtube-container">
            <TransformWrapper>
              <TransformComponent>
              {product.map((product, index) => (
                <img src={product.productoImage.url} alt="Producto" style={{ width: '100%' }}/>
                ))}
              </TransformComponent>
            </TransformWrapper>
          </div>
          <div className="flex flex-col bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: colors.color900 }}>Nombre del Producto</h2>
         
            <p className="mb-6">Descripción detallada del producto. Aquí puedes agregar más detalles sobre el producto para que los clientes puedan entender completamente lo que están comprando.</p>
            <p className="text-xl font-bold mb-2" style={{ color: colors.color500 }}>Precio: $</p>
            <div className="flex items-center justify-between mt-8">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                <FiSave className="mr-2" />
                Añadir al carrito
              </button>
              <div className="flex items-center">
                <FiActivity className="mr-2 text-blue-500"/>
                <p>Disponible en stock</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4" style={{ color: colors.color900 }}>Comentarios de los clientes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {perfil.map((product, index) => (
        <div key={index} className="flex flex-col border rounded-lg shadow-lg p-4 bg-white" style={{ borderColor: colors.color200 }}>
          <div className="flex items-center mb-4">
            <img src={product.profileImage.url} alt=""className="w-8 h-8 rounded-full" />
            <h4 className="text-lg font-bold ml-2">{product.profile}</h4>
          </div>
          <p className="text-gray-600 flex-grow">{product.comment}</p>
        </div>
      ))}
          </div>
        </div>
      </div>
    );
}
}
export default DetalleProducto;
