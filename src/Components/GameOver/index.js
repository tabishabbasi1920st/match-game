import './index.css'

const GameOver = props => {
  const {score, onClickPlayAgainButton} = props
  console.log(score)

  const onClickPlayAgain = () => {
    onClickPlayAgainButton()
  }

  return (
    <div className="game-over-bg-container">
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <h1 className="your-score-heading">Your Score</h1>
      <h1 className="score-count">{score}</h1>
      <button onClick={onClickPlayAgain} className="play-again-button">
        <img
          className="reset-icon"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
