import './index.css'

const NavBar = props => {
  const {score, topScore, hideClass} = props

  return (
    <navbar>
      <div className="navbar-logo-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navbar-img"
        />
        <h1 className="score">Emoji Game</h1>
      </div>
      <div className={`navbar-score-cont ${hideClass}`}>
        <p className="score">Score: {score}</p>
        <p className="score"> Top Score: {topScore}</p>
      </div>
    </navbar>
  )
}
export default NavBar
