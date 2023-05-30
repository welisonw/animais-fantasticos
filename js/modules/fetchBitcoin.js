
export default function initFetchBitcoin() {
   async function initFetchBitcoin() {
      try {
         const bitcoinResponse = fetch('https://www.blockchain.com/ticker');
         const bitcoinJSON = await (await bitcoinResponse).json();

         const bitcoinPreco = document.querySelector('.bitcoin-preco');

         bitcoinPreco.innerText = (100 / bitcoinJSON.BRL.sell).toFixed(4);
      } catch (error) {
         console.error(error);
      };
   };
   
   initFetchBitcoin();
};
