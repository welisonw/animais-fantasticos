
export default class Modal {
    constructor(btnAbrir, btnFechar, container) {
        this.botaoAbrir = document.querySelector(btnAbrir);
        this.botaoFechar = document.querySelector(btnFechar);
        this.containerModal = document.querySelector(container);

        // bind this ao callback para fazer referência ao objeto da classe
        this.eventToogleModal = this.eventToogleModal.bind(this);
        this.outModal = this.outModal.bind(this);
    };

    // abre ou fecha o modal
    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    };

    // adiciona o evento de toogle ao modal    
    eventToogleModal(event) {
        event.preventDefault();
        this.toggleModal();
    };

    // fecha o modal ao clicar fora dele ou ao clicar a tecla ESC
    outModal(event) {
        if (event.target === this.containerModal || event.key === 'Escape') {  // event.target = onde o clique ocorreu
            this.toggleModal(event);
        };
    };

    // adiciona os eventos aos elementos do modal
    addModalEvent() {
        this.botaoAbrir.addEventListener('click', this.eventToogleModal);
    
        this.botaoFechar.addEventListener('click', this.eventToogleModal);
    
        this.containerModal.addEventListener('click', this.outModal);

        document.addEventListener('keyup', this.outModal);
    };

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvent();
        };

        return this;
    };
};
