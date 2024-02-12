import { charactersKimetsu } from './mooks/kimetsu.json'
import { charactersOnePiece } from './mooks/onepiece.json'
import { Board } from './components/Board'

function App() {

  return (
    <main>
      <h1>Who is?</h1>

      <Board cards={charactersKimetsu} />
      <Board cards={charactersOnePiece} />

    </main>
  )
}

export default App