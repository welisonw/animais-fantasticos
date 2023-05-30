
export default class ScrollSuave {
    constructor(links, options) {
        this.linksInternos = document.querySelectorAll(links);

        if (options === undefined) {
            this.options = {
                behavior: 'smooth',
                block: 'start',
            };
        } else {
            this.options = options;
        };

        this.scrollToSection = this.scrollToSection.bind(this);   // porque o this.options do método scrollIntoView se refere ao this 'item' (linha 40), e não ao Objeto. Com o método bind consegue definir qual vai ser o this da função.
    };


    scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');

        const section = document.querySelector(href); // como o href é #animais, por exemplo, ele vai linkar com a section que tem o ID #animais

        section.scrollIntoView(this.options); // consultar documentação mozilla developer

        // PODE SER FEITO DA SEGUINTE FORMA TAMBÉM A PARTE DE SCROLL SUAVE:

        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // }) // pode ser feito de dois jeitos:
        // // com 2 parâmetros: primeiro move eixo x (horizontal); segundo move eixo y (vertical) // nesse caso coloca o primeiro parâmetro como 0 e o segundo a variável topo ( const topo = section.offsetTop);
        // // como objeto, 
    };

    addLinkEvent() {
        this.linksInternos.forEach((item) => {
            item.addEventListener('click', this.scrollToSection);
        });
    };

    init() {
        if (this.linksInternos.length) {
            this.addLinkEvent();
        };

        return this;
    };
};
