import styles from "../styles/Porta.module.css"
import PortaModel from "../modelo/PortaModel"
import Presente from "./Presente"


interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){
    const porta  = props.value;
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : "";

    const alternarSelecao = (e: React.MouseEvent) => props.onChange(porta.alternarSelecao());
    const abrir = (e: React.MouseEvent) => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    };

    function renderizarPorta(){
        return(
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta}
                        onClick={abrir}></div>
                </div>
        )
    }

    function renderizarConteudo() {
        if (porta.aberta) {
            return porta.presente ? <Presente /> : null;
        } else {
            return renderizarPorta();
        }
    }

    return(
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.frame} ${selecionada}`}>
                {renderizarConteudo()}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}