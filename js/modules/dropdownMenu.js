
import outsideClick from './clickoutside.js';

export default class DropdownMenu {
    constructor(menus) {
        this.dropdownMenus = document.querySelectorAll(menus);

        // bind do objeto da classe ao callback
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    };
    
    // ativa o dropdownMenu e adiciona função que observa o clique fora dele
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget

        element.classList.add('active'); 
        outsideClick(element, ['touchstart', 'click'], () => {
            element.classList.remove('active'); 
        });
    };

    // Adiciona os eventos ao dropdownMenu 
    addDropdownMenusEvent() {
        this.dropdownMenus.forEach((item) => {
            ['touchstart', 'click'].forEach((userEvent) => {
                item.addEventListener(userEvent, this.activeDropdownMenu);
            });   // mesmo que: item.addEventListener('click', handleClick)
                  //            item.addEventListener('touchstart', handleClick)
        });
    };

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        };

        return this;
    };

};
