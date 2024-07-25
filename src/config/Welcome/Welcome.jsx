import { useContextProvider } from '../context/initialize/useContextProvider'
import './Welcome.css'

const Welcome = () => {
  const { handleStart } = useContextProvider()

  return (
    <div className='welcome-container'>
      <h1>Bem-vindo ao Projeto de Aprendizado React!</h1>
      <p>Aqui estão os exercícios que você irá completar:</p>
      <ol>
        <li>Configurar o ambiente de desenvolvimento.</li>
        <li>Trabalhar com props e componentes.</li>
        <li>Gerenciar estado com Context.</li>
        <li>Manipular eventos.</li>
        <li>Renderizar listas e usar chaves.</li>
        <li>Criar formulários e controlar componentes.</li>
        <li>Usar useEffect para efeitos colaterais.</li>
        <li>Reescrever componentes como componentes de classe (opcional).</li>
        <li>Compor componentes e reutilizar código.</li>
      </ol>
      <p>Arrocha, meu fi!</p>
      <button onClick={handleStart}>Começar</button>
    </div>
  )
}

export default Welcome
