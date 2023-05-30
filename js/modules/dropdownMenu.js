
import outsideClick from './clickoutside.js';

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');   // this é o parâmetro item do forEach
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');   // this é o parâmetro element
        });
    };

    dropdownMenus.forEach((item) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            item.addEventListener(userEvent, handleClick);
        });   // mesmo que: item.addEventListener('click', handleClick)
              //            item.addEventListener('touchstart', handleClick
    });

};
