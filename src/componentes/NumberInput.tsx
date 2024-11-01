import styles from "../styles/NumberInput.module.css"

interface NumberInputProps {
    text: string;
    value: number;
    onChange: (newValue: number) => void
}
export default function NumberInput(props: NumberInputProps){
    const decrementar = () => {
        props.onChange(props.value - 1);
    }

    const incrementar = () => {
        props.onChange(props.value + 1);
    }

    return(
        <div className={styles.numberInput}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.botao} onClick={decrementar}>-</button>
                <button className={styles.botao} onClick={incrementar}>+</button>
            </div>
        </div>
    )
}