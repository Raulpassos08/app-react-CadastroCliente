import './App.css'
import { useContextProvider } from './config/context/initialize/useContextProvider'
import Welcome from './config/Welcome/Welcome'
import HomePage from './pages/home/HomePage'

function App() {
  const { isStarted } = useContextProvider()

  return (
    <main className='app-container'>
      {!isStarted && <Welcome />}
      {isStarted && <HomePage />}
    </main>
  )
}

export default App
