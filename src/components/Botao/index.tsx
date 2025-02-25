import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

const Botao: React.FC<BotaoProps> = ({ children, type = "button" }) => {
    return (
        <button type={type} className={style.botao}>
            {children}
        </button>
    );
};

export default Botao;
