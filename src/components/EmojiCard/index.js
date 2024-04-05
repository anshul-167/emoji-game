import './index.css'

const EmojiCard = props => {
  const {id, emojiName, emjojiUrl, onClickEmoji} = props
  const onClickEachEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickEachEmoji} className="emoji-button">
        <img src={emjojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
