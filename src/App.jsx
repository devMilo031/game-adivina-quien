import { charactersKimetsu } from './mooks/kimetsu.json'
import { charactersOnePiece } from './mooks/onepiece.json'
import { Board } from './components/Board'
import { Header } from './components/Header'

function App() {

  return (
    <main>
      <Header name={'Hanna'} />

      <Board cards={charactersKimetsu} />
      <Board cards={charactersOnePiece} />

    </main>
  )
}

export default App