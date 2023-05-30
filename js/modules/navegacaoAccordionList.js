export default class AccordionList {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'ativo'; // Para se no futuro for mudar 'ativo' por 'active', por exemplo, evita trabalho de renomear todos
    };
  

    toogleAccordion(item) {
        item.classList.toggle(this.activeClass); // poderia também ser usado currentTarget: (event.currentTarget)
        item.nextElementSibling.classList.toggle(this.activeClass);
    };


    // adiciona os eventos ao accordion
    addAccordionEvent() {
        this.accordionList.forEach((item) => {
            item.addEventListener('click', () => this.toogleAccordion(item));
        });
    };

    // iniciando função
    init() {
        if (this.accordionList.length) {
            this.toogleAccordion(this.accordionList[0]);  // ativar o primeiro item
            this.addAccordionEvent();
        };

        return this;
    };
};
