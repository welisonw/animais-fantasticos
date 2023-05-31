
import outsideClick from "./clickoutside.js";

export default class MenuMobile {
    constructor(menuButton, menuList) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);

        this.events = ['click', 'touchstart'];

        // bind do objeto da classe ao callback
        this.openMenu = this.openMenu.bind(this);
    };

    
    openMenu() {
        this.menuButton.classList.add('active');
        this.menuList.classList.add('active');
        outsideClick(this.menuList, this.events, () => {
            this.menuButton.classList.remove('active');
            this.menuList.classList.remove('active');
        });
    };


    addMenuMobileEvents() {
        if (this.menuButton) {
            this.events.forEach((event) => {
                this.menuButton.addEventListener(event, this.openMenu); 
            });        
        };
    };

    init() {
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents();
        };

        return this;
    };
};
