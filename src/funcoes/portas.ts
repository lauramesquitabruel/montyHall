import PortaModel from "@/modelo/PortaModel";

export function criaPortas(qnt: number, comPresente: number): PortaModel[]{
    return Array.from({ length: qnt}, (_, i)=> {
        const numero = i +1;
        const temPresente = numero === comPresente;
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igual = portaAtual.numero == portaModificada.numero;

        if(igual) {
            return portaModificada
        } else {
            if(portaModificada.aberta){
                return portaAtual
            } else {
                return portaAtual.desmarcar();
            }
        }
    })
}