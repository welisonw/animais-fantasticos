
export default function fetchBitcoin(url, target) {
   async function initFetchBitcoin() {
      try {
         const bitcoinResponse = fetch(url);
         const bitcoinJSON = await (await bitcoinResponse).json();

         const bitcoinPreco = document.querySelector(target);

         bitcoinPreco.innerText = (100 / bitcoinJSON.BRL.sell).toFixed(4);
      } catch (error) {
         console.error(error);
      };
   };
   
   initFetchBitcoin();
};
