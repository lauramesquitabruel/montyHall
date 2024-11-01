'use client';

import styles from "../styles/Form.module.css"
import Card from "@/componentes/Card";
import NumberInput from "@/componentes/NumberInput";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [qntPortas, setQntPortas] = useState(3);
  const [temPresente, setTemPresente] = useState(1);

  return(
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Quantidade de portas?" 
          value={qntPortas} 
          onChange={novaQnt => setQntPortas(novaQnt)} />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text="Qual porta tem presente?" 
          value={temPresente} 
          onChange={novaPortaComPresente => setTemPresente(novaPortaComPresente)} />
        </Card>
        <Card bgcolor="green">
          <Link href={`/jogo/${qntPortas}/${temPresente}`}>
          <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
        
      </div>
    </div>
  )
}
