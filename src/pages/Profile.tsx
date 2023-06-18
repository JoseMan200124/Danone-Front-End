import React from 'react';
import { FiUser, FiHeart, FiMail, FiPhone } from 'react-icons/fi';
import favProductPic from '../assets/images/products/producto1.png'; // Reemplazar con la imagen de producto favorito correcta

function Profile() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="lg:text-center">
        <h2 className="text-2xl text-indigo-600 font-semibold tracking-wide uppercase">Perfil del usuario</h2>
        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          ¡Bienvenido a tu perfil!
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10">
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
        <h2 className="text-2xl font-medium title-font mb-2 text-gray-900 text-center">Productos favoritos</h2>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={favProductPic} alt="favorite product" />
              <div className="p-6">
                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">Nombre del producto</h2>
                <p className="leading-relaxed mb-3 text-gray-700">Descripción del producto...</p>
                <div className="flex items-center flex-wrap ">
                  <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Ver más
                    <FiHeart className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Repetir el bloque de producto para cada producto favorito */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
