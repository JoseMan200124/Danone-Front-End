import React from 'react';
import YouTube from 'react-youtube';
import { FiSave, FiActivity } from 'react-icons/fi';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useParams } from 'react-router-dom';

function DetalleProducto() {
    const { id } = useParams();

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
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col bg-blue-100 rounded-lg shadow-lg p-8 youtube-container">
            <TransformWrapper>
              <TransformComponent>
                <img src="https://your-image-link.jpg" alt="Producto" style={{ width: '100%' }}/>
              </TransformComponent>
            </TransformWrapper>
          </div>
          <div className="flex flex-col bg-blue-100 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Nombre del Producto</h2>
            <p className="mb-6">Descripción del producto</p>
            <p className="text-xl font-bold mb-2">Precio: $100</p>
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
          <h3 className="text-xl font-bold mb-4">Comentarios de los clientes:</h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <h4 className="text-lg font-bold">{comment.name}</h4>
              <p className="text-gray-600">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  
    }

export default DetalleProducto;
