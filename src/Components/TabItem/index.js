import './index.css'

const TabItem = props => {
  const {tabDetails, fruitItems, isFovorite} = props
  const {tabId, displayText} = tabDetails
  const tabItems = () => {
    fruitItems(tabId)
  }
  const classValue = isFovorite ? 'color-for-special' : ''
  console.log(isFovorite)
  return (
    <li className="list-style" onClick={tabItems}>
      <h2 className={`color-paragraph ${classValue}`}>{displayText}</h2>
    </li>
  )
}

export default TabItem
