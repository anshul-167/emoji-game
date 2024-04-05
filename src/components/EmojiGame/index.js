/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    result: '',
    idList: [],
    hideCont: '',
    showCont: '',
  }

  onClickEmojiButton = id => {
    const {score, topScore, idList} = this.state

    this.setState(prevState => {
      if (!idList.includes(id)) {
        this.setState({
          score: prevState.score + 1,
          topScore: Math.max(prevState.topScore, prevState.score + 1),
          result: prevState.score + 1 === 12 ? 'Won' : 'Lose',
        })
      } else {
        this.setState({
          score: 0,
          topScore: prevState.topScore,
          idList: prevState.idList,
          hideCont: 'hide-cont',
          showCont: 'show-cont',
        })
      }

      return {idList: [...prevState.idList, id]}
    })
    console.log(idList, score, topScore)
  }

  onClickPlayAgain = () => {
    this.setState({
      score: 0,

      idList: [],
      hideCont: '',
      showCont: '',
    })
  }

  render() {
    const {score, topScore, hideCont, showCont, result} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return (
      <div className="main-bg">
        <NavBar score={score} topScore={topScore} hideClass={hideCont} />
        <div className="bottom-cont">
          <ul className={`emoji-cont ${hideCont}`}>
            {shuffledEmojisList().map(each => (
              <EmojiCard
                emojiUrl={each.emojiUrl}
                emojiName={each.emojiName}
                key={each.id}
                onClickEmoji={() => this.onClickEmojiButton(each.id)}
              />
            ))}
          </ul>
          <div className={`result-cont ${showCont}`}>
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              onClick={this.onClickPlayAgain}
              result={result}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default EmojiGame
