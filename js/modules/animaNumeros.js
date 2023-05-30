
export default function initAnimaNumeros() {
    
    function animaNumeros() {
        const numbers = document.querySelectorAll('[data-numero]');

        numbers.forEach((number) => {
            const total = +number.innerText;
            const incremento = Math.floor(total / 100);  // arredondar para número inteiro

            let start = 0;

            const timer = setInterval(() => {
                start += incremento;

                number.innerText = start

                if (start > total) {
                    number.innerText = total;

                    clearInterval(timer);
                };
            }, 25 * Math.random()); // para cada número ir em uma velocidade aleatória
        });
    };

    // para não carregar imediatamente após o carregamento da página
    const observer = new MutationObserver(handleMutation);
    const observerTarget = document.querySelector('.numeros');

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        };
    };

    observer.observe(observerTarget, { attributes: true });
};
