import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { FiSave, FiActivity } from 'react-icons/fi';

function Calories() {
  const [calories, setCalories] = useState(0);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 1,
      playlist: 'AeJikyMTADE', // Agrega el ID del video a la lista de reproducción
    },
  };
  const calculateCalories = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as any;
    const weight = form.weight.value;
    const height = form.height.value;
    const age = form.age.value;
    const activity = form.activity.value;

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const totalCalories = Math.round(bmr * activity);

    setCalories(totalCalories);
  }

  return (
    <div>
      <div className="relative h-screen">
        <YouTube videoId="AeJikyMTADE" opts={opts} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-6xl font-bold text-white">Cálculo de Calorías</h2>
        </div>
      </div>
      <div className="container mx-auto py-12 space-y-12">
        <div className="bg-blue-100 rounded-lg shadow-lg p-10 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Establece tu límite máximo de calorías diarias</h2>
          <form>
            <label htmlFor="maxCalories" className="block mb-2">Calorías máximas por día</label>
            <input 
              type="number" 
              id="maxCalories" 
              name="maxCalories" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" 
              placeholder="Ingresa la cantidad de calorías"
            />
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
              <FiSave className="mr-2" />
              Guardar
            </button>
          </form>
        </div>

        <div className="bg-green-100 rounded-lg shadow-lg p-10 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Calcula tus calorías diarias necesarias</h2>
          <form onSubmit={calculateCalories}>
            <label htmlFor="weight" className="block mb-2">Peso (kg)</label>
            <input 
              type="number" 
              id="weight" 
              name="weight" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" 
              required
            />
            <label htmlFor="height" className="block mb-2">Altura (cm)</label>
            <input 
              type="number" 
              id="height" 
              name="height" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" 
              required
            />
            <label htmlFor="age" className="block mb-2">Edad (años)</label>
            <input 
              type="number" 
              id="age" 
              name="age" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" 
              required
            />
            <label htmlFor="activity" className="block mb-2">Nivel de actividad física</label>
            <select 
              id="activity" 
              name="activity" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4" 
              required
            >
              <option value="">Selecciona tu nivel de actividad física</option>
              <option value="1.2">Sedentario (poco o ningún ejercicio)</option>
              <option value="1.375">Ligero (ejercicio ligero/sport 1-3 días/semana)</option>
              <option value="1.55">Moderado (ejercicio moderado/deporte 3-5 días/semana)</option>
              <option value="1.725">Intenso (ejercicio duro/deporte 6-7 días/semana)</option>
              <option value="1.9">Muy intenso (ejercicio duro y trabajo físico)</option>
            </select>
            <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
              <FiActivity className="mr-2" />
              Calcular
            </button>
            {calories > 0 && (
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Calorías diarias necesarias:</h3>
                <p className="text-2xl">{calories}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calories;