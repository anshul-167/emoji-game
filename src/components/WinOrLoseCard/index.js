import './index.css'

const WinOrLoseCard = props => {
  const {topScore, onClick, result} = props
  const onClickPlay = () => {
    onClick()
  }

  const resultImg = 'Won'
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-main-bg">
      <div className="win-text-cont">
        <h1 className="result-text">You {result}</h1>
        <p className="best-score">Best Score</p>
        <p className="top-score">{topScore}/12</p>
        <button type="button" onClick={onClickPlay} className="play-button">
          Play Again
        </button>
      </div>
      <img src={resultImg} alt="win or lose" className="win-img" />
    </div>
  )
}
export default WinOrLoseCard
