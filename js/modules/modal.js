
export default class Modal {
    constructor(btnAbrir, btnFechar, container) {
        this.botaoAbrir = document.querySelector(btnAbrir);
        this.botaoFechar = document.querySelector(btnFechar);
        this.containerModal = document.querySelector(container);

        // bind this ao callback para fazer referência ao objeto da classe
        this.eventToogleModal = this.eventToogleModal.bind(this);
        this.clickOutModal = this.clickOutModal.bind(this);
    };

    // abre ou fecha o modal
    toggleModal(event) {
        this.containerModal.classList.toggle('ativo');
    };

    // adiciona o evento de toogle ao modal    
    eventToogleModal(event) {
        event.preventDefault();
        this.toggleModal();
    };

    // fecha o modal ao clicar fora dele
    clickOutModal(event) {
        if (event.target === this.containerModal) {  // event.target = onde o clique ocorreu
            this.toggleModal(event);
        };
    };

    // adiciona os eventos aos elementos do modal
    addModalEvent() {
        this.botaoAbrir.addEventListener('click', this.eventToogleModal);
    
        this.botaoFechar.addEventListener('click', this.eventToogleModal);
    
        this.containerModal.addEventListener('click', this.clickOutModal);

    };

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvent();
        };

        return this;
    };
};
