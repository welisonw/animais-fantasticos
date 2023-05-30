
export default function initHorarioFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
    
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horasAgora = dataAgora.getHours();

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = horasAgora >= horarioSemana[0] && horasAgora < horarioSemana[1];
    
    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    };
};
