
export default class HorarioFuncionamento {
    constructor(funcionamento) {
        this.funcionamento = document.querySelector(funcionamento);    
    };

    dadosFuncionamento() {
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    };

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horasAgora = this.dataAgora.getUTCHours() - 3;
    };
    

    aberto() {
        this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
        this.horarioAberto = this.horasAgora >= this.horarioSemana[0] && this.horasAgora < this.horarioSemana[1];

        return this.semanaAberto && this.horarioAberto;
    };
    
    ativaAberto() {
        if (this.aberto()) {
            this.funcionamento.classList.add('aberto');
        };
    };

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativaAberto();
        };

        return this;
    };
};
