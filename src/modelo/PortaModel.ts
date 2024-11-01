export default class PortaModel {
    #numero: number;
    #presente: boolean;
    #selecionada: boolean;
    #aberta: boolean;

    constructor(numero: number, presente = false, selecionada = false, aberta = false) {
        this.#numero = numero;
        this.#presente = presente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
    }

    get numero() {
        return this.#numero;
    }

    get presente() {
        return this.#presente;
    }

    get selecionada() {
        return this.#selecionada;
    }

    get aberta() {
        return this.#aberta;
    }

    set selecionada(valor: boolean) {
        this.#selecionada = valor;
    }

    set aberta(valor: boolean) {
        this.#aberta = valor;
    }

    // Retorna uma nova instância com a porta desmarcada
    desmarcar() {
        return new PortaModel(this.#numero, this.#presente, false, this.#aberta);
    }

    // Retorna uma nova instância com a seleção alternada
    alternarSelecao() {
        return new PortaModel(this.#numero, this.#presente, !this.#selecionada, this.#aberta);
    }

    // Retorna uma nova instância com a porta aberta
    abrir() {
        return new PortaModel(this.#numero, this.#presente, this.#selecionada, true);
    }
}
