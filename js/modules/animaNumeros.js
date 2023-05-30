
export default class AnimaNumeros {
    constructor(numbers, observerTarget, observerClass) {
        this.numbers = document.querySelectorAll(numbers);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;

        // bind do objeto da classe ao callback da mutação
        this.handleMutation = this.handleMutation.bind(this);
    };

    // Recebe um elemento do DOM com número em seu texto. Incrementa a partir de 0 até o número final
    static incrementarNumero(number) {
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
    };

    // Ativa incrementarNumero para cada número selecionado do DOM
    animaNumeros() {
        this.numbers.forEach((number) => this.constructor.incrementarNumero(number));
    };

    // Função que é executada sempre que tiver mutação
    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        };
    };
    
    // Adiciona o MutationObserver para verificar quando a classe ativo é adicionada ao elemento target
    addMutationObserver() {
        // para não carregar imediatamente após o carregamento da página
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    };

    init() {
        // Verifica se numbers 
        if (this.numbers.length && this.observerTarget) {
            this.addMutationObserver();
        };

        return this;
    }
};
