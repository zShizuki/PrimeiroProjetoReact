import React from "react"
import Botao from '../Botao/index.tsx'
import Relogio from "./Relogio/index.tsx"
import style from './Cronometro.module.scss'

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>

            <Botao>
                Começar
            </Botao>
        </div >
    )
}