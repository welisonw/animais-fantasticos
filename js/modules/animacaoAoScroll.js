
import debounceScroll from "./debounceScroll.js";

export default class AnimacaoScroll {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.windowMetade = window.innerHeight * 0.60; 

        // bind do objeto da classe ao callback
        this.checkDistance = debounceScroll(this.checkDistance.bind(this), 17);
    };
    
    // Pega a distância de cada item em relação ao topo do site
    getDistance() {
        this.distance = [...this.sections].map((section) => {
            const sectionTop = section.offsetTop;

            return {
                element: section,
                offset: sectionTop - this.windowMetade,
            };
        });
    };

    // Verifica a distância em cada objeto em relação ao scroll do site
    checkDistance() {
        this.distance.forEach((item) => {
            if (window.pageYOffset > item.offset) {
                item.element.classList.add('ativo');
            } else if (item.element.classList.contains('ativo')) {
                item.element.classList.remove('ativo');
            };
        });
    };

    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();  // para a primeira parte do site já carregar
            window.addEventListener('scroll', this.checkDistance);
        };

        return this;
    };
};
