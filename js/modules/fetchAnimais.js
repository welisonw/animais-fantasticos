
import AnimaNumeros from './animaNumeros.js';  // para carregar a contagem dos números 

export default function fetchAnimais(url, target) {
   // Cria a div contendo informações com o total de animais
   function createAnimalElement(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`

      return div;
   }; 

   // Anima números de cada animal
   function animaAnimaisNumeros() {
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');

      animaNumeros.init();
   };
   
   // Fetch animais do arquivo JSON e cria cada animal utilzando a função
   async function createAnimais() {
      try {
         const animaisResponse = await fetch(url);
         const animaisJSON = await animaisResponse.json();
         
         // Preenche cada animal no DOM
         const numerosGrid = document.querySelector(target);
         animaisJSON.forEach((animal) => {
            const divAnimal = createAnimalElement(animal);

            numerosGrid.appendChild(divAnimal);
         });

         animaAnimaisNumeros();   
      } catch (error) {
         console.error(error);
      };
   };

   return createAnimais();
};
