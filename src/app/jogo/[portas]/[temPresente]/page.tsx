'use client';

import Porta from "@/componentes/Porta";
import { atualizarPortas, criaPortas } from "@/funcoes/portas";
import { use, useEffect, useState } from "react";
import styles from "../../../../styles/Jogo.module.css"
import Link from "next/link";
import PortaModel from "@/modelo/PortaModel";

interface JogoProps {
  params: {
    portas: string;
    temPresente: string;
  };
}

export default function Jogo({params}: JogoProps){
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState<PortaModel[]>([]);

  useEffect(() => {
    const portas = Number(params.portas);
    const temPresente = Number(params.temPresente);

    const qntPortasValida = portas >= 3;
    const portaComPresenteValido = temPresente > 0 && temPresente <= portas;
    setValido(qntPortasValida && portaComPresenteValido);
  }, [portas]);

  useEffect(() => {
    const portas = Number(params.portas);
    const temPresente = Number(params.temPresente);
    setPortas(criaPortas(portas, temPresente));
  }, [params]);

  function renderizarPortas(){
    if(valido){
      return portas.map(porta => {
        return (
          <Porta key={porta.numero} value={porta} 
            onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
          />
        );
      });
    } else {
      return(
        <h2>Valores inválidos</h2>
      )
    }
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}
