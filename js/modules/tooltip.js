export default class Tooltip {
    constructor(tooltip) {
        this.tooltips = document.querySelectorAll(tooltip);
        
        // bind do objeto da classe aos callbacks
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    };

    // Move a tooltip com base em seus estilos de acordo com a posição do mouse
    onMouseMove(event) {
        this.tooltipBox.style.top = `${event.pageY + 25}px`;

        // para não criar rolagem lateral
        if (event.pageX + 240 > window.innerWidth) {
            this.tooltipBox.style.left = `${event.pageX - 195}px`; 
        } else {
            this.tooltipBox.style.left = `${event.pageX + 25}px`; 
        };
    };

    // Remove a tooltip e os eventos de mouseMove e mouseLeave
    onMouseLeave(event) {
        this.tooltipBox.remove();    
        event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    };

    // Cria a tooltip box e coloca no body
    criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const texto = element.getAttribute('aria-label');

        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = texto;

        document.body.appendChild(tooltipBox);

        this.tooltipBox = tooltipBox;
    };

    // Cria a tooltip e adiciona os eventos de mouseMove e mouseLeave ao target
    onMouseOver(event) {
        // Cria a tooltip box e coloca em uma propriedade
        this.criarTooltipBox(event.currentTarget);
        
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);

        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    };

    // Adiciona os eventos de mouseOver a cada tooltip
    addTooltipEvent() {
        this.tooltips.forEach((item) => {
            item.addEventListener('mouseover', this.onMouseOver);
        });
    };

    init() {
        if (this.tooltips.length) {
            this.addTooltipEvent();
        };

        return this;
    };
};
