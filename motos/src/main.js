// src/main.js
import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/motorcycles';
const API_KEY = 'tu_api_key_aqui'; // Reemplaza con tu API Key

// Función para obtener los datos de las motocicletas
const fetchMotorcycles = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
    console.log('Datos de motocicletas:', response.data); // Mostrar los datos en consola
    return response.data;
  } catch (error) {
    console.error('Error fetching motorcycles:', error);
    return [];
  }
};

// Función para mostrar las motocicletas en el HTML
const displayMotorcycles = async () => {
  const motorcycles = await fetchMotorcycles();
  const listContainer = document.getElementById('motorcycle-list');
  listContainer.innerHTML = ''; // Limpiar la lista antes de agregarla

  if (motorcycles.length === 0) {
    listContainer.innerHTML = '<p>No se encontraron motocicletas.</p>';
    return;
  }

  motorcycles.forEach((motorcycle) => {
    const listItem = document.createElement('li');
    listItem.classList.add('motorcycle-item');

    listItem.innerHTML = `
      <h3>${motorcycle.model}</h3>
      <p>Fabricante: ${motorcycle.manufacturer}</p>
      <p>Motor: ${motorcycle.engine}</p>
      <p>Año: ${motorcycle.year}</p>
    `;
    
    listContainer.appendChild(listItem);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  displayMotorcycles();
});
