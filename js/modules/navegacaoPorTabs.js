// A ideia de navegação por tabs é ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.

export default class TabNav {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = 'ativo';
    };

    // ativa a tab de acordo com o seu index 
    activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass);
        });

        const direction = this.tabContent[index].dataset.anime;   // adicionado exercício

        this.tabContent[index].classList.add(this.activeClass, direction);
    };

    // adiciona os eventos às tabs
    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => { // essa sintaxe vai fazer com que, quando clicar no animal da lista, adicione a classe ativo na section que ele está
            itemMenu.addEventListener('click', () => this.activeTab(index));
        });

    };


    init() {
        if (this.tabMenu.length && this.tabContent.length) { // verificar se existe o js-tabMenu li e js-tabContent section no HTML
            // ativar primeiro item
            this.activeTab(0); // pode ser feito pelo HTML, inserindo a classe ativo na primeira section

            this.addTabNavEvent();
        };

        return this;
    };
};
