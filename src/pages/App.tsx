import React, { useState } from 'react';
import Formulario from '../components/Formulario/index.tsx';
import Lista from '../components/Lista/index.tsx';
import style from "./App.module.scss"
import Cronometro from '../components/Cronometor/index.tsx';
import { ITarefa } from '../types/ITarefa.ts';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
