
export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-animationScroll');
    const window85 = window.innerHeight * 0.85;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            const isSectionVisible = (sectionTop - window85) < 0;

            if (isSectionVisible) {
                section.classList.add('ativo');
            } else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo');
            };

            // pode ainda ser feito da seguinte forma:

            // const sectionTop = section.getBoundingClientRect().top - window85    

            // if(sectionTop < 0) {
            //     section.classList.add('ativo')
            // } else {
            //     section.classList.remove('ativo')
            // }
        });
    };

    if (sections.length) {
        window.addEventListener('scroll', animaScroll);

        animaScroll(); // para a primeira parte do site já carregar
    };
};
