
import initAnimaNumeros from './animaNumeros.js';  // para carregar a contagem dos números 

export default function initFetchAnimais() {
   async function fetchAnimais(url) {
      try {
         const animaisResponse = await fetch(url);
         const animaisJSON = await animaisResponse.json();
         const numerosGrid = document.querySelector('.numeros-grid');

         function createAnimal(animal) {
            const div = document.createElement('div');
            div.classList.add('numero-animal');
      
            div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
      
            return div;
         };  

         animaisJSON.forEach((animal) => {
            const divAnimal = createAnimal(animal);

            numerosGrid.appendChild(divAnimal);
         });

         initAnimaNumeros();

      } catch (error) {
         console.error(error);
      }
   };

   fetchAnimais('./animais-api.json');   
};
