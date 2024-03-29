import { charactersKimetsu } from './mooks/kimetsu.json'
import { charactersOnePiece } from './mooks/onepiece.json'
import { GameBoard } from './components/Board'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {

  return (
    <main>
      <Header name={'Hanna'} />
      <GameBoard cards={charactersOnePiece} anime={'one-piece'} />
      <Footer />
    </main>
  )
}

export default App