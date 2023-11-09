import './StartScreen.css'

const StartScreen = ({ startGame }) => {
    return (
        <div className='Start'>
            <h1>Secret Word</h1>
            <p>Clique no botao abaixo para comecar a jogar</p>
            <button onClick={startGame}>Comecar o jogo</button>
        </div>
    )
}

export default StartScreen